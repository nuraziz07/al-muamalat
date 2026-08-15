import { createFileRoute } from '@tanstack/react-router'
import {Logo} from '@/assets/Images/Svg'
import AuthForm from "@/components/Form/Auth_Form";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/(auth)/(signin)/signin')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-gray-50 px-6 py-16">
          <img src={Logo} alt="Al Muamalat Consulting" className="h-auto w-42 object-contain"/>

          <AuthForm type={'signin'}/>
      </div>
  )
}
