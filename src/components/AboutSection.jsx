import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="flex flex-col w-full max-w-7xl mx-auto md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gray-100">
      {/* Left Side - Description */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 underline">
          About Us
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
          Welcome to Vasumatha Softech
        </h3>
        <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
          Vasumatha Softech is a digital marketing, website development, and SEO company dedicated to providing 
          top-notch online solutions. Our expertise includes designing user-friendly websites, enhancing search engine 
          rankings, and implementing effective digital marketing strategies to help businesses grow.
        </p>
        <Link href="/about">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 ease-in-out">
            Know More
          </button>
        </Link>
      </div>

      {/* Right Side - Fully Responsive Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image 
          src="/about-us.png" 
          alt="Vasumatha Softech" 
          unoptimized
          width={500} 
          height={300} 
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
        />
      </div>
    </section>
  );
};

export default AboutSection;
