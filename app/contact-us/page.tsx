import Link from "next/link";
import {Metadata} from "next";

import {siteConfig} from "@/config/site";
import {buttonVariants, Button} from "@/components/ui/button";
import localFont from "next/font/local";
import ContactForm from "../../components/ContactForm";
import {cn} from "@/lib/utils";
import Banner from "@/asset/Banner_img.png";
import Team from "@/asset/team_compress.webp";
import Image from "next/image";
import CTAimg from "@/asset/getquate.webp";
import Teamimg from "@/asset/team-img.jpg";
import {MonitorSmartphone, Bitcoin} from "lucide-react";
import {IoCall} from "react-icons/io5";
import {IoMdMail} from "react-icons/io";
import {defaultMetadata} from "@/config/metadata";

// import BlogCard from "./core/BlogCard";
const myFont = localFont({src: "../../asset/font/Gasket.ttf"});
export const metadata = {
  ...defaultMetadata,
  title: "Contact US",

  robots: {
    index: true,
    follow: true,
  },

  applicationName: "Adroits Digital",
};

function index() {
  return (
    <div>
      <div
        className="w-full flex flex-col items-center justify-start bg-gray-100 pt-12"
        style={{height: "500px"}}
      >
        <h1
          className={cn(
            "text-4xl sm:text-3xl md:text-7xl lg:text-5xl font-extrabold leading-tight tracking-wider lg:text-left text-center mb-6",
            myFont.className
          )}
        >
          Let’s Build Something Great Together
        </h1>
        <p className="text-lg text-gray-600 text-center  px-2">
          Got a project idea, challenge, or even just a rough sketch? We&apos;d
          love to hear it. Whether you&apos;re starting fresh or scaling up,{" "}
          <br />
          let&apos;s turn your vision into a success story.
        </p>
      </div>
      <section className="container grid items-center justify-center gap-4 sm:gap-6 grid-cols-12 py-6 sm:py-0 mt-[-200px] sm:mt-[-280px] mb-28">
        {/* Left Column: Text Content */}
        <div className="flex flex-col  gap-2 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 justify-center items-center ">
          <ContactForm />
        </div>
        {/* <div className="flex flex-col items-start gap-2 col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4">
          <div>
            <h5>Contact Information</h5>
            <p>Got a project idea, challenge, or even just a rough sketch?</p>
            <div className="contact-info">
              <IoCall />
              <span>+91 79049 41113</span>
            </div>
            <div className="contact-info">
              <IoMdMail />
              <span>digitaladroits@gmail.com</span>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default index;
