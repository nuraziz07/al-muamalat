import { User, Mail } from "lucide-react";
import CountrySelect from "./CountrySelect";
import {Link, useNavigate} from "@tanstack/react-router";
import {AuthContext} from "@/Providers/AuthContext";
import {useContext} from "react";
import {useForm} from "react-hook-form";

export default function SignUpForm() {

    const useAuth = () => useContext(AuthContext)

    const auth = useAuth()
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}, watch} = useForm()

    const onSubmit = (data) => {
        auth.register(data).then(res => {
            if(res?.data?.success) {
                navigate({to : '/'})
            }
        })
    }

    const inputBaseClassName =
        "w-full rounded-lg border border-gray-300 px-4 py-3.5 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500";


    return (
        <div className="flex w-full max-w-md flex-col gap-5">
            <div>
                <h1 className="mb-3 text-6xl font-black uppercase tracking-tight text-gray-900">
                    Get started
                </h1>
                <p className="text-base text-gray-500">
                    Already have an account?{" "}
                    <Link to={'/signin'} className="font-semibold text-teal-600 hover:text-teal-700">
                        Sign In
                    </Link>
                </p>
            </div>

             <form onSubmit={handleSubmit(onSubmit)}>
                 <div className="relative flex flex-col gap-5">

                    <input type={'text'} {...register('first_name', {required: true})} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'First name'}  />
                     {/*{item.icon && item.iconComponent()}*/}

                     <input type={'text'} {...register('last_name', {required: true})} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'Last name'}  />

                    <input type={'email'} {...register('email', {required: true})} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'Enter your email'}  />

                    <input type={'password'} {...register('password', {required: true})} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'Password'}  />

                     <input type={'text'} {...register('phone_number', {required: true})} className={'w-full rounded-lg border border-gray-300 px-4 py-3.5 text-base text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-teal-500'} placeholder={'Enter your phone number'}  />


            </div>

                 <button className={'mt-2 w-full text-center rounded-lg bg-teal-600 py-4 text-base font-semibold text-white transition-colors hover:bg-teal-700'} type={'submit'}>Log in</button>
             </form>
        </div>
    );
}




{/* Country select */}

{/* Log in button */}
{/*<Link to={'/'} className="mt-2 w-full text-center rounded-lg bg-teal-600 py-4 text-base font-semibold text-white transition-colors hover:bg-teal-700">*/}
{/*    <button type={'submit'}>Log in</button>*/}
{/*</Link>*/}