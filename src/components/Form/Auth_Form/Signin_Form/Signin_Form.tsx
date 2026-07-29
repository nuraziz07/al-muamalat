import React, {useState} from 'react';
import {Link, useNavigate} from "@tanstack/react-router";
import {useForm} from "react-hook-form";
import {useAuth} from "@/hooks/custom/useAuth.ts";
import classes from '../Form.module.scss'
import cls from 'classnames'
import VerifyCode from "@/components/Form/Auth_Form/components/Verify_Code";
import {useTranslation} from "react-i18next";
import {LoadingOutlined} from "@ant-design/icons";
import {message} from "antd";

const SignInForm = () => {

    const {handleSubmit, register} = useForm()
    const {t} = useTranslation()

    const auth = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [success, setSuccess] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)
    const [verifyLoading, setVerifyLoading] = useState<boolean>(false)


    const onSubmit = (data) => {
        setLoading(true)
        auth.login(data).then(res => {
            if (res) {
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
        auth.loginSmsCode(submitData).then((res) => {
            setVerifyLoading(false)
            if (res) {
                navigate({to: '/'})
            }
        }).finally(() => {
            setVerifyLoading(false)
        })
    }


    return (
        <div className="flex w-full max-w-md flex-col gap-5">
            <div className={'flex text-center flex-col gap-2'}>
                <h1 className="mb-2 text-6xl font-black text-center uppercase tracking-tight text-gray-900">{t('login.title')}</h1>
                <p className={'text-[16px] text-[#8F8F8F]'}>{t('login.description')}</p>
            </div>
            {/* Email field */}
            {success ? <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-5">

                <div className={'relative flex flex-col gap-5'}>
                    <input {...register('email')} className={cls(classes['input'])} placeholder={t('login.email')}/>

                    <input {...register('password')} type={'password'} className={cls(classes['input'])}
                           placeholder={t('login.password')}/>
                    {/*{item.icon && <Mail className="pointer-events-none absolute right-4 top-1/5 h-5 w-5 -translate-y-1/2 text-gray-400" />}*/}
                </div>

                <button type={'submit'} className={cls(classes['form_button'])}>
                    {loading ? <LoadingOutlined/> : t('login.signIn')}
                </button>

                <Link to={'/signup'} className="text-center text-base text-gray-500 hover:text-gray-700">
                    {t('login.createAccount')}
                </Link>

            </form> : <VerifyCode loading={verifyLoading} handleVerifyOTP={handleVerifyOTP}/>}

        </div>
    );
};

export default SignInForm;