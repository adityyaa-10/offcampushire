import { MonaRegular } from "@/utils/fonts"
const DoublePara = () => {
    return (
        <div className="px-4 flex flex-col justify-center items-center text-[#020617] py-[85px] lg:py-[105px] text-left lg:text-center space-y-12 bg-[#f9f9fb]  ">
            <p className={` ${MonaRegular.className} text-[1.125rem]  text-md  lg:text-[1.3rem] leading-[2.2rem] lg:leading-[2.75rem] max-w-[815px] font-normal`}>
                Being left out of on-campus placements can deal a blow to a
                fresher&apos;s confidence and self-esteem. The journey of job hunting
                can take a toll on a fresher&apos;s confidence and self-belief.
                Rejections become a constant companion, chipping away at their
                resilience
            </p>
            <p className={` ${MonaRegular.className} text-[1.125rem]  text-md  lg:text-[1.3rem] leading-[2.2rem] lg:leading-[2.75rem] max-w-[815px] font-normal`}>
                For many freshers, securing a job post-graduation isn&apos;t just
                about fulfilling career aspirations; it&apos;s also about contributing
                to their family&apos;s financial stability. The delay in finding
                employment adds to the burden, increasing financial strain and
                amplifying the pressure to succeed.
            </p>
        </div>
    )
}

export default DoublePara
