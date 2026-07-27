import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "@tanstack/react-router";
import {AuthContext} from "@/Providers/AuthContext.tsx";
import {useForm} from "react-hook-form";
import cls from "classnames";
import classes from '../Form.module.scss'
import VerifyCode from "@/components/Form/Auth_Form/components/Verify_Code";

const SignUpForm = () => {

    const useAuth = () => useContext(AuthContext)

    const auth = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [success, setSuccess] = useState<boolean>(true)

    const {register, handleSubmit, formState: {errors}, watch} = useForm()

    const onSubmit = (data) => {
        auth.register(data).then(res => {
            setEmail(res?.data?.data?.email)
            setSuccess(false)
        })
    }

    const handleVerifyOTP = (data) => {
        const submitData = {
            email: email,
            ...data
        }
        auth.smsCode(submitData).then((res) => {
            navigate({to: '/'})
        })
    }

    return (
        <div className="flex text-center w-full max-w-md flex-col gap-5">
            <div>
                <h1 className="mb-3 text-[70px] font-black uppercase tracking-tight text-gray-900">
                    Get started
                </h1>
                <p className="text-[26px] text-[#8F8F8F]">
                    Already have an account?{" "}
                    <Link to={'/signin'} className="font-semibold text-[#009688] hover:text-teal-700">
                        Sign In
                    </Link>
                </p>
            </div>

            {success ? <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative flex flex-col mt-3 gap-5">

                    <div className={'flex flex-row gap-5'}>
                        <input type={'text'} {...register('first_name', {required: 'Enter your name'})}
                               className={cls(classes['input'])}
                               placeholder={'First name'}/>

                        <input type={'text'} {...register('last_name', {required: true})}
                               className={cls(classes['input'])}
                               placeholder={'Last name'}/>
                    </div>

                    <input type={'email'} {...register('email', {required: true})}
                           className={cls(classes['input'])}
                           placeholder={'Enter your email'}/>

                    <input type={'password'} {...register('password', {required: true})}
                           className={cls(classes['input'])}
                           placeholder={'Password'}/>

                    <input type={'text'} {...register('phone_number', {required: true})}
                           className={cls(classes['input'])}
                           placeholder={'Enter your phone number'}/>

                </div>

                <button
                    className={cls(classes['form_button'])}
                    type={'submit'}>Sign Up
                </button>
            </form> : <VerifyCode handleVerifyOTP={() => handleVerifyOTP} />}

        </div>
    );
};

export default SignUpForm;