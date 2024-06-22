import { MonaMedium, GeneralMedium } from "@/utils/fonts"

const Para = () => {
    return (
        <div className="space-y-2 md:space-y-6 px-4 py-12 text-left md:text-center lg:py-28">
            <h1
                className={`mx-auto max-w-[707px] text-left text-[1.7rem] tracking-[-0.015em] lg:text-center lg:text-[2.25rem] leading-[3rem] ${MonaMedium.className}  text-[#020617]`}
            >
                Tired of your friends complaining about
                off-campus placements? Be their hero!
            </h1>
            <p className={`mx-auto max-w-[730px] text-left md:text-center leading-[2.4rem] text-[#6D7C92] text-[18.5px] lg:text-[20px] lg:leading-[2.75rem] tracking-[0.01em] ${GeneralMedium.className}`}>
                By becoming a Placement Ambassador, you're not just taking
                on a role – you're joining a movement to transform the
                landscape of off-campus placement drives in India
            </p>
        </div>
    )
}

export default Para
