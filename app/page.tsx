import Link from "next/link";

import {siteConfig} from "@/config/site";
import {buttonVariants} from "@/components/ui/button";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";
import Banner from "@/asset/Banner_img.png";
import Team from "@/asset/our-team.png";
import Image from "next/image";

const myFont = localFont({src: "../asset/font/Gasket.ttf"});

export default function IndexPage() {
  return (
    <div>
      <section className="container grid items-center gap-6  h-screen grid-cols-12">
        <div className="flex flex-col items-start gap-2 col-span-6">
          <h1
            className={cn(
              "text-8xl md:text-7xl font-extrabold leading-tight tracking-wider",
              myFont.className
            )}
          >
            Digital Transformation <br className="hidden sm:inline" /> Company
          </h1>
          <p className="mt-6 max-w-[700px] text-xl text-zinc-950">
            From Web3 innovation to captivating designs, we create digital
            experiences that matter. Adroits Digital specializes in transforming
            ideas into reality with services in Web3, blockchain, AI, marketing,
            and development that power your business&apos;s journey to success
            and growth.
          </p>
          <div className="flex gap-4 mt-8">
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
        <div className="flex flex-col items-start gap-2 col-span-6">
          <div className="w-full">
            <Image
              src={Banner}
              alt="Banner"
              layout="responsive"
              width={100}
              height={70}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="container grid items-start gap-6   grid-cols-12">
        <div className="flex flex-col items-start gap-2 col-span-6">
          <div className="whycontent">
            <h2
              className={cn(
                "text-8xl md:text-7xl font-extrabold leading-tight tracking-wider",
                myFont.className
              )}
            >
              Who We Are?
            </h2>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-2 col-span-6">
          <p className="mt-6 max-w-[700px] text-xl text-zinc-950">
            Welcome to Adroits Digital, your trusted partner in digital
            innovation. We are a team of passionate professionals dedicated to
            delivering cutting-edge solutions that empower businesses to thrive
            in the ever-evolving digital landscape. Whether you&apos;re a
            startup looking to establish your presence or an established brand
            aiming to expand, we are here to help you achieve your goals with
            tailored strategies and unmatched expertise.
          </p>
          <div className="mt-3">
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Call us now
            </Link>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-2 col-span-12">
          <div className="w-full mt-8">
            <Image
              src={Team}
              alt="Banner"
              layout="responsive"
              width={100}
              height={70}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="container mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6">
            <div>
              <h2
                className={cn(
                  "text-8xl md:text-7xl font-extrabold leading-tight tracking-wider ",
                  myFont.className
                )}
              >
                Our Services
              </h2>
              <p className="mt-2 max-w-[700px] text-xl text-zinc-950 ">
                At Adroits Digital, we offer a comprehensive range of services
                to <br className="hidden sm:inline" />
                meet your unique business needs
              </p>
            </div>
          </div>
          <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer">
            <div className="mb-4">
              <svg
                className="w-8 h-8 group-hover:text-white text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L9.9 6.3H2.7l5.6 4-2.1 6.3L12 12.6l5.8 4.1-2.1-6.3 5.6-4h-7.2z" />
              </svg>
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
          <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer">
            <div className="mb-4">
              <svg
                className="w-8 h-8 group-hover:text-white text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L9.9 6.3H2.7l5.6 4-2.1 6.3L12 12.6l5.8 4.1-2.1-6.3 5.6-4h-7.2z" />
              </svg>
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

          <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer">
            <div className="mb-4">
              <svg
                className="w-8 h-8 group-hover:text-white text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L9.9 6.3H2.7l5.6 4-2.1 6.3L12 12.6l5.8 4.1-2.1-6.3 5.6-4h-7.2z" />
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

          <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer">
            <div className="mb-4">
              <svg
                className="w-8 h-8 group-hover:text-white text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L9.9 6.3H2.7l5.6 4-2.1 6.3L12 12.6l5.8 4.1-2.1-6.3 5.6-4h-7.2z" />
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

          <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer">
            <div className="mb-4">
              <svg
                className="w-8 h-8 group-hover:text-white text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L9.9 6.3H2.7l5.6 4-2.1 6.3L12 12.6l5.8 4.1-2.1-6.3 5.6-4h-7.2z" />
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
          <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer">
            <div className="mb-4">
              <svg
                className="w-8 h-8 group-hover:text-white text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L9.9 6.3H2.7l5.6 4-2.1 6.3L12 12.6l5.8 4.1-2.1-6.3 5.6-4h-7.2z" />
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
          <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer">
            <div className="mb-4">
              <svg
                className="w-8 h-8 group-hover:text-white text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L9.9 6.3H2.7l5.6 4-2.1 6.3L12 12.6l5.8 4.1-2.1-6.3 5.6-4h-7.2z" />
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
          <div className="group bg-slate-100 hover:bg-primary text-gray-800 p-6 cursor-pointer">
            <div className="mb-4">
              <svg
                className="w-8 h-8 group-hover:text-white text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L9.9 6.3H2.7l5.6 4-2.1 6.3L12 12.6l5.8 4.1-2.1-6.3 5.6-4h-7.2z" />
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
    </div>
  );
}
