import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function UserLogout() {
  const token=localStorage.getItem('userToken');
  const navigate=useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((response)=>{
      console.log(response);

      if(response.status===200){
        localStorage.removeItem('userToken');
        navigate('/login')
      }
    }).catch((error)=>{
      console.log(error);
    })
  }, [navigate])

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout;