import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Head from "next/head";

const Footer = () => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vasumatha Softech",
              "url": "https://www.vasumathasoftech.com",
              "logo": "https://www.vasumathasoftech.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/vasumathasoftech",
                "https://www.twitter.com/vasumathasoftech",
                "https://www.instagram.com/vasumathasoftech",
                "https://www.linkedin.com/company/vasumathasoftech"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9876543210",
                "email": "contact@vasumathasoftech.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Tech Park, Hyderabad",
                  "addressLocality": "Hyderabad",
                  "addressRegion": "Telangana",
                  "postalCode": "500081",
                  "addressCountry": "India"
                },
                "contactType": "customer service"
              }
            }),
          }}
        />
      </Head>

      <footer className="bg-gray-900 text-white py-7">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold">Vasumatha Softech</h2>
            <p className="mt-2 text-gray-400">
              We specialize in customized software, web development, SEO, digital marketing, and app development.
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/blogs" className="text-gray-400 hover:text-white">Blogs</Link></li>
              <li><Link href="/career" className="text-gray-400 hover:text-white">Career</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <FaPhone className="mr-2 text-white" />
                <a href="tel:+919876543210" className="hover:text-white">(+91) 8969034555</a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <FaEnvelope className="mr-2 text-white" />
                <a href="mailto:contact@vasumathasoftech.com" className="hover:text-white">vasumathasoftech456@gmail.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-400">
                <FaMapMarkerAlt className="mr-2 text-white" size={40} />
                3rd Floor, Shree Gopal Complex, Kutchery Rd, Ranchi, Jharkhand 834001
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61570256258807" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.twitter.com/vasumathasoftech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.instagram.com/vm_softech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/105305995/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="mt-2 text-center text-gray-500 text-sm border-t border-gray-700 pt-5@">
          © {new Date().getFullYear()} Vasumatha Softech. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
