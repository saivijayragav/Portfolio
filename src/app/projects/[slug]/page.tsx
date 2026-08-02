import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { featuredProjects } from "@/data/projects";

export function generateStaticParams() {
  return featuredProjects
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Sai Vijay Ragav`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <CaseStudyLayout project={project} />
      <Footer />
    </>
  );
}
