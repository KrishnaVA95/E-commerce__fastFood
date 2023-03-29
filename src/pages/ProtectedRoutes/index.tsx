/* eslint-disable react/jsx-no-useless-fragment */
import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext/UserContext";



export const ProtectedRoutes = () =>{
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() =>{
        if(!user){
            navigate('/')
        }
    }, [])

    return(
        <>
            {user ? <Outlet/> : null }
        </>
    )
}