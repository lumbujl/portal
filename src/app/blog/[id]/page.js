import { fetchBlog } from "@/app/server/fetchBlog";
import Script from "next/script";

export async function generateMetadata({ params }) {
    const id = (await params).id;
    const blog = await fetchBlog(id);

    return {
        title: `${blog.title} | Mountain Coders`,
        description: blog.tagline
    }
}

export default async function Blog({ params }) {
    const id = (await params).id;
    const blog = await fetchBlog(id);

    const { content } = blog;

    return (
        <>
            <link rel="stylesheet" href="/prism.css" />
            <div className="container mx-auto px-4 py-8 max-w-3xl">
                <div className="mb-8 aspect-w-16 aspect-h-9 overflow-hidden rounded-md">
                    <img
                        src="/thumbnail.jpg"
                        alt={blog.title}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <div className="prose" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
            <Script src="/prism.js" async defer />
        </>
    )
}