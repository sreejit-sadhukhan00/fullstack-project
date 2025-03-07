import { useContext, useEffect, useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"
import { CaptainDataContext } from "../context/Captaincontext";
import axios from "axios";


const CaptainProtectWrapper=({
    children
}) =>{

const {captain,setcaptain}=useContext(CaptainDataContext);
const token=localStorage.getItem('token')

const navigate=useNavigate();
const [isloading,setisloading]=useState(true);

    useEffect(()=>{
        if(!token ){
            navigate('/captain-login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((response)=>{
            if(response.status===200){
                
                setcaptain(response.data.data);
                console.log(captain);
                
                setisloading(false);
            }
        }).catch(err=>{
            console.log(err);
            localStorage.removeItem('token');
            navigate('/captain-login')
            
        })
    },[token])

    

    if(isloading){
        return(
        <div>Loading...</div>        )
    }
     

    return <>{children}</>;
}

export default CaptainProtectWrapper;