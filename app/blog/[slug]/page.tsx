import {fetchBlogs} from "../../lib/fetchBlogs";
import {Blog} from "../../types/blog";
import Image from "next/image";
import {notFound} from "next/navigation";
import Link from "next/link";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";
import ContactForm from "../../../components/BlogForm";
const myFont = localFont({src: "../../../asset/font/Gasket.ttf"});
import BlogCard from "../../core/BlogCard"; // Adjust path if needed

interface BlogDetailPageProps {
  params: {slug: string};
}

export default async function BlogDetailPage({params}: BlogDetailPageProps) {
  const blogs = await fetchBlogs();
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  // Filter out the current blog and limit to 4 related blogs
  const relatedBlogs = blogs
    .filter((b) => b.slug !== params.slug) // Exclude the current blog
    .slice(0, 4); // Limit to 4 items
  // Format date as "12 Jan 2025"
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  console.log("Blog details:", blog);

  return (
    <div className="container mx-auto py-10">
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        width={600}
        height={500}
        className="w-full  h-[400px] rounded-lg mb-6"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 p-0">
        <div className="lg:col-span-9 md:col-span-1 ">
          <nav className="mb-3 text-sm text-gray-600">
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
              "text-6xl font-bold mb-2 leading-[65px]",
              myFont.className
            )}
          >
            {blog.title}
          </h1>
          <p className="text-gray-600 mb-2">{blog.description}</p>

          <div className="flex justify-items-start gap-2 items-center mb-2">
            <p className="text-sm text-black"> {blog.category}</p>
            <span className="mx-2">•</span>
            <p className="text-sm text-black"> {formattedDate}</p>
          </div>
          <br className="border" />
          {blog.body && (
            <div
              className="prose prose-lg prose-gray text-gray-800 mb-6 leading-relaxed max-w-none"
              dangerouslySetInnerHTML={{__html: blog.body}}
            />
          )}
        </div>
        <div className="lg:col-span-3 md:col-span-1  p-4 text-white">
          <ContactForm />
        </div>
      </div>
      <section className="container mt-16 p-0">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          <div className="p-6">
            <div className="flex items-center justify-center flex-col">
              <h2
                className={cn(
                  "text-5xl md:text-5xl font-extrabold leading-tight tracking-wider ",
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
