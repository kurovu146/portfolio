"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SocialLinks({ size = "md", className }: SocialLinksProps) {
  const iconSize = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }[size];

  const buttonSize = {
    sm: "h-9 w-9",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }[size];

  return (
    <TooltipProvider>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={cn("flex items-center gap-3", className)}
      >
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <motion.a
                  variants={staggerItem}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-110",
                    buttonSize
                  )}
                  aria-label={link.name}
                >
                  <Icon className={iconSize} />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>{link.name}</TooltipContent>
            </Tooltip>
          );
        })}
      </motion.div>
    </TooltipProvider>
  );
}
