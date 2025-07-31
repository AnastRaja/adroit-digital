import { Blog } from "../types/blog"

/**
 * Fetches a list of blogs from the backend API.
 * @returns A Promise that resolves to an array of Blog objects or an empty array on failure.
 */
export async function fetchBlogs(): Promise<Blog[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    if (!apiUrl) {
      throw new Error(
        "NEXT_PUBLIC_API_URL is not defined in environment variables"
      )
    }

    const url = `${apiUrl}/api/blogs/`
    console.log("Fetching from URL:", url)

    const res = await fetch(url, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`)
    }

    const blogs: Blog[] = await res.json()
    // console.log("Fetched blogs:", blogs)

    return blogs
  } catch (error: any) {
    console.error("Error fetching blogs:", error?.message || error)
    return []
  }
}
