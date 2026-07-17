import React from 'react';
import Header from './Header';
import BriefInfoCard from "@/routes/(app)/programs/-components/BriefInfoCard";
import {StepForward, Video} from 'lucide-react'

function BriefInformation() {

    const modules = [
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
        <div>
            <Header title={'Brief information about the course'} />
            <BriefInfoCard dataSource={modules} />
        </div>
    )
}

export default BriefInformation