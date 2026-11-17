import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import Reveal from "@/app/components/Reveal";
import { projects } from "@/app/data/projects";

function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`Read the ${project.title} case study`}
      className="group block bg-[#FFF3F6] shadow-md shadow-mauve-300 rounded-xl w-[290px] border-b-[5px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#381932]"
    >
      {/* Project Image */}
      <div className="relative w-full aspect-16/10 overflow-hidden rounded-t-xl bg-[#F1E4D7]">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="290px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Information */}
      <div className="mt-5 flex items-start justify-between gap-3 px-4">
        <div>
          <h3 className="font-sans text-base font-bold text-[#381932]">
            {project.title}
          </h3>
          <p className="font-sans text-xs text-[#381932]/60 mb-8">
            {project.category}
          </p>
        </div>

        {/* Arrow (the whole card is the link) */}
        <span
          aria-hidden="true"
          className="shrink-0 w-8.5 h-8.5 rounded-full border border-[#381932]/40 bg-[#381932] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
        >
          <MdArrowForward size={20} className="text-[#FFF3F6]" />
        </span>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#FFF3E6] px-5 py-20 md:py-28">
      <div className="max-w-300 mx-auto">
        {/* Section Header */}
        <Reveal className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#381932]/55">
            02 — My Work
          </p>

          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-[#381932] sm:text-2xl md:text-4xl">
            Selected Projects
          </h2>

          <p className="font-sans text-sm md:text-base text-[#381932]/75 mt-4 max-w-2xl">
            A collection of projects where creativity meets functionality.
            Select a project to read its case study.
          </p>
        </Reveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-14">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
