import React  from 'react'
import { iLoginFormData } from '../../components/Form/LoginForm';
import { iRegisterFormData } from '../../components/Form/RegisterForm';

export interface iUser{
    id: number;
    name: string;
    email: string;
}

// Resposta da api
export interface iUserResponse {
    accessToken: string;
    user: iUser;
}


export interface iUserContextProps{
    children: React.ReactNode;
}


export interface iUserContext{ 
    user: iUser | null;
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    userRegister: (data: iRegisterFormData) => Promise<void>;
    userLogin: (data: iLoginFormData) => Promise<void>;
    userLogout: () => void
}


