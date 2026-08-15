import React, {useState} from 'react';
import {Link, useNavigate} from "@tanstack/react-router";
import {useForm} from "react-hook-form";
import {useLogin, useResendOTP, useVerifyLoginOTP} from "@/hooks/custom/useAuth.ts";
import cls from 'classnames'
import VerifyCode from "@/components/Form/Auth_Form/components/Verify_Code";
import {useTranslation} from "react-i18next";
import {LoadingOutlined} from "@ant-design/icons";
import {message} from "antd";
import ForgotPassword from "@/components/Form/Auth_Form/components/Forgot_Password";

interface SignInFormValues {
    email: string;
    password: string;
}

const SignInForm = () => {

    const {handleSubmit, register} = useForm<SignInFormValues>()
    const loginMutation = useLogin()
    const verifyMutation = useVerifyLoginOTP()
    const resendMutation = useResendOTP('signin')

    const {t} = useTranslation()
    const [step, setStep] = useState<'login' | 'verify' | 'forgot'>('login')
    const [resendStep, setResendStep] = useState<boolean>(false)

    const navigate = useNavigate()
    const [email, setEmail] = useState<string | null>(null)

    const handleLogin = (data: SignInFormValues) => {
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

    const handleVerifyLoginOTP = (data: any) => {
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

    if (step === 'forgot') {
        return <ForgotPassword onSuccess={() => setStep('login')}/>
    }

    if (step === 'verify') {
        return (
            <VerifyCode
                resendStep={resendStep}
                handleResendOTP={handleResendOTP}
                resendLoading={resendMutation.isPending}
                loading={verifyMutation.isPending}
                handleVerifyOTP={handleVerifyLoginOTP}
            />
        )
    }

    return (
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="mb-8 text-center">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">
                    {t('login.title') || 'Login'}
                </h1>
                <p className="text-sm text-gray-500">
                    {t('login.description') || 'Enter your email below to login to your account'}
                </p>
            </div>

            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-6">
                <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">
                        {t('login.emailLabel') || 'Email'}
                    </label>
                    <input
                        {...register('email', {required: true})}
                        type="email"
                        placeholder="m@example.com"
                        className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-orange-400"
                    />
                </div>

                <div>
                    <div className="mb-2 flex items-center justify-between">
                        <label className="text-sm font-semibold text-gray-900">
                            {t('login.passwordLabel') || 'Password'}
                        </label>
                        <button
                            type="button"
                            onClick={() => setStep('forgot')}
                            className="text-sm text-gray-900 underline underline-offset-2 hover:text-orange-500"
                        >
                            Forgot Password?
                        </button>
                    </div>
                    <input
                        {...register('password', {required: true})}
                        type="password"
                        className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition-colors focus:border-orange-400"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loginMutation.isPending}
                    className={cls(
                        'flex h-12 w-full items-center justify-center rounded-xl bg-orange-500 text-sm font-semibold text-white transition-colors hover:bg-orange-600',
                        loginMutation.isPending && 'opacity-70'
                    )}
                >
                    {loginMutation.isPending ? <LoadingOutlined/> : 'Submit'}
                </button>

                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-semibold text-gray-900 underline underline-offset-2">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignInForm;