import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Captainlogout() {
  const navigate=useNavigate();
  const token=localStorage.getItem('captainToken');
  console.log(token);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((response)=>{
      if(response.status==200){
        localStorage.removeItem('captainToken');
        navigate('/captain-login');
      }
    }).catch((error)=>{
      console.log(error);
    })
  }, [navigate]);

  return (
    <div>Captainlogout</div>
  )
}

export default Captainlogout;