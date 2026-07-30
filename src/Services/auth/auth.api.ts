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

    getUser: () =>
        request.get('/users/me'),

    updateUser: (params: any, id: string | number) =>
        request.put(`/users/${id}`, params,  {
           headers: {'Content-Type': 'multipart/form-data'}
}),
}