import { useContext, useEffect, useState } from "react"
import React from 'react'
import { UserDataContext } from "../context/Usercontext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const UserProtectedWrapper = ({ children }) => {
  const { user, setUser } = useContext(UserDataContext);
  const token = localStorage.getItem('userToken')

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return;
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.status === 200) {
        setUser(response.data.data);
        setIsLoading(false);
      }
    }).catch(err => {
      console.log(err);
      localStorage.removeItem('userToken');
      navigate('/login')
    })
  }, [token, navigate, setUser])

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper;