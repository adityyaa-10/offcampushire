import Hero from "@/components/Membership/Hero";
import PlanTable from "@/components/Membership/PlanTable";
import Pricing from "@/components/Membership/Pricing";
import TitleMarquee from "@/components/Membership/TitleMarquee";


const MembershipPage = () => {

    return (
        <>
            <Hero />
            <TitleMarquee />
            <Pricing />
            <PlanTable />
        </>
    );
};

export default MembershipPage;
