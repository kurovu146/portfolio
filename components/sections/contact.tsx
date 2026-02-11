"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";
import { personalInfo } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? Feel free to reach out!"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          <div className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-8">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-7 w-7" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Let&apos;s work together
            </h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <Button size="lg" asChild>
              <a href={`mailto:${personalInfo.email}`}>
                Send me an email
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Or find me on social media
            </p>
            <SocialLinks size="lg" className="justify-center" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
