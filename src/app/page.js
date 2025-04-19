import { fetchBlogs } from "./server/fetchBlogs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const blogs = await fetchBlogs();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.$id} className="p-4 border rounded-lg shadow-md flex flex-col">
            <div className="mb-4 aspect-w-16 aspect-h-9 overflow-hidden rounded-md">
              <img
                src="/thumbnail.jpg"
                alt={blog.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-grow">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.tagline}</p>
            </div>

            <Link href={`/blog/${blog.$id}`} className="w-fit">
              <Button className="cursor-pointer">
                Read More
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
