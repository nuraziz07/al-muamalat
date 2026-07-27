import {Mail} from "lucide-react";
import {Link, useNavigate} from "@tanstack/react-router";
import {useContext, useState} from "react";
import {AuthContext} from "@/Providers/AuthContext";
import {useForm} from "react-hook-form";
import {message} from "antd";
import {useAuth} from "@/hooks/custom/useAuth.ts";

const SignInForm = () => {

    const {handleSubmit, register} = useForm()

    const auth = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [success, setSuccess] = useState<boolean>(true)

    const onSubmit = (data) => {
        auth.login(data).then(res => {
            setEmail(res?.data?.data?.email)
            setSuccess(false)
        })
    }

    const handleSmsCode = (data) => {
        const submitData = {
            email: email,
            ...data
        }
        auth.loginSmsCode(submitData).then((res) => {
            navigate({to: '/'})
        })
    }


    const inputItems = [
        {
            placeholder: 'Enter your email',
            type: 'email',
            className: 'w-full rounded-lg border border-gray-300 px-4 py-3.5 pr-11 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500',
            icon: true,

        },
        {
            placeholder: 'Password',
            type: 'password',
            className: 'w-full rounded-lg border border-gray-300 px-4 py-3.5 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500',
            icon: false
        },
    ]

    return (
        <div className="flex w-full max-w-md flex-col gap-5">
        <h1 className="mb-2 text-6xl font-black text-center uppercase tracking-tight text-gray-900">Get started</h1>

    {/* Email field */}
            {success ? <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-5">

                <div className={''}>
                    <input {...register('email')} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 pr-11 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'Enter your email'} />
                    {/*{item.icon && <Mail className="pointer-events-none absolute right-4 top-1/5 h-5 w-5 -translate-y-1/2 text-gray-400" />}*/}
                </div>

                <div className={''}>
                    <input {...register('password')} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 pr-11 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'Password'} />
                    {/*{item.icon && <Mail className="pointer-events-none absolute right-4 top-1/5 h-5 w-5 -translate-y-1/2 text-gray-400" />}*/}
                </div>



                <button type={'submit'} className="mt-2 w-full rounded-lg bg-teal-600 py-4 text-base font-semibold text-white transition-colors hover:bg-teal-700">
                    Sign in
                </button>

                <Link to={'/signup'} className="text-center text-base text-gray-500 hover:text-gray-700">
                    Create a new account !
                </Link>

            </form> : <form onSubmit={handleSubmit(handleSmsCode)} className="relative flex flex-col gap-5">

                <div className={''}>
                    <input {...register('otp')} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 pr-11 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'Enter Code'} />
                    {/*{item.icon && <Mail className="pointer-events-none absolute right-4 top-1/5 h-5 w-5 -translate-y-1/2 text-gray-400" />}*/}
                </div>

                <button type={'submit'} className="mt-2 w-full rounded-lg bg-teal-600 py-4 text-base font-semibold text-white transition-colors hover:bg-teal-700">
                    Sign in
                </button>

                <Link to={'/signup'} className="text-center text-base text-gray-500 hover:text-gray-700">
                    Create a new account !
                </Link>

            </form>}

</div>
    );
};

export default SignInForm;