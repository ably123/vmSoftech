import Image from "next/image";
import Head from "next/head";
import { FaPhp, FaJava, FaHtml5, FaWordpress, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaJs, FaAndroid } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function SoftwareLanguages() {
  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Software Development Languages | Vasumatha Softech</title>
        <meta
          name="description"
          content="Our developers specialize in various software development languages including JavaScript, PHP, Java, Node.js, React.js, SQL, Tailwind CSS, Android, and more."
        />
        <meta name="keywords" content="Software Development, Web Development, JavaScript, PHP, Java, Node.js, React.js, SQL, Tailwind CSS, WordPress, HTML5, Bootstrap, Android" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Section Container */}
      <section className="bg-gray-100 py-12 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-500">
            Our skilled developers excel in a wide range of technologies
          </h2>
          <h3 className="text-red-500 text-3xl md:text-5xl font-extrabold mt-2">
            Software Development Languages
          </h3>

          {/* Content Section */}
          <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Developer Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-[400px] h-[300px] max-w-full">
                <Image
                  src="/software.png"
                  alt="Software Developer"
                  fill // ✅ New Next.js 13+ prop instead of layout="fill"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-contain" // ✅ Uses Tailwind's object-fit
                  priority={true}
                  unoptimized
                />
              </div>
            </div>

            {/* Languages Grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
                { name: "PHP", icon: <FaPhp className="text-blue-600 text-5xl" /> },
                { name: "Java", icon: <FaJava className="text-red-600 text-5xl" /> },
                { name: "WordPress", icon: <FaWordpress className="text-blue-500 text-5xl" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600 text-5xl" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
                { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
                { name: "SQL", icon: <FaDatabase className="text-gray-700 text-5xl" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500 text-5xl" /> },
                { name: "Android", icon: <FaAndroid className="text-green-500 text-5xl" /> },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  {tech.icon}
                  <p className="mt-2 text-gray-700 font-semibold">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
