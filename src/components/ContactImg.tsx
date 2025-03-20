'use client';

import Head from 'next/head';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function ContactImg() {
  return (
    <>
      <Head>
        <title>Contact Us - Vasumatha Softech</title>
        <meta name="description" content="Get in touch with Vasumatha Softech for website development, digital marketing, and SEO services." />
        <meta name="keywords" content="contact, Vasumatha Softech, digital marketing, website development, SEO services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <section className=" py-12 px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold">CONTACT</h2>
          <p className="text-gray-600 mt-2">
            Use our contact form for all information requests or contact us directly using the details below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
          {/* Office Location */}
          <div className="bg-white shadow-lg p-6 text-center rounded-lg">
            <div className="flex justify-center">
              <FaMapMarkerAlt className="text-green-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Our Office Location</h3>
            <p className="text-gray-600 mt-2">The Software Development Company</p>
            <p className="text-gray-600">
              3rd Floor, Shree Gopal Complex, Kutchery Rd, Deputy Para, Ahirtoli, Ranchi, Jharkhand 834001
            </p>
          </div>

          {/* Phone Contact */}
          <div className="bg-white shadow-lg p-6 text-center rounded-lg">
            <div className="flex justify-center">
              <FaPhone className="text-green-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Phone</h3>
            <p className="text-gray-600 mt-2">(+91) 8969034555</p>
          </div>
        </div>
      </section>
    </>
  );
}
