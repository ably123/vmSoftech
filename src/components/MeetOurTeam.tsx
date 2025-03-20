"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ajit Kumar",
    role: "CEO & Founder",
    image: "/ajit-sir.webp",
  },
  {
    name: "RITWIK MISHRA",
    role: "Project Manager",
    image: "/ritwik-sir.webp",
  },
  {
    name: "Nikhil Singh",
    role: "Manager",
    image: "/nikhil-sir.webp",
  },
  {
    name: "Bhabya Verma",
    role: "Senior Developer",
    image: "/bhabya.jpeg",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Meet Our Team
        </h2>
        <div className="w-20 border-pink-300 border mx-auto  mb-2"></div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg relative group transition-all duration-300 ease-in-out hover:scale-105 hover:bg-green-400 hover:text-white"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
              }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 transition-all duration-300 group-hover:border-white">
                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" unoptimized />
              </div>
              <h3 className="mt-4 text-xl font-semibold transition-all group-hover:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 transition-all group-hover:text-gray-200">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
