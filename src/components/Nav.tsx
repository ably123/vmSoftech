"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 fixed top-0 left-0 z-50 h-20 shadow-lg shadow-gray-700/50"> 
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        
        {/* Logo with Company Name Below */}
        <Link href="/home" className="flex flex-col items-center">
          <div className="relative">
            <Image 
              src="/VMlogo.png" 
              alt="Vasumatha Softech Logo" 
              width={160}  
              height={40}  
              className="w-auto h-auto"
              priority
              unoptimized
            />
          </div>
          <p className="text-[10px] font-semibold text-white -mt-2 text-center">
            Vasumatha Softech Solution
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          {["Home", "About", "Contact", "Services", "Blogs", "Career"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-yellow-400">
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white py-4 space-y-4 flex flex-col items-center transition-all duration-300">
          {["Home", "About", "Contact", "Services", "Blogs", "Career"].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
