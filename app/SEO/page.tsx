import React from "react";
import {Metadata} from "next";
import Link from "next/link";

import {siteConfig} from "@/config/site";
import {buttonVariants, Button} from "@/components/ui/button";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";
import Banner from "@/asset/what_is_SEO.png";
import why from "@/asset/why-chooes.png";
import keyword from "@/asset/SEOIMG/keyword.png";
import CTAimg from "@/asset/getquate.webp";

import onPage from "@/asset/SEOIMG/onPage.png";
import offpage from "@/asset/SEOIMG/offpage.png";
import local from "@/asset/SEOIMG/local.png";
import technical from "@/asset/SEOIMG/technical.png";
import link from "@/asset/SEOIMG/link.png";
import gmb from "@/asset/SEOIMG/gmb.png";
import content from "@/asset/SEOIMG/content.png";
import design from "@/asset/SEOIMG/technical.png";
import Image from "next/image";

import {MonitorSmartphone, Bitcoin} from "lucide-react";
const myFont = localFont({src: "../../asset/font/Gasket.ttf"});
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
    {name: "John Doe", url: "https://nexara.io/team/john"},
    {name: "Jane Smith", url: "https://nexara.io/team/jane"},
  ],
  creator: "Nexara Innovations",
  publisher: "Nexara Media",
  metadataBase: new URL("https://nexara.io"),
  openGraph: {
    title: "Nexara Innovations - Leading the Future",
    description:
      "Explore cutting-edge AI and blockchain solutions from Nexara Innovations.",
    url: "https://nexara.io",
    siteName: "Nexara Innovations",
    images: [
      {
        url: "https://nexara.io/assets/og-image.jpg",
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
    images: ["https://nexara.io/assets/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://nexara.io",
    languages: {
      "en-US": "https://nexara.io",
      "fr-FR": "https://nexara.io/fr",
    },
  },
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
  // verification: {
  //   google: 'google-site-verification-code',
  //   // bing: 'bing-site-verification-code',
  //   yandex: 'yandex-site-verification-code',
  // },
};

function index() {
  return (
    <>
      <div>
        <section className="container grid items-start lg:items-center gap-4 sm:gap-6 min-h-[calc(100vh-60px)] grid-cols-12 py-6 sm:py-0 SEO_section ">
          <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
            <h1
              className={cn(
                "text-4xl sm:text-3xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-wider lg:text-left text-center w-full",
                myFont.className
              )}
            >
              SEO Service Provider
            </h1>
            <p className="mt-4 sm:mt-6 max-w-[700px] text-base sm:text-lg md:text-xl text-zinc-950 lg:text-left text-center">
              Catch more leads and traffic to your business with our SEO
              tactics. We create strategies that make you rank at the top at the
              google search engine result page.
            </p>
            <div className="flex gap-4 mt-6 sm:mt-8 justify-center w-full lg:justify-start">
              <Link
                href={siteConfig.links.docs}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants()}
              >
                Contact Now
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 col-span-6">
            {/* <div className="w-full">
              <Image
                src={Banner}
                alt="Banner"
                layout="responsive"
                width={70}
                height={50}
                className="w-full h-auto"
              />
            </div> */}
          </div>
        </section>
        <div className="bg-gray-100 pt-14">
          <section className="container grid items-center gap-4 sm:gap-6 grid-cols-12 pb-8 sm:pb-14 ">
            <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 order-2 sm:order-1">
              <div className="relative mx-auto">
                <Image
                  src={Banner}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
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
                What is SEO and How Does it Work for Your Business?
              </h2>
              <p className="mt-2 max-w-[700px] text-xl text-zinc-950 lg:text-left text-center">
                Search Engine Optimization (SEO) is the practice of enhancing
                your website&rsquo;s visibility in search engines to improve
                rankings and drive organic traffic. As a crucial aspect of
                digital marketing, SEO helps businesses strengthen their online
                presence. By optimizing website structure and content, SEO makes
                your site more attractive to search engines, increasing its
                discoverability for potential customers searching for your
                products or services.
              </p>
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
                Our SEO Services
              </h2>
              <p className="mt-2 max-w-[700px] text-xl text-zinc-950 text-center mx-auto">
                At Adroits Digital, we offer a comprehensive suite of SEO
                services to cater to your business&rsquo;s unique needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg">
              <div className="mb-4">
                <Image
                  src={keyword}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Keywords Research
              </h3>
              <p className="group-hover:text-white">
                We delve deep into keyword research to find the terms that your
                target audience uses, ensuring your content resonates and ranks.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg">
              <div className="mb-4">
                <Image
                  src={onPage}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                On-Page SEO
              </h3>
              <p className="group-hover:text-white">
                Our on-page SEO optimizes your website&apos;s content for both
                users and search engines, enhancing readability and
                crawlability.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg">
              <div className="mb-4">
                <Image
                  src={offpage}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Off-Page SEO
              </h3>
              <p className="group-hover:text-white">
                We extend your digital footprint with off-page SEO, building
                your site&apos;s reputation and authority through strategic
                external links.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg">
              <div className="mb-4">
                <Image
                  src={local}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Local SEO
              </h3>
              <p className="group-hover:text-white">
                Local SEO tailors your presence for local searches, making sure
                your business stands out in its community.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg">
              <div className="mb-4">
                <Image
                  src={technical}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Technical SEO
              </h3>
              <p className="group-hover:text-white">
                Technical SEO ensures your site meets the technical requirements
                of modern search engines, improving organic rankings.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg">
              <div className="mb-4">
                <Image
                  src={link}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Link Building
              </h3>
              <p className="group-hover:text-white">
                Our link-building strategies connect your website with other
                reputable domains, boosting your site&apos;s trustworthiness.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg">
              <div className="mb-4">
                <Image
                  src={gmb}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                GMB
              </h3>
              <p className="group-hover:text-white">
                We optimize your Google My Business (GMB) listing to improve
                local search visibility and attract nearby customers.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg">
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
                Content Writing
              </h3>
              <p className="group-hover:text-white">
                Our content writing services produce engaging, informative, and
                SEO-friendly content that captivates and converts.
              </p>
            </div>
            <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg hover:rounded-lg">
              <div className="mb-4">
                <Image
                  src={design}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className="w-[100px]"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                Design Optimization
              </h3>
              <p className="group-hover:text-white">
                Design optimization ensures your website&apos;s design is not
                only aesthetically pleasing but also SEO-friendly.
              </p>
            </div>
          </div>
        </section>
        <div className="bg-gray-100 pt-14 mt-14">
          <section className="container grid items-center gap-6   grid-cols-12 pb-14 ">
            <div className=" flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
              <h2
                className={cn(
                  "text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wider lg:text-left text-center w-full",
                  myFont.className
                )}
              >
                Benefits of SEO
              </h2>
            </div>
            <div className=" items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6">
              <div className="scroll_container no-scrollbar">
                <div className="sticky-card bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-full flex gap-4 flex-grow">
                    <div className="h-16 w-16 bg-primary grid place-items-center text-4xl md:text-4xl rounded-full text-white">
                      1
                    </div>
                    <div className="flex-grow w-[80%] w-[80%]">
                      <h2 className="text-lg font-semibold">
                        Increased Visibility
                      </h2>
                      <p className="text-gray-600">
                        SEO helps your website appear higher in search engine
                        results, making it more visible to potential customers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sticky-card bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-full flex gap-4">
                    <div className="h-16 w-16 bg-primary grid place-items-center text-4xl md:text-4xl rounded-full text-white">
                      2
                    </div>
                    <div className="flex-grow w-[80%]">
                      <h2 className="text-lg font-semibold">
                        Higher Quality Traffic
                      </h2>
                      <p className="text-gray-600">
                        Effective SEO attracts visitors who are actively
                        searching for your products or services, increasing the
                        likelihood of conversion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sticky-card bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-full flex gap-4">
                    <div className="h-16 w-16 bg-primary grid place-items-center text-4xl md:text-4xl rounded-full text-white">
                      3
                    </div>
                    <div className="flex-grow w-[80%]">
                      <h2 className="text-lg font-semibold">
                        Cost-Effectiveness
                      </h2>
                      <p className="text-gray-600">
                        Compared to paid advertising, SEO provides a
                        cost-effective way to market your business and achieve
                        long-term results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sticky-card bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-full flex gap-4">
                    <div className="h-16 w-16 bg-primary grid place-items-center text-4xl md:text-4xl rounded-full text-white">
                      4
                    </div>
                    <div className="flex-grow w-[80%]">
                      <h2 className="text-lg font-semibold">
                        Better User Experience
                      </h2>
                      <p className="text-gray-600">
                        SEO involves optimizing your website&apos;s usability,
                        which can lead to a better experience for visitors and
                        potential customers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sticky-card bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-full flex gap-4">
                    <div className="h-16 w-16 bg-primary grid place-items-center text-4xl md:text-4xl rounded-full text-white">
                      5
                    </div>
                    <div className="flex-grow w-[80%]">
                      <h2 className="text-lg font-semibold">
                        Improved Credibility
                      </h2>
                      <p className="text-gray-600">
                        Websites that rank higher in search results are often
                        perceived as more trustworthy and credible by users.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sticky-card bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-full flex gap-4">
                    <div className="h-16 w-16 bg-primary grid place-items-center text-4xl md:text-4xl rounded-full text-white">
                      6
                    </div>
                    <div className="flex-grow w-[80%]">
                      <h2 className="text-lg font-semibold">
                        Increased Engagement
                      </h2>
                      <p className="text-gray-600">
                        SEO can lead to higher engagement rates on your website
                        as users find relevant content that meets their needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sticky-card bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-full flex gap-4">
                    <div className="h-16 w-16 bg-primary grid place-items-center text-4xl md:text-4xl rounded-full text-white">
                      7
                    </div>
                    <div className="flex-grow w-[80%]">
                      <h2 className="text-lg font-semibold">
                        Sustainable Growth
                      </h2>
                      <p className="text-gray-600">
                        SEO efforts can lead to sustainable growth over time,
                        building a solid foundation for your online presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className=" pt-14">
          <section className="container grid items-center gap-4 sm:gap-6 grid-cols-12 pb-8 sm:pb-14">
            <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 order-2 sm:order-1">
              <div className="relative mx-auto">
                <Image
                  src={why}
                  alt="Banner"
                  // layout="responsive"
                  width={400}
                  height={70}
                  className=" h-auto z-10 relative rounded-lg mx-auto"
                />
              </div>
            </div>
            <div className=" flex flex-col items-start gap-2 col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 order-1 sm:order-2">
              <h2
                className={cn(
                  "text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wider lg:text-left text-center w-full",
                  myFont.className
                )}
              >
                Why Choose Us?
              </h2>
              <p className="mt-2 max-w-[700px] text-xl text-zinc-950 lg:text-left text-center w-full">
                Choose Adroits Digital, the best SEO service provider company,
                for our proven track record, personalized approach, and
                commitment to your success. We&apos;re not just a website SEO
                service provider; we&apos;re your partner in achieving long-term
                growth.
              </p>
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
            <Button className="bg-white text-black">Contact Us</Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default index;
