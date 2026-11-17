import Link from "next/link";
import NavBar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export default function ProjectNotFound() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-[50vh] flex-col items-center justify-center bg-[#FFF3E6] px-5 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#381932]/55">
          404
        </p>
        <h1 className="font-heading mt-3 text-3xl font-semibold text-[#381932]">
          That project doesn&apos;t exist
        </h1>
        <p className="mt-3 max-w-md text-sm text-[#381932]/70">
          The link may be wrong or the project may have been moved.
        </p>
        <Link
          href="/#projects"
          className="mt-8 rounded-lg bg-[#381932] px-6 py-3 text-sm font-medium text-[#FFF3E6] transition hover:bg-[#512449]"
        >
          Back to all projects
        </Link>
      </main>
      <Footer />
    </>
  );
}
