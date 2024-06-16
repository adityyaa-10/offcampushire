import { MonaMedium } from "@/utils/fonts"
import Image from "next/image"
import hero from "@/assets/About/hero.svg"

const AboutHeader = () => {
    return (
        <header className={"text-center  pt-16 "}>
            <h1
                className={` ${MonaMedium.className} text-[2rem] sm:text-[3rem] lg:text-[4rem] tracking-[-0.035em] lg:leading-[5.5rem] `}
            >
                Empowering freshers with <br />
                <span
                    className="text-transparent  bg-clip-text bg-custom-gradient">
                    off-campus placement drives
                </span>
            </h1>
            <div className="w-full pt-12 lg:pt-0">
                <Image src={hero} alt="hero-bg" className="w-full h-full" />
            </div>
        </header>
    )
}

export default AboutHeader
