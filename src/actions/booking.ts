"use server";

import { db } from "@/lib/db";
import { auth } from "@/auth";
import { BookingStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function checkAvailability(roomTypeId: string, checkIn: Date, checkOut: Date) {
  // 1. Get room type details
  const roomType = await db.roomType.findUnique({
    where: { id: roomTypeId }
  });

  if (!roomType) throw new Error("Room type not found");

  // 2. Check existing bookings that overlap
  const overlappingBookings = await db.booking.count({
    where: {
      roomTypeId,
      status: {
        in: [BookingStatus.CONFIRMED, BookingStatus.CHECKED_IN]
      },
      OR: [
        {
          checkIn: { lte: checkIn },
          checkOut: { gte: checkIn }
        },
        {
          checkIn: { lte: checkOut },
          checkOut: { gte: checkOut }
        }
      ]
    }
  });

  const isAvailable = overlappingBookings < roomType.totalRooms;
  
  return {
    isAvailable,
    remainingRooms: roomType.totalRooms - overlappingBookings,
    price: roomType.price // Dynamic pricing logic could be added here
  };
}

export async function createBooking(data: {
  roomTypeId: string,
  checkIn: Date,
  checkOut: Date,
  totalPrice: number
}) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Not authenticated");

  // Check availability one last time
  const { isAvailable } = await checkAvailability(data.roomTypeId, data.checkIn, data.checkOut);
  if (!isAvailable) throw new Error("Sorry, room just became unavailable");

  // Generate a random booking ID
  const bookingId = `BK-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

  const booking = await db.booking.create({
    data: {
      bookingId,
      userId: session.user.id,
      roomTypeId: data.roomTypeId,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      totalPrice: data.totalPrice,
      status: BookingStatus.PENDING,
    }
  });

  revalidatePath("/dashboard");
  revalidatePath(`/hotel/${booking.id}`);

  return {
    success: true,
    bookingId: booking.bookingId,
    id: booking.id
  };
}
