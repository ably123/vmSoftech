// app/services/page.tsx (Server Component)
export const metadata = {
    title: "Our Services | Vasumatha Softech",
    description: "Explore our expert services including Web Development, Digital Marketing, SEO, Mobile App Development, E-Commerce Solutions, and more at Vasumatha Softech.",
    keywords: "Web Development, SEO, Digital Marketing, Mobile App Development, E-Commerce, Cyber Security, Graphic Designing, Google Ads, Meta Ads, Vasumatha Softech",
    openGraph: {
      title: "Our Services | Vasumatha Softech",
      description: "Explore our expert services including Web Development, Digital Marketing, SEO, and more at Vasumatha Softech.",
      url: "https://www.vasumathasoftech.com/services",
      siteName: "Vasumatha Softech",
      type: "website",
      images: [
        {
          url: "https://www.vasumathasoftech.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Vasumatha Softech Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@vasumatha",
      title: "Our Services | Vasumatha Softech",
      description: "Explore our expert services including Web Development, Digital Marketing, SEO, and more at Vasumatha Softech.",
      images: ["https://www.vasumathasoftech.com/og-image.jpg"],
    },
  };
  
import ServicesImg from "@/components/ServicesImg";
import ServicesPage from "../../components/ServicesPage";
import ReadyToStart from "@/components/ReadyToStart";

  export default function Page() {

    return (
        <>
         <ServicesImg/>
         <ServicesPage />  
         <ReadyToStart/>                    
        </>
    )
  }
  