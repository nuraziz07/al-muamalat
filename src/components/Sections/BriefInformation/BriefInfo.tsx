import React, {ReactNode} from 'react';
import SectionHead from "@/components/SectionHead";
import {ChevronDown} from "lucide-react";

type BriefInfoProps = {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
}

type BriefInfoCardProps = {
    modules: BriefInfoProps[];
}

const BriefInfo = () => {

    const modules: BriefInfoProps[] = [
        {
            id: 1,
            title: "Videodarslar",
            description:
                "Lessons are posted on the platform in the form of videos, which can be viewed anytime and anywhere. Video lessons are updated.",
            icon: <ChevronDown/>,
        },
        {
            id: 2,
            title: "Tasks",
            description:
                "Test tasks are given at the end of the module. Only students who successfully pass the test will be able to access the lessons in the next module.",
            icon: <ChevronDown/>,
        },
    ];

    return (
        <section>
            <SectionHead title={'Brief information about the course'}/>
            <BriefInfoCard modules={modules}/>
        </section>
    );
};

export default BriefInfo;


function BriefInfoCard({modules}: BriefInfoCardProps) {
    return (
        <div className={'grid grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-40'}>
            {modules.map((item) => {
                return (
                    <div key={item.id} className={'flex flex-col gap-3'}>
                        <div className={'flex items-center gap-1.5'}>
                            <h3 className={'text-2xl font-semibold text-[#3b8570]'}>{item.title}</h3>
                            <span className={'text-[#3b8570]'}>{item.icon}</span>
                        </div>
                        <p className={'text-lg leading-relaxed text-[#152032]'}>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}