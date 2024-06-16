import { MonaMedium } from '@/utils/fonts'

const Reimagining = () => {
    return (
        <div className="relative w-full">
            <div className="relative bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/d921/0d85/4be41e73dfca0db9ea660f32e4b35d57?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fClCDI9e2WRygD255sSHdyhXzfH1L-OtDiXccGqDnmNfCBLEtbthXKHDo4XeaWbRIoASJm6whqC7Bfs4~da8vcbihb8PnpnWYe-GsSfbkx6ozZjXyqzjH1wwXQ1n~OwIGfD6PXrtxYYWSjhfA6HItzCTEx0LSLWQBeYo8iTwGQ80Be1I8ufDrot6Djc~ekuwRm~UqxKZwEZRRFhLsQFnXOo-CkqXmHX4wa37bG~Y16nsHyTFtUhNS9Pl9ZZl7692BrJQOf22XBoGhc7BmUJXWN95oDq0W~hnTdCvtSJFMd~sTvRg7-cqjm0nkNVjQq3yvcwX66qbPbTS5r4dzPRtzA__')" }}>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="mx-auto flex flex-col justify-center items-center py-12 md:py-20 lg:py-28 px-4 sm:px-7 lg:px-4 z-10 relative text-white">
                    <h5 className={`text-[2.25rem] ${MonaMedium.className} max-w-[840px] text-left md:text-center`}>
                        Reimagining your off-campus placement journey
                    </h5>
                    <div className={`text-[1.25rem] space-y-10 pt-12 leading-[2.1rem] text-white/80 max-w-[770px] text-left md:text-center`}>
                        <p>
                            Are you tired of generic, crowded placement drives that offer
                            limited opportunities?
                            Do you dream of landing your dream job at a top company, but feel
                            lost in the sea of applicants?
                        </p>
                        <p>
                            OffCampusHire is the game-changer in India&apos;s off-campus
                            recruitment scene.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reimagining
