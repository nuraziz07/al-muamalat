import React from 'react';

const PageLoader = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-teal-100 border-t-teal-600" />
                <span className="text-sm font-medium text-gray-500">Loading...</span>
            </div>
        </div>
    );
};

export default PageLoader;