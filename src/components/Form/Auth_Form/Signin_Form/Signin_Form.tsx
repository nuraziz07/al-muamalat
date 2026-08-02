import React, {useState} from 'react';
import {Link, useNavigate} from "@tanstack/react-router";
import {useForm} from "react-hook-form";
import {useLogin, useResendOTP, useSubmitForgotEmail, useVerifyLoginOTP} from "@/hooks/custom/useAuth.ts";
import classes from '../Form.module.scss'
import cls from 'classnames'
import VerifyCode from "@/components/Form/Auth_Form/components/Verify_Code";
import {useTranslation} from "react-i18next";
import {LoadingOutlined} from "@ant-design/icons";
import {message} from "antd";
import ForgotPassword from "@/components/Form/Auth_Form/components/Forgot_Password";

const SignInForm = () => {

    const {handleSubmit, register} = useForm()
    const loginMutation = useLogin()
    const verifyMutation = useVerifyLoginOTP()
    const resendMutation = useResendOTP('signin')

    const {t} = useTranslation()
    const [step, setStep] = useState<'login' | 'verify' | 'forgot'>('login')
    const [resendStep, setResendStep] = useState<boolean>(false)
    const [forgotPasswordStep, setForgotPasswordStep] = useState<boolean>(false)

    const navigate = useNavigate()
    const [email, setEmail] = useState(null)

    const handleLogin = (data) => {
        loginMutation.mutate(data, {
            onSuccess: (res) => {
                if (res) {
                    const token = res?.data?.data?.tokens?.accessToken ?? res?.data?.tokens?.accessToken
                    if (token) window.localStorage.setItem('userToken', token)
                    setEmail(res?.data?.email ?? res?.data?.data?.email)
                    setStep('verify')
                    setResendStep(true)
                }
            }
        })
    }

    const handleVerifyLoginOTP = (data) => {
        const submitData = {
            email: email,
            ...data
        }
        verifyMutation.mutate(submitData, {
            onSuccess: (res) => {
                if (res) navigate({to: '/'})
            }
        })
    }

    const handleResendOTP = () => {
        const submitData = {
            email: email,
        }
        resendMutation.mutate(submitData, {
            onSuccess: (res) => message.success(res?.data?.message),
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

                <div className="flex flex-col gap-5">
                    <input
                        {...register('email', {required: true})}
                        className={cls(classes.input)}
                        placeholder={t('login.email')}
                    />

                    <div className="flex flex-col gap-2">
                        <input
                            {...register('password', {required: true})}
                            type="password"
                            className={cls(classes.input)}
                            placeholder={t('login.password')}
                        />

                        <button type={'button'} onClick={() => {
                            setStep('forgot')
                            setForgotPasswordStep(true)
                        }}
                                className="self-end text-sm font-medium text-[#1D4ED8] transition-colors hover:text-[#1E40AF]"
                        >
                            Forgot Password?
                        </button>
                    </div>
                </div>

                <button type={'submit'} className={cls(classes['form_button'])}>
                    {loginMutation.isPending ? <LoadingOutlined/> : t('login.signIn')}
                </button>

                <Link to={'/signup'} className="text-center text-base text-gray-500 hover:text-gray-700">
                    {t('login.createAccount')}
                </Link>

            </form> : step === 'forgot' ? <ForgotPassword onSuccess={() => setStep('login')}/> :
                <VerifyCode resendStep={resendStep} handleResendOTP={handleResendOTP}
                            resendLoading={resendMutation.isPending} loading={verifyMutation.isPending}
                            handleVerifyOTP={handleVerifyLoginOTP}/>}
        </div>
    );
};

export default SignInForm;