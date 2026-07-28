import {createFileRoute, useNavigate} from '@tanstack/react-router'
import {UserOutlined} from "@ant-design/icons";
import ProfileInfo from "@/routes/(app)/profile/-components/ProfileInfo";
import Courses from "@/routes/(app)/profile/-components/Courses/Courses.tsx";
import {Tabs} from "antd";
import {useAuth} from "@/hooks/custom/useAuth.ts";

export const Route = createFileRoute('/(app)/profile/')({
  component: RouteComponent,
  validateSearch: (search) => {
      tab: search.tab ?? undefined
  }
})

function RouteComponent() {

    const navigate = useNavigate()

    const onTabChangeQuery = (key: string) => {
        if(key === 'profile') {
            navigate({search: {}, replace: true})
        } else {
            navigate({search: {tab: key}, replace: true})
        }
    }

    const {user} = useAuth()

    const items = [
        {
            key: 'profile',
            label: 'Profile',
            children: <ProfileInfo />
        },
        {
            key: 'courses',
            label: 'Courses',
            children: <Courses />
        }
    ]

  return (
      <div className={'mt-20'}>
         <Tabs onChange={onTabChangeQuery} items={items} defaultValue={'profile'}/>
      </div>
  )
}
