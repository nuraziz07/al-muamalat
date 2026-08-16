import React, {useState} from 'react';
import cls from "classnames";
import {LoadingOutlined} from "@ant-design/icons";
import {useForm} from "react-hook-form";
import {message} from "antd";
import {useConfirmForgotPassword, useSubmitForgotEmail} from "@/hooks/custom/useAuth.ts";

interface ForgotPasswordProps {
    onSuccess: () => void;
    onGoBack: () => void;
}

interface ForgotEmailValues {
    email: string;
}

interface ForgotConfirmValues {
    otp: string;
    newPassword: string;
}

const ForgotPassword = ({onSuccess, onGoBack}: ForgotPasswordProps) => {

    const {register: registerEmail, handleSubmit: handleSubmitEmail} = useForm<ForgotEmailValues>()
    const {register: registerConfirm, handleSubmit: handleSubmitConfirm} = useForm<ForgotConfirmValues>()

    const [verify, setVerify] = useState(false)
    const forgotPasswordMutation = useSubmitForgotEmail()
    const forgotPasConfirmMutation = useConfirmForgotPassword()

    const [email, setEmail] = useState<string | null>(null)

    const handleForgotPassword = (data: ForgotEmailValues) => {
        return forgotPasswordMutation.mutate(data, {
            onSuccess: (res: any) => {
                setEmail(res?.data?.email ?? res?.data?.data?.email)
                setVerify(true)
                message.success(res?.data?.message)
            },
            onError: (err: any) => {
                setVerify(false)
                message.error(err?.response?.data?.message ?? err?.message)
            }
        })
    }

    const handleConfirmForgotPassword = (data: ForgotConfirmValues) => {
        const submitData = {
            email: email,
            ...data
        }
        return forgotPasConfirmMutation.mutate(submitData, {
            onSuccess: (res: any) => {
                onSuccess?.()
                message.success(res?.data?.message)
            },
            onError: (err: any) => {
                message.error(err?.response?.data?.message ?? err?.message)
            }
        })
    }

    // 2-BOSQICH: OTP kod + yangi parol
    if (verify) {
        return (
            <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <div className="mb-8 text-center">
                    <h1 className="mb-2 text-3xl font-bold text-gray-900">
                        Verify &amp; Set Password
                    </h1>
                    <p className="text-sm text-gray-500">
                        Enter the code sent to your email and choose a new password.
                    </p>
                    {email && (
                        <p className="mt-1 text-sm font-semibold text-gray-900">
                            {email}
                        </p>
                    )}
                </div>

                <form onSubmit={handleSubmitConfirm(handleConfirmForgotPassword)} className="flex flex-col gap-6">
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-900">
                            Verification Code
                        </label>
                        <input
                            {...registerConfirm('otp', {required: true})}
                            type="text"
                            autoComplete="one-time-code"
                            placeholder="Enter code"
                            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-orange-400"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-900">
                            New Password
                        </label>
                        <input
                            {...registerConfirm('newPassword', {required: true})}
                            type="password"
                            autoComplete="new-password"
                            placeholder="Enter your new password"
                            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-orange-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={forgotPasConfirmMutation.isPending}
                        className={cls(
                            'flex h-12 w-full items-center justify-center rounded-xl bg-orange-500 text-sm font-semibold text-white transition-colors hover:bg-orange-600',
                            forgotPasConfirmMutation.isPending && 'opacity-70'
                        )}
                    >
                        {forgotPasConfirmMutation.isPending ? <LoadingOutlined/> : 'Verify'}
                    </button>

                    <button
                        type="button"
                        onClick={onGoBack}
                        className="text-center text-sm font-semibold text-gray-900 underline underline-offset-2 hover:text-orange-500"
                    >
                        Go Back
                    </button>
                </form>
            </div>
        )
    }

    // 1-BOSQICH: Email kiritish (rasmdagi holat)
    return (
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="mb-8 text-center">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">
                    Reset Password
                </h1>
                <p className="text-sm text-gray-500">
                    Enter your email. We will send you a verification code to reset your password.
                </p>
            </div>

            <form onSubmit={handleSubmitEmail(handleForgotPassword)} className="flex flex-col gap-6">
                <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-900">
                        Email
                    </label>
                    <input
                        {...registerEmail('email', {required: true})}
                        type="email"
                        placeholder="m@example.com"
                        className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-orange-400"
                    />
                </div>

                <button
                    type="submit"
                    disabled={forgotPasswordMutation.isPending}
                    className={cls(
                        'flex h-12 w-full items-center justify-center rounded-xl bg-orange-500 text-sm font-semibold text-white transition-colors hover:bg-orange-600',
                        forgotPasswordMutation.isPending && 'opacity-70'
                    )}
                >
                    {forgotPasswordMutation.isPending ? <LoadingOutlined/> : 'Send Code'}
                </button>

                <button
                    type="button"
                    onClick={onGoBack}
                    className="text-center text-sm font-semibold text-gray-900 underline underline-offset-2 hover:text-orange-500"
                >
                    Go Back
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;