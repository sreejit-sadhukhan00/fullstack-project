import { useContext, useEffect } from "react"
import React from 'react'
import {UserDataContext} from "../context/Usercontext"
import { useNavigate } from "react-router-dom"


const UserProtectedWrapper=({
    children
}) =>{
const token=localStorage.getItem('token')

const navigate=useNavigate();

    useEffect(()=>{
        if(!token ){
            navigate('/login')
        }
    },[token])

    return(
        <>
         {children}
        </>
    )
}

export default UserProtectedWrapper;