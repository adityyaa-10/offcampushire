import AboutHeader from "@/components/About/AboutHeader";
import DoublePara from "@/components/About/DoublePara";
import IntroducingOffcampusHire from "@/components/About/IntroducingOffcampusHire";
import Moreover from "@/components/About/Moreover";
import TheProblem from "@/components/About/TheProblem";
import UntilNow from "@/components/About/UntilNow";

const AboutPage = () => {
  return (
    <>
      <AboutHeader />
      <TheProblem />
      <DoublePara />
      <Moreover />
      <UntilNow />
      <IntroducingOffcampusHire />
    </>
  );
};

export default AboutPage;
