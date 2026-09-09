export interface RegisterParams {
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    phone_number: string
}

export type LoginParams = Pick<RegisterParams, 'email' | 'password'>

export interface VerifyRegisterParams {
    email: string
    otp?: string
}

export interface ForgotPasswordParams {
    email: string
}

export interface ForgotPasswordConfirmParams {
    email: string
    otp: string
    newPassword: string
}