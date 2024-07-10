"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function onThemeChange() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          aria-label="Switch theme"
          type="button"
          onClick={onThemeChange}
          className="flex flex-col items-center justify-center w-10 h-10 ml-1 overflow-hidden font-medium duration-200 ease-in-out rounded-md sm:p-4 text-text hover:bg-overlay"
        >
          <AnimatePresence mode="wait">
            {resolvedTheme === "light" && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                key="theme1"
              >
                <Moon size={15}/>
              </motion.span>
            )}
            {resolvedTheme === "dark" && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                key="theme2"
              >
                <Sun size={15}/>
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </>
  );
}
