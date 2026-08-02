"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { TextReveal } from "../ui/text-reveal";
import { experience } from "@/data/experience";

const logos: Record<string, string> = {
  Sprelia: "/images/spirelia_logo.jpeg",
  "National Informatics Centre": "/images/nic_logo.png",
  "Microsoft (AICTE–Edunet Foundation)": "/images/microsoft_logo.jpg",
};

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <TextReveal>
          <p className="section-label">Experience</p>
        </TextReveal>

        <div className="space-y-16 md:space-y-20">
          {experience.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="mb-4 grid gap-2 md:grid-cols-3">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    {logos[role.company] && (
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-border">
                        <Image
                          src={logos[role.company]}
                          alt={`${role.company} logo`}
                          fill
                          className="object-contain p-1.5"
                          sizes="48px"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-medium">{role.company}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">{role.role}</p>
                  <p className="mt-1 font-mono text-xs text-text-tertiary">
                    {role.period}
                  </p>
                  <p className="font-mono text-xs text-text-tertiary">
                    {role.location}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <p className="mb-4 text-base leading-relaxed text-text-secondary">
                    {role.description}
                  </p>
                  <ul className="space-y-3">
                    {role.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex gap-3 text-base leading-relaxed text-text-secondary"
                      >
                        <span className="mt-2 h-px w-4 flex-shrink-0 bg-text-tertiary" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                  {role.certificate && (
                    <a
                      href={role.certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-xs font-medium text-text-tertiary transition-colors duration-200 hover:text-text-primary"
                    >
                      {role.certificate.label} &rarr;
                    </a>
                  )}
                </div>
              </div>

              {i < experience.length - 1 && (
                <div className="mt-16 h-px w-full bg-border md:mt-20" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
