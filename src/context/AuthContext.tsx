"use client";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface Props{
    children: ReactNode
}

interface AuthContextType{
    isLogin: boolean;
    login: (accessToken: string, firstName: string) => void
}

const AuthContext = createContext<AuthContextType>({isLogin: false, login: () => {}})

export const useUser = ()=> useContext(AuthContext)

export function AuthContextProvider({children}: Props) {

    const [isLogin, setIsLogin] = useState<boolean>(false)

    useEffect(()=>{
        if(window.localStorage.getItem('accessToken')){
            setIsLogin(true)
        }
    },[])

    const loginHandler = (accessToken: string, firstName: string)=>{
        window.localStorage.setItem('accessToken', accessToken)
        window.localStorage.setItem('firstName', firstName)
        setIsLogin(true)
    }

    return <AuthContext.Provider value={{isLogin: isLogin, login: loginHandler}}>
        {children}
    </AuthContext.Provider>
}