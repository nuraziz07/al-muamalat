import {createContext, useEffect, useState} from "react";
import {request} from "@/Services/api/interceptor";
import {message} from "antd";
import {useGetUser} from "@/hooks/custom/useAuth.ts";

const defaultProvider = {
    user: null,
    loading: true,
    setUser: () => null,
    setLoading: () => {
    },
    login: () => Promise.resolve(),
    register: () => Promise.reject(),
    registerSmsCode: () => Promise.resolve(),
    loginSmsCode: () => Promise.resolve(),
    handleGetUser: () => Promise.resolve(),
    handleUpdateUser: () => Promise.resolve(),
    handleLoginResendOTP: () => Promise.resolve(),
    handleRegisterResendOTP: () => Promise.resolve(),
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
                message.success(response?.data?.message);
                return response?.data
            })
            .catch((error) => {
                message.error(error?.response?.data?.message)
            })
            .finally(() => setLoading(false));
    };

    const handleLogin = (params) => {
        setLoading(true);

        return request
            .post("/v2/auth/signin/init", params)
            .then((response) => {
                message.success(response?.data?.message);
                return response
            })
            .catch((error) => {
                message.error(error?.response?.data?.message)
            })
            .finally(() => setLoading(false));
    };

    const handleRegisterSmsCode = (params) => {
        return request.post('/v2/auth/signup/verify', params)
            .then((res) => {
                window.localStorage.setItem("userToken", res?.data?.data?.tokens?.accessToken);
                message.success("Muvaffaqiyatli ro'yhatdan o'tdingiz");
                setUser(res.data.user);
                return res
            }).catch((error) => {
                message.error(error?.response?.data?.message || 'Xatolik yuz berdi')
            })
    }

    const handleLoginSmsCode = (params) => {
        return request.post('/v2/auth/signin/verify', params)
            .then((res) => {
                window.localStorage.setItem("userToken", res?.data?.data?.tokens?.accessToken);
                message.success("Muvaffaqiyatli ro'yhatdan o'tdingiz");
                setUser(res.data.user);
                return res
            }).catch((error) => {
                message.error(error?.response?.data?.message || 'Xatolik yuz berdi')
            })
    }

    const handleGetUser = async () => {
        setLoading(true)
        return request.get('/users/me')
            .then((response) => {
                const userData = response?.data?.data ?? response?.data
                setUser(userData)
                return userData
            }).catch((error) => {
                throw error
            }).finally(() => setLoading(false))
    }

    useEffect(() => {
        const initAuth = async () => {
            const token = localStorage.getItem('userToken')
            if (token) {
                try {
                    await handleGetUser()
                } catch {
                    localStorage.removeItem('userToken')
                }
            } else {
                setLoading(false)
            }
        }
        initAuth()
    }, [user])

    const handleUpdateUser = (params, id) => {
        return request.put(`/users/${id}`, params, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then((response) => {
                setUser(response.data.data)
                return response
            }).catch((error) => {
                throw error
            })
    }

    const handleLoginResendOTP = (params) => {
        return request.post('/v2/auth/signin/resend', params)
            .then((res) => {
                window.localStorage.setItem("userToken", res?.data?.data?.tokens?.accessToken);
                message.success(res?.data?.message);
                setUser(res.data.user);
                return res
            }).catch((error) => {
                message.error(error?.response?.data?.message || 'Xatolik yuz berdi')
            })
    }

    const handleRegisterResendOTP = (params) => {
        return request.post('/v2/auth/signup/resend', params)
            .then((res) => {
                const token = res?.data?.data?.tokens?.accessToken
                if (token) window.localStorage.setItem('userToken', token)
                message.success(res?.data?.message)
            }).catch((error) => {
                message.error(error?.response?.data?.message || 'Xatolik yuz berdi')
            })
    }

    const values = {
        user,
        loading,
        register: handleRegister,
        login: handleLogin,
        registerSmsCode: handleRegisterSmsCode,
        loginSmsCode: handleLoginSmsCode,
        handleGetUser: handleGetUser,
        handleUpdateUser: handleUpdateUser,
        handleLoginResendOTP: handleLoginResendOTP,
        handleRegisterResendOTP: handleRegisterResendOTP,

    };

    const {data} = useGetUser()

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};