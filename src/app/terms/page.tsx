"use client";

import Navbar from "@/components/common/Navbar";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-16 px-4 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Terms of Service</h1>
        <div className="prose prose-brown max-w-none space-y-6 text-muted-foreground">
          <p>Last updated: April 21, 2026</p>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-serif">1. Acceptance of Terms</h2>
            <p>By accessing and using the StayVago Hotels platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-serif">2. Booking Conditions</h2>
            <p>All bookings made through our platform are subject to availability and confirmation from the property owner. Price changes may occur during peak seasons or due to government regulations.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-serif">3. User Conduct</h2>
            <p>Users must provide accurate information when creating an account or making a booking. Any fraudulent activity will result in immediate account termination.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
