import ContactForm from "@/components/ContactForm";
import ContactImg from "@/components/ContactImg";
import MapComponent from "@/components/MapComponent";

import Image from "next/image";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 mt-2">
      <ContactImg/>
      {/* SEO-friendly Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 underline">
        Contact Us
      </h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/contact-img.jpg" 
            alt="Contact Us"
            unoptimized
            width={600}
            height={400}
            priority
          />
        </div>
        
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
      <MapComponent/>
     
    </div>
  );
}
