"use client";

import Navbar from "@/components/common/Navbar";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-16 px-4 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-brown max-w-none space-y-6 text-muted-foreground">
          <p>Last updated: April 21, 2026</p>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-serif">1. Introduction</h2>
            <p>Welcome to StayVago Hotels. We value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-serif">2. Data Collection</h2>
            <p>We collect information that you provide directly to us when you create an account, make a booking, or contact our support team. This includes your name, email, phone number, and payment details.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-serif">3. How We Use Your Data</h2>
            <p>We use your data to process bookings, provide customer support, and send you important updates regarding your stays. We do not sell your personal data to third parties.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
