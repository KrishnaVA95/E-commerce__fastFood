import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios"
import { toast } from 'react-toastify';
import {iUser, iUserResponse, iUserContextProps, iUserContext} from "./types"

import { api } from '../../services/api'
import { iRegisterFormData } from "../../components/Form/RegisterForm";
import { iLoginFormData } from "../../components/Form/LoginForm";
import { iApiError } from "../types";

export const UserContext =  createContext({} as iUserContext)

export const UserProvider = ({ children }: iUserContextProps) => {

    const [user, setUser] = useState<iUser | null>(null)

    const navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem("@Hamburgueria:TOKEN")
        const userId = localStorage.getItem("@Hamburgueria:USER-ID")
        if(token && userId != null){
            const userIdJson = JSON.parse(userId)
            const userAutoLogin = async () =>{
                try {
                    const response = await api.get(`/users/${userIdJson}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(response.data)
                    navigate('/shop')
                    toast.success('Auto login com sucesso')
                } catch (error) {
                    console.error(error)
                }
            }
            userAutoLogin()
        }
    }, [])

    const userRegister = async (data : iRegisterFormData) => {
        try{
            const response = await api.post<iUserResponse>('/users', data)
            setUser(response.data.user)
            navigate('/')
            toast.success('Usuario criado com sucesso')
        }catch (error){
            const currentError = error as AxiosError<iApiError>
            toast.error('Email já cadastrado')
            console.error(currentError)
        }
    }

    const userLogin = async (data : iLoginFormData) =>{
        try {
            const response = await api.post<iUserResponse>('/login', data)
            window.localStorage.clear()
            window.localStorage.setItem("@Hamburgueria:TOKEN", response.data.accessToken)
            window.localStorage.setItem("@Hamburgueria:USER-ID", JSON.stringify(response.data.user.id))
            setUser(response.data.user)
            navigate('/shop')
            toast.success('Usuario Logou com sucesso')
        } catch (error) {
            const currentError = error as AxiosError<iApiError>
            console.error(currentError)
        }
    }

    const userLogout = () =>{
        window.localStorage.removeItem("@Hamburgueria:TOKEN")
        window.localStorage.removeItem("@Hamburgueria:USER-ID")
        setUser(null)
        navigate('/')
    }

    return(
        <UserContext.Provider value={{
            user,
            setUser,
            userRegister,
            userLogin,
            userLogout,
        }}>
            { children }
        </UserContext.Provider>
    )
}
    

/*

    useEffect fazendo autoLogin se o token esta no localStorage
   

*/
