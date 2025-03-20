'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaChartLine, FaLaptopCode, FaChartPie, FaGlobe, FaRocket } from 'react-icons/fa';
import Image from 'next/image';
import AboutSection from '../../components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';
import CustomMarquee from '@/components/CustomMarquee';
import HomeLast from '@/components/HomeLast';
import SoftwareLanguages from '@/components/SoftwareLanguages';
import WhyChooseUs from '@/components/WhyChooseUs';
import Link from 'next/link';

export default function HeroSection() {
  const [bgPosition, setBgPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgPosition((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { id: 1, icon: <FaChartLine className="text-blue-400" />, x: 10, y: 20 },
    { id: 2, icon: <FaLaptopCode className="text-green-400" />, x: 40, y: 70 },
    { id: 3, icon: <FaChartPie className="text-yellow-400" />, x: 70, y: 80 },
    { id: 4, icon: <FaGlobe className="text-red-400" />, x: 30, y: 20 },
    { id: 5, icon: <FaRocket className="text-purple-400" />, x: 80, y: 30 }
  ];

  return (
    <>
      <Head>
        <title>Vasumatha Softech | Web Development, Digital Marketing & SEO Experts</title>
        <meta name="description" content="Vasumatha Softech - Expert in Web development, digital marketing, SEO, and website development services. Elevate your online presence with us." />
        <meta name="keywords" content="digital marketing, SEO, website development, Vasumatha Softech" />
        <meta name="author" content="Vasumatha Softech" />
      </Head>

      {/* Hero Section */}
      <div className="relative flex items-center mt-10 justify-center h-screen text-gray-400 overflow-hidden">
        
        {/* Responsive Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/black&white.png" 
            alt="Background" 
            fill 
            unoptimized
            priority
            className="object-cover" 
          />
        </div>
       
        <motion.div 
          className="absolute inset-0 opacity-50"
          animate={{ backgroundPositionX: `${bgPosition}%` }}
          transition={{ ease: "linear", duration: 1 }}
        ></motion.div>

        {/* Floating Icons */}
        {floatingIcons.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-4xl opacity-60"
            style={{ top: `${item.y}%`, left: `${item.x}%` }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Elevate Your Business with <span className="text-yellow-400">Vasumatha Softech</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            We specialize in custom software, web development, SEO, digital marketing, and app development.
          </p>
         
          <Link href="/contact">
            <button className="mt-6 px-6 py-3 text-lg font-semibold bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Additional Sections */}
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ContactForm />
      <SoftwareLanguages />
      <CustomMarquee />
      <HomeLast />
    </>
  );
}
