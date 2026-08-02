import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "@tanstack/react-router";
import {AuthContext} from "@/Providers/AuthContext.tsx";
import {useForm} from "react-hook-form";
import cls from "classnames";
import classes from '../Form.module.scss'
import VerifyCode from "@/components/Form/Auth_Form/components/Verify_Code";
import {useTranslation} from "react-i18next";
import {LoadingOutlined} from "@ant-design/icons";
import {useRegister, useResendOTP, useVerifyRegisterOTP} from "@/hooks/custom/useAuth.ts";
import {message} from "antd";
import {VerifyRegisterParams} from "@/Services/auth/auth.types.ts";

const SignUpForm = () => {

    const useAuth = () => useContext(AuthContext)
    const registerMutation = useRegister()
    const verifyRegisterOTP = useVerifyRegisterOTP()
    const resendMutation = useResendOTP('signup')

    const {t} = useTranslation()
    const [step, setStep] = useState<'signup' | 'verify'>('signup')

    const auth = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [resendStep, setResendStep] = useState<boolean>(false)

    const {register, handleSubmit, formState: {errors}, watch} = useForm()


    const handleRegister = (data) => {
        return registerMutation.mutate(data, {
            onSuccess: (res) => {
                if (res) {
                    setEmail(res?.data?.email ?? res?.data?.data?.email)
                    setStep('verify')
                    setResendStep(true)
                }
            },
            onError: (err) => message.error(err?.response?.data?.message ?? err?.message)
        })
    }

    const handleVerifyRegisterOTP = () => {
        const submitData: VerifyRegisterParams = {
            email: email,
        }
        return  verifyRegisterOTP.mutate(submitData, {
            onSuccess: () => {
                navigate({to: '/'})
            },
            onError: (err) => message.error(err?.response?.data?.message ?? err?.message)
        })
    }

    const handleRegisterResendOTP = () => {
        const submitData = {
            email: email,
        }
        resendMutation.mutate(submitData, {
            onSuccess: (res) => message.success(res?.data?.message),
            onError: (err) => message.error(err?.response?.data?.message ?? err?.message)
        })
    }

    return (
        <div className="flex text-center w-full max-w-md flex-col gap-5">
            <div>
                <h1 className="mb-3 text-[70px] font-black uppercase tracking-tight text-gray-900">
                    {t('register.title')}
                </h1>
                <p className="text-[26px] text-[#8F8F8F]">
                    {t('register.alreadyAccount')}{" "}
                    <Link to={'/signin'} className="font-semibold text-[#009688] hover:text-teal-700">
                        {t('register.signIn')}
                    </Link>
                </p>
            </div>

            {step === 'signup' ? <form onSubmit={handleSubmit(handleRegister)}>
                <div className="relative flex flex-col mt-3 gap-5">

                    <div className={'flex flex-row gap-5'}>
                        <input type={'text'} {...register('first_name', {required: 'Enter your name'})}
                               className={cls(classes['input'])}
                               placeholder={t('register.firstName')}/>

                        <input type={'text'} {...register('last_name', {required: true})}
                               className={cls(classes['input'])}
                               placeholder={t('register.lastName')}/>
                    </div>

                    <input type={'email'} {...register('email', {required: true})}
                           className={cls(classes['input'])}
                           placeholder={t('register.email')}/>

                    <input type={'password'} {...register('password', {required: true})}
                           className={cls(classes['input'])}
                           placeholder={t('register.password')}/>

                    <input type={'text'} {...register('phone_number', {required: true})}
                           className={cls(classes['input'])}
                           placeholder={t('register.phone')}/>

                </div>

                <button
                    className={cls(classes['form_button'])}
                    type={'submit'}>{registerMutation.isPending ? <LoadingOutlined/> : t('register.signUp')}
                </button>
            </form> : <VerifyCode resendStep={resendStep} resendLoading={resendMutation.isPending} handleResendOTP={handleRegisterResendOTP} loading={verifyRegisterOTP.isPending} handleVerifyOTP={handleVerifyRegisterOTP}/>}

        </div>
    );
};

export default SignUpForm;