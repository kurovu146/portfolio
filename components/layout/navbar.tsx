"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { MobileNav } from "./mobile-nav";
import { Code2 } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const progress = useScrollProgress();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg shadow-background/20"
          : "bg-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary/50">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors"
          >
            <Code2 className="h-5 w-5 text-primary" />
            <span>
              Kuro<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-colors rounded-md",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-md bg-primary/10"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile nav */}
          <div className="md:hidden">
            <MobileNav activeSection={activeSection} />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
