import {createContext, useEffect, useState} from "react";
import {request} from "@/Services/api/interceptor";
import {message} from "antd";
import {useGetUser} from "@/hooks/custom/useAuth.ts";

const defaultProvider = {
    user: null,
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({children}) => {

    const {data} = useGetUser()


    const values = {
        user: data,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};