"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { skills, skillCategories, type SkillCategory } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">(
    "All"
  );

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {["All", ...skillCategories].map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category as SkillCategory | "All")
              }
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={staggerItem}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group cursor-default transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="flex flex-col items-center gap-3 p-6">
                      <Icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
                      <span className="text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
