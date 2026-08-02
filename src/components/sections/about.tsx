"use client";

import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { TextReveal } from "../ui/text-reveal";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <TextReveal>
              <p className="section-label">About</p>
            </TextReveal>
          </div>

          <div className="md:col-span-3">
            <TextReveal delay={0.1}>
              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                {profile.bio}
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                {profile.bioSecondary}
              </p>
            </TextReveal>

            <TextReveal delay={0.25}>
              <div className="space-y-2">
                {profile.education.map((edu) => (
                  <div key={edu.school}>
                    <p className="text-base font-medium">{edu.degree}</p>
                    <p className="text-sm text-text-tertiary">
                      {edu.school} &mdash; {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </TextReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
