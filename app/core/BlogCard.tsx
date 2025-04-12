import {Blog} from "../types/blog";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";

const myFont = localFont({src: "../../asset/font/Gasket.ttf"});

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({blog}) => {
  // console.log("BlogCard props:", blog); // Debug
  const bodyPreview =
    blog.body?.length > 100 ? `${blog.body.slice(0, 100)}...` : blog.body;

  // Format date as "12 Jan 2025"
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${blog.slug}`} className="block">
      <div className="  max-w-xs  transition-shadow">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          width={600}
          height={400}
          className="w-full h-60 object-cover  rounded-lg"
        />
        <div className="p-2">
          <h2
            className={cn(
              "text-2xl md:text-2xl font-extrabold leading-tight tracking-wider ",
              myFont.className
            )}
          >
            {blog.title}
          </h2>
          <p className="text-gray-600 mb-2 mt-2 leading-[20px]">
            {blog.description}
          </p>
          {/* {bodyPreview && <p className="text-gray-700 mb-2">{bodyPreview}</p>} */}
          <div className="flex justify-items-start gap-2 items-center">
            <p className="text-sm text-black"> {blog.category}</p>
            <span className="mx-2">•</span>
            <p className="text-sm text-black"> {formattedDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
