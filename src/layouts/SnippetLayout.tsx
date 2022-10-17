import { Snippet } from "contentlayer/generated";
import { motion, useScroll } from "framer-motion";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ScrollTopAndComment from "src/components/ScrollTopAndComment";

export default function SnippetLayout({
  children,
  snippet,
}: {
  children: React.ReactNode;
  snippet: Snippet;
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
            animate={{ scaleX: percent }}
            style={{ originX: 0, originY: 0 }}
          />
        </motion.div>
      </div>
      <ScrollTopAndComment />
      <article>
        <p className="text-subtle">{moment(snippet.date).format("LL")}</p>
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-rose md:text-5xl ">
            {snippet.title}
          </h1>
          <div className="flex flex-wrap gap-4 mt-2">
            {snippet.logos.map((logo) => (
              <Image
                key={logo}
                src={logo}
                width={32}
                height={32}
                alt=""
                className="object-contain"
              />
            ))}
          </div>
        </div>
        <div className=" border-b-[1px] pb-4 border-muted ">
          <p className="text-lg text-text">{snippet.description}</p>
        </div>
        <div className="mt-8 prose max-w-none" ref={ref}>
          {children}
        </div>
      </article>
    </div>
  );
}
