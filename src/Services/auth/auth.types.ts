export interface RegisterParams {
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    phone_number: string
}

export type LoginParams = Extract<RegisterParams, 'email' | 'password'>

export type VerifyRegisterParams = Extract<RegisterParams, 'email'>