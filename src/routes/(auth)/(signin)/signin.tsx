import { createFileRoute } from '@tanstack/react-router'
import AskQuestionsBadge from "@/components/Shared/AskQuestionsBadge";
import {Auth_Photo, Rating_3} from '@/assets/Images/Png'
import {Logo} from '@/assets/Images/Svg'
import AuthForm from "@/components/Form/Auth_Form";
import {useTranslation} from "react-i18next";

export const Route = createFileRoute('/(auth)/(signin)/signin')({
  component: RouteComponent,
})

function RouteComponent() {

    const {t} = useTranslation()

  return (
      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-between px-8 py-8 sm:px-16 lg:px-10">

              <div className="flex items-end justify-between">
                  <div  className="flex items-center gap-2">
                      <img src={Logo} alt="Al Muamalat" className="h-10 w-10 object-contain" />
                      <span className="text-lg font-bold tracking-wide text-teal-600">AL MUAMALAT</span>
                  </div>

                  <AskQuestionsBadge name="Nuraziz" avatarSrc={Rating_3} />
              </div>

              {/* Middle: sign in form */}
              <div className="flex justify-center items-center">
                  <AuthForm type={'signin'} />
              </div>

              <div className="hidden lg:block" />
          </div>

          <div className="relative hidden overflow-hidden bg-teal-600 m-4 rounded-[40px] p-10 lg:flex lg:flex-col lg:justify-between">

              <div className="flex flex-1 items-center justify-center">
                  <img src={Auth_Photo} alt="Sign up illustration" className="max-h-[70vh] w-auto object-contain"/>
              </div>

              <h2 className="mx-auto max-w-xl pb-8 text-center text-3xl font-bold leading-snug text-white">
                  {t('login.welcome')}
              </h2>
          </div>
      </div>
  )
}
