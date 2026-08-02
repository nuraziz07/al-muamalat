import {request} from "@/Services/api/interceptor.ts";
import {LoginParams, RegisterParams, VerifyRegisterParams} from "@/Services/auth/auth.types.ts";

export const authApi = {
    register: (params: RegisterParams) =>
        request.post('/v2/auth/signup/init', params),

    login: (params: LoginParams) =>
        request.post('/v2/auth/signin/init', params),

    verifyRegisterOTP: (params: VerifyRegisterParams) =>
        request.post('/v2/auth/signup/verify', params),

    verifyLoginOTP: (params: VerifyRegisterParams) =>
        request.post('/v2/auth/signin/verify', params),

    resendOTP: (type: 'signin' | 'signup', params: VerifyRegisterParams) =>
        request.post(`/v2/auth/${type}/resend`, params),

    getUser: async () =>
        await request.get('/users/me'),

    updateUser: (params: any, id: any) =>
        request.put(`/users/${id}`, params),

    forgotPassword: (params) =>
        request.post('/v2/auth/password/forgot/init', params),

    forgotPasswordConfirm: (params) =>
        request.post('/v2/auth/password/forgot/confirm', params),

    forgorPasswordVerify: (params) =>
        request.post('/v2/auth/password/forgot/verify')
}