import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-400px px-5 pt-6 pb-16 flex flex-col items-center text-center bg-[#FFF3E6]"
    >
      {/* Intro Label */}
      <div className="rise-in flex items-center gap-3 text-[#381932] text-xs md:text-sm font-semibold uppercase tracking-wide">
        <span className="w-2 h-2 rounded-full bg-[#381932]"></span>
        <span>Frontend Developer</span>
        <span>|</span>
        <span>UI Designer</span>
      </div>

      {/* Main Heading */}
      <h1 className="rise-in rise-delay-1 font-heading mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#381932] leading-tight max-w-3xl">
        Ideas into Interfaces
        <br />
        Experience in every detail
      </h1>

      {/* Hero Image */}
      <div className="rise-in rise-delay-2 relative mt-5 w-full max-w-md flex justify-center items-center">
        <div className="float-soft">
          <Image
            src="/images/hero-image.png"
            alt="Kashmala Aslam - Frontend Developer and UI Designer"
            width={800}
            height={500}
            priority
            className="w-[650px] max-w-[80vw] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
