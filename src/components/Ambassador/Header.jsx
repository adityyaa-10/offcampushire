import { MonaBold, GeneralMedium } from "@/utils/fonts"

const Header = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat h-full w-full"
            style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/0f08/acf2/aa06f6c63b265b345f97340857cf76d9?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hQ~FG~GRLluZWGVSvqB7qjryacjyGZv8T-tH9kbwih8vzWEzeXJjgxPE7OXrb928g8Wu7KeNxAtSc-wYP7je6MIUIJcZ0499G48Wcl~CfhRrI0ZWoHIRknpy5ES7s-69yBviLKcyibd4R~JHDIEsQsH7lYtPXHQDp7mL7MbtYa2ehuIAbNrJtY7KAhaiHHe2I0Pbjudfdj30j8fw3v8Lqia-634zQnbgEAtsx5lampmMpSnUxXbgh5M2J86n1sBT4qJxaaJio7uo7BnqpM1qBU~E34w3vRQ2SJ7ikkIuM-onpmbc04Rv54jQeoM4qP5QiwJ-rLOUDsWiMvtY43FbPA__')" }}>
            <div className="relative mx-auto flex max-w-[1170px] flex-col items-center justify-between gap-10 lg:flex-row lg:gap-8 pt-14 md:pt-24 px-4">
                <div className="max-w-[670px] relative flex w-full flex-col gap-6 lg:w-1/2">
                    <h1 className={`${MonaBold.className} text-[36px] md:text-[48px] lg:text-[55px] md:leading-[4rem] lg:leading-[4.5rem]`}>
                        <span className="text-gray-950">
                            <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#FF9C27] to-[#FD48CE]">
                                OffcampusHire
                            </span>
                            <br />Placement Ambassador
                        </span>
                    </h1>
                    <p className={`text-[20px] md:text-[22px] leading-[2.4rem] md:leading-[2.8rem] text-[#3F3F42] ${GeneralMedium.className}`}>
                        A #PlacementRep program where you get to empower your
                        peers to explore offcampus placement drives, while you develop
                        essential skills - leadership, communication, and marketing.
                    </p>
                    <div className="flex w-full flex-col gap-4 sm:w-fit sm:flex-row sm:gap-2">
                        <button className="w-full sm:w-fit">
                            <div className="group relative h-full rounded-lg transition-all focus:shadow-purple focus:outline-none w-full sm:w-fit">
                                <span className={`flex h-full flex-row items-center justify-center gap-2 rounded-lg transition-all bg-gray-950 text-white hover:bg-gray-700 focus:bg-gray-950 active:bg-gray-800 font-button-size-200 px-4 py-3 ${GeneralMedium.className}`}>
                                    Deployment addresses
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
                <div data-testid="hero-component" className="min-h-lg flex h-fit w-full max-w-xl items-center rounded-lg lg:w-1/2 bg-transparent">
                    <img alt="smart contract accounts" fetchPriority="high" width="1170" height="928" decoding="async" data-nimg="1" className="mx-auto h-full w-full max-w-4xl rounded-lg text-transparent" src="https://www.alchemy.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F105223%2F1713934556-smart-contract-accounts-hero.png&w=1200&q=75" />
                </div>
            </div >

        </div >
    )
}

export default Header
