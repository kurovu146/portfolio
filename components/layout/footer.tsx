import { Heart } from "lucide-react";
import { SocialLinks } from "@/components/shared/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4">
          <SocialLinks size="sm" />
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="h-3 w-3 text-primary fill-primary" />{" "}
            by Kuro
          </p>
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Vu Duc Tuan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
