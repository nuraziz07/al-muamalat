import {useContext} from "react";
import {AuthContext} from "@/Providers/AuthContext.tsx";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {authApi} from "@/Services/auth/auth.api.ts";
import {message} from "antd";

export const useAuth = () => useContext(AuthContext)


export function useRegister() {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: (params) => authApi.register(params),
        onSuccess: (res) => message.success(res?.data?.message),
        onError: (err: any) => message.error(err?.response?.data?.message),
    })
}

export function useLogin() {
    return useMutation({
        mutationFn: (params) => authApi.login(params),
        onSuccess: (res) => {
            message.success(res?.data?.message)
        },
        onError: (error: any) => {
            message.error(error?.response?.data?.message || 'Xatolik yuz berdi')
        },
    })
}

export function useVerifyRegisterOTP() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['verify-otp-register'],
        mutationFn: (params) => authApi.verifyRegisterOTP(params),
        onSuccess: (res) => {
            window.localStorage.setItem("userToken", res?.data?.data?.tokens?.accessToken);
            queryClient.setQueryData(['currentUser'], res.data.user)
            message.success(res?.data?.message);
            return res
        },
        onError: (error: any) => {
            message.error(error?.response?.data?.message || 'Kod noto\'g\'ri')
        },
    })
}


export function useVerifyLoginOTP() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['verify-otp-login'],
        mutationFn: (params) => authApi.verifyLoginOTP(params),
        onSuccess: (res) => {
            window.localStorage.setItem("userToken", res?.data?.data?.tokens?.accessToken);
            queryClient.setQueryData(['currentUser'], res.data.user)
            message.success(res?.data?.message);
            return res
        },
        onError: (error: any) => {
            message.error(error?.response?.data?.message || 'Kod noto\'g\'ri')
        },
    })
}


export function useResendOTP(type: 'signin' | 'signup') {
    return useMutation({
        mutationKey: ['resend-otp'],
        mutationFn: (params) => authApi.resendOTP(type, params),
        onSuccess: (res) => {
            message.success(res?.data?.message)
            return res
        },
        onError: (error: any) => {
            message.error(error?.response?.data?.message || 'Xatolik yuz berdi')
        }
    })
}




export function useGetUser() {
    return useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            const response = await authApi.getUser()
            return response?.data?.data ?? response?.data
        },
        enabled: !!localStorage.getItem('userToken'),
        retry: false
    })
}

export function useUpdateUser() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['update-user'],
        mutationFn: ({id, data}: {id: string | number, data: any}) => authApi.updateUser(data, id),
        onSuccess: (res) => {
            queryClient.setQueryData(['update-user'], res.data)
        },
        onError: (error: any) => {
            message.error(error?.response?.data?.message || 'Xatolik yuz berdi')
        },
    })
}

export function useSubmitForgotEmail() {

    return useMutation({
        mutationKey: ['submit-forgot-email'],
        mutationFn: (params) => authApi.forgotPassword(params),
        onSuccess: (res) => {
            message.success(res?.data?.message)
        },
        onError: (error: any) => {
            message.error(error?.response?.data?.message || 'Xatolik yuz berdi')
        }
    })
}

export function useConfirmForgotPassword() {

    return useMutation({
        mutationKey: ['confirm-forgot-password'],
        mutationFn: (params) => authApi.forgotPasswordConfirm(params),
        onSuccess: (res) => {
            window.localStorage.setItem("userToken", res?.data?.data?.tokens?.accessToken);
            message.success(res?.data?.message);
            return res
        },
        onError: (error: any) => {
            message.error(error?.response?.data?.message || 'Xatolik yuz berdi')
        }
    })
}