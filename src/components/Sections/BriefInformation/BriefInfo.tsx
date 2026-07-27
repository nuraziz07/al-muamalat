import React, {ReactNode} from 'react';
import SectionHead from "@/components/SectionHead";
import {StepForward} from "lucide-react";

type BriefInfoProps = {
    id: number;
    title: string;
    description: string;
    icon: ReactNode
}

type BriefInfoCardProps = {
    modules: BriefInfoProps[]
}
const BriefInfo = () => {

    const modules: BriefInfoProps[] = [
        {
            id: 1,
            title: "Videodarslar",
            description:
                "Lessons are posted on the platform in the form of videos, which can be viewed anytime and anywhere. Video lessons are updated.",
            icon: <StepForward />,
        },
        {
            id: 2,
            title: "Tasks",
            description:
                "Test tasks are given at the end of the module. Only students who successfully pass the test will be able to access the lessons in the next module.",
            icon: <StepForward />,
        },
    ];
    return (
        <section>
             <SectionHead title={'Brief information about the course'} />
             <BriefInfoCard modules={modules} />
        </section>
    );
};

export default BriefInfo;



function BriefInfoCard({modules}: BriefInfoCardProps) {
    return (
        <div className={'flex px-30 gap-3 justify-center items-center'}>
            {modules.map((item) => {
                return (
                    <div key={item.id} className={'flex px-10 flex-col gap-2'}>
                        <div className={'flex gap-2 items-center'}>
                            <h1 className={'text-[#009688] font-[500] text-[32px]'}>{item.title}</h1>
                            <div className={'text-[#009688]'}>{item.icon}</div>
                        </div>
                        <p className={'font-[400] text-[27px] text-[#152032]'}>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}