import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { ProjectDetailTemplate } from "@/components/projects/ProjectDetailTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project =
    projectsData.find((p) => p.slug === slug) ||
    (slug === "blibli-live-studio-analytics"
      ? projectsData.find((p) => p.slug === "live-studio-performance-dashboard-blibli")
      : undefined);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Adelia Deswita Portfolio`,
    description: project.shortDescription || project.overview.slice(0, 160),
    openGraph: {
      title: `${project.title} | Adelia Deswita`,
      description: project.shortDescription || project.overview.slice(0, 160),
      images: project.coverImage ? [project.coverImage] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  let currentIndex = projectsData.findIndex((p) => p.slug === slug);

  // Backward compatibility alias
  if (currentIndex === -1 && slug === "blibli-live-studio-analytics") {
    currentIndex = projectsData.findIndex(
      (p) => p.slug === "live-studio-performance-dashboard-blibli"
    );
  }

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const prevProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <ProjectDetailTemplate
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
