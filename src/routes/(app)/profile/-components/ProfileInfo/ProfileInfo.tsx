import React, {useRef, useState} from 'react';
import {Camera} from "lucide-react";
import { Button } from "@/components/ui/button";
import {useAuth} from "@/hooks/custom/useAuth.ts";
import {useForm} from "react-hook-form";
import {message, Spin} from "antd";

const ProfileInfo = () => {

    const {handleUpdateUser, user} = useAuth()
    const {register, handleSubmit} = useForm()
    const [updatedUser, setUpdatedUser] = useState(null)
    const fileInputRef = useRef(null)
    const [image, setImage] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const onSubmit = (data) => {

        const submitData = {
            image_src: image,
            ...data
        }
        setLoading(true)

        handleUpdateUser(submitData, user?.user_id).then(res => {
            setUpdatedUser(res?.data);
            setLoading(false)
            message.success("Muvaffaqiyatli yuklandi");
        }).catch(() => {
            message.error("Xatolik yuz berdi");
            setLoading(false)
        }).finally(() => {
            setLoading(false)
        })
    }

    console.log(updatedUser?.data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="my-10 border mx-50 rounded-[24px] bg-white p-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Header */}
            <div className="mb-16 flex items-start justify-between">
                <div className="flex items-center gap-8">
                    <div className="relative h-[80px] w-[80px]">
                        <img
                            src={updatedUser?.data?.image_src ?? user?.image_src}
                            alt="avatar"
                            className="h-[80px] w-[80px] rounded-full object-cover"
                        />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#009688] text-white"
                        >
                            <Camera size={14} />
                        </button>
                        <input
                            ref={fileInputRef}
                            onChange={(e) => {
                                setImage(e.target.files[0])
                            }}
                            type="file"
                            accept="image/*"
                            className="hidden"
                        />
                    </div>

                    <div className={'flex gap-3'}>
                        <h1 className="text-[30px] font-semibold leading-none text-black">
                            {user?.full_name}
                        </h1>
                        <h1 className="text-[30px] font-semibold leading-none text-black">
                            {user?.last_name}
                        </h1>
                    </div>
                </div>

                <Button type={'submit'}
                    className="!rounded-xl !border-none px-6 py-6 !bg-[#009688] text-[16px] font-medium hover:!bg-[#00897B]"
                >
                    Save
                </Button>
            </div>

            {/* Form */}
            {loading ?  <Spin className={'w-full flex justify-center items-center'} size={'large'} /> : <div className="grid grid-cols-2  gap-x-20 gap-y-12">
                {/* First Name */}
                <div>
                    <label className="mb-4 block text-[16px] font-normal text-[#333]">
                        First Name
                    </label>

                    <input
                        {...register('full_name', {required: true})}
                        type="text"
                        placeholder="Your First Name"
                        className="h-[58px] w-full rounded-2xl bg-[#F7F7F7] px-8 text-[16px] text-[#333] outline-none placeholder:text-[#A6A6A6]"
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className="mb-4 block text-[16px] font-normal text-[#333]">
                        Last Name
                    </label>

                    <input
                        {...register('last_name', {required: true})}
                        type="text"
                        placeholder="Your Last Name"
                        className="h-[58px] w-full rounded-2xl bg-[#F7F7F7] px-8 text-[16px] text-[#333] outline-none placeholder:text-[#A6A6A6]"
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="mb-4 block text-[16px] font-normal text-[#333]">
                        Address
                    </label>

                    <input
                        {...register('address', {required: true})}
                        type="text"
                        placeholder="Enter Your Address"
                        className="h-[58px] w-full rounded-2xl bg-[#F7F7F7] px-8 text-[16px] text-[#333] outline-none placeholder:text-[#A6A6A6]"
                    />
                </div>

                {/* Birthday */}
                <div>
                    <label className="mb-4 block text-[16px] font-normal text-[#333]">
                        Password
                    </label>

                    <input
                        {...register('password', {required: true})}
                        placeholder={'Enter Your Password'}
                        type="password"
                        className="h-[58px] w-full rounded-2xl bg-[#F7F7F7] px-8 text-[16px] text-[#333] outline-none"
                    />
                </div>
            </div>}
        </form>
    );
};

export default ProfileInfo;