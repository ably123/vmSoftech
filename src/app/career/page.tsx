"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image"; // ✅ Import next/image

export default function CareerForm() {
  const [fileName, setFileName] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const resume = formData.get("resume") as File;

    if (!resume || resume.size === 0) {
      setMessage("Resume file is required!");
      return;
    }

    setMessage("Submitting...");

    try {
      const response = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorResult = await response.json();
        console.error("Error response:", errorResult);
        setMessage(errorResult.error || "Error submitting application.");
      } else {
        setMessage(null);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Network error:", error);
      setMessage("Network error occurred. Please try again.");
    }
  }

  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>Thank You | Career Application</title>
          <meta
            name="description"
            content="Your career application has been submitted successfully. Thank you for applying to join our team."
          />
        </Head>
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-md bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold text-green-600">Thank You!</h2>
            <p className="text-gray-600 mt-2">
              Your application has been submitted successfully.
            </p>
            <p className="text-gray-500 mt-2">
              We appreciate your interest in our company.
            </p>
            <button
              onClick={() => router.push("/")}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
            >
              Go Back to Home Page
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Career Opportunities | Apply Now</title>
        <meta
          name="description"
          content="Apply for exciting career opportunities with our company. Submit your resume and become part of our team."
        />
      </Head>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 mt-15">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src="/career.png"
            alt="Join Our Team - Career Opportunities"
            width={500} // ✅ Required for Next.js optimization
            height={500} // ✅ Required for Next.js optimization
            priority // ✅ Improves LCP performance
            className="w-[90%] md:w-[80%] lg:w-[70%] h-auto max-h-[500px] object-cover"
            unoptimized
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Apply for a Job
          </h1>
          {message && <p className="mb-4 text-red-500 text-center">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium" htmlFor="resume">
                Upload Resume (PDF/DOC)
              </label>
              <input
                id="resume"
                type="file"
                name="resume"
                onChange={(e) =>
                  setFileName(e.target.files?.[0]?.name || "No file selected")
                }
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                accept=".pdf,.doc,.docx"
                required
              />
              {fileName && <p className="text-gray-500 text-sm">{fileName}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
