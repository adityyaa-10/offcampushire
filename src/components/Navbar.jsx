"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex flex-col-reverse">
      <nav className="relative flex h-20 flex-col items-center justify-between border-b border-[#e5e5e5] bg-white p-4 sm:h-20 sm:flex-row sm:px-6 sm:py-0">
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between sm:h-full">
          {/* Sidebar Menu Button */}
          <button
            className="p-3 sm:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="size-6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 6h18M17 12H3M3 18h10"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </button>
          <aside
            ref={sidebarRef}
            className={`fixed inset-y-0 left-0 z-[500] w-[270px] transform bg-[#f5f5f5] transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            {/* Sidebar Content */}
            <div className="flex w-full flex-col bg-[#f5f5f5] sm:hidden">
              <div className="flex flex-col items-start border-b border-[#f5f5f5] px-6 py-10">
                <button className="group pointer-events-auto relative h-fit w-full rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50">
                  <span className="from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 flex flex-row items-center justify-center gap-2 rounded-lg bg-custom-gradient px-4 py-3 text-[14px] font-bold leading-none text-[#FFFFFF] transition-all hover:bg-clip-text hover:text-transparent hover:shadow-lg">
                    Get Started
                  </span>
                </button>
                <div className="mt-10 flex w-full flex-col items-start gap-6">
                  <Link className="text-xl" href="/login">
                    About us
                  </Link>
                  <Link className="text-xl" href="/login">
                    For Students
                  </Link>
                  <Link className="text-xl" href="/login">
                    College
                  </Link>
                  <div className="fixed inset-0 hidden bg-white px-6 pt-7"></div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex w-full items-center justify-center space-x-6 justify-self-center sm:max-w-2xl sm:justify-start">
            <Link href="/">
              <img
                src="https://www.datocms-assets.com/105223/1701819587-logo.svg"
                className="w-36"
                alt=""
              />
            </Link>
          </div>
          <Link
            className="relative flex cursor-pointer items-end justify-end space-x-2.5 rounded-md p-3 font-semibold sm:hidden"
            role="menuitem"
            href="https://go.joinleland.com/partner/partnerships"
          >
            <div className="flex w-full items-center justify-between whitespace-nowrap">
              <div className="flex items-center gap-2.5">
                <span>Join</span>
              </div>
            </div>
          </Link>
          <div className="flex h-full shrink-0 items-center justify-center space-x-6 whitespace-nowrap text-base text-[#333]">
            <Link
              className="relative hidden w-full cursor-pointer items-center justify-center space-x-2.5 rounded-md p-3 font-semibold hover:bg-slate-100 sm:flex"
              role="menuitem"
              href="/about"
            >
              <div className="flex w-full items-center whitespace-nowrap">
                <div className="flex items-center gap-2.5">
                  <span>About us</span>
                </div>
              </div>
            </Link>
            <Link
              className="relative hidden w-full cursor-pointer items-center justify-center space-x-2.5 rounded-md p-3 font-semibold sm:flex"
              role="menuitem"
              href="/students"
            >
              <div className="flex w-full items-center whitespace-nowrap">
                <div className="flex items-center gap-2.5">
                  <span>For Students</span>
                </div>
              </div>
            </Link>
            <Link
              className="relative hidden w-full cursor-pointer items-center justify-center space-x-2.5 rounded-md p-3 font-semibold sm:flex"
              role="menuitem"
              href="/colleges"
            >
              <div className="flex w-full items-center whitespace-nowrap">
                <div className="flex items-center gap-2.5">
                  <span>Colleges</span>
                </div>
              </div>
            </Link>
            <div className="hidden h-full shrink-0 items-center space-x-3 lg:flex">
              <Link href="/login">
                <button
                  type="button"
                  className="shadow-border inline-flex cursor-pointer items-center justify-center space-x-2 rounded-lg border bg-white p-3 text-sm font-semibold leading-tight shadow-transparent disabled:bg-white sm:whitespace-nowrap"
                  aria-label="Log In"
                >
                  <span>Sign In</span>
                </button>
              </Link>
              <button className="group pointer-events-auto relative h-fit w-full rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50">
                <span className="from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 flex flex-row items-center justify-center gap-2 rounded-lg bg-custom-gradient px-4 py-3 text-[14px] font-bold leading-none text-[#FFFFFF] transition-all hover:bg-clip-text hover:text-transparent hover:shadow-lg">
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
