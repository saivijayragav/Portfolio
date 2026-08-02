"use client";

import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { TextReveal } from "../ui/text-reveal";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <TextReveal>
          <p className="section-label">Technical Skills</p>
        </TextReveal>

        <div className="grid gap-0 md:grid-cols-4">
          {skillCategories.map((group, i) => (
            <div
              key={group.category}
              className="border-t border-border py-6 md:border-r md:border-t-0 md:p-6 md:last:border-r-0"
            >
              <p className="mb-4 font-mono text-xs uppercase tracking-wide text-text-tertiary">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2 md:flex-col md:gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-text-secondary md:text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
