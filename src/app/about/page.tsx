import MeetOurTeam from "@/components/MeetOurTeam";
import Image from "next/image";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About Us - Vasumatha Softech | Digital Marketing, Web &amp; App Development</title>
        <meta
          name="description"
          content="Discover Vasumatha Softech, a leading digital marketing, web &amp; app development company, empowering businesses with cutting-edge solutions for online success."
        />
        <meta
          name="keywords"
          content="Vasumatha Softech, digital marketing, SEO, web development, app development, online branding, software solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vasumatha Softech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <section className="bg-gray-100 py-12 px-4 sm:px-6 md:px-12 lg:px-20 mt-20">
        {/* Page Heading for SEO */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-10">
          About Vasumatha Softech
        </h1>
        <div className="border-b-4 border-amber-700 w-20 mx-auto"></div>

        {/* Our Mission Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Our Mission</h2>
            <div className="w-16 sm:w-20 border-b-4 border-pink-300 mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide innovative and effective digital solutions that empower businesses 
              to grow and thrive in the competitive online landscape. We specialize in data-driven marketing strategies, 
              cutting-edge web development, and SEO solutions that enhance brand authority and drive measurable success.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image 
              src="/mission.png" 
              alt="Our Mission" 
              width={500} 
              height={500} 
              className="max-w-full h-auto"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="md:w-1/2 flex justify-center">
            <Image 
              src="/about-us.png" 
              alt="Who We Are" 
              width={500} 
              height={500} 
              className="max-w-full h-auto"
              unoptimized
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Who We Are</h2>
            <div className="w-16 sm:w-20 border-b-4 border-pink-300 mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              Vasumatha Softech is a top-tier digital marketing, SEO, and website development company dedicated to 
              enhancing businesses&rsquo; online presence. Our expertise lies in crafting innovative, results-driven strategies 
              that boost brand visibility, increase website traffic, and drive conversions.
            </p>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="mt-16 flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10">
          <div className="md:w-1/2 flex justify-center">
            <Image 
              src="/vision.png" 
              alt="Our Vision" 
              width={500} 
              height={500} 
              className="max-w-full h-auto"
              unoptimized
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Our Vision</h2>
            <div className="w-16 sm:w-20 border-b-4 border-pink-300 mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to be a global leader in digital marketing and web development, setting industry standards 
              for innovation and excellence. We aim to help businesses establish a strong online presence, enhance customer engagement, 
              and achieve long-term success through advanced digital solutions.
            </p>
          </div>
        </div>

        {/* Call to Action (CTA) */}
        <div className="text-center mt-10">
          <a 
            href="/contact" 
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <MeetOurTeam />
    </>
  );
};

export default AboutUs;