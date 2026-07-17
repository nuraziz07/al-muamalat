import { createFileRoute } from '@tanstack/react-router'
import AskQuestionsBadge from "@/components/Shared/AskQuestionsBadge";
import {Rating_3, Auth_Photo} from '@/assets/Images/Png'
import {Logo} from '@/assets/Images/Svg'
import SignUpForm from "@/routes/(auth)/(signup)/-components/signUpForm.tsx";

export const Route = createFileRoute('/(auth)/(signup)/signup')({
  component: RouteComponent,
})

function RouteComponent() {



  return <div>
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
    {/* Left: form panel */}
    <div className="flex flex-col justify-between px-8 py-8 sm:px-16 lg:px-20">
      {/* Top row: logo + ask expert */}
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={Logo} alt="Al Muamalat" className="h-10 w-10 object-contain" />
          <span className="text-lg font-bold tracking-wide text-teal-600">
              AL MUAMALAT
            </span>
        </a>

        <AskQuestionsBadge name="Nuraziz" avatarSrc={Rating_3} />
      </div>

      {/* Middle: sign up form */}
      <div className="flex flex-1 items-center">
        <SignUpForm />
      </div>

      {/* Spacer to balance layout on tall screens */}
      <div className="hidden lg:block" />
    </div>

    {/* Right: illustration panel */}
    <div className="relative hidden overflow-hidden bg-teal-600 p-10 lg:flex lg:flex-col lg:justify-between">

      <div className="flex flex-1 items-center justify-center">
        <img src={Auth_Photo} alt="Sign up illustration" className="max-h-[70vh] w-auto object-contain"/>
      </div>

      <h2 className="mx-auto max-w-xl pb-8 text-center text-3xl font-bold leading-snug text-white">
        Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
      </h2>
    </div>
  </div></div>
}
