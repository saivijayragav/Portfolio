"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { TextReveal } from "../ui/text-reveal";
import { Tag } from "../ui/tag";
import {
  advancedSupportingProjects,
  supportingProjects,
  type ArchiveProject,
  type ProjectCategory,
} from "@/data/projects";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "AI & Machine Learning",
  "Backend & Infrastructure",
  "Developer Tools",
  "Full-Stack",
  "Automation",
];

function ProjectCard({ project, large = false }: { project: ArchiveProject; large?: boolean }) {
  return (
    <div
      className={`group flex w-full flex-col rounded-lg border border-border p-5 transition-colors duration-200 hover:border-text-tertiary ${large ? "min-h-[180px]" : ""}`}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className={`font-medium ${large ? "text-base" : "text-sm"}`}>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-text-secondary"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        {project.stars && (
          <span className="flex-shrink-0 font-mono text-xs text-text-tertiary">
            {project.stars} ★
          </span>
        )}
      </div>
      <p className="mb-3 text-sm leading-relaxed text-text-tertiary">
        {project.description}
      </p>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}

export function ProjectArchive() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filterProjects = (list: ArchiveProject[]) =>
    active === "All" ? list : list.filter((p) => p.categories.includes(active));

  const advanced = filterProjects(advancedSupportingProjects);
  const supporting = filterProjects(supportingProjects);
  const total = advanced.length + supporting.length;

  return (
    <Section id="archive">
      <Container>
        <TextReveal>
          <p className="mb-3 text-3xl font-medium tracking-tight md:text-4xl">
            Explore Other Projects
          </p>
          <p className="section-label">Projects beyond the flagship work</p>
        </TextReveal>

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 ${
                active === filter
                  ? "border-text-primary bg-text-primary text-bg"
                  : "border-border text-text-secondary hover:border-text-tertiary hover:text-text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {total === 0 ? (
          <p className="text-sm text-text-tertiary">No projects in this category.</p>
        ) : (
          <div className="space-y-12">
            {advanced.length > 0 && (
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-wide text-text-tertiary">
                  Featured
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <AnimatePresence initial={false} mode="popLayout">
                    {advanced.map((project) => (
                      <motion.div
                        key={project.title}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ProjectCard project={project} large />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {supporting.length > 0 && (
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-wide text-text-tertiary">
                  More Projects
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence initial={false} mode="popLayout">
                    {supporting.map((project) => (
                      <motion.div
                        key={project.title}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
}
