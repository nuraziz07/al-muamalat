import React, {useState} from 'react';
import cls from "classnames";
import classes from "@/components/Form/Auth_Form/Form.module.scss";
import {LoadingOutlined} from "@ant-design/icons";
import {useForm} from "react-hook-form";
import {authApi} from "@/Services/auth/auth.api.ts";
import {message} from "antd";
import {useConfirmForgotPassword, useSubmitForgotEmail} from "@/hooks/custom/useAuth.ts";
import {Link, useNavigate} from "@tanstack/react-router";

interface ForgotPasswordProps {
    onSuccess: () => void
}


const ForgotPassword = ({onSuccess}: ForgotPasswordProps) => {

    const {register, handleSubmit} = useForm()
    const [verify, setVerify] = useState(false)
    const forgotPasswordMutation = useSubmitForgotEmail()
    const forgotPasConfirmMutation = useConfirmForgotPassword()


    const [email, setEmail] = useState(null)
    const navigate = useNavigate()

    const handleForgotPassword = (data) => {
        return forgotPasswordMutation.mutate(data, {
            onSuccess: (res) => {
                setEmail(res?.data?.email ?? res?.data?.data?.email)
                setVerify(true)
                message.success(res?.data?.message)
            },
            onError: (err) => {
                setVerify(false)
                message.error(err?.response?.data?.message ?? err?.message)
            }
        })
    }

    const handleConfirmForgotPassword = (data) => {
        const submitData = {
            email: email,
            ...data
        }
        return forgotPasConfirmMutation.mutate(submitData, {
            onSuccess: (res) => {
                console.log(res)
                onSuccess?.()
                message.success(res?.data?.message)
            },
            onError: (err) => {
                message.error(err?.response?.data?.message ?? err?.message)
            }
            }
        )
    }

    return (
       <>
           {verify ?  <form  onSubmit={handleSubmit(handleConfirmForgotPassword)}>
               <div className={cls(classes.emailForgetContainer, 'flex flex-col gap-5')}>
                   <input
                       {...register("otp", {required: true})}
                       className={classes.emailForget}
                       placeholder="Verification Code"
                       autoComplete="one-time-code"
                       type="text"
                   />
                   <input
                       type="password"
                       {...register("newPassword", {required: true})}
                       className={classes.emailForget}
                       placeholder="Enter your password"
                       autoComplete="new-password"
                   />
               </div>
               <button
                   className={cls('!mt-8', classes["form_button"])}
                   type="submit">
                   Verify
               </button>
           </form> : <form onSubmit={handleSubmit(handleForgotPassword)}>
               <div className={classes.emailForgetContainer}>
                   <input
                       type="email"
                       {...register("email", {required: true})}
                       className={classes.emailForget}
                       placeholder="m@example.com"
                   />
               </div>
               <button
                   className={cls('!mt-8', classes["form_button"])}
                   type="submit">
                   Submit OTP
               </button>
           </form> }
       </>
    );
};

export default ForgotPassword;