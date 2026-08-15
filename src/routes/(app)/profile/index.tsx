import {createFileRoute, redirect} from '@tanstack/react-router'
import ProfileSidebar from "@/routes/(app)/profile/-components/ProfileSideBar";
import PurchasedCourses from "@/routes/(app)/profile/-components/PurchasedCourses";

type ProfileSearch = {
    tab?: string
}

export const Route = createFileRoute('/(app)/profile/')({
    beforeLoad: ({location}) => {
        const user = localStorage.getItem('userToken');

        if (!user) {
            throw redirect({
                to: '/signin',
                search: {
                    redirect: location.href,
                },
            });
        }
    },
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): ProfileSearch => {
     return {
         tab: (search?.tab as string) ?? undefined
     }
  }
})

function RouteComponent() {

  return (
      <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">My profile</h1>
              <p className="mt-1 text-gray-500">
                  Manage personal information and purchased courses
              </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr] lg:items-start">
              <ProfileSidebar/>
              <PurchasedCourses/>
          </div>
      </div>
  )
}
