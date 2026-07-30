import React, {useState} from 'react';
import {Link, useNavigate} from "@tanstack/react-router";
import {useForm} from "react-hook-form";
import {useAuth, useLogin, useResendOTP, useVerifyLoginOTP} from "@/hooks/custom/useAuth.ts";
import classes from '../Form.module.scss'
import cls from 'classnames'
import VerifyCode from "@/components/Form/Auth_Form/components/Verify_Code";
import {useTranslation} from "react-i18next";
import {LoadingOutlined} from "@ant-design/icons";
import {message} from "antd";

const SignInForm = () => {

    const {handleSubmit, register} = useForm()
    const loginMutation = useLogin()
    const verifyMutation = useVerifyLoginOTP()
    const resendMutation = useResendOTP('login')
    const {t} = useTranslation()
    const [step, setStep] = useState<'login' | 'verify'>('login')
    const [resendStep, setResendStep] = useState<boolean>(false)


    const navigate = useNavigate()
    const [email, setEmail] = useState(null)

    const handleLogin = (data) => {
        loginMutation.mutate(data, {
            onSuccess: (res) => {
                setEmail(res?.data?.email ?? res?.data?.data?.email)
                setStep('verify')
                setResendStep(true)
            }
        })
    }

    const handleVerifyLoginOTP = () => {
        const submitData = {
            email: email,
        }
        verifyMutation.mutate(submitData, {
            onSuccess: () => {
                navigate({to: '/'})
            }
        })
    }

    const handleResendOTP = (data) => {
        const submitData = {
            email: email,
            ...data
        }
        resendMutation.mutate(submitData, {
            onSuccess: (res) => message.success(res?.data?.message)
        })
    }

    return (
        <div className="flex w-full max-w-md flex-col gap-5">
            <div className={'flex text-center flex-col gap-2'}>
                <h1 className="mb-2 text-6xl font-black text-center uppercase tracking-tight text-gray-900">{t('login.title')}</h1>
                <p className={'text-[16px] text-[#8F8F8F]'}>{t('login.description')}</p>
            </div>
            {/* Email field */}
            {step === 'login' ? <form onSubmit={handleSubmit(handleLogin)} className="relative flex flex-col gap-5">

                <div className={'relative flex flex-col gap-5'}>
                    <input {...register('email')} className={cls(classes['input'])} placeholder={t('login.email')}/>

                    <input {...register('password')} type={'password'} className={cls(classes['input'])}
                           placeholder={t('login.password')}/>
                    {/*{item.icon && <Mail className="pointer-events-none absolute right-4 top-1/5 h-5 w-5 -translate-y-1/2 text-gray-400" />}*/}
                </div>

                <button type={'submit'} className={cls(classes['form_button'])}>
                    {loginMutation.isPending ? <LoadingOutlined/> : t('login.signIn')}
                </button>

                <Link to={'/signup'} className="text-center text-base text-gray-500 hover:text-gray-700">
                    {t('login.createAccount')}
                </Link>

            </form> : <VerifyCode resendStep={resendStep} handleLoginResendOTP={handleResendOTP}
                                  resendLoading={resendMutation.isPending} loading={verifyMutation.isPending}
                                  handleVerifyOTP={handleVerifyLoginOTP}/>}

        </div>
    );
};

export default SignInForm;