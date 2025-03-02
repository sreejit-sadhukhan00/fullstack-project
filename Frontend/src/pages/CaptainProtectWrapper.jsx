import { useEffect } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"


const CaptainProtectWrapper=({
    children
}) =>{

const {captain,setcaptain}=useContext(CaptainDataContext);
const token=localStorage.getItem('token')

const navigate=useNavigate();

    useEffect(()=>{
        if(!token ){
            navigate('/captain-login')
        }
    },[token])

    return(
        <>
         {children}
        </>
    )
}

export default CaptainProtectWrapper;