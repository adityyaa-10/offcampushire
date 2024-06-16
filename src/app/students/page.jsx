import SayGoodbye from "@/components/Students/SayGoodbye"
import SpecialFeatures from "@/components/Students/SpecialFeatures"
import Steps from "@/components/Students/Steps"
import StudentsHeader from "@/components/Students/StudentsHeader"

const StudentsPage = () => {
    return (
        <>
            <StudentsHeader />
            <Steps />
            <SayGoodbye />
            <SpecialFeatures />
        </>
    )
}

export default StudentsPage
