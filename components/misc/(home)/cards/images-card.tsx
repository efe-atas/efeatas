import { getBlogPosts } from "@/lib/blog";
import { cn, extractDate } from "@/lib/utils";
import { PenTool } from "lucide-react";
import Link from "next/link";

export const ImagesCard = () => {
  const allBlogs = getBlogPosts();
  const sortedBlogs = [...allBlogs].sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <Link
      className="w-full h-36 bg-black rounded-lg shadow-sm border border-gray-800 flex flex-col justify-center p-6 hover:shadow-md transition-shadow duration-300"
      href={`/notes/${sortedBlogs[0]?.slug}`}
    >
      <div className="flex items-center mb-3">
        <PenTool className="w-4 h-4 text-white mr-2" />
        <span className="text-xs text-gray-400 uppercase tracking-wider">Latest Post</span>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-light text-white leading-tight mb-2 line-clamp-2">
          {sortedBlogs[0]?.metadata.title}
        </h3>
      </div>

      <div className="text-xs text-gray-500">
        {extractDate(sortedBlogs[0]?.metadata.publishedAt)}
      </div>
    </Link>
  );
};
