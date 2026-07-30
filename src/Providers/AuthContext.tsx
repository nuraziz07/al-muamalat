import {createContext, useEffect, useState} from "react";
import {request} from "@/Services/api/interceptor";
import {message} from "antd";
import {useGetUser} from "@/hooks/custom/useAuth.ts";

const defaultProvider = {
    user: null,
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(defaultProvider.user);

    const handleGetUser = async () => {
        return request.get('/users/me')
            .then((response) => {
                const userData = response?.data?.data ?? response?.data
                setUser(userData)
                return userData
            }).catch((error) => {
                throw error
            })
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

    const values = {
        user,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};