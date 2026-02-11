"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl font-bold sm:text-4xl">
        {title}
        <span className="text-primary">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-primary/50" />
    </motion.div>
  );
}
