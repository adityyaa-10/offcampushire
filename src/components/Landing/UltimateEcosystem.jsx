const UltimateEcosystem = () => {
  return (
    <div className="purple-bg">
      <div
        className={
          "ultimate flex min-h-screen w-full flex-col items-center space-y-16 py-[100px] lg:px-44"
        }
      >
        <h1
          className={`${Semibold.className} text-center text-3xl lg:text-5xl`}
        >
          The{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
            }}
          >
            ultimate ecosystem
          </span>{" "}
          <br /> for levelling up in web3
        </h1>
        <div className="">
          <div className="flex w-full flex-col gap-6 lg:columns-3 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
            <UltimateCard number="552k" title="code lessons completed" />
            <UltimateCard number="59k" title="AU students" />
            <UltimateCard number="2,797" title="total projects created" />
          </div>
        </div>

        <div className="z-10 mx-4 lg:mx-0">
          <div className="max-w-xl rounded-2xl border-2 bg-white px-4 py-4 lg:px-8 lg:py-8">
            <div className="relative bottom-12 left-12 h-0 lg:left-0">
              <Image src={quote} alt="" />
            </div>
            <motion.p
              ref={refTwo}
              className={` ${general.className} leading-[1.75rem] lg:text-3xl lg:leading-[3rem]`}
              variants={fadeUp}
              initial="hidden"
              animate={inViewTwo ? "visible" : "hidden"}
            >
              I learned the skillset I needed to transition from web2 to web3
              and it led directly to landing my dream job and helping secure the
              open economy.
            </motion.p>

            <div className="mt-8 lg:mt-24">
              <p className="font-semibold lg:text-lg">
                Dan McKeon,{" "}
                <span className="text-[#363ff9]">@OpenZeppelin</span>
              </p>
              <span className="lg:text-md text-sm text-[#99a3b3]">
                Full Stack Ethereum Developer
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-48 -z-0">
        <Image src={divider} alt="" className="" />
      </div>
    </div>
  );
};

export default UltimateEcosystem;
