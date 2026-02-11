"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/shared/typewriter";
import { SocialLinks } from "@/components/shared/social-links";
import { personalInfo } from "@/lib/data";
import { fadeInUp, fadeIn } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Gradient orbs background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-primary/15 blur-[120px] animate-pulse-glow [animation-delay:4s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-4 text-sm font-medium tracking-widest text-primary uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            {personalInfo.nickname}
          </span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl text-muted-foreground"
        >
          I&apos;m a <Typewriter words={personalInfo.roles} />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-muted-foreground"
        >
          Building modern web applications with passion and precision.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" asChild>
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <FileText className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <SocialLinks size="lg" className="justify-center" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-xs">Scroll down</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
