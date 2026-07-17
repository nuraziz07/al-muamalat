import {Mail} from "lucide-react";
import {Link, useNavigate} from "@tanstack/react-router";
import {useContext} from "react";
import {AuthContext} from "@/Providers/AuthContext";
import {useForm} from "react-hook-form";
import {message} from "antd";
import {useAuth} from "@/hooks/custom/useAuth.ts";

const SignInForm = () => {

    const useAuth = () => useContext(AuthContext)

    const auth = useAuth()
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}, watch} = useForm()

    const onSubmit = (data) => {
       auth.register(data).then(res => {
           if(res.data.success) {
               navigate({to : '/'})
           }
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
    <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-5">

        <div className={''}>
            <input {...register("email", {required: true})} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 pr-11 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'Enter your email'} />
            {/*{item.icon && <Mail className="pointer-events-none absolute right-4 top-1/5 h-5 w-5 -translate-y-1/2 text-gray-400" />}*/}
        </div>

        <div className={''}>
            <input {...register('password', {required: true})} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 pr-11 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'Password'} />
            {/*{item.icon && <Mail className="pointer-events-none absolute right-4 top-1/5 h-5 w-5 -translate-y-1/2 text-gray-400" />}*/}
        </div>



        <button type={'submit'} className="mt-2 w-full rounded-lg bg-teal-600 py-4 text-base font-semibold text-white transition-colors hover:bg-teal-700">
            Sign in
        </button>

        <Link to={'/login'} className="text-center text-base text-gray-500 hover:text-gray-700">
            Create a new account !
        </Link>

    </form>

</div>
    );
};

export default SignInForm;