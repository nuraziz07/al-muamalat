import React, {useRef, useState} from 'react';
import {Camera} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useAuth, useGetUser, useUpdateUser} from "@/hooks/custom/useAuth.ts";
import {useForm} from "react-hook-form";
import {message, Spin} from "antd";

const ProfileInfo = () => {

    const {user} = useAuth()
    const {register, handleSubmit} = useForm()

    const updateUserMutation = useUpdateUser()

    const handleUpdateUserMutation = (data) => {
        updateUserMutation.mutate({id: user?.user_id, data}, {
            onSuccess: (res) => {
                message.success("Muvaffaqiyatli yuklandi");
            },
            onError: (err) => {
                message.error("Xatolik yuz berdi");
            },
        })
    }

    return (
        <form onSubmit={handleSubmit(handleUpdateUserMutation)}
              className="my-10 border mx-50 rounded-[24px] bg-white p-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Header */}
            <div className="mb-16 flex items-start justify-between">
                <div className="flex items-center gap-8">
                    <div className="relative h-[80px] w-[80px]">
                        <img
                            src={''}
                            alt="avatar"
                            className="h-[80px] w-[80px] rounded-full object-cover"
                        />
                        <button
                            type="button"
                            className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#009688] text-white"
                        >
                            <Camera size={14}/>
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                        />
                    </div>

                    <div className={'flex gap-3'}>
                        <h1 className="text-[30px] font-semibold leading-none text-black">
                            {user?.full_name}
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
            {updateUserMutation.isPending ?
                <Spin className={'w-full flex justify-center items-center'} size={'large'}/> :
                <div className="grid grid-cols-2  gap-x-20 gap-y-12">
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


                    <div>
                        <label className="mb-4 block text-[16px] font-normal text-[#333]">
                            Phone Number
                        </label>

                        <input
                            {...register('phone_number', {required: true})}
                            type="number"
                            placeholder="Your Phone Number"
                            className="h-[58px] w-full rounded-2xl bg-[#F7F7F7] px-8 text-[16px] text-[#333] outline-none placeholder:text-[#A6A6A6]"
                        />
                    </div>
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