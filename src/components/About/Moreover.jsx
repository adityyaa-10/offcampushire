import { MonaMedium } from "@/utils/fonts";

const Moreover = () => {
  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-br from-[#d9d9d900] to-[#cdd3fd] px-2 py-[120px]">
      <div className="rounded-2xl border border-[#D7D7D7] bg-white px-6 py-14 text-center sm:px-12">
        <span
          className={`${MonaMedium.className} mb-4 bg-text-gradient bg-clip-text text-6xl tracking-tighter text-transparent lg:text-[6rem]`}
        >
          Moreover
        </span>
        <p
          className={
            "mt-6 text-lg leading-[2.25rem] lg:text-[1.5rem] lg:leading-[2.9rem]"
          }
        >
          Every fresher starts searching for <br />
          jobs on traditional job hunting platforms <br />
          excitedly, only to find that most opportunities <br />
          ask for experience they don&apos;t have yet
        </p>
      </div>
    </div>
  );
};

export default Moreover;
