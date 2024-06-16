"use client"
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Function to close sidebar when clicking outside of it
    const handleOutsideClick = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };
    useEffect(() => {
        // Attach event listener to handle outside clicks
        document.addEventListener('mousedown', handleOutsideClick);

        // Cleanup the event listener
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    return (
        <div className="fixed inset-x-0 top-0 flex flex-col-reverse z-50">
            <nav className="relative flex h-20 flex-col items-center justify-between border-b border-[#e5e5e5] bg-white p-4 sm:h-20 sm:flex-row sm:px-6 sm:py-0">
                <div className="flex w-full items-center justify-between sm:h-full max-w-[1320px] mx-auto">
                    {/* Sidebar Menu Button */}
                    <button className="p-3 sm:hidden"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 ">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6h18M17 12H3M3 18h10" vectorEffect="non-scaling-stroke"></path>
                        </svg>
                    </button>
                    <aside
                        ref={sidebarRef}
                        className={`fixed inset-y-0 left-0 w-[270px] bg-[#f5f5f5] z-[500] transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}
                    >
                        {/* Sidebar Content */}
                        <div className="flex sm:hidden w-full flex-col bg-[#f5f5f5]">
                            <div className="flex flex-col items-start border-b border-[#f5f5f5] px-6 py-10">
                                <button className='group relative h-fit rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50 pointer-events-auto w-full'>
                                    <span className='flex flex-row items-center justify-center gap-2 rounded-lg transition-all from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 text-[#FFFFFF] hover:bg-clip-text hover:text-transparent hover:shadow-lg text-[14px] font-bold leading-none px-4 py-3 bg-custom-gradient' >
                                        Get Started
                                    </span>
                                </button>
                                <div className="mt-10 flex w-full flex-col items-start gap-6">
                                    <Link className="text-xl" href="/login">About us</Link>
                                    <Link className="text-xl" href="/login">For Students</Link>
                                    <Link className="text-xl" href="/login">College</Link>
                                    <div className="fixed inset-0 bg-white hidden px-6 pt-7">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </aside>
                    <div className="flex w-full items-center justify-center space-x-6 justify-self-center sm:max-w-2xl sm:justify-start">
                        <Link href="/">
                            <img src="https://www.datocms-assets.com/105223/1701819587-logo.svg" className='w-36' alt="" />
                        </Link>
                    </div>
                    <Link className="relative flex sm:hidden cursor-pointer justify-end items-end space-x-2.5 rounded-md p-3 font-semibold " role="menuitem" href="https://go.joinleland.com/partner/partnerships">
                        <div className="flex w-full items-center justify-between whitespace-nowrap">
                            <div className="flex items-center gap-2.5"><span>Join</span></div>
                        </div>
                    </Link>
                    <div className="flex h-full shrink-0 items-center justify-center space-x-6 whitespace-nowrap text-base text-[#333]">
                        <Link className="relative hidden sm:flex w-full cursor-pointer items-center justify-center space-x-2.5 rounded-md p-3 hover:bg-slate-100 font-semibold" role="menuitem" href="/events">
                            <div className="flex w-full items-center whitespace-nowrap">
                                <div className="flex items-center gap-2.5"><span>About us</span></div>
                            </div>
                        </Link>
                        <Link className="relative hidden sm:flex w-full cursor-pointer items-center justify-center space-x-2.5 rounded-md p-3 font-semibold" role="menuitem" href="/students">
                            <div className="flex w-full items-center whitespace-nowrap">
                                <div className="flex items-center gap-2.5"><span>For Students</span></div>
                            </div>
                        </Link>
                        <Link className="relative hidden sm:flex w-full cursor-pointer items-center justify-center space-x-2.5 rounded-md p-3 font-semibold" role="menuitem" href="https://go.joinleland.com/partner/partnerships">
                            <div className="flex w-full items-center whitespace-nowrap">
                                <div className="flex items-center gap-2.5"><span>College</span></div>
                            </div>
                        </Link>
                        <div className="hidden lg:flex h-full shrink-0 items-center space-x-3">
                            <Link href="/login">
                                <button type="button" className="sm:whitespace-nowrap leading-tight items-center justify-center border shadow-border  bg-white disabled:bg-white shadow-transparent p-3 text-sm space-x-2 inline-flex font-semibold rounded-lg cursor-pointer" aria-label="Log In">
                                    <span>Sign In</span>
                                </button>
                            </Link>
                            <button className='group relative h-fit rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50 pointer-events-auto w-full'>
                                <span className='flex flex-row items-center justify-center gap-2 rounded-lg transition-all from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 text-[#FFFFFF] hover:bg-clip-text hover:text-transparent hover:shadow-lg text-[14px] font-bold leading-none px-4 py-3 bg-custom-gradient' >
                                    Get Started
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;