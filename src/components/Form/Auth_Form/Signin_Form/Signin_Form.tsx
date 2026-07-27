import React, {useState} from 'react';
import {Link, useNavigate} from "@tanstack/react-router";
import {useForm} from "react-hook-form";
import {useAuth} from "@/hooks/custom/useAuth.ts";
import classes from '../Form.module.scss'
import cls from 'classnames'
import VerifyCode from "@/components/Form/Auth_Form/components/Verify_Code";

const SignInForm = () => {

    const {handleSubmit, register} = useForm()

    const auth = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [success, setSuccess] = useState<boolean>(true)

    const onSubmit = (data) => {
        auth.login(data).then(res => {
            setEmail(res?.data?.data?.email)
            setSuccess(false)
        })
    }

    const handleVerifyOTP = (data) => {
        const submitData = {
            email: email,
            ...data
        }
        auth.loginSmsCode(submitData).then((res) => {
            navigate({to: '/'})
        })
    }

    return (
        <div className="flex w-full max-w-md flex-col gap-5">
              <div className={'flex text-center flex-col gap-2'}>
                  <h1 className="mb-2 text-6xl font-black text-center uppercase tracking-tight text-gray-900">Get started</h1>
                  <p className={'text-[16px] text-[#8F8F8F]'}>Enter your email below to login to your account</p>
              </div>
            {/* Email field */}
            {success ? <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-5">

                <div className={'relative flex flex-col gap-5'}>
                    <input {...register('email')} className={cls(classes['input'])} placeholder={'Enter your email'}/>

                    <input {...register('password')} className={cls(classes['input'])} placeholder={'Password'}/>
                    {/*{item.icon && <Mail className="pointer-events-none absolute right-4 top-1/5 h-5 w-5 -translate-y-1/2 text-gray-400" />}*/}
                </div>

                <button type={'submit'} className={cls(classes['form_button'])}>
                    Sign in
                </button>

                <Link to={'/signup'} className="text-center text-base text-gray-500 hover:text-gray-700">
                    Create a new account !
                </Link>

            </form> : <VerifyCode handleVerifyOTP={() => handleVerifyOTP}/>}

        </div>
    );
};

export default SignInForm;