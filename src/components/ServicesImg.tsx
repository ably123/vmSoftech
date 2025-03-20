"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesImg() {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/service-banner.jpg" 
          alt="Our Services"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Centered Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
        className="relative text-white text-3xl md:text-5xl font-bold text-center"
      >
        Our Services
      </motion.h1>
    </div>
  );
}
