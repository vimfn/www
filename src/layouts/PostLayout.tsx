import { Post } from "contentlayer/generated";
import { motion, useScroll } from "framer-motion";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import Comment from "src/components/Comment";
import ScrollTopAndComment from "src/components/ScrollTopAndComment";
import Tag from "src/components/Tag";
import Subscribe from "src/components/Subscribe";

export default function PostLayout({
  children,
  post,
}: {
  children: React.ReactNode;
  post: Post;
}) {
  const [percent, setpercent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.onChange((value) => {
      if (ref.current != null) {
        const height = ref.current.clientHeight;
        setpercent(Math.min(value / height, 1));
      }
    });
    return () => {
      unsub();
    };
  }, [scrollY]);

  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-full">
        <motion.div
          animate={{ opacity: percent > 0 ? 1 : 0 }}
          className="h-1 bg-hightlight-high"
        >
          <motion.div
            className="h-1 bg-iris"
            style={{
              scaleX: percent,
              originX: 0,
              originY: 0,
            }}
          />
        </motion.div>
      </div>
      <ScrollTopAndComment />
      <article>
        <h1 className="mb-4 text-3xl font-bold text-rose md:text-5xl ">
          {post.title}
        </h1>
        <div className=" border-b-[1px] pb-4 border-muted ">
          <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
            <div className="flex items-center">
              <p className="text-subtle">{moment(post.date).format("LL")}</p>
            </div>
            <p className="mt-2 text-sm text-subtle min-w-32 md:mt-0">
              {post.readingTime.text}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {post.tags?.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>
        <div className="mt-8 prose max-w-none" ref={ref}>
          {children}
        </div>
      </article>
      <div className="mt-10">
        {/* <Comment /> */}
        < Subscribe />
      </div>
    </div>
  );
}
