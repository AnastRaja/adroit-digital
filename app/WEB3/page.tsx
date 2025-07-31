import React from "react";
import {Metadata} from "next";
import Link from "next/link";

import {siteConfig} from "@/config/site";
import {buttonVariants, Button} from "@/components/ui/button";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";
import Banner from "@/asset/web3/overvie-web3.png";
import Banner2 from "@/asset/web3/about-web3.png";
import why from "@/asset/web3/about.png";
import keyword from "@/asset/SEOIMG/keyword.png";
import CTAimg from "@/asset/getquate.webp";

import Community from "@/asset/web3/Community.png";
import branding from "@/asset/web3/branding.png";
import pressrelese from "@/asset/web3/pressrelese.png";
import influncer from "@/asset/web3/influncer.png";
import websitedev from "@/asset/web3/websitedev.png";
import socialmedia from "@/asset/web3/socialmedia.png";
import SEO from "@/asset/web3/SEO.png";
import ads from "@/asset/web3/ads.png";
import meta from "@/asset/web3/meta.png";
import content from "@/asset/web3/content.png";
import mediaout from "@/asset/web3/mediaout.png";
import statrgecplan from "@/asset/web3/statrgecplan.png";
import DialogCloseButton from "@/components/ContactDialog";

import Image from "next/image";
import {defaultMetadata} from "@/config/metadata";
import {MonitorSmartphone, Bitcoin} from "lucide-react";
const myFont = localFont({src: "../../asset/font/Gasket.ttf"});
export const metadata = {
  ...defaultMetadata,
  title: "Web3 Marketing Agency | Crypto Marketing Agency",
  description:
    "Adroits Digital is expert web3 and crypto marketing. Specialize in innovative strategies for blockchain, crypto, and NFT projects. Join us.",
  keywords: [
    "web3 marketing agency",
    "crypto marketing agency",
    "web3 marketing company",
    "crypto marketing company",
    "cryptocurrency marketing company",
    "token marketing company",
    "crypto token marketing company",
    "crypto token marketing agency",
    "Web3 Marketing",
  ],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Crypto Marketing Agency | Web3 Marketing | Adroits Digital",
    description:
      "We propel your crypto token, NFT, into the future with web3 marketing. We assure your web3 and crypto project achieve a maximum height.",
    url: "https://adroitsdigital.com",
    siteName: "Adroits Digital - We make your brand shine online",
    images: [
      {
        url:
          "https://res.cloudinary.com/decbm52pl/image/upload/v1712857785/Web3_Marketing_Agency_gcctcz.jpg",
        width: 1200,
        height: 630,
        alt: "Web3 Marketing Agency OG Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },

  applicationName: "Adroits Digital",
};
function index() {
  return (
    <>
      <div>
        <div className="">
          <section className="container grid items-start lg:items-center gap-4 sm:gap-6 min-h-[calc(100vh-60px)] grid-cols-12 py-6 sm:py-0 BG-web3 ">
            <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
              <h1
                className={cn(
                  "text-4xl sm:text-3xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-wider lg:text-left text-center w-full",
                  myFont.className
                )}
              >
                Web3 Marketing Agency
              </h1>
              <p className="mt-4 sm:mt-6 max-w-[700px] text-base sm:text-lg md:text-xl text-zinc-950 lg:text-left text-center">
                Adroits Digital - Your Guide to Web3 Marketing Service. We are
                specialized in the field of Web3 and Blockchain technology. We
                guide you through each and every step to brand your web3
                business online.
              </p>
              <div className="flex gap-4 mt-6 sm:mt-8 justify-center w-full lg:justify-start">
                <DialogCloseButton buttonText="Contact Us" />
              </div>
            </div>
          </section>
        </div>

        <div className="bg-gray-100 pt-14">
          <section className="container grid items-center gap-4 sm:gap-6 grid-cols-12 pb-8 sm:pb-14 ">
            <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 order-2 sm:order-1">
              <div className="relative mx-auto">
                <Image
                  src={Banner}
                  alt="Banner"
                  // layout="responsive"
                  width={500}
                  height={100}
                  className=" h-auto z-10 relative rounded-lg mx-auto display:block"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 order-1 sm:order-2">
              <h2
                className={cn(
                  "text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wider lg:text-left text-center w-full",
                  myFont.className
                )}
              >
                Overview of Web3 Marketing
              </h2>
              <p className="mt-2 max-w-[700px] text-base text-zinc-950 lg:text-left text-center">
                The digital marketing sector is undergoing a seismic shift. With
                the evolution of the internet from Web 2.0 to Web 3.0, the realm
                of marketing is undergoing a significant transformation. Web3
                marketing goes beyond traditional online marketing strategies.
                It leverages blockchain technology to create a more transparent,
                secure, and user-centric online experience. This paradigm shift
                from centralized to decentralized web opens up a plethora of
                opportunities for brands to connect with their audience in a
                more meaningful way. It&apos;s about crafting brand experiences
                that resonate within this new, community-driven ecosystem. Here,
                users have more control over their data, and brands need to
                build trust and transparency to succeed.
              </p>
            </div>
          </section>
        </div>
        <div className="pt-14">
          <section className="container grid items-center gap-4 sm:gap-6 grid-cols-12 pb-8 sm:pb-14 ">
            <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 ">
              <h2
                className={cn(
                  "text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wider lg:text-left text-center w-full",
                  myFont.className
                )}
              >
                About Adroits Digital
              </h2>
              <p className="mt-2 max-w-[700px] text-base text-zinc-950 lg:text-left text-center">
                Adroits Digital, A leading web3 marketing agency, we&apos;re at
                the frontline of this transformative movement, offering
                top-notch Web3 Marketing Services that propel brands into the
                future of marketing. As we navigate through the decentralized
                web, our marketing strategies are evolving to meet the unique
                demands of this new era. Our innovative marketing strategies are
                crafted through the power of the decentralized web, ensuring
                they resonate deeply with our clients&apos; target audiences. At
                Adroits Digital we have a team of expert blockchain marketers
                with over 5+ years of experience who remain ahead of the curve.
                We&apos;ve seamlessly integrated the latest tech and
                community-centric tactics into our repertoire, including content
                marketing, Search engine optimization, community management,
                press release, and social media engagement. Join us in this
                digital journey to level up your web3 business.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 ">
              <div className="relative mx-auto">
                <Image
                  src={Banner2}
                  alt="Banner"
                  // layout="responsive"
                  width={500}
                  height={100}
                  className=" h-auto z-10 relative rounded-lg mx-auto"
                />
              </div>
            </div>
          </section>
        </div>
        <section className="container mt-16">
          <div className="p-6">
            <div>
              <h2
                className={cn(
                  "text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wider lg:text-left text-center w-full",
                  myFont.className
                )}
              >
                Web3 Marketing Process.
              </h2>
              <p className="mt-2 max-w-[700px] text-base text-zinc-950 text-center mx-auto">
                Decentralize Your Brand&apos;s Reach with Adroits Digital
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={Community}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Community Management
              </h3>
              <p className="group-hover:text-white">
                Cultivating and maintaining an engaged audience across various
                digital platforms.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={branding}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Branding
              </h3>
              <p className="group-hover:text-white">
                Creating a unique identity and image for your business that
                resonates with the Web3 market.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={pressrelese}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Press Release
              </h3>
              <p className="group-hover:text-white">
                Distributing newsworthy announcements about your business to
                media outlets and public forums.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={influncer}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Influencer Marketing
              </h3>
              <p className="group-hover:text-white">
                Partnering with influential figures to amplify your brand&apos;s
                message within the Web3 space.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={websitedev}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Website and Web Development
              </h3>
              <p className="group-hover:text-white">
                Designing and developing a user-friendly website optimized for
                the Web3 ecosystem.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={socialmedia}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Social Media Management
              </h3>
              <p className="group-hover:text-white">
                Handling your brand&apos;s presence on social media platforms to
                boost visibility and engagement.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={SEO}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Search Engine Optimization
              </h3>
              <p className="group-hover:text-white">
                Optimizing your online content to rank higher on search engine
                results pages.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={ads}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Paid Ads
              </h3>
              <p className="group-hover:text-white">
                Implementing paid advertising campaigns to target specific
                audiences and drive traffic.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={meta}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Meta Ads
              </h3>
              <p className="group-hover:text-white">
                Utilizing Meta&apos;s advertising network to reach potential
                customers on platforms like Facebook and Instagram.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={content}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Content Creation
              </h3>
              <p className="group-hover:text-white">
                Producing valuable and relevant content tailored to the
                interests of the Web3 community.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={mediaout}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Media Outreach
              </h3>
              <p className="group-hover:text-white">
                Connecting with journalists and bloggers to gain coverage for
                your brand in the media.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg rounded-bl-[50px] rounded-tr-[50px]">
              <div className="mb-4">
                <Image
                  src={mediaout}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Strategic Planning
              </h3>
              <p className="group-hover:text-white">
                Developing a comprehensive plan that outlines the approach to
                achieving your Web3 marketing goals.
              </p>
            </div>
          </div>
        </section>

        <div className=" pt-20">
          <section className="container grid items-center gap-4 sm:gap-6 grid-cols-12 pb-8 sm:pb-14 ">
            <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 order-2 sm:order-1">
              <div className="relative mx-auto">
                <Image
                  src={why}
                  alt="Banner"
                  // layout="responsive"
                  width={600}
                  height={100}
                  className=" h-auto z-10 relative rounded-lg mx-auto display:block"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 order-1 sm:order-2">
              <h2
                className={cn(
                  "text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wider lg:text-left text-center w-full",
                  myFont.className
                )}
              >
                Why Choose Adroits Digital for Web3 Marketing?
              </h2>
              <p className="mt-2 max-w-[700px] text-base text-zinc-950">
                Adroits Digital is the ideal choice for Web3 marketing, offering
                a blend of expertise in blockchain technology and innovative
                marketing strategies. Our comprehensive services, adaptability
                to trends, and focus on community engagement make us a standout
                partner for your Web3 business needs. Here are five key reasons
                to choose Adroits Digital:
              </p>
              <ul className="list-none pl-0">
                <li className="text-md mb-2 text-zinc-950">
                  <strong>Blockchain Expertise:</strong> In-depth knowledge of
                  blockchain and Web3 technologies.
                </li>
                <li className="text-md mb-2 text-zinc-950">
                  <strong>Innovative Strategies:</strong> Cutting-edge marketing
                  tailored to the Web3 ecosystem.
                </li>
                <li className="text-md mb-2 text-zinc-950">
                  <strong>Full-Service Suite:</strong> From SEO to social media
                  management, we cover all your marketing needs.
                </li>
                <li className="text-md mb-2 text-zinc-950">
                  <strong>Trend Adaptability:</strong> Staying ahead of the
                  curve with the latest Web3 developments.
                </li>
                <li className="text-md mb-2 text-zinc-950">
                  <strong>Community Focus:</strong> Building strong, engaged
                  communities around your brand.
                </li>
              </ul>
            </div>
          </section>
        </div>
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
            <Link
              href="/contact-us"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default index;
