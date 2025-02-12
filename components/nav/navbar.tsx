"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavMenu } from "./navmenu";

type navItems = {
  name: string;
  href: string;
}[];

const navItems: navItems = [
  { name: "~", href: "/" },
  { name: "work", href: "/work" },
  { name: "notes", href: "/notes" },
];

const NavBar = () => {
  const path = usePathname();

  return (
    <div className="flex items-center shrink-0">
      <nav className="flex gap-2 rounded-3xl px-1 py-2">
        {navItems.map(({ name, href }) => (
          <div key={name.charCodeAt(0)}>
            <Link
              className={
                "relative transition-all transform-gpu rounded-full px-3 py-2 " +
                (path == href ? "" : "hover:opacity-50")
              }
              href={href}
            >
              {path == href && (
                <motion.div
                  layoutId="active"
                  className="backdrop-blur-sm bg-[#f5f5f5] dark:bg-black/30 absolute inset-0"
                  style={{
                    borderRadius: 9999,
                  }}
                  transition={{ type: "spring", duration: "0.6" }}
                />
              )}
              <span className="relative z-10">{name}</span>
            </Link>
          </div>
        ))}
        <NavMenu />
      </nav>
    </div>
  );
};

export default NavBar;
