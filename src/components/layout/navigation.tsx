"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Hackathons", href: "/#hackathons" },
  { label: "Contact", href: "/#contact" },
];

export function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-bg"
    >
      <div className="mx-auto flex h-16 max-w-[72rem] items-center justify-between px-6 md:px-8 lg:px-0">
        <a
          href="/"
          className="text-sm font-medium tracking-tight text-text-primary"
        >
          Portfolio
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
