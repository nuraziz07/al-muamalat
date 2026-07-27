import React from 'react';
import cls from "classnames";
import classes from "@/components/Form/Auth_Form/Form.module.scss";
import {useForm} from "react-hook-form";

interface VerifyCodeProps {
    handleVerifyOTP: () => void
}

const VerifyCode = ({handleVerifyOTP}: VerifyCodeProps) => {

    const {register, handleSubmit} = useForm()

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
                Verify
            </button>
        </form>
    );
};

export default VerifyCode;