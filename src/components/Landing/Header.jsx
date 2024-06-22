import Image from "next/image";
import HeroCard from "@/assets/Landing/herocard.svg";
import Link from "next/link";
import { GeneralMedium, MonaBold, MonaRegular } from "@/utils/fonts";

export default function Header() {
  return (
    <section className="bg-mobile flex w-full items-center justify-center bg-cover bg-center pt-11 md:pt-20 lg:pt-36">
      <div className="flex w-full flex-col items-center justify-center gap-10 px-4 text-center lg:flex-row lg:gap-0 lg:px-16 lg:text-left">
        <div className="flex max-w-[500px] flex-col items-start justify-center space-y-3 pt-11 lg:max-w-[600px] xl:max-w-[720px]">
          <h1
            className={`${MonaBold.className} text-left text-[40px] leading-[3.7rem] tracking-tight text-[#020617] lg:text-[48px]`}
          >
            The future of{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              offcampus
            </span>{" "}
            placement drives is here
          </h1>
          <p
            className={`${GeneralMedium.className} text-left text-[1.3rem] leading-[2.5rem] text-[#3f3f42]/90 md:text-[1.5rem] md:leading-[2.75rem]`}
          >
            OffcampusHire is the ultimate destination for freshers to explore,
            apply & attend off-campus placement drives
          </p>
          <div className="pt-[4px]">
            <Link href="/get-started">
              <button className="group pointer-events-auto relative h-fit w-full rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50">
                <span
                  className={`from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 flex flex-row items-center justify-center gap-2 rounded-lg bg-custom-gradient px-4 py-3 text-[14px] font-bold leading-none text-[#FFFFFF] transition-all hover:bg-clip-text hover:text-transparent hover:shadow-lg ${MonaRegular.className} tracking-[0.015em]`}
                >
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
            className="w-full max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
