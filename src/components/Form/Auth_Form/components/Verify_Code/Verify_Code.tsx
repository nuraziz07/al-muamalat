import React from 'react';
import cls from "classnames";
import classes from "@/components/Form/Auth_Form/Form.module.scss";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {LoadingOutlined} from "@ant-design/icons";
import {useGetUser} from "@/hooks/custom/useAuth.ts";

interface VerifyCodeProps {
    handleVerifyOTP: (data: any) => void
    loading: boolean;
    handleResendOTP: () => void,
    resendLoading: boolean;
    resendStep: booleana
}

const VerifyCode = ({handleVerifyOTP, loading, handleResendOTP, resendLoading, resendStep}: VerifyCodeProps) => {

    const {register, handleSubmit, reset} = useForm()
    const {t} = useTranslation()
    const {data} = useGetUser()

    const handleVerifyWithReset = (data) => {
        reset({otp: ''})
        handleVerifyOTP(data)
    }

    return (
        <form onSubmit={handleSubmit(handleVerifyWithReset)}>
            <div  className={cls(classes['otpContainer'])}>

                <input
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
                    onClick={handleResendOTP}
                    className={cls(classes["form_button_resend"])}
                >
                    {resendLoading ? <LoadingOutlined /> : 'Resend OTP'}
                </button>
            )}
        </form>
    );
};

export default VerifyCode;