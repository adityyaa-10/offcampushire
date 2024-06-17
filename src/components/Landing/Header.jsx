import Image from "next/image";
import HeroCard from "@/assets/Landing/herocard.svg";
import Link from "next/link";
import { GeneralMedium, MonaSemibold } from "@/utils/fonts";

export default function Header() {
  return (
    <section
      className="flex pt-11 md:pt-20 lg:pt-36 w-full items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.alchemy.com/_next/image?url=%2Fimages%2Fhero-bg.webp&w=1920&q=75')",
      }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-10 px-4 text-center lg:flex-row lg:gap-0 lg:px-24 lg:text-left">
        <div className="flex max-w-[500px] flex-col items-start justify-center space-y-8 pt-11 lg:max-w-[600px] xl:max-w-[720px]">
          <h1
            className={`${MonaSemibold.className} text-left text-[35px] text-[#020617] xl:text-[58px]`}
          >
            The future of{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              offcampus
            </span>{" "}
            placement drives is here
          </h1>
          <p
            className={`${GeneralMedium.className} text-left text-[1.3rem] leading-[2.2rem] text-[#3f3f42]/90 md:text-[1.5rem] md:leading-[2.75rem]`}
          >
            Designed for those students serious about landing dream internships
            in tech. We can&apos;t wait to see what you can achieve
          </p>
          <div className="mt-8">
            <Link href="/get-started">
              <button className="group pointer-events-auto relative h-fit w-full rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50">
                <span className="from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 flex flex-row items-center justify-center gap-2 rounded-lg bg-custom-gradient px-4 py-3 text-[14px] font-bold leading-none text-[#FFFFFF] transition-all hover:bg-clip-text hover:text-transparent hover:shadow-lg">
                  Get Started
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-center pt-10 lg:w-auto lg:pl-16 lg:pt-0">
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
