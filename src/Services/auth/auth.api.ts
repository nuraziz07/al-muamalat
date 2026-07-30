import {request} from "@/Services/api/interceptor.ts";

export const authApi = {
    register: (params) =>
        request.post('/v2/auth/signup/init', params),

    login: (params) =>
        request.post('/v2/auth/signin/init', params),

    verifyRegisterOTP: (params) =>
        request.post('/v2/auth/signup/verify', params),

    verifyLoginOTP: (params) =>
        request.post('/v2/auth/signin/verify', params),

    resendOTP: (type) =>
        request.post(`/v2/auth/${type}/resend`),

    getUser: () =>
        request.get('/users/me'),

    updateUser: (id, params) =>
        request.put(`/users/${id}`, params,  {
           headers: {'Content-Type': 'multipart/form-data'}
}),
}