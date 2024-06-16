import { MonaSemibold, GeneralMedium, MonaMedium } from "@/utils/fonts";
import Image from 'next/image';
import apply from '@/assets/ForStudents/apply.svg';
import shortlisted from '@/assets/ForStudents/shortlisted.svg';
import progress from '@/assets/ForStudents/progress.svg';

const SpecialFeatures = () => {
    return (
        <div className="mx-auto max-w-[1200px] py-12 md:py-20 lg:py-28 px-4 sm:px-7 lg:px-4">
            <div className="text-start max-w-[384px] mb-12">
                <h5 className={`${MonaSemibold.className} text-[20px] lg:text-[28px]`}>
                    Resumes are a thing of the past
                </h5>
                <p className={`${GeneralMedium.className} text-[1.125rem] lg:text-[1.3rem] leading-[2.11rem] pt-4 text-[#2C2C2C]/75`}>
                    You can forget about the hassle of creating, uploading, and sending
                    resumes – with us, it&apos;s all about highlighting your skills,
                    passion, and unique qualities in a simple and intuitive way.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-6 space-y-4 lg:space-y-0">
                <div className="lg:w-1/3 w-full flex">
                    <div className="border border-[#D7D7D7] py-4 px-5 bg-white rounded-[20px] flex flex-col items-center h-[450px]">
                        <div className="w-full">
                            <Image
                                src={apply}
                                alt="Single click apply"
                                className="w-full h-40 object-contain rounded-[0.35rem]"
                            />
                        </div>
                        <p className={`text-[1.50rem] pt-6 pb-6 ${MonaMedium.className}`}>
                            Single click apply
                        </p>
                        <p className={`${GeneralMedium.className} text-[1.025rem] leading-[2rem] text-[#7B899C] text-left`}>
                            With just one click, you can apply for off-campus drives. No more filling out lengthy application forms or attaching resumes.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/3 w-full flex">
                    <div className="border border-[#D7D7D7] py-4 px-5 bg-white rounded-[20px] flex flex-col items-center h-[450px]">
                        <div className="w-full">
                            <Image
                                src={shortlisted}
                                alt="Real-Time Updates"
                                className="w-full h-40 object-contain rounded-[0.35rem]"
                            />
                        </div>
                        <p className={`text-[1.50rem] pt-6 pb-6 ${MonaMedium.className}`}>
                            Real-Time Updates
                        </p>
                        <p className={`${GeneralMedium.className} text-[1.025rem] leading-[2rem] text-[#7B899C] text-left`}>
                            Stay informed about the status of your applications with real-time updates. Receive notifications about interview invitations, application reviews, and more – all in one place.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/3 w-full flex">
                    <div className="border border-[#D7D7D7] py-4 px-5 bg-white rounded-[20px] flex flex-col items-center h-[450px]">
                        <div className="w-full">
                            <Image
                                src={progress}
                                alt="Track Your Progress"
                                className="w-full h-40 object-contain rounded-[0.35rem]"
                            />
                        </div>
                        <p className={`text-[1.50rem] pt-6 pb-6 ${MonaMedium.className}`}>
                            Track Your Progress
                        </p>
                        <p className={`${GeneralMedium.className} text-[1.025rem] leading-[2rem] text-[#7B899C] text-left`}>
                            Stay organized with a personalized dashboard that allows you to manage your applications and keep track of your progress.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialFeatures;