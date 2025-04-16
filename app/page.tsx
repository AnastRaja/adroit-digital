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
const myFont = localFont({src: "../asset/font/Gasket.ttf"});
import {GetServerSideProps} from "next";
import BlogCard from "./core/BlogCard"; // Adjust path if needed
import {fetchBlogs} from "./lib/fetchBlogs"; // Adjust path if needed
import {Blog} from "./types/blog";

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
    google: "google-site-verification-codee",
    // bing: 'bing-site-verification-code',
    yandex: "yandex-site-verification-code",
  },
};

export default async function IndexPage() {
  const blogs: Blog[] = await fetchBlogs();

  // Filter out the current blog and limit to 4 related blogs
  const relatedBlogs = blogs.slice(0, 4); // Limit to 4 items

  return (
    <div>
      <section className="container grid items-center gap-4 sm:gap-6 min-h-[calc(100vh-60px)] grid-cols-12 py-6 sm:py-0">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
          <h1
            className={cn(
              "text-4xl sm:text-3xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-wider lg:text-left text-center",
              myFont.className
            )}
          >
            Digital Transformation <br className="hidden sm:inline" /> Company
          </h1>
          <p className="mt-4 sm:mt-6 max-w-[700px] text-base sm:text-lg md:text-xl text-zinc-950 lg:text-left text-center">
            From Web3 innovation to captivating designs, we create digital
            experiences that matter. Adroits Digital specializes in transforming
            ideas into reality with services in Web3, blockchain, AI, marketing,
            and development that power your business&apos;s journey to success
            and growth.
          </p>
          <div className="flex gap-4 mt-6 sm:mt-8 justify-center w-full lg:justify-start">
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
          <div className="w-full">
            <Image
              src={Banner}
              alt="Banner"
              layout="responsive"
              width={100}
              height={70}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container grid items-center gap-4 sm:gap-6 grid-cols-12 pb-8 sm:pb-14">
        {/* Left Column: Image */}
        <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 order-2 sm:order-1">
          <div className="relative w-full">
            <Image
              src={Team}
              alt="Team Banner"
              layout="responsive"
              width={400}
              height={70}
              className="w-full h-auto z-10 relative rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 order-1 sm:order-2">
          <h2
            className={cn(
              "text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wider lg:text-left text-center w-full",
              myFont.className
            )}
          >
            Who We Are?
          </h2>
          <p className="mt-2 sm:mt-4 max-w-[700px] text-base sm:text-lg md:text-xl text-zinc-950 lg:text-left text-center">
            Welcome to Adroits Digital, your trusted partner in digital
            innovation. We are a team of passionate professionals dedicated to
            delivering cutting-edge solutions that empower businesses to thrive
            in the ever-evolving digital landscape. Whether you&apos;re a
            startup looking to establish your presence or an established brand
            aiming to expand, we are here to help you achieve your goals with
            tailored strategies and unmatched expertise.
          </p>
        </div>
      </section>
      <section className="container mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-0 lg:p-6">
            <div>
              <h2
                className={cn(
                  "text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wider lg:text-left text-center w-full",
                  myFont.className
                )}
              >
                Our Services
              </h2>
              <p className="mt-2 max-w-[700px] text-xl text-zinc-950 lg:text-left text-center w-full">
                At Adroits Digital, we offer a comprehensive range of services
                to <br className="hidden sm:inline" />
                meet your unique business needs
              </p>
            </div>
          </div>
          <div className="group bg-slate-100 hover:bg-primary hover:scale-105 text-gray-800 p-6 cursor-pointer transition-all duration-300 ease-in-out rounded-lg hover:rounded-lg">
            <div className="mb-4">
              <MonitorSmartphone
                size={40}
                className="group-hover:text-white text-gray-800"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
              Web Designing & Development
            </h3>
            <p className="group-hover:text-white">
              Create stunning, user-friendly websites that engage your audience
              and drive conversions. From sleek designs to robust functionality,
              we&apos;ve got you covered.
            </p>
          </div>
          <div
            className="group bg-slate-100 hover:bg-primary hover:scale-105 text-gray-800 p-6 cursor-pointer transition-all duration-300 ease-in-out 
rounded-lg hover:rounded-lg"
          >
            <div className="mb-4">
              <Bitcoin
                size={40}
                className="group-hover:text-white text-gray-800"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
              Web3 Development
            </h3>
            <p className="group-hover:text-white">
              Step into the future with our Web3 solutions. Leverage blockchain
              technology to transform your digital presence with decentralized
              applications and smart contract integration.
            </p>
          </div>

          <div
            className="group bg-slate-100 hover:bg-primary hover:scale-105 text-gray-800 p-6 cursor-pointer transition-all duration-300 ease-in-out 
rounded-lg hover:rounded-lg"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-ad-2 w-10 h-10 group-hover:text-white text-gray-800"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.933 5h-6.933v16h13v-8" />
                <path d="M14 17h-5" />
                <path d="M9 13h5v-4h-5z" />
                <path d="M15 5v-2" />
                <path d="M18 6l2 -2" />
                <path d="M19 9h2" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
              Digital Marketing Services
            </h3>
            <p className="group-hover:text-white">
              Amplify your brand&apos;s reach with data-driven digital marketing
              strategies. From SEO to social media marketing, we help you
              connect with your audience where it matters most.
            </p>
          </div>

          <div
            className="group bg-slate-100 hover:bg-primary hover:scale-105 text-gray-800 p-6 cursor-pointer transition-all duration-300 ease-in-out 
rounded-lg hover:rounded-lg"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-abstract w-10 h-10 group-hover:text-white text-gray-800"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                <path d="M10.5 13.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
                <path d="M8 8h8v8" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
              Graphic Designing
            </h3>
            <p className="group-hover:text-white">
              Captivate your audience with visually striking graphics that leave
              a lasting impression. Our designs are tailored to reflect your
              brand identity.
            </p>
          </div>

          <div
            className="group bg-slate-100 hover:bg-primary hover:scale-105 text-gray-800 p-6 cursor-pointer transition-all duration-300 ease-in-out 
rounded-lg hover:rounded-lg"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-contract w-10 h-10 group-hover:text-white text-gray-800"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5" />
                <path d="M17 8.5v-3.5a2 2 0 1 1 2 2h-2" />
                <path d="M19 3h-11a3 3 0 0 0 -3 3v11" />
                <path d="M9 7h4" />
                <path d="M9 11h4" />
                <path d="M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
              Content Writing
            </h3>
            <p className="group-hover:text-white">
              Elevate your messaging with compelling, SEO-optimized content that
              engages, informs, and converts your audience.
            </p>
          </div>
          <div
            className="group bg-slate-100 hover:bg-primary hover:scale-105 text-gray-800 p-6 cursor-pointer transition-all duration-300 ease-in-out 
rounded-lg hover:rounded-lg"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-ux-circle w-10 h-10 group-hover:text-white text-gray-800"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M7 10v2a2 2 0 1 0 4 0v-2" />
                <path d="M14 10l3 4" />
                <path d="M14 14l3 -4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
              UI/UX Design
            </h3>
            <p className="group-hover:text-white">
              Enhance your digital products with intuitive and visually
              appealing user interfaces. Our designs prioritize user experience
              to keep your audience engaged and satisfied.
            </p>
          </div>
          <div
            className="group bg-slate-100 hover:bg-primary hover:scale-105 text-gray-800 p-6 cursor-pointer transition-all duration-300 ease-in-out 
rounded-lg hover:rounded-lg"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-devices w-10 h-10 group-hover:text-white text-gray-800"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z" />
                <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
                <path d="M16 9h2" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
              Mobile App Development
            </h3>
            <p className="group-hover:text-white">
              Transform your ideas into innovative mobile applications. We build
              robust, user-friendly apps for iOS and Android platforms that
              cater to your business goals.
            </p>
          </div>
          <div
            className="group bg-slate-100 hover:bg-primary hover:scale-105 text-gray-800 p-6 cursor-pointer transition-all duration-300 ease-in-out 
rounded-lg hover:rounded-lg"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram w-10 h-10 group-hover:text-white text-gray-800"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M16.5 7.5v.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
              Social Media Handling
            </h3>
            <p className="group-hover:text-white">
              Build your online presence and engage with your audience
              effectively. From strategy to execution, we manage your social
              media accounts to drive brand growth and customer interaction.
            </p>
          </div>
        </div>
      </section>
      <section
        className="relative h-[500px] bg-fixed bg-center bg-cover bg-no-repeat mt-16"
        style={{
          backgroundImage: `url(${Teamimg.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative flex items-center justify-center h-full text-center text-white ">
          <h1
            className={cn(
              "text-4xl md:text-6xl font-bold mt-[-100px] tracking-wider",
              myFont.className
            )}
          >
            Why Choose Adroits Digital?
          </h1>
        </div>
      </section>
      <section className="container mt-[-150px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out 
rounded-lg hover:rounded-lg"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-location-star w-10 h-10 group-hover:text-white text-gray-800"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10.336 14.672l-.336 -.672l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-2.565 7.104" />
                <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
              Innovative and Future-Ready Solutions
            </h3>
            <p className="group-hover:text-white">
              We stay ahead of the curve, leveraging cutting-edge technologies
              like Web3, blockchain, AI, and intuitive design to drive your
              digital transformation and keep your business competitive.
            </p>
          </div>
          <div
            className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out 
rounded-lg hover:rounded-lg"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check  w-10 h-10 group-hover:text-white text-gray-800"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
              Tailored Strategies for Success
            </h3>
            <p className="group-hover:text-white">
              Your business is unique, and so are our solutions. We work closely
              with you to understand your goals and challenges, delivering
              personalized strategies that align perfectly with your vision.
            </p>
          </div>
          <div
            className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out 
rounded-lg hover:rounded-lg"
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user-heart w-10 h-10 group-hover:text-white text-gray-800"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
                <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
              Customer-Centric Approach
            </h3>
            <p className="group-hover:text-white">
              Your success is our priority. We focus on collaboration,
              transparency, and long-term partnerships, ensuring every solution
              is designed with your growth and satisfaction in mind.
            </p>
          </div>
        </div>
      </section>
      <section className="container mt-16">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          <div className="p-6">
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
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {relatedBlogs.length === 0 ? (
            <p className="text-center col-span-full">No blogs available</p>
          ) : (
            relatedBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          )}
        </div>
      </section>
      {/* <section>
        <BlogCard
          category1="Business"
          category2="News"
          image="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/demo-image-0042-528x297.webp"
          author="Ethan Caldwell"
          date="October 16, 2024"
          title="How Tech Shapes the Future of Work in 2024"
          description="In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to..."
        />
      </section> */}
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
