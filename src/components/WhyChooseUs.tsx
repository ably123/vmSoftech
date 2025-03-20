import Head from 'next/head';
import { FaBug, FaLaptopCode, FaMobileAlt, FaMoneyBillWave } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    { title: 'Tested and Bug-free Software', icon: <FaBug className="text-blue-500 text-5xl mx-auto" /> },
    { title: 'Clean & User Friendly UI/UX', icon: <FaLaptopCode className="text-green-500 text-5xl mx-auto" /> },
    { title: 'Fully Responsive Website', icon: <FaMobileAlt className="text-purple-500 text-5xl mx-auto" /> },
    { title: 'Cost Effective Solutions', icon: <FaMoneyBillWave className="text-yellow-500 text-5xl mx-auto" /> },
  ];

  return (
    <>
      <Head>
        <title>Why Choose Us | Vasumatha Softech</title>
        <meta name="description" content="Discover why Vasumatha Softech is the best software company, offering bug-free software, responsive designs, and cost-effective solutions." />
        <meta name="keywords" content="software company, UI/UX design, responsive website, bug-free software, cost-effective solutions" />
        <meta name="author" content="Vasumatha Softech" />
      </Head>
      <section className="py-12 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Why is Vasumatha Softech the Best Software Company?</h2>
          <p className="text-gray-600 mb-6">
            We provide reliable, high-quality software solutions to help businesses run smoothly, avoiding costly upgrades and maintenance fees.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 border rounded-lg shadow-md transition duration-300 hover:bg-green-400">
              {feature.icon}
              <h3 className="font-medium text-gray-800 mt-3">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;