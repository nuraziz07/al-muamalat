import {request} from "@/Services/api/interceptor.ts";
import {LoginParams, RegisterParams, VerifyRegisterParams} from "@/Services/auth/auth.types.ts";
import {URL} from "@/Constants/url.ts";

export const authApi = {
    register: (params: RegisterParams) =>
        request.post(URL.signup_init, params),

    login: (params: LoginParams) =>
        request.post(URL.signin_init, params),

    verifyRegisterOTP: (params: VerifyRegisterParams) =>
        request.post(URL.register_verify, params),

    verifyLoginOTP: (params: VerifyRegisterParams) =>
        request.post(URL.login_verify, params),

    resendOTP: (type: 'signin' | 'signup', params: VerifyRegisterParams) =>
        request.post(`/v2/auth/${type}/resend`, params),

    getUser: async () =>
        await request.get(URL.getUser),

    updateUser: (params: any, id: any) =>
        request.put(`/users/${id}`, params),

    forgotPassword: (params) =>
        request.post(URL.forgotPassword_init, params),

    forgotPasswordConfirm: (params) =>
        request.post(URL.forgotPassword_confirm, params),

    forgorPasswordVerify: (params) =>
        request.post(URL.forgotPassword_verify)
}