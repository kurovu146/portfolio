"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey so far"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 }}
              className={`relative mb-12 last:mb-0 pl-12 md:pl-0 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-0"
                  : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-auto ${
                  index % 2 === 0
                    ? "md:right-[-6.5px] md:left-auto"
                    : "md:left-[-6.5px]"
                }`}
              />

              {/* Card */}
              <div className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div
                  className={`flex items-center gap-2 text-primary mb-1 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <Briefcase className="h-4 w-4" />
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                </div>

                <p className="font-medium text-foreground">{exp.company}</p>

                <div
                  className={`mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>

                <ul
                  className={`mt-4 space-y-2 text-sm text-muted-foreground ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-4 flex flex-wrap gap-1.5 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
