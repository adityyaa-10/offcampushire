import { MonaMedium, GeneralMedium } from "@/utils/fonts";

const About = () => {
  return (
    <div className="space-y-2 px-4 py-12 text-left md:space-y-6 md:text-center lg:py-28">
      <h1
        className={`mx-auto max-w-[707px] text-left text-[1.7rem] leading-[3rem] tracking-[-0.015em] lg:text-center lg:text-[2.25rem] ${MonaMedium.className} text-[#020617]`}
      >
        Reimagining{" "}
        <span className="bg-text-gradient bg-clip-text text-transparent">
          off-campus placement drives{" "}
        </span>
        ecosystem of India
      </h1>
      <p
        className={`mx-auto max-w-[730px] text-left text-[18.5px] leading-[2.4rem] tracking-[0.01em] text-[#544D49] md:text-center lg:text-[20px] lg:leading-[2.75rem] ${GeneralMedium.className}`}
      >
        Welcome to OffcampusHire, where we are dedicated to empowering freshers
        to kickstart their careers through exclusive off-campus placement
        drives. Our platform serves as a catalyst for bridging the gap between
        freshers and exclusive off-campus placement drives beyond on-campus
        placements.
      </p>
    </div>
  );
};

export default About;
