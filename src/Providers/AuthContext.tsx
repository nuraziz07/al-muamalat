import {createContext, useEffect, useState} from "react";
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
    smsCode: () => Promise.resolve(),
    loginSmsCode: () => Promise.resolve(),
    handleGetUser: () => Promise.resolve(),
    handleUpdateUser: () => Promise.resolve()
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
                message.success("OTP jo'natildi");
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
                message.success("OTP jo'natildi");
                return response
            })
            .catch((error) => {
                message.error(error?.response?.data?.message)
            })
            .finally(() => setLoading(false));
    };

    const handleSmsCode = (params) => {
        return request.post('/v2/auth/signup/verify', params)
            .then((res) => {
                window.localStorage.setItem("userToken", res?.data?.data?.tokens?.accessToken);
                message.success("Muvaffaqiyatli ro'yhatdan o'tdingiz");
                setUser(res.data.user);
                return res
            }).catch((error) => {
                throw error
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
                throw error
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
               console.log(error)
               throw error
           }).finally(() => setLoading(false))
   }

   useEffect(() => {
       const initAuth = async () => {
           const token = localStorage.getItem('userToken')
           if(token) {
               try {
                   await handleGetUser()
               }
               catch {
                   localStorage.removeItem('userToken')
               }
           } else {
               setLoading(false)
           }
       }
       initAuth()
   }, [user])

    const handleUpdateUser = (params, id) => {
        return request.put(`/users/${id}`, params)
            .then((response) => {
                setUser(response.data.data)
                return response
            }).catch((error) => {
                throw error
            })
    }

    const values = {
        user,
        loading,
        register: handleRegister,
        login: handleLogin,
        smsCode: handleSmsCode,
        loginSmsCode: handleLoginSmsCode,
        handleGetUser: handleGetUser,
        handleUpdateUser: handleUpdateUser,

    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};