import {createFileRoute, useNavigate} from '@tanstack/react-router'
import SectionHead from "@/components/SectionHead";
import React, {ReactNode} from "react";
import CourseCard from "@/components/Cards/CourseCard";
import {useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";
import {Service} from '../../../assets/Images/Png'
import Empty from "@/components/Empty";

export const Route = createFileRoute('/(app)/programs/')({
  component: RouteComponent,
})

function RouteComponent() {

    const navigate = useNavigate()

    const {data: courses} = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const response = await request.get('/courses/main')
            return response?.data?.data ?? []
        }
    })

    const onLearnMore = (courseId) => {
        navigate({
            to: '/programs/$courseId',
            params: {courseId: courseId}
        })
    }

  return (
      <section>
          <div className={'mt-10'}>
              <SectionHead title={'Online Courses'} subtitle={'Al Muamalat\'s international study programs offer an in-depth learning experience at leading Islamic financial institutions around the world.'} />
          </div>
          <div className="flex justify-center items-center gap-12 px-20 pb-10">
              {courses ? courses?.map((courseItem): ReactNode => (
                  <CourseCard image={Service} onLearnMore={() => onLearnMore(courseItem.course_id)} title={courseItem.name_uz} price={0} key={courseItem.id}/>
              )) : <Empty />}
          </div>
      </section>
  )
}
