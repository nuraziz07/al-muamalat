import { createFileRoute } from '@tanstack/react-router'
import AskQuestionsBadge from "@/components/Shared/AskQuestionsBadge";
import {Rating_3, Auth_Photo} from '@/assets/Images/Png'
import {Logo} from '@/assets/Images/Svg'
import AuthForm from "@/components/Form/Auth_Form/Auth_Form.tsx";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/(auth)/(signup)/signup')({
  component: RouteComponent,
})

function RouteComponent() {

  const {t} = useTranslation()

  return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-gray-50 px-6 py-10">
        <img src={Logo} alt="Al Muamalat Consulting" className="h-auto w-35 object-contain"/>

        <AuthForm type={'signup'}/>
      </div>
  )
}
