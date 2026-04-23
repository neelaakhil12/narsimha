"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919014526685";
const WHATSAPP_MESSAGE = "Hello StayVago Hotels! I would like to inquire about a booking. 🙏";

export default function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-44 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl md:bottom-10 md:right-8"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 relative z-10"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.002 3C9.376 3 4 8.376 4 15.002c0 2.19.592 4.243 1.624 6.01L4 29l8.207-1.608A11.94 11.94 0 0 0 16.002 28c6.626 0 12-5.374 12-12s-5.374-13-12-13zm0 2C21.524 5 26 9.477 26 15.002S21.524 25 16.002 25c-1.92 0-3.71-.535-5.238-1.46l-.375-.225-4.875.956.978-4.75-.247-.39A10.958 10.958 0 0 1 5 15.002C5 9.477 9.478 5 16.002 5zm-3.19 6.09c-.21 0-.552.078-.84.39-.288.313-1.098 1.073-1.098 2.617s1.123 3.03 1.28 3.241c.155.21 2.198 3.358 5.332 4.71 2.44 1.052 2.936.843 3.466.79.53-.054 1.71-.7 1.952-1.374.24-.677.24-1.256.168-1.374-.072-.118-.264-.19-.553-.33-.288-.14-1.71-.844-1.975-.94-.264-.097-.456-.145-.648.145-.193.29-.744.94-.912 1.133-.168.194-.336.218-.624.073-.288-.146-1.216-.448-2.316-1.428-.856-.763-1.433-1.705-1.601-1.995-.168-.29-.018-.447.126-.591.13-.13.288-.338.432-.508.143-.169.19-.29.288-.482.096-.193.048-.363-.024-.508-.073-.145-.648-1.562-.888-2.14-.24-.578-.48-.5-.648-.508a11.8 11.8 0 0 0-.552-.01z" />
      </svg>
    </motion.button>
  );
}
