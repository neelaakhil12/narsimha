"use client";

import Navbar from "@/components/common/Navbar";

export default function RefundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-16 px-4 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Refund Policy</h1>
        <div className="prose prose-brown max-w-none space-y-6 text-muted-foreground">
          <p>Last updated: April 21, 2026</p>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-serif">1. Cancellation Policy</h2>
            <p>Most bookings can be cancelled for a full refund if the request is made at least 48 hours prior to the check-in time. Some heritage properties may have stricter individual policies.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-serif">2. Refund Processing</h2>
            <p>Approved refunds are processed within 5-7 business days and will be credited to the original payment method used during the booking.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-serif">3. Situational Refunds</h2>
            <p>In cases of natural disasters or significant travel restrictions, we follow the government guidelines to ensure fair treatment and maximum possible refunds for our guests.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
