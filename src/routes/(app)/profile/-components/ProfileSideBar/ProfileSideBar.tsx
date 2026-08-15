import React, {useState} from 'react';
import {LogOut} from 'lucide-react';
import {useForm} from 'react-hook-form';
import {message, Modal, Spin} from 'antd';
import {useAuth, useGetUser, useUpdateUser} from '@/hooks/custom/useAuth.ts';
import UserIcon from '../../../../../components/Shared/UserIcon'

interface ProfileFormValues {
    full_name: string;
    address?: string;
    password?: string;
    phone_number: string;
}

const ProfileSidebar = () => {
    const {data: user} = useGetUser();
    const [updatedUser, setUpdatedUser] = useState(null)

    const {register, handleSubmit} = useForm<ProfileFormValues>();

    const [avatar, setAvatar] = useState<File | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const updateUserMutation = useUpdateUser();

    const handleUpdateUser = (data: ProfileFormValues) => {
        const submitData = {
            ...data,
        };

        return updateUserMutation.mutate(
            {id: user.user_id, data: submitData},
            {
                onSuccess: (res) => {
                    setUpdatedUser(res?.data);
                    message.success("Muvaffaqiyatli yuklandi");
                },
                onError: (err) => {
                    message.error("Xatolik yuz berdi");
                },
            }
        );
    };

    const fields = [
        {
            name: 'full_name',
            label: 'Enter your name',
            placeholder: 'Your name',
            type: 'text',
            required: true,
        },
        {
            name: 'address',
            label: 'Enter your address (optional)',
            placeholder: 'Tashkent',
            type: 'text',
            required: false,
        },
        {
            name: 'password',
            label: 'Enter password',
            placeholder: 'Password',
            type: 'password',
            required: false,
        },
        {
            name: 'phone_number',
            label: 'Your phone number',
            placeholder: '99899808688',
            type: 'text',
            required: true,
        },
    ];

    function handleLogOut() {
        localStorage.removeItem('userToken');
        window.location.href = '/signin';
    }

    return (
        <form
            onSubmit={handleSubmit(handleUpdateUser)}
            className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            {/* Avatar + name */}
            <div className="mb-8 flex flex-col items-center text-center">

                <UserIcon userIcon={user?.img_src} />

                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                    {user?.full_name}
                </h2>
                <p className="mt-1 text-sm text-gray-500">{user?.phone_number}</p>
            </div>

            {/* Form fields */}
            {updateUserMutation.isPending ? (
                <div className="flex w-full justify-center py-10">
                    <Spin size="large"/>
                </div>
            ) : (
                <div className="flex flex-col gap-5">
                    {fields.map((field) => (
                        <div key={field.name}>
                            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-700">
                                {field.label}
                            </label>

                            <input
                                {...register(field.name, {
                                    required: field.required,
                                })}
                                type={field.type}
                                placeholder={field.placeholder}
                                className="h-14 w-full rounded-xl bg-gray-50 px-5 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                    type="submit"
                    className="h-14 flex-1 rounded-xl bg-orange-500 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                    Update
                </button>

                <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl border border-orange-500 text-sm font-semibold text-orange-500 transition hover:bg-orange-50"
                >
                    <LogOut size={16}/>
                    Log out
                </button>
            </div>

            <Modal
             open={isModalOpen} onOk={handleLogOut} onCancel={() => setIsModalOpen(false)} title={'Are you sure you want to log out?'} />
        </form>
    );
};

export default ProfileSidebar;