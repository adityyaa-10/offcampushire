import { MonaMedium, GeneralMedium } from "@/utils/fonts"

const About = () => {
    return (
        <div className="py-12 lg:py-28 text-left md:text-center space-y-4 px-4">
            <h1 className={`text-left lg:text-center max-w-[720px] mx-auto text-[1.7rem]  lg:text-[2.6rem] tracking-[-0.015em] ${MonaMedium.className}  font-medium text-[#020617]`}
            >
                Reimagining{" "}
                <span className="text-transparent bg-clip-text bg-custom-gradient">
                    off-campus placement drives{" "}
                </span>
                ecosystem of India
            </h1>
            <p className={`text-[20px] leading-[2.5rem] lg:text-[22px] text-[#544D49] lg:leading-[2.75rem] max-w-[720px] mx-auto ${GeneralMedium.className}`}>
                Welcome to OffcampusHire, where we are dedicated to empowering
                freshers to kickstart their careers through exclusive off-campus
                placement drives. Our platform serves as a catalyst for bridging the
                gap between freshers and exclusive off-campus placement drives
                beyond on-campus placements.
            </p>
        </div>
    )
}

export default About
