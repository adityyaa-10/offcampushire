import { MonaSemibold } from "@/utils/fonts";

const SayGoodbye = () => {
    return (
        <div className="bg-[#151D46] flex items-center justify-center py-12 sm:py-16 lg:py-24 px-4">
            <div className="max-w-[800px] w-full">
                <h1 className={`text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] text-center pb-8 text-white ${MonaSemibold.className}`}>
                    Say goodbye to CGPA requirements
                </h1>

                <div className="bg-gradient-to-b from-[#2C2950] via-[#827FA6]/35 to-[#827FA6]/0 text-center flex items-center justify-center text-white/80 text-[1.125rem] sm:text-[1.25rem] leading-[2rem] border border-[#FFFFFF]/10 rounded-[10px] p-6 sm:p-8 lg:p-12">
                    <div className="space-y-8">
                        <p>
                            When it comes to placement drives, many companies have
                            traditionally required students to meet certain CGPA requirements
                            in order to be eligible to apply.
                        </p>
                        <p>
                            We recognize that your true potential goes beyond a GPA and so
                            we&apos;re breaking down barriers of CGPA requirements, redefining
                            the eligibility criteria for freshers to participate in off-campus
                            drives based on skills, passion, and commitment, irrespective of
                            academic grades.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SayGoodbye;
