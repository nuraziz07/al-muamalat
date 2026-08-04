import {Logo} from '@/assets/Images/Svg';
import {Link, useNavigate} from "@tanstack/react-router";
import {useTranslation} from 'react-i18next'
import {App, Select} from "antd";
import LanguageSelect from "@/components/Layout/components/NavBar/components";
import {useAuth, useGetUser} from "@/hooks/custom/useAuth.ts";
import {useQuery} from "@tanstack/react-query";
import {request} from "@/Services/api/interceptor.ts";
import Avatar_User from '../../../Shared/Avatar'
import {useEffect} from "react";
import useApp from "antd/es/app/useApp";

interface SelectItem {
    course_id: string;
    name_uz: string;
    name_en: string;
    description_uz: string;
    description_en: string;
}

export const NavBar = () => {

    const {t} = useTranslation()
    const navigate = useNavigate()

    const navItems = [
        {label: t('header.home'), path: "/"},
        {label: t('header.programs'), path: "/programs", hasDropdown: true},
        {label: t('header.financeTools'), path: "/finance"},
        {label: t('header.contact'), path: "/contact"},
    ];


    const {data} = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const response = await request.get('/courses/main')
            return response?.data?.data ?? []
        }
    })

    const selectItems = data?.map((item: SelectItem) => ({
        key: item.course_id,
        label: item.name_uz,
        value: item.course_id,
    }))

    const handleCourseChange = (value: string) => {
        navigate({
            to: '/programs/$courseId',
            params: {courseId: value}
        })
    }

    const {data: user} = useGetUser()


    return (
        <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link to="/" className="flex items-center gap-3">
                    <img src={Logo} alt="Al Muamalat" className="h-12 w-12 object-contain"/>
                    <span className="text-xl font-bold tracking-wide text-teal-600">AL MUAMALAT</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link key={item.label} to={item.path}
                              className="flex items-center gap-1 text-base font-semibold text-gray-700 transition-colors hover:text-teal-600 [&.active]:text-teal-600">
                            {item.hasDropdown ? true : item.label}
                        </Link>
                    ))}
                    <Select onChange={handleCourseChange} placeholder={'Programs'} className={'w-30'}
                            options={selectItems}/>
                </div>

                <div className="hidden items-center gap-5 md:flex">
                    <LanguageSelect/>

                    <div className="h-6 w-px bg-gray-200"/>

                    {user?.user_id ? <Avatar_User user={user} /> :
                        <button onClick={() => navigate({to: '/signin'})}
                                className="rounded-lg bg-teal-600 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-teal-700">
                            {t('header.signIn')}
                        </button>}
                </div>
            </div>
        </nav>
    );
};
