import Image from "next/image";
import HeroCard from "@/assets/Landing/herocard.svg";
import Link from "next/link";
import { GeneralMedium, MonaRegular, MonaSemibold } from "@/utils/fonts";

export default function Header() {
    return (
        <section
            className="w-full bg-center bg-cover min-h-screen flex items-center justify-center"
            style={{ backgroundImage: "url('https://www.alchemy.com/_next/image?url=%2Fimages%2Fhero-bg.webp&w=1920&q=75')" }}
        >
            <div className="w-full flex lg:flex-row flex-col justify-center items-center px-4 lg:px-24 text-center lg:text-left gap-10 lg:gap-0">
                <div className="space-y-8 flex flex-col items-start justify-center pt-11 max-w-[500px] lg:max-w-[600px] xl:max-w-[720px]">
                    <h1
                        className={`${MonaSemibold.className} text-[35px] xl:text-[58px] text-[#020617] text-left`}
                    >
                        The future of{" "}
                        <span className="text-transparent bg-clip-text bg-custom-gradient">
                            offcampus
                        </span>{" "}
                        placement drives is here
                    </h1>
                    <p className={`${GeneralMedium.className} text-[#3f3f42]/90 text-[1.3rem] leading-[2.2rem] md:text-[1.5rem] text-left md:leading-[2.75rem]`}>
                        Designed for those students serious about landing dream
                        internships in tech. We can&apos;t wait to see what you can achieve
                    </p>
                    <div className="mt-8">
                        <Link href="/get-started">
                            <button className="w-36 group relative h-fit rounded-lg transition-all focus:shadow-purple pointer-events-auto">
                                <span
                                    className={`flex flex-row items-center justify-center gap-2 rounded-lg transition-all text-[#FFFFFF] hover:bg-gray-200 hover:text-transparent hover:shadow-lg text-sm font-bold leading-none px-3 py-3 tracking-wide ${MonaRegular.className} bg-custom-gradient`}
                                >
                                    Get Started
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full lg:w-auto lg:pl-16 pt-10 lg:pt-0">
                    <Image
                        src={HeroCard}
                        alt="Hero Card"
                        className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
                    />
                </div>
            </div>
        </section>
    );
}
