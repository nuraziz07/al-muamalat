import React from 'react';
import {Divider, Popover, Avatar} from "antd";
import {Button} from "@/components/ui/button.tsx";
import {LogOut} from "lucide-react";
import {useNavigate} from "@tanstack/react-router";

interface AvatarProps {
    user: object
}

const Avatar_User = ({user}: AvatarProps) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        window.localStorage.removeItem('userToken')
        navigate({to: '/signin'})
    }

    const content = (
        <div className="min-w-[250px]">
            <div className="flex items-center gap-3">
                <Avatar style={{backgroundColor: "teal"}} shape="square" size={48}>
                    {user?.full_name?.[0]?.toUpperCase()}
                </Avatar>

                <div>
                    <p className="font-semibold text-gray-900">
                        {user?.full_name}
                    </p>
                    <p className="text-sm text-gray-500">
                        {user?.phone_number}
                    </p>
                </div>
            </div>

            <Divider className="my-3"/>

            <Button
                variant="destructive"
                className="flex w-full items-center justify-start"
                onClick={handleLogout}
            >
                <LogOut size={18} className="mr-2"/>
                <span>Log out</span>
            </Button>
        </div>
    )

    return (
        <Popover content={content}>
            <Avatar onClick={() => navigate({to: '/profile'})} style={{backgroundColor: "teal"}}
                    shape={'square'} size={40}>{user?.full_name?.[0] ?? '?'}</Avatar></Popover>
    );
};

export default React.memo(Avatar_User);