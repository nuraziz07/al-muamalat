import { createFileRoute } from '@tanstack/react-router'
import {services} from "@/Constants";
import ExtendedServiceCard from "@/components/Cards/ExtendedServiceCard";
import React from "react";
import PageHead from "@/components/PageHead";

export const Route = createFileRoute('/(app)/services/')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
      <div className={'pb-10'}>
          <div className={'mt-10'}>
              <PageHead title={'Services'} />
          </div>
          <div className="mx-auto max-w-6xl flex flex-col gap-5 px-4 sm:gap-6 sm:px-6 md:gap-7 md:px-0">
              {services.map((item, index) => (
                  <ExtendedServiceCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      isDark={index % 2 !== 0}
                  />
              ))}
          </div>
      </div>
  )
}
