import img1 from "@/public/images/(home)/0001.jpg";
import img2 from "@/public/images/(home)/0002.jpg";
import img3 from "@/public/images/(home)/0003.jpg";
import img4 from "@/public/images/(home)/0004.jpg";
import img5 from "@/public/images/(home)/0005.jpg";
import img6 from "@/public/images/(home)/0006.jpg";
import img7 from "@/public/images/(home)/0007.jpg";
import { getBlogPosts } from "@/lib/blog";
import { cn, extractDate } from "@/lib/utils";
import Link from "next/link";
import { PenTool } from "lucide-react";

export const ImagesCard = () => {
  const allBlogs = getBlogPosts();
  allBlogs.toSorted((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
  return (
    <Link
      className="w-full h-36 hover:scale-95 transform-gpu duration-500 transition-all rounded-xl bg-gradient-to-r p-1 from-[#d0bfea] to-[#c7bcfb]  dark:from-[#342848] dark:to-[#6859aa]"
      href={`/notes/${allBlogs[0].slug}`}
    >
      <div className="relative  overflow-hidden flex flex-col justify-between h-full rounded-lg bg-[#f7f2f2] dark:bg-[#191919]">
        <div className="flex flex-col justify-between">
          <div className="px-4 py-2">
            <p className="text-xl font-semibold mb-3">Latest Post</p>
            <p className="w-full font-bold text-xl py-3 border-y dark:border-white/20 border-[#dbdbde]">
              {allBlogs[0].metadata.title}
            </p>
          </div>
        </div>
        <div>
          <div className="px-4 text-sm mb-2 text-[#a1a1aa]">
            <div className="12px">
              {extractDate(allBlogs[0].metadata.publishedAt)}
            </div>
            {/* <div >
              <span>--- views</span>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};
