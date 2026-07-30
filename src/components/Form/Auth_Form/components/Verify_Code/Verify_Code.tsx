import React from 'react';
import cls from "classnames";
import classes from "@/components/Form/Auth_Form/Form.module.scss";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {LoadingOutlined} from "@ant-design/icons";

interface VerifyCodeProps {
    handleVerifyOTP: (data: any) => void
    loading: boolean;
    handleLoginResendOTP: () => void,
    resendLoading: boolean;
    resendStep: boolean
}

const VerifyCode = ({handleVerifyOTP, loading, handleLoginResendOTP, resendLoading, resendStep}: VerifyCodeProps) => {

    const {register, handleSubmit, reset} = useForm()
    const {t} = useTranslation()

    const handleResended = () => {
        reset({ otp: '' })
        handleLoginResendOTP()
    }

    return (
        <form onSubmit={handleSubmit(handleVerifyOTP)}>
            <div  className={cls(classes['otpContainer'])}>

                <input
                    type="number"
                    inputMode={'numeric'}
                    {...register("otp", { required: true })}
                    className={cls(classes['otpInput'])}
                    placeholder="- - - - - -"
                />
            </div>

            <button
                className={cls(classes["form_button"])}
                type="submit"
            >
                {loading ? <LoadingOutlined /> : t('register.verify')}
            </button>

            {resendStep && (
                <button
                    type="button"
                    onClick={handleResended}
                    disabled={resendLoading}
                    className={cls(classes["form_button_resend"])}
                >
                    {resendLoading ? <LoadingOutlined /> : 'Resend OTP'}
                </button>
            )}
        </form>
    );
};

export default VerifyCode;