import React, {memo} from 'react';

interface AuthFormHeadProps {
    title: string;
    description?: string;
}

const AuthFormHead = ({title, description}: AuthFormHeadProps) => {
    return (
        <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
                {title}
            </h1>
            <p className="text-sm text-gray-500">
                {description}
            </p>
        </div>
    );
};

export default memo(AuthFormHead);