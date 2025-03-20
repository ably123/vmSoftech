import Image from "next/image";
import Link from "next/link";
import { FaChartLine, FaLaptopCode, FaSearch, FaGoogle } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="flex flex-col w-full max-w-7xl mx-auto md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-100">
      {/* Left Side - Responsive Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image 
          src="/service-page.png" 
          alt="Our Services" 
          width={500} 
          height={300} 
          unoptimized
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-contain"
        />
      </div>

      {/* Right Side - Description */}
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 underline">Our Services</h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">What We Offer</h3>
        <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
          At Vasumatha Softech, we specialize in providing top-notch digital solutions, including website development, SEO optimization, and digital marketing services.
        </p>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/** Services Data */}
          {[
            { icon: FaChartLine, title: "Digital Marketing", color: "text-blue-600", desc: "Boost your brand's presence with our expert digital marketing strategies." },
            { icon: FaLaptopCode, title: "Website Development", color: "text-green-600", desc: "We create user-friendly and high-performing websites for your business." },
            { icon: FaSearch, title: "SEO Optimization", color: "text-purple-600", desc: "Improve your search rankings and attract more traffic with our SEO services." },
            { icon: FaGoogle, title: "Google Ads", color: "text-yellow-500", desc: "Maximize your reach and boost conversions with our expert Google Ads campaigns." },
          ].map((service, index) => (
            <div key={index} className="relative group bg-white bg-opacity-20 p-6 rounded-lg shadow-md text-center md:text-left backdrop-blur-md transition-transform transform hover:scale-105 hover:bg-opacity-30 overflow-hidden">
              <service.icon className={`absolute inset-0 flex items-center justify-center ${service.color} text-[150px] opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="relative z-10">
                <service.icon className={`${service.color} text-4xl mx-auto md:mx-0 mb-3`} />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Button */}
        <div className="mt-6 text-center md:text-left">
          <Link href="/services">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
