"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { Tag } from "../ui/tag";
import { TextReveal } from "../ui/text-reveal";
import { featuredProjects } from "@/data/projects";

const patternClasses = ["pattern-dots", "pattern-lines", "pattern-grid"];

export function FeaturedProjects() {
  return (
    <Section id="work">
      <Container>
        <TextReveal>
          <p className="section-label">Featured Projects</p>
        </TextReveal>

        <div className="space-y-24 md:space-y-32">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative grid gap-8 md:grid-cols-2 md:gap-16"
            >
              <div
                className={`${i % 2 === 1 ? "md:order-2" : ""} relative overflow-hidden rounded-lg bg-muted`}
              >
                <a href={project.slug ? `/projects/${project.slug}` : "#"}>
                  <div
                    className={`aspect-[4/3] w-full ${patternClasses[i % patternClasses.length]} transition-transform duration-500 group-hover:scale-[1.02]`}
                  >
                    <div className="flex h-full items-center justify-center">
                      <span className="select-none font-mono text-5xl font-medium tracking-tight text-text-tertiary/30 md:text-7xl">
                        {project.title[0]}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-accent/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm font-medium text-white dark:text-black">
                      View Project &rarr;
                    </span>
                  </div>
                </a>
              </div>

              <div
                className={`flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-xs text-text-tertiary">
                    {project.year}
                  </span>
                  <span className="h-px w-6 bg-border" />
                  <span className="font-mono text-xs text-text-tertiary">
                    {project.type}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-medium tracking-tight md:text-3xl">
                  <a
                    href={project.slug ? `/projects/${project.slug}` : "#"}
                    className="transition-colors duration-200 hover:text-text-secondary"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="mb-6 leading-relaxed text-text-secondary">
                  {project.longDescription || project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <div className="mt-4 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-text-tertiary transition-colors duration-200 hover:text-text-primary"
                    >
                      GitHub &rarr;
                    </a>
                  )}
                  {project.slug && (
                    <a
                      href={`/projects/${project.slug}`}
                      className="text-xs font-medium text-text-tertiary transition-colors duration-200 hover:text-text-primary"
                    >
                      Details &rarr;
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
