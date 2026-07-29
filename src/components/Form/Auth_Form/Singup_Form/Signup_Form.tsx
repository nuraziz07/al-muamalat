import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "@tanstack/react-router";
import {AuthContext} from "@/Providers/AuthContext.tsx";
import {useForm} from "react-hook-form";
import cls from "classnames";
import classes from '../Form.module.scss'
import VerifyCode from "@/components/Form/Auth_Form/components/Verify_Code";
import {useTranslation} from "react-i18next";
import {LoadingOutlined} from "@ant-design/icons";

const SignUpForm = () => {

    const useAuth = () => useContext(AuthContext)
    const {t} = useTranslation()

    const auth = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [success, setSuccess] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)
    const [verifyLoading, setVerifyLoading] = useState<boolean>(false)

    const {register, handleSubmit, formState: {errors}, watch} = useForm()

    const onSubmit = (data) => {
        setLoading(true)
        auth.register(data).then(res => {
            if(res) {
                setEmail(res?.email ?? res?.data?.data?.email)
                setLoading(false)
                setSuccess(false)
            }
        }).catch(() => {
            setSuccess(true)
        }).finally(() => {
            setLoading(false)
        })
    }


    const handleVerifyOTP = (data) => {
        const submitData = {
            email: email,
            ...data
        }
        setVerifyLoading(true)
        auth.registerSmsCode(submitData).then((res) => {
            setVerifyLoading(false)
            if(res) {
                navigate({to: '/'})
            }
        }).finally(() => {
            setVerifyLoading(false)
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

            {success ? <form onSubmit={handleSubmit(onSubmit)}>
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
                    type={'submit'}>{loading ? <LoadingOutlined /> : t('register.signUp')}
                </button>
            </form> : <VerifyCode loading={verifyLoading} handleVerifyOTP={handleVerifyOTP} />}

        </div>
    );
};

export default SignUpForm;