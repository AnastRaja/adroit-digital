import Link from "next/link";
import {Metadata} from "next";

import {siteConfig} from "@/config/site";
import {buttonVariants, Button} from "@/components/ui/button";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";
import Banner from "@/asset/Banner_img.png";
import Team from "@/asset/team_compress.webp";
import Image from "next/image";
import CTAimg from "@/asset/getquate.webp";
import Teamimg from "@/asset/team-img.jpg";
import {MonitorSmartphone, Bitcoin} from "lucide-react";
// import BlogCard from "./core/BlogCard";
const myFont = localFont({src: "../../asset/font/Gasket.ttf"});
import {GetServerSideProps} from "next";
import BlogCard from "../core/BlogCard"; // Adjust path if needed
import {fetchBlogs} from "../lib/fetchBlogs"; // Adjust path if needed
import {Blog} from "../types/blog";

export const metadata: Metadata = {
  title: {
    template: "%s | Nexara Innovations",
    default: "Nexara Innovations - Future of Tech",
  },
  description:
    "Nexara Innovations pioneers blockchain, AI, and cutting-edge software solutions.",
  applicationName: "Nexara Platform",
  generator: "Next.js 14",
  keywords: [
    "Nexara Innovations",
    "Blockchain Development",
    "AI Solutions",
    "Software Development",
    "Secure Technologies",
    "Next.js App",
  ],
  authors: [
    {name: "John Doe", url: "https://adroitsdigital.com/team/john"},
    {name: "Jane Smith", url: "https://adroitsdigital.com/team/jane"},
  ],
  creator: "Nexara Innovations",
  publisher: "Nexara Media",
  metadataBase: new URL("https://adroitsdigital.com"),
  openGraph: {
    title: "Nexara Innovations - Leading the Future",
    description:
      "Explore cutting-edge AI and blockchain solutions from Nexara Innovations.",
    url: "https://adroitsdigital.com",
    siteName: "Nexara Innovations",
    images: [
      {
        url: "https://adroitsdigital.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexara Innovations Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexarainnovations",
    creator: "@johndoe",
    title: "Nexara Innovations",
    description: "Innovating with AI and Blockchain to shape the future.",
    images: ["https://adroitsdigital.com/assets/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    // bing: 'bing-site-verification-code',
    yandex: "yandex-site-verification-code",
  },
};

export default async function IndexPage() {
  const blogs: Blog[] = await fetchBlogs();

  // Filter out the current blog and limit to 4 related blogs
  const relatedBlogs = blogs;

  return (
    <div>
      <section className="container  mt-0">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          {/* <div className="p-6">
            <div className="flex items-center justify-center flex-col">
              <h2
                className={cn(
                  "text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wider ",
                  myFont.className
                )}
              >
                Our Blog
              </h2>
              <p className="mt-2 max-w-[700px] text-xl text-zinc-950 text-center">
                At Adroits Digital, we offer a comprehensive range of services
                to <br className="hidden sm:inline" />
                meet your unique business needs
              </p>
            </div>
          </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {relatedBlogs.length === 0 ? (
            <p className="text-center col-span-full">No blogs available</p>
          ) : (
            relatedBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          )}
        </div>
      </section>

      <section
        className="relative h-[400px] bg-cover bg-center bg-cover bg-no-repeat mt-28"
        style={{
          backgroundImage: `url(${CTAimg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative flex flex-col gap-9 items-center justify-center h-full text-center text-white ">
          <h1
            className={cn(
              "text-4xl md:text-6xl font-bold  tracking-wider",
              myFont.className
            )}
          >
            Get A Free Quote
          </h1>
          <Button className="bg-white text-black">Contact Us</Button>
        </div>
      </section>
    </div>
  );
}
