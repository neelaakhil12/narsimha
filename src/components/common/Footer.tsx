import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/narsimha-logo.png"
                alt="StayVago Hotels Logo"
                width={180}
                height={180}
                className="h-32 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 max-w-sm">We provide an unparalleled booking experience for luxury travellers who seek comfort, style and heritage.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund" className="hover:text-accent transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">© 2026 StayVago. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
