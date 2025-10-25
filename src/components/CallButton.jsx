"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <motion.a
      href="tel:+966509502502" // 👈 Replace with your number
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-blue-700"
      title="Call Us"
    >
      <Phone className="w-6 h-6" />
    </motion.a>
  );
}
