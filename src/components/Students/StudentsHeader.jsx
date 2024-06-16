import { MonaMedium, MonaSemibold } from "@/utils/fonts"

const StudentsHeader = () => {
    return (
        <header>
            <div className="student-bg px-2  text-left md:text-center flex flex-col items-center justify-center ">
                <h1 className={`${MonaSemibold.className} text-[2rem] lg:text-[2.5rem] font-bold hero-heading  lg:leading-[4rem] w-full max-w-[850px] tracking-tight lg:tracking-normal`}>
                    Introducing{" "}
                    <span className="text-transparent bg-clip-text bg-custom-gradient">
                        off-campus
                    </span>
                    , your ultimate destination for off-campus placement drives
                </h1>
                <p
                    className={`mt-4 px-1 lg:px-28 text-md lg:text-[22px] para leading-[1.75rem]  lg:leading-[2.8rem] text-[#3f3f42]/80 w-full sm:w-[40rem] lg:w-[64rem] ${MonaMedium.className}`}
                >
                    OffCampusHire is a platform aimed at helping freshers start their
                    careers by connecting them with exclusive off-campus placement drives
                    organized in collaboration with universities and companies
                </p>
            </div>
        </header >
    )
}

export default StudentsHeader
