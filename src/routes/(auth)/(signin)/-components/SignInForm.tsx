import {Link, useNavigate} from "@tanstack/react-router";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useLogin, useVerifyLoginOTP} from "@/hooks/custom/useAuth.ts";

interface SignInFormValues {
    email: string
    password: string
    otp?: string
}

const SignInForm = () => {

    const {handleSubmit, register} = useForm<SignInFormValues>()

    const loginMutation = useLogin()
    const verifyMutation = useVerifyLoginOTP()
    const navigate = useNavigate()
    const [email, setEmail] = useState<string | null>(null)
    const [success, setSuccess] = useState<boolean>(true)

    const onSubmit = (data: SignInFormValues) => {
        loginMutation.mutate(
            {email: data.email, password: data.password},
            {
                onSuccess: (res) => {
                    setEmail(res?.data?.data?.email ?? res?.data?.email)
                    setSuccess(false)
                }
            }
        )
    }

    const handleSmsCode = (data: SignInFormValues) => {
        verifyMutation.mutate(
            {email: email ?? '', otp: data.otp},
            {
                onSuccess: () => {
                    navigate({to: '/'})
                }
            }
        )
    }

    return (
        <div className="flex w-full max-w-md flex-col gap-5">
        <h1 className="mb-2 text-6xl font-black text-center uppercase tracking-tight text-gray-900">Get started</h1>

            {success ? <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-5">

                <div className={''}>
                    <input {...register('email')} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 pr-11 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'Enter your email'} />
                </div>

                <div className={''}>
                    <input {...register('password')} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 pr-11 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'Password'} />
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
