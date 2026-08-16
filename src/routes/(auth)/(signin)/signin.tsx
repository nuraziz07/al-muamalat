import { createFileRoute } from '@tanstack/react-router'
import {Logo} from '@/assets/Images/Svg'
import AuthForm from "@/components/Form/Auth_Form";
import cls from "classnames";
import classes from './signin.module.scss'

export const Route = createFileRoute('/(auth)/(signin)/signin')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
      <div className={cls(classes.signin_page)}>
          <img src={Logo} alt="Al Muamalat Consulting" className="h-auto w-42 object-contain"/>

          <AuthForm type={'signin'}/>
      </div>
  )
}
