import React from 'react';
import {User_Icon} from "@/assets/Images/Png";

interface UserIconProps {
    userIcon: string
}

const UserIcon = ({userIcon}: UserIconProps) => {
    return (
        <div className="relative h-24 w-24">
            <img
                src={userIcon || User_Icon}
                alt="avatar"
                className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
            />
            <label
                className="absolute bottom-0 right-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-orange-500 text-white">
                <input
                    // onChange={(e) => setAvatar(e.target.files?.[0] ?? null)}
                    type="file"
                    accept="image/*"
                    className="hidden"
                />
            </label>
        </div>
    );
};

export default UserIcon;