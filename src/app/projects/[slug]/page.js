import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import NavBar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Reveal from "@/app/components/Reveal";
import { projects, getProject, getAdjacentProjects } from "@/app/data/projects";

// Build one static page per project at build time.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Case Study | Kashmala Aslam`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.summary,
      images: [project.cover.src],
    },
  };
}

function CaseSection({ label, title, children }) {
  return (
    <Reveal
      as="section"
      className="mt-16 grid gap-6 md:mt-20 md:grid-cols-[220px_1fr] md:gap-14"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#381932]/55">
          {label}
        </p>
        <h2 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-[#381932] md:text-3xl">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </Reveal>
  );
}

function MetaItem({ label, children }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#381932]/50">
        {label}
      </p>
      <div className="mt-2 text-sm font-medium text-[#381932]">{children}</div>
    </div>
  );
}

function AdjacentLink({ project, direction }) {
  const isNext = direction === "next";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex items-center gap-4 rounded-2xl border border-[#381932]/10 bg-white/65 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#381932]/30 hover:bg-white/90 hover:shadow-[0_12px_30px_rgba(56,25,50,0.10)] ${
        isNext ? "flex-row-reverse text-right" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#381932] text-[#FFF3E6]"
      >
        {isNext ? <MdArrowForward size={18} /> : <MdArrowBack size={18} />}
      </span>
      <span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#381932]/50">
          {isNext ? "Next project" : "Previous project"}
        </span>
        <span className="font-heading mt-1 block text-base font-semibold text-[#381932]">
          {project.title}
        </span>
      </span>
    </Link>
  );
}

// Reads the URL (params) - kept inside <Suspense> so NavBar and Footer stay static.
async function ProjectContent({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);

  // Section numbers count up only for the sections that are actually shown.
  let sectionNumber = 0;
  const nextNumber = () => String(++sectionNumber).padStart(2, "0");

  return (
    <>
      <main className="bg-[#FFF3E6] px-5 pb-24 pt-6 md:px-10">
        <article className="mx-auto max-w-5xl">
          {/* Back link */}
          <Link
            href="/#projects"
            className="rise-in inline-flex items-center gap-1.5 text-sm text-[#381932]/70 transition-colors hover:text-[#381932]"
          >
            <MdArrowBack size={18} />
            All projects
          </Link>

          {/* Header */}
          <header className="mt-8 max-w-3xl">
            <p className="rise-in rise-delay-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#381932]/55">
              Case study · {project.category}
            </p>
            <h1 className="rise-in rise-delay-1 font-heading mt-3 text-4xl font-semibold leading-tight text-[#381932] md:text-5xl">
              {project.title}
            </h1>
            <p className="rise-in rise-delay-2 mt-5 text-base leading-relaxed text-[#381932]/75 md:text-lg">
              {project.summary}
            </p>
          </header>

          {/* Quick facts */}
          <div className="rise-in rise-delay-3 mt-10 grid gap-6 border-y border-[#381932]/15 py-6 sm:grid-cols-3">
            <MetaItem label="My role">{project.role}</MetaItem>
            <MetaItem label="Type">{project.type}</MetaItem>
            <MetaItem label="Tools">
              <ul className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-[#381932]/15 bg-white/60 px-3 py-1 text-xs font-normal text-[#563D50]"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </MetaItem>
          </div>

          {/* Cover image */}
          <Reveal className="mt-10">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={project.cover.width}
              height={project.cover.height}
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full rounded-2xl shadow-[0_20px_50px_rgba(56,25,50,0.12)]"
            />
          </Reveal>

          {/* Overview */}
          <CaseSection label={nextNumber()} title="Overview">
            <div className="space-y-4 text-base leading-relaxed text-[#381932]/80">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </CaseSection>

          {/* Highlights */}
          {project.highlights.length > 0 && (
            <CaseSection label={nextNumber()} title="What I built">
              <ul className="space-y-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-relaxed text-[#381932]/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#381932]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </CaseSection>
          )}

          {/* Process (only when filled in) */}
          {project.process?.length > 0 && (
            <CaseSection label={nextNumber()} title="Process">
              <ol className="space-y-6">
                {project.process.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-heading text-sm font-semibold text-[#381932]/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-[#381932]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-base leading-relaxed text-[#381932]/80">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </CaseSection>
          )}

          {/* Screenshots (only when added) */}
          {project.screenshots?.length > 0 && (
            <CaseSection label={nextNumber()} title="Screens">
              <div className="grid gap-6 sm:grid-cols-2">
                {project.screenshots.map((shot) => (
                  <figure key={shot.src}>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      sizes="(min-width: 640px) 400px, 100vw"
                      className="h-auto w-full rounded-xl border border-[#381932]/10 shadow-[0_8px_25px_rgba(56,25,50,0.08)]"
                    />
                    {shot.caption && (
                      <figcaption className="mt-2 text-xs text-[#381932]/60">
                        {shot.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </CaseSection>
          )}

          {/* Outcome (only when filled in) */}
          {project.outcome?.length > 0 && (
            <CaseSection label={nextNumber()} title="Outcome">
              <div className="space-y-4 text-base leading-relaxed text-[#381932]/80">
                {project.outcome.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </CaseSection>
          )}

          {/* Links */}
          {project.links.length > 0 && (
            <Reveal className="mt-16 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#381932] px-6 py-3 text-sm font-medium text-[#FFF3E6] transition-all duration-300 hover:-translate-y-1 hover:bg-[#512449]"
                >
                  {link.label}
                  <MdArrowOutward
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </Reveal>
          )}

          {/* Previous / next */}
          <Reveal className="mt-20 grid gap-4 border-t border-[#381932]/15 pt-10 sm:grid-cols-2">
            <AdjacentLink project={previous} direction="previous" />
            <AdjacentLink project={next} direction="next" />
          </Reveal>
        </article>
      </main>
    </>
  );
}

export default function ProjectPage({ params }) {
  return (
    <>
      <NavBar />
      <Suspense fallback={<main className="min-h-[60vh] bg-[#FFF3E6]" />}>
        <ProjectContent params={params} />
      </Suspense>
      <Footer />
    </>
  );
}
