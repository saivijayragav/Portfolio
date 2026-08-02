"use client";

import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { TextReveal } from "../ui/text-reveal";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className="border-t border-border pt-16 md:pt-20">
          <TextReveal>
            <p className="section-label">Contact</p>
          </TextReveal>

          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <TextReveal delay={0.1}>
              <p className="text-3xl font-medium leading-snug tracking-tight md:text-4xl">
                Let&apos;s build something that matters.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                I&apos;m currently open to internship and full-time
                opportunities. If you have a project that could benefit from a
                builder who cares about the details, I&apos;d like to hear about
                it.
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="space-y-6">
                <div>
                  <p className="mb-1 text-sm text-text-tertiary">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-lg font-medium transition-colors duration-200 hover:text-text-secondary"
                  >
                    {profile.email}
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-sm text-text-tertiary">Social</p>
                  <div className="flex gap-6">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium transition-colors duration-200 hover:text-text-secondary"
                    >
                      GitHub
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium transition-colors duration-200 hover:text-text-secondary"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://leetcode.com/u/vijayragav003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium transition-colors duration-200 hover:text-text-secondary"
                    >
                      LeetCode
                    </a>
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-sm text-text-tertiary">Phone</p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-lg font-medium transition-colors duration-200 hover:text-text-secondary"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
