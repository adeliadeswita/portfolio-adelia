"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const categoryName =
    typeof project.category === "string" ? project.category : project.category.join(" · ");
  const hasCover = !!project.coverImage && project.coverImage.trim() !== "";

  return (
    <article className="group relative flex flex-col bg-white rounded-2xl border border-[#EBE8E1] overflow-hidden editorial-shadow hover:shadow-xl hover:border-[#D4D0C8] transition-all duration-300">
      {/* Visual Cover Header */}
      <Link
        href={`/projects/${project.slug}`}
        target="_self"
        className="relative block w-full aspect-[16/10] overflow-hidden bg-[#F2F2ED]"
      >
        {hasCover ? (
          <Image
            src={project.coverImage!}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#F2F2ED]">
            <ImageIcon className="w-8 h-8 text-[#71717A] mb-1" />
            <span className="text-[11px] font-mono text-[#71717A]">
              [PLACEHOLDER: {project.title}]
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge on Image */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-white/95 text-[#18181B] backdrop-blur-sm shadow-xs border border-white/40">
            #{project.id} · {categoryName}
          </span>
        </div>

        {project.year && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide bg-[#18181B]/80 text-white backdrop-blur-sm">
              {project.year}
            </span>
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="p-6 md:p-7 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          {project.affiliation && (
            <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block">
              {project.affiliation}
            </span>
          )}

          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0F172A] group-hover:text-[#2E6FA0] transition-colors leading-snug">
            <Link href={`/projects/${project.slug}`} target="_self" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
            {project.shortDescription || project.overview}
          </p>
        </div>

        {/* Tools and CTA Footer */}
        <div className="pt-6 mt-6 border-t border-[#E2E8F0]/80 flex flex-col space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#18181B] group-hover:text-[#2E6FA0] transition-colors pt-1">
            <span>Explore Case Study</span>
            <div className="w-6 h-6 rounded-md bg-[#F2F2ED] group-hover:bg-[#EBE8E1] flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#18181B]" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
