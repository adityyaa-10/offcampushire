import { MonaMedium, GeneralMedium } from "@/utils/fonts";

const About = () => {
  return (
    <div className="space-y-2 md:space-y-6 px-4 py-12 text-left md:text-center lg:py-28">
      <h1
        className={`mx-auto max-w-[707px] text-left text-[1.7rem] tracking-[-0.015em] lg:text-center lg:text-[2.25rem] leading-[3rem] ${MonaMedium.className}  text-[#020617]`}
      >
        Reimagining{" "}
        <span className="bg-text-gradient bg-clip-text text-transparent">
          off-campus placement drives{" "}
        </span>
        ecosystem of India
      </h1>
      <p className={`mx-auto max-w-[730px] text-left md:text-center leading-[2.4rem] text-[#544D49] text-[18.5px] lg:text-[20px] lg:leading-[2.75rem] tracking-[0.01em] ${GeneralMedium.className}`}>
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
