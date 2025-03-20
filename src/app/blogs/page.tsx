import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Blog | Vasumatha Softech - Digital Marketing & Web Development,App development and,custom software",
  description: "Stay updated with the latest trends in digital marketing, SEO, website development & App development,Custom Development. Explore expert insights from Vasumatha Softech.",
  openGraph: {
    title: "Blog | Vasumatha Softech",
    description: "Explore the latest trends and insights in digital marketing, SEO, and web development,App development from Vasumatha Softech.",
    type: "website",
  },
};

// Blog Data
const blogPosts = [
  {
    id: 1,
    title: "The Importance of SEO in Digital Marketing",
    image: "/seo-blog.avif",
    description: "Learn how Vasumatha Softech enhances your digital presence with cutting-edge SEO techniques.",
  },
  {
    id: 2,
    title: "Website Development Trends in 2025",
    image: "/web.jpg",
    description: "Discover the future of web development and how businesses can adapt to new trends.",
  },
  {
    id: 3,
    title: "Why Your Business Needs a Strong Online Presence",
    image: "/business.jpg",
    description: "Understand the importance of brand visibility and online credibility in a digital-first world.",
  },
  {
    id: 4,
    title: "How to Optimize Your Website for Mobile Users",
    image: "/trend.avif",
    description: "With mobile users growing, learn how to ensure your website is fully optimized for mobile browsing.",
  },
  {
    id: 5,
    title: "The Role of Content Marketing in SEO Success",
    image: "/content.avif",
    description: "Discover how high-quality content drives search rankings and customer engagement.",
  },
  {
    id: 6,
    title: "Best Practices for Website Security in 2025",
    image: "/security.jpg",
    description: "Keep your business secure with the latest website security measures and data protection strategies.",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-6 py-12 mt-14">
      {/* Blog Header */}
      <h1 className="text-4xl font-bold text-center mb-6">Our Blog</h1>
      <div className="w-20 h-1 bg-orange-500 mx-auto mt-2"></div>
      <p className="text-center text-lg text-gray-600 mb-8">
        Stay updated with the latest insights from Vasumatha Softech.
      </p>
      
      {/* Blog Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blogs/${post.id}`} passHref>
            <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="relative group">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={500} 
                  height={300} 
                  className="w-full h-56 object-cover"
                  priority
                  unoptimized
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
                <span className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
