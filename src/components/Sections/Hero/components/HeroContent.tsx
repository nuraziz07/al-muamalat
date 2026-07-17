import {HeroBadge} from "@/components/Sections/Hero/components/HeroBadge.tsx";
import StudentsOpinions from "@/components/Sections/Hero/components/StudentsOpinions.tsx";


export const HeroContent = () => {
    return (
       <div>
           <HeroBadge badge={'Seeking Knowledge is an Obligation in Islam'} title={'Enhance Your Understanding of Islamic Ethics with Al-Muamalat'} />
           <StudentsOpinions />
       </div>
    )
}