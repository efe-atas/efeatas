import { getBlogPosts } from "@/lib/blog";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://efeatas.dev/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = [
    "",
    "/about",
    "/writing",
    "/uses",
    "/work",
    "/books",
    "/faqs",
  ].map((route) => ({
    url: `https://efeatas.dev${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
