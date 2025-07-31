import {fetchBlogs} from "../../lib/fetchBlogs";
import Image from "next/image";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";
import ContactForm from "../../../components/BlogForm";
import BlogCard from "../../core/BlogCard";
import {Blog} from "../../types/blog";

const myFont = localFont({src: "../../../asset/font/Gasket.ttf"});

// Dynamic metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const {slug} = await params; // Await params to get the slug
  const blogs = await fetchBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Nexara Innovations",
      description: "The requested blog post could not be found.",
    }; // Minimal fallback metadata if blog is not found
  }

  return {
    title: `${blog.title} | Nexara Innovations`,
    description: blog.description,
    keywords: [
      "Nexara Innovations",
      "Blockchain Development",
      "AI Solutions",
      "Software Development",
      "Secure Technologies",
      "Next.js App",
      blog.category,
      ...(blog.tags || []), // Add blog-specific tags if available
    ],
    applicationName: "Nexara Platform",
    generator: "Next.js 14",
    authors: [
      {name: "John Doe", url: "https://nexara.io/team/john"},
      {name: "Jane Smith", url: "https://nexara.io/team/jane"},
    ],
    creator: "Nexara Innovations",
    publisher: "Nexara Media",
    metadataBase: new URL("https://nexara.io"),
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://nexara.io/blog/${blog.slug}`,
      siteName: "Nexara Innovations",
      images: [
        {
          url: blog.imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      site: "@nexarainnovations",
      creator: "@johndoe",
      title: blog.title,
      description: blog.description,
      images: [blog.imageUrl],
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
    alternates: {
      canonical: `https://nexara.io/blog/${blog.slug}`,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params; // Await params to get the slug
  const blogs = await fetchBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 4);

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="container mx-auto py-10 pt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 p-0">
        <div className="lg:col-span-9 md:col-span-1">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={600}
            height={500}
            className="w-full h-[400px] rounded-lg mb-6"
          />
          <nav className="mb-3 text-sm text-gray-600 blog_main_body">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-1">/</span>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <span className="mx-1">/</span>
              </li>
              <li className="text-gray-900 truncate max-w-xs">{blog.slug}</li>
            </ol>
          </nav>
          <h1
            className={cn(
              "text-6xl font-bold mb-2 leading-[65px] headinght_leter",
              myFont.className
            )}
          >
            {blog.title}
          </h1>
          <p className="text-gray-600 mb-2 description_blob">
            {blog.description}
          </p>
          <div className="flex justify-items-start gap-2 items-center mb-2">
            <p className="text-sm text-black">{blog.category}</p>
            <span className="mx-2">•</span>
            <p className="text-sm text-black">{formattedDate}</p>
          </div>
          <br className="border" />
          {blog.body && (
            <div
              className="prose prose-lg prose-gray text-gray-800 mb-6 leading-relaxed max-w-none web_blog"
              dangerouslySetInnerHTML={{__html: blog.body}}
            />
          )}
        </div>
        <div className="lg:col-span-3 md:col-span-1 text-white">
          <ContactForm />
        </div>
      </div>
      <section className="container mt-16 p-0">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          <div className="p-6">
            <div className="flex items-center justify-center flex-col">
              <h2
                className={cn(
                  "text-5xl md:text-5xl font-extrabold leading-tight tracking-wider",
                  myFont.className
                )}
              >
                Related Blogs
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {relatedBlogs.length === 0 ? (
            <p className="text-center col-span-full">
              No related blogs available
            </p>
          ) : (
            relatedBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          )}
        </div>
      </section>
    </div>
  );
}
