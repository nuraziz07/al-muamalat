import { createFileRoute } from '@tanstack/react-router'
import {services} from "@/Constants";
import ExtendedServiceCard from "@/components/Cards/ExtendedServiceCard";
import SectionHead from "@/components/SectionHead";
import React from "react";

export const Route = createFileRoute('/(app)/services/')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
      <div className={'pb-10'}>
          <div className={'mt-10'}>
              <SectionHead title={'Services'} />
          </div>
          <div className="mx-auto max-w-6xl flex flex-col gap-7">
              {services.map((item, index) => (
                  <ExtendedServiceCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      isDark={index % 2 !== 0} // 0, 2, 4... oq; 1, 3, 5... yashil
                  />
              ))}
          </div>
      </div>
  )
}
