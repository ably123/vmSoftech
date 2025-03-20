"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaCode, 
  FaBullhorn, 
  FaChartLine, 
  FaShoppingCart, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaFacebook, 
  FaGoogle, 
  FaPaintBrush 
} from "react-icons/fa";

// Services List
const services = [
  { title: "Web Development", icon: FaCode, description: "We build modern, scalable, and SEO-friendly websites tailored to your business needs." },
  { title: "Digital Marketing", icon: FaBullhorn, description: "Boost your brand with our expert digital marketing strategies, SEO, and social media management." },
  { title: "SEO Optimization", icon: FaChartLine, description: "Rank higher on Google and improve your online visibility with our advanced SEO services." },
  { title: "E-Commerce Solutions", icon: FaShoppingCart, description: "We develop robust e-commerce platforms to enhance your online sales and customer experience." },
  { title: "Mobile App Development", icon: FaMobileAlt, description: "We create user-friendly and high-performance mobile apps for Android and iOS." },
  { title: "Cyber Security", icon: FaShieldAlt, description: "Protect your business from cyber threats with our advanced security solutions." },
  { title: "Social Media Management", icon: FaFacebook, description: "Grow your online presence with our expert social media management strategies." },
  { title: "Graphic Designing", icon: FaPaintBrush, description: "Get visually appealing and creative graphics for your business branding and marketing." },
  { title: "Google Ads", icon: FaGoogle, description: "Increase website traffic and conversions with our effective Google Ads campaigns." },
  { title: "Meta Ads", icon: FaFacebook, description: "Reach your audience effectively with our high-converting Meta (Facebook & Instagram) Ads." }
];

// Service Card Component
function ServiceCard({ title, Icon, description }: { title: string; Icon: React.ElementType; description: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-blue-500 text-4xl mb-4"><Icon /></div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
}

// Services Page Component
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 container mx-auto mt-15">
      {/* Page Header with Animation */}
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
        <div className="w-20 border-pink-300 border mx-auto"></div>
        <p className="text-gray-600 text-lg mb-8">
          We provide top-notch services to help your business grow and succeed. 
          Our expert team specializes in Web Development, SEO, Digital Marketing, and more.
        </p>
      </motion.div>

      {/* Services Grid with Scroll Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} Icon={service.icon} description={service.description} />
        ))}
      </div>
    </div>
  );
}