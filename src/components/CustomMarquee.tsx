"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const CustomMarquee = () => {
  return (
    <div className="bg-gray-100 py-6">
      <Marquee
        speed={50} 
        gradient={true} 
        gradientWidth={50} 
        pauseOnHover={true} 
        direction="left" 
        loop={0} 
        className="overflow-hidden"
      >
        {/* Clients List */}
        {[
          { src: "/jmb-infra.png", alt: "JMB Infra", name: "JMB Infra" },
          { src: "/learnefy-school.webp", alt: "Learnefy School", name: "Learnefy School" },
          { src: "/MTM LOGO.png", alt: "Malti Tel Mil", name: "Malti Tel Mil" },
          { src: "/translate-sports-ranchi.avif", alt: "Translate Sports Ranchi", name: "Translate Sports Ranchi" }
        ].map((client, index) => (
          <div 
            key={index} 
            className="mx-4 bg-white shadow-md rounded-xl p-4 flex flex-col items-center min-w-[200px] transition-transform transform hover:scale-105"
          >
            <Image 
              src={client.src} 
              alt={client.alt} 
              width={50} 
              height={50} 
              priority={true} 
              unoptimized
            />
            <p className="font-bold text-gray-700 mt-2">{client.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CustomMarquee;
