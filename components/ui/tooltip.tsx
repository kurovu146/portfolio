"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TooltipProviderProps {
  children: React.ReactNode;
}

function TooltipProvider({ children }: TooltipProviderProps) {
  return <>{children}</>;
}

interface TooltipProps {
  children: React.ReactNode;
}

function Tooltip({ children }: TooltipProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TooltipContent) {
          return open ? child : null;
        }
        return child;
      })}
    </div>
  );
}

function TooltipTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  return <>{children}</>;
}

function TooltipContent({
  className,
  children,
  side = "top",
}: {
  className?: string;
  children: React.ReactNode;
  side?: "top" | "bottom";
}) {
  return (
    <div
      className={cn(
        "absolute z-50 rounded-md border bg-background px-3 py-1.5 text-sm text-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        side === "top" ? "bottom-full left-1/2 -translate-x-1/2 mb-2" : "top-full left-1/2 -translate-x-1/2 mt-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
