import {createContext, useState} from "react";
import {request} from "@/Services/api/interceptor";
import {message} from "antd";

const defaultProvider = {
    user: null,
    loading: true,
    setUser: () => null,
    setLoading: () => {
    },
    login: () => Promise.resolve(),
    register: () => Promise.reject(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(defaultProvider.user);
    const [loading, setLoading] = useState(defaultProvider.loading);

    const handleRegister = (params) => {
        setLoading(true);

        return request
            .post("/v2/auth/signup/init", params)
            .then((response) => {
                window.localStorage.setItem("token", response.data.userId);
                setUser(response.data.user);
                message.success("Siz muvaffaqiyatli ro'yxatdan o'tdingiz");
                // if (callback) callback(null, response.data);
                return response
            })
            .catch((error) => {
                console.error(error);
                throw error
            })
            .finally(() => setLoading(true));
    };

    const handleLogin = (params) => {
        setLoading(true);

        return request
            .post("/v2/auth/signin/init", params)
            .then((response) => {
                console.log(response)
                window.localStorage.setItem("token", response.data.userId);
                setUser(response.data.user);
                message.success("Siz muvaffaqiyatli ro'yxatdan o'tdingiz");
                return response
            })
            .catch((error) => {
                console.error(error);
                throw error
            })
            .finally(() => setLoading(true));
    };

    const values = {
        user,
        loading,
        register: handleRegister,
        login: handleLogin
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};