import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import headerNavLinks from "../../data/headerNavLinks";
import siteMetadata from "../../data/siteMetadata";
import Logo from "./logo";
import NowPlaying from "./NowPlaying";
import ThemeSwitch from "./ThemeSwitch";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <motion.div className="max-w-3xl min-h-screen px-5 mx-auto">
      <Header />
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={router.asPath}
          initial={{
            opacity: 0,
            y: 50,
          }}
          layout
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <motion.main>{children}</motion.main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function Header() {
  const router = useRouter();
  const [hovered, sethovered] = useState<string | null>(null);
  return (
    <header className="flex items-center justify-between py-10">
      <MobileNav />
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <a className="relative flex items-center justify-between gap-3 p-1 text-2xl font-semibold duration-200 ease-in-out rounded-md md:p-3 ">
            <span className="relative z-10 wave">
              <Logo />
            </span>
            <span className="relative z-10 hidden md:block">
              {siteMetadata.headerTitle}
            </span>
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-center text-base leading-5 ">
        <div className="hidden md:block">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <motion.a
                onMouseEnter={() => sethovered(link.title)}
                onMouseLeave={() => sethovered(null)}
                className={classNames(
                  "p-1 duration-200 relative ease-in-out rounded-md md:p-4 cursor-pointer",
                  {
                    "text-subtle font-medium": link.href != router.asPath,
                    "text-text  font-bold ": link.href == router.asPath,
                  }
                )}
              >
                <AnimatePresence>
                  {hovered == link.title && (
                    <motion.span
                      layoutId="hover"
                      className="absolute inset-0 z-0 w-full h-full rounded-md bg-overlay"
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{link.title}</span>
              </motion.a>
            </Link>
          ))}
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
}
const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="w-8 h-8 ml-1 mr-1 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-text"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed   w-full h-full top-24 right-0 bg-base z-10 transform ease-in-out duration-300 ${
          navShow
            ? "opacity-95 backdrop-blur-lg visible"
            : "opacity-0 invisible"
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed h-full mt-8">
          {headerNavLinks.map((link, i) => (
            <div
              key={link.title}
              className={classNames(
                "px-12 py-4 transform ease-in-out duration-300",
                navShow ? "translate-x-0" : "-translate-x-full"
              )}
              style={{
                transitionDelay: `${(i + 1) * 100}ms`,
              }}
            >
              <Link href={link.href}>
                <a
                  onClick={onToggleNav}
                  className="text-2xl font-bold tracking-widest text-text"
                >
                  {link.title}
                </a>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

function Footer() {
  return (
    <footer className="mt-10 ">
      <NowPlaying />
      <div className="flex flex-col-reverse gap-3 md:flex-row  justify-between py-5 text-sm border-t-[1px] border-t-muted">
        <div>
          © {new Date().getFullYear()} {siteMetadata.author} •{" "}
          {siteMetadata.description}
        </div>
        <div>
          <a target="_blank" href="/feed.xml" rel="noreferrer">
            RSS
          </a>{" "}
          •{" "}
          <a target="_blank" href={siteMetadata.github} rel="noreferrer">
            Github
          </a>{" "}
          •{" "}
          <a target="_blank" href={siteMetadata.instagram} rel="noreferrer">
            Instagram
          </a>{" "}
          •{" "}
          <a target="_blank" href={siteMetadata.twitter} rel="noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
