import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { ArchitectureDiagram } from "./architecture-diagrams";
import { ProjectVisual, heroSizes } from "./project-visuals";
import {
  otherProjects,
  featuredProjects,
  type Project,
} from "@/data/projects";

const caseStudySlugs = new Set(
  featuredProjects.map((p) => p.slug).filter((s): s is string => Boolean(s))
);

const caseStudyTitles = new Map(
  featuredProjects
    .filter((p) => p.slug)
    .map((p) => [p.slug as string, p.title])
);

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const archiveGithub = new Map<string, string | undefined>(
  otherProjects.map((p) => [slugify(p.title), p.github])
);

const statusTone: Record<string, string> = {
  "Active Development": "bg-availability/10 text-availability",
  MVP: "bg-accent/10 text-accent",
  Prototype: "bg-text-tertiary/10 text-text-tertiary",
};

function StatusBadge({ status }: { status?: string }) {
  if (!status) return null;
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
      <span className={`relative flex h-1.5 w-1.5`}>
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${status === "Active Development" ? "bg-availability" : "bg-text-tertiary"}`}
        />
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${status === "Active Development" ? "bg-availability" : "bg-text-tertiary"}`}
        />
      </span>
      <span className="text-xs font-medium text-text-secondary">{status}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-xl font-medium tracking-tight md:text-2xl">{children}</h2>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed text-text-secondary">{children}</p>;
}

export function CaseStudyLayout({ project }: { project: Project }) {
  return (
    <main className="pt-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs text-text-tertiary">{project.year}</span>
            <span className="h-px w-6 bg-border" />
            <span className="font-mono text-xs text-text-tertiary">{project.type}</span>
          </div>

          <h1 className="mb-4 text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            {project.title}
          </h1>

          <StatusBadge status={project.status} />

          <p className="mt-6 mb-8 text-lg leading-relaxed text-text-secondary">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.tech?.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mb-16 flex flex-wrap gap-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                GitHub &rarr;
              </a>
            )}
            {project.links?.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {link.label} &rarr;
              </a>
            ))}
          </div>
        </div>

        <div className="mb-16">
          {project.image ? (
            <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-black/80 bg-white">
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                width={
                  project.slug && heroSizes[project.slug]
                    ? heroSizes[project.slug].width
                    : undefined
                }
                height={
                  project.slug && heroSizes[project.slug]
                    ? heroSizes[project.slug].height
                    : undefined
                }
                className="h-auto w-full"
              />
            </div>
          ) : project.slug ? (
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-muted">
              <ProjectVisual slug={project.slug} />
            </div>
          ) : null}
        </div>

        <div className="divider mb-16" />

        <div className="mx-auto max-w-3xl space-y-16">
          {project.overview && (
            <section>
              <SectionTitle>Overview</SectionTitle>
              <Prose>{project.overview}</Prose>
            </section>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <section>
              <SectionTitle>Screenshots</SectionTitle>
              <div className="space-y-6">
                {project.screenshots.map((shot) => (
                  <figure
                    key={shot.src}
                    className="overflow-hidden rounded-xl border border-border bg-muted"
                  >
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      className="h-auto w-full"
                    />
                    {shot.caption && (
                      <figcaption className="border-t border-border px-4 py-3 text-sm text-text-secondary">
                        {shot.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {project.problem && (
            <section>
              <SectionTitle>Problem</SectionTitle>
              <Prose>{project.problem}</Prose>
            </section>
          )}

          {project.slug && (
            <section>
              <SectionTitle>Architecture</SectionTitle>
              <ArchitectureDiagram slug={project.slug} />
            </section>
          )}

          {project.solution && (
            <section>
              <SectionTitle>Solution</SectionTitle>
              <Prose>{project.solution}</Prose>
            </section>
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section>
              <SectionTitle>Key Features</SectionTitle>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3 leading-relaxed text-text-secondary">
                    <span className="mt-2.5 h-px w-4 flex-shrink-0 bg-text-tertiary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.techDecisions && project.techDecisions.length > 0 && (
            <section>
              <SectionTitle>Technical Decisions</SectionTitle>
              <ul className="space-y-3">
                {project.techDecisions.map((decision) => (
                  <li key={decision} className="flex gap-3 leading-relaxed text-text-secondary">
                    <span className="mt-2.5 h-px w-4 flex-shrink-0 bg-text-tertiary" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.lessons && project.lessons.length > 0 && (
            <section>
              <SectionTitle>Lessons Learned</SectionTitle>
              <ul className="space-y-3">
                {project.lessons.map((lesson) => (
                  <li key={lesson} className="flex gap-3 leading-relaxed text-text-secondary">
                    <span className="mt-2.5 h-px w-4 flex-shrink-0 bg-text-tertiary" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.roadmap && project.roadmap.length > 0 && (
            <section>
              <SectionTitle>Future Roadmap</SectionTitle>
              <ul className="space-y-3">
                {project.roadmap.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-text-secondary">
                    <span className="mt-2.5 h-px w-4 flex-shrink-0 bg-text-tertiary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.related && project.related.length > 0 && (
            <section>
              <SectionTitle>Related Projects</SectionTitle>
              <p className="leading-relaxed text-text-secondary">
                {project.related
                  .map((slug) => ({
                    slug,
                    href: caseStudySlugs.has(slug)
                      ? `/projects/${slug}`
                      : archiveGithub.get(slug),
                  }))
                  .filter((r): r is { slug: string; href: string } => Boolean(r.href))
                  .map(({ slug, href }, i) => {
                    const isCaseStudy = caseStudySlugs.has(slug);
                    return (
                      <span key={slug}>
                        {i > 0 && <span className="mx-3 text-text-tertiary">/</span>}
                        <a
                          href={href}
                          target={isCaseStudy ? undefined : "_blank"}
                          rel={isCaseStudy ? undefined : "noopener noreferrer"}
                          className="font-mono text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                        >
                          {caseStudyTitles.get(slug) ?? slug.replace(/-/g, " ")}
                        </a>
                      </span>
                    );
                  })}
              </p>
            </section>
          )}

          <div className="pt-4">
            <a
              href="/#work"
              className="text-sm font-medium text-text-tertiary transition-colors duration-200 hover:text-text-primary"
            >
              &larr; Back to projects
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
