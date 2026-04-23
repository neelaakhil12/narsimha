import { jsPDF } from "jspdf";

export async function generateInvoice(booking: {
  bookingId: string;
  hotelName: string;
  customerName: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
}) {
  const doc = new jsPDF();

  // Header
  doc.setFont("times", "bold");
  doc.setFontSize(24);
  doc.setTextColor(61, 43, 31); // Primary Brown #3d2b1f
  doc.text("StayVago Hotels", 20, 25);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  doc.text("Premium Multi-Vendor Hotel Booking Platform", 20, 32);

  // Divider
  doc.setDrawColor(215, 204, 200); // Muted #d7ccc8
  doc.line(20, 40, 190, 40);

  // Booking Info
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("INVOICE", 20, 50);
  doc.text(`Booking ID: ${booking.bookingId}`, 190, 50, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 190, 58, { align: "right" });

  // Details Grid
  doc.setFillColor(250, 249, 246); // Background #faf9f6
  doc.rect(20, 70, 170, 60, "F");
  
  doc.setFont("helvetica", "bold");
  doc.text("Guest Name:", 30, 80);
  doc.text("Property:", 30, 90);
  doc.text("Stay Dates:", 30, 100);
  doc.text("Grand Total:", 30, 115);

  doc.setFont("helvetica", "normal");
  doc.text(booking.customerName, 70, 80);
  doc.text(booking.hotelName, 70, 90);
  doc.text(`${booking.checkIn} to ${booking.checkOut}`, 70, 100);
  
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(`INR ${booking.totalPrice.toLocaleString()}`, 70, 115);

  // Footer
  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(150);
  doc.text("Thank you for choosing StayVago Hotels. Have a pleasant stay!", 105, 150, { align: "center" });

  // Save the PDF
  doc.save(`Invoice_${booking.bookingId}.pdf`);
}
