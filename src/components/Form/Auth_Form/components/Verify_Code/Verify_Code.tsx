import React, {useRef} from 'react';
import cls from "classnames";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {LoadingOutlined} from "@ant-design/icons";

interface VerifyCodeProps {
    handleVerifyOTP: (data: any) => void
    loading: boolean;
    handleResendOTP: () => void,
    resendLoading: boolean;
    resendStep: boolean
    email?: string | null
}

const OTP_LENGTH = 6;

const VerifyCode = ({handleVerifyOTP, loading, handleResendOTP, resendLoading, resendStep, email}: VerifyCodeProps) => {

    const {handleSubmit, setValue, watch, reset} = useForm({
        defaultValues: {otp: ''},
    })
    const {t} = useTranslation()

    const inputsRef = useRef<(HTMLInputElement | null)[]>([])
    const otpValue = watch('otp') ?? ''
    const otpDigits = otpValue.padEnd(OTP_LENGTH, ' ').split('').slice(0, OTP_LENGTH)

    const handleDigitChange = (index: number, rawValue: string) => {
        const digit = rawValue.replace(/[^0-9]/g, '').slice(-1)

        const nextOtp = otpValue.padEnd(OTP_LENGTH, ' ').split('')
        nextOtp[index] = digit || ' '
        setValue('otp', nextOtp.join('').trimEnd())

        if (digit && index < OTP_LENGTH - 1) {
            inputsRef.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otpDigits[index]?.trim() && index > 0) {
            inputsRef.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        const pasted = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, OTP_LENGTH)
        setValue('otp', pasted)
        inputsRef.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus()
    }

    const handleVerifyWithReset = (data: { otp: string }) => {
        const submitData = data
        reset({otp: ''})
        handleVerifyOTP(submitData)
    }

    return (
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="mb-8 text-center">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">
                    {t('register.verifyTitle') || 'Verify Code'}
                </h1>
                <p className="text-sm text-gray-500">
                    {t('register.verifyDescription') || 'Enter the 6-digit code sent to your email.'}
                </p>
                {email && (
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                        {email}
                    </p>
                )}
            </div>

            <form onSubmit={handleSubmit(handleVerifyWithReset)} className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-1 rounded-xl border border-gray-200 px-4 py-4">
                    {Array.from({length: OTP_LENGTH}).map((_, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputsRef.current[index] = el)}
                            inputMode="numeric"
                            maxLength={1}
                            value={otpDigits[index]?.trim() ?? ''}
                            onChange={(e) => handleDigitChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={handlePaste}
                            className="h-8 w-8 border-b-2 border-gray-300 bg-transparent text-center text-lg font-semibold text-gray-900 outline-none transition-colors focus:border-orange-400"
                        />
                    ))}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={cls(
                        'flex h-12 w-full items-center justify-center rounded-xl bg-orange-500 text-sm font-semibold text-white transition-colors hover:bg-orange-600',
                        loading && 'opacity-70'
                    )}
                >
                    {loading ? <LoadingOutlined/> : (t('register.verify') || 'Verify')}
                </button>

                {resendStep && (
                    <button
                        type="button"
                        onClick={handleResendOTP}
                        disabled={resendLoading}
                        className="text-center text-sm font-semibold text-gray-900 underline underline-offset-2 hover:text-orange-500"
                    >
                        {resendLoading ? <LoadingOutlined/> : 'Resend OTP'}
                    </button>
                )}
            </form>
        </div>
    );
};

export default VerifyCode;