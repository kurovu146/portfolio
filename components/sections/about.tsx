"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/lib/data";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { MapPin, Briefcase, Coffee, Code2 } from "lucide-react";

const interests = [
  { icon: Code2, label: "Open Source" },
  { icon: Coffee, label: "Coffee" },
  { icon: Briefcase, label: "Startups" },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me and what I do"
        />

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Avatar */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-2xl border-2 border-primary/20 bg-card/50">
                <Image
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold">
                {personalInfo.name}{" "}
                <span className="text-primary">({personalInfo.nickname})</span>
              </h3>
              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => {
                  const Icon = interest.icon;
                  return (
                    <Badge
                      key={interest.label}
                      variant="secondary"
                      className="gap-1.5 px-3 py-1"
                    >
                      <Icon className="h-3 w-3" />
                      {interest.label}
                    </Badge>
                  );
                })}
              </div>
            </div>

            <motion.div variants={fadeInUp}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center text-sm text-primary hover:underline underline-offset-4"
              >
                {personalInfo.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
