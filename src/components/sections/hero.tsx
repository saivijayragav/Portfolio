"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../ui/container";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <Container>
        <div className="flex items-start justify-between gap-12">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6 font-mono text-sm text-text-tertiary"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-4 text-5xl font-medium leading-tight tracking-tight md:text-7xl lg:text-8xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6 text-xl font-medium leading-tight tracking-tight text-text-secondary md:text-2xl"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-12 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-medium tracking-tight md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-text-tertiary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-availability opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-availability" />
                </span>
                <span className="text-sm text-text-secondary">
                  Open for opportunities
                </span>
              </div>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                GitHub
              </a>
              <a
                href="https://leetcode.com/u/vijayragav003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                LeetCode
              </a>
            </motion.div>

            <motion.a
              href="/Sai_Vijay_Ragav_RESUME.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-text-primary bg-text-primary px-5 py-2.5 text-sm font-medium text-bg transition-colors duration-200 hover:border-text-secondary hover:bg-text-secondary"
            >
              Download Resume &darr;
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden flex-shrink-0 md:block"
          >
            <div className="relative h-48 w-48 overflow-hidden rounded-full border border-border lg:h-56 lg:w-56">
              <Image
                src="/images/MyPhoto.jpeg"
                alt={profile.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0px, 160px"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
