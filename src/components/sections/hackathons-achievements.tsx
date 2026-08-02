"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { TextReveal } from "../ui/text-reveal";
import { leetcode, codingContests, hackathonsList } from "@/data/achievements";

function TrophyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function MedalSilverIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}

function MedalBronzeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const placementStyles: Record<string, { color: string; icon: "trophy" | "silver" | "bronze" | "participant"; label: string }> = {
  trophy: { color: "text-amber-500", icon: "trophy", label: "Winner" },
  silver: { color: "text-slate-400", icon: "silver", label: "Runner-up" },
  bronze: { color: "text-amber-700", icon: "bronze", label: "Third Place" },
  participant: { color: "text-text-tertiary", icon: "participant", label: "Participant" },
};

function PlacementIcon({ type }: { type: "trophy" | "silver" | "bronze" | "participant" }) {
  if (type === "trophy") return <TrophyIcon />;
  if (type === "silver") return <MedalSilverIcon />;
  if (type === "bronze") return <MedalBronzeIcon />;
  return null;
}

export function HackathonsAchievements() {
  return (
    <Section id="hackathons">
      <Container>
        <TextReveal>
          <p className="section-label">Achievements</p>
        </TextReveal>

        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-text-secondary">
                  <CodeIcon />
                </div>
                <div>
                  <p className="text-sm font-medium">LeetCode</p>
                  <p className="text-xs text-text-tertiary">Competitive Programming</p>
                </div>
              </div>
              <p className="mb-3 text-3xl font-medium tracking-tight">{leetcode.rating}</p>
              <p className="mb-1 text-xs text-text-tertiary">Peak Contest Rating</p>
              <div className="mb-3 flex gap-4">
                <span className="text-xs text-text-secondary">{leetcode.problemsSolved}+ Problems</span>
                <span className="text-xs text-text-secondary">{leetcode.badge} Badge</span>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                {leetcode.description}
              </p>
              {leetcode.proof && (
                <a
                  href={leetcode.proof.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xs font-medium text-text-tertiary transition-colors duration-200 hover:text-text-primary"
                >
                  {leetcode.proof.label} &rarr;
                </a>
              )}
            </motion.div>

            {codingContests.map((contest, i) => (
              <motion.div
                key={contest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-text-secondary">
                    <TrophyIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{contest.title}</p>
                  </div>
                </div>
                <p className="mb-1 text-xl font-medium tracking-tight">{contest.highlight}</p>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  {contest.description}
                </p>
                {contest.proof && (
                  <a
                    href={contest.proof.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-medium text-text-tertiary transition-colors duration-200 hover:text-text-primary"
                  >
                    {contest.proof.label} &rarr;
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass rounded-xl p-6 transition-all duration-300 hover:scale-[1.01]"
          >
            <p className="mb-4 text-sm font-medium">Hackathons</p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {hackathonsList.items.map((h, i) => {
                const style = placementStyles[h.icon];
                return (
                  <div
                    key={h.event}
                    className="flex items-center gap-3 rounded-lg border border-border/50 p-3 transition-colors duration-200 hover:border-text-tertiary"
                  >
                    <span className={`flex-shrink-0 ${style.color}`}>
                      <PlacementIcon type={h.icon} />
                    </span>
                    <div>
                      <p className="text-sm font-medium">{h.event}</p>
                      <p className="text-xs text-text-tertiary">{h.placement}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
