//redux

import { AxiosError } from "axios";

export interface UserState{
    token: string | null
}

export interface RouterState{
    page: string
}

export interface UserAction{
    type: string,
    payload?: string | null
}

export interface RouterAction{
    type: string,
    payload?: string
}

//forms

export interface LoginForm {
    login: {value: string},
    password: {value: string},
    remember: {checked: boolean}
}

export interface MfaForm{
    code: {value: string}
}

//axios

export interface Response<T = null>{
    data: T,
    error: AxiosError
}

export interface LoginResponse{
    mfa: boolean,
    sms: boolean,
    ticket: string | null,
    token: string | null
}

export interface LoginResponseSuccessful{
    token: string,
    user_settings: {
        locale: string,
        theme: string
    }
}
