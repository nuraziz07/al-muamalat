import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "@tanstack/react-router";
import {AuthContext} from "@/Context/AuthContext.tsx";
import {useForm} from "react-hook-form";
import cls from "classnames";
import VerifyCode from "@/components/Form/Auth_Form/components/Verify_Code";
import {useTranslation} from "react-i18next";
import {LoadingOutlined} from "@ant-design/icons";
import {useRegister, useResendOTP, useVerifyRegisterOTP} from "@/hooks/custom/useAuth.ts";
import {message} from "antd";
import {VerifyRegisterParams} from "@/Services/auth/auth.types.ts";

interface SignUpFormValues {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
}

const SignUpForm = () => {

    const useAuth = () => useContext(AuthContext)
    const registerMutation = useRegister()
    const verifyRegisterOTP = useVerifyRegisterOTP()
    const resendMutation = useResendOTP('signup')

    const {t} = useTranslation()
    const [step, setStep] = useState<'signup' | 'verify'>('signup')

    const auth = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState<string | null>(null)
    const [resendStep, setResendStep] = useState<boolean>(false)

    const {register, handleSubmit} = useForm<SignUpFormValues>()

    const handleRegister = (data: SignUpFormValues) => {
        return registerMutation.mutate(data, {
            onSuccess: (res) => {
                if (res) {
                    setEmail(res?.data?.email ?? res?.data?.data?.email)
                    setStep('verify')
                    setResendStep(true)
                }
            },
            onError: (err: any) => message.error(err?.response?.data?.message ?? err?.message)
        })
    }

    const handleVerifyRegisterOTP = () => {
        const submitData: VerifyRegisterParams = {
            email: email,
        }
        return verifyRegisterOTP.mutate(submitData, {
            onSuccess: () => {
                navigate({to: '/'})
            },
            onError: (err: any) => message.error(err?.response?.data?.message ?? err?.message)
        })
    }

    const handleRegisterResendOTP = () => {
        const submitData = {
            email: email,
        }
        resendMutation.mutate(submitData, {
            onSuccess: (res) => message.success(res?.data?.message),
            onError: (err: any) => message.error(err?.response?.data?.message ?? err?.message)
        })
    }

    if (step === 'verify') {
        return (
            <VerifyCode
                resendStep={resendStep}
                resendLoading={resendMutation.isPending}
                handleResendOTP={handleRegisterResendOTP}
                loading={verifyRegisterOTP.isPending}
                handleVerifyOTP={handleVerifyRegisterOTP}
            />
        )
    }

    return (
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="mb-8 text-center">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">
                    {t('register.title') || 'Sign Up'}
                </h1>
                <p className="text-sm text-gray-500">
                    {t('register.description') || 'Enter your details to create a new account'}
                </p>
            </div>

            <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-900">
                            {t('register.firstName') || 'First Name'}
                        </label>
                        <input
                            type="text"
                            {...register('first_name', {required: true})}
                            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition-colors focus:border-orange-400"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-900">
                            {t('register.lastName') || 'Last Name'}
                        </label>
                        <input
                            type="text"
                            {...register('last_name', {required: true})}
                            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition-colors focus:border-orange-400"
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">
                        {t('register.email') || 'Email'}
                    </label>
                    <input
                        type="email"
                        {...register('email', {required: true})}
                        placeholder="m@example.com"
                        className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-orange-400"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">
                        {t('register.password') || 'Password'}
                    </label>
                    <input
                        type="password"
                        {...register('password', {required: true})}
                        className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition-colors focus:border-orange-400"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">
                        {t('register.phone') || 'Your phone number'}
                    </label>
                    <input
                        type="text"
                        {...register('phone_number', {required: true})}
                        placeholder="+998901234567"
                        className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-orange-400"
                    />
                </div>

                <button
                    type="submit"
                    disabled={registerMutation.isPending}
                    className={cls(
                        'flex h-12 w-full items-center justify-center rounded-xl bg-orange-500 text-sm font-semibold text-white transition-colors hover:bg-orange-600',
                        registerMutation.isPending && 'opacity-70'
                    )}
                >
                    {registerMutation.isPending ? <LoadingOutlined/> : (t('register.signUp') || 'Submit')}
                </button>

                <p className="text-center text-sm text-gray-600">
                    Already have an account?
                    <br/>
                    <Link to="/signin" className="font-semibold text-gray-900 underline underline-offset-2">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignUpForm;