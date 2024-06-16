import Image from "next/image";
import HeroCard from "@/assets/Landing/herocard.svg";
import Link from "next/link";
import { GeneralMedium, MonaRegular, MonaSemibold } from "@/utils/fonts";

export default function Header() {
    return (
        <section
            className="w-full bg-center bg-cover h-screen flex items-center justify-center"
            style={{ backgroundImage: "url('https://www.alchemy.com/_next/image?url=%2Fimages%2Fhero-bg.webp&w=1920&q=75')" }}
        >
            <div className="w-full flex lg:flex-row flex-col justify-center items-center px-4 lg:px-24 text-center lg:text-left gap-10 lg:gap-0">
                < div className={` space-y-8 flex flex-col items-start justify-center pt-[150px] max-w-[500px] lg:max-w-[600px] xl:max-w-[720px]`} >

                    <h1
                        className={`${MonaSemibold.className} text-[35px] sm:text-[45px] lg:text-[58px]  font-bold  text-[#020617] text-left`}
                    >
                        The future of{" "}
                        <span className="text-transparent bg-clip-text bg-custom-gradient">
                            offcampus
                        </span>{" "}
                        placement drives is here
                    </h1>

                    <p className={`${MonaRegular.className} text-[#3f3f42]/90 text-[1.3rem] leading-[2.2rem] md:text-[1.5rem] text-left md:leading-[2.75rem]`}>
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
                <div className="hidden lg:block">
                    <Image
                        src={HeroCard}
                        alt="Hero Card"
                        className="w-[500px] relative top-20 left-24"
                    />
                </div>
                <div className="lg:hidden">
                    <Image src={HeroCard} alt="Hero Card" className="w-[300px] relative" />
                </div>
            </div>
        </section>
    );
}
