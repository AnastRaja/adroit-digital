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
import {defaultMetadata} from "@/config/metadata";

export const metadata = {
  ...defaultMetadata,
  title: "Blog | Adroits Digital",
  description: "Latest news and insights from Adroits Digital",
  // Add or override fields here as needed
};
export const dynamic = "force-dynamic";
export default async function IndexPage() {
  const blogs: Blog[] = await fetchBlogs();

  // Filter out the current blog and limit to 4 related blogs
  const relatedBlogs = blogs;

  return (
    <div>
      <div
        className="w-full flex flex-col items-center justify-center bg-gray-100 "
        style={{height: "200px"}}
      >
        <h1
          className={cn(
            "text-4xl sm:text-3xl md:text-7xl lg:text-5xl font-extrabold leading-tight tracking-wider lg:text-left text-center mb-6",
            myFont.className
          )}
        >
          Let’s Our Trending Blogs
        </h1>
      </div>
      <section className="container  mt-0 pt-8">
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
  );
}
