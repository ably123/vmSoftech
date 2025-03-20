import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function ReadyToStart() {
  return (
    <>
      <Head>
        <title>Get Started - Vasumatha Softech</title>
        <meta name="description" content="Boost your online presence with Vasumatha Softech. Contact us to get started on your digital journey." />
        <meta name="keywords" content="digital marketing, web development, SEO, Vasumatha Softech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-lg">
        <div className="md:w-1/2 flex justify-center">
          <Image src="/ser.svg" alt="Get Started Illustration" unoptimized width={400} height={250} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-800">Ready to get started?</h2>
          <p className="text-gray-600 mt-2">Vasumatha Softech is your trusted partner for digital marketing, web development, and SEO solutions. We help businesses enhance their online presence and achieve success in the digital world.</p>
          <Link href="/contact">
            <button className="mt-4 bg-teal-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-teal-600 transition-all">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
