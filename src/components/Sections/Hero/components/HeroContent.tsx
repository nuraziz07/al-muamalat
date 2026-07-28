import {HeroBadge} from "@/components/Sections/Hero/components/HeroBadge.tsx";
import StudentsOpinions from "@/components/Sections/Hero/components/StudentsOpinions.tsx";
import {useTranslation} from "react-i18next";


export const HeroContent = () => {

    const {t} = useTranslation()

    return (
       <div>
           <HeroBadge badge={t('hero.badge')} title={t('hero.title')} />
           <StudentsOpinions />
       </div>
    )
}