import { GeneralMedium, MonaMedium } from "@/utils/fonts";

const Steps = () => {
    return (
        <div className="mx-auto max-w-[1200px] py-12 md:py-20 lg:py-28 px-4 sm:px-7 lg:px-4 ">
            <div className="flex flex-col lg:flex-row w-full items-center lg:items-start gap-x-12 lg:gap-x-24">
                <div className="lg:w-[35%]">
                    <p className={`text-[1.5rem] lg:text-[1.75rem] leading-[2.5rem] lg:leading-[3rem] text-[#0F0D0D]/80 ${MonaMedium.className}`}>
                        A platform where graduate ambitions meet exclusive off-campus
                        opportunities
                    </p>
                </div>
                <div className="lg:w-2/3">
                    <p className={`${GeneralMedium.className} pt-6 lg:pt-0 text-[1.125rem] lg:text-[20px] lg:pr-4 leading-[1.9rem] lg:leading-[2.3rem] gap-x-4 text-[#0F0D0D]/80`}>
                        Welcome to OffcampusHire, where we are dedicated to empowering
                        freshers to kickstart their careers through off-campus placement
                        drives. Our platform serves as a catalyst for bridging the gap between
                        freshers & exciting career opportunities beyond on-campus placements.
                    </p>
                </div>
            </div >
            <div className="flex flex-col lg:flex-row items-center justify-center w-full px-2 pt-12 lg:pt-28">
                {["01", "02", "03"].map((step, index) => (
                    <div key={index} className="border rounded-[20px] border-[#D7D7D7] w-full lg:w-1/3 text-center flex flex-col items-center justify-center h-[300px] mx-0 lg:mx-4 mb-8 lg:mb-0">
                        <h2 className={`text-[2.6rem] pt-5 ${MonaMedium.className}`}>
                            {step}
                        </h2>
                        <p className={`${GeneralMedium.className} text-[1.125rem] px-6 lg:px-11 leading-[2.25rem] pt-3 text-[#141417]/75`}>
                            {index === 0 && "Sign up & complete your profile to unlock access and get started with OffcampusHire"}
                            {index === 1 && "Browse and apply for exclusive off-campus opportunities tailored for freshers"}
                            {index === 2 && "Attend interviews and secure your dream job with top companies"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Steps;
