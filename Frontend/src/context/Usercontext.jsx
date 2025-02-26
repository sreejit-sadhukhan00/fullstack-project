import React, { createContext, useContext, useState } from 'react'


export const UserDataContext=createContext()

export const useUserData=()=>{
    const result=useContext(UserDataContext);
    return result;
}


function Usercontext({children}) {
  const [user, setuser] = useState({
      email:'',
      fullName:{
            firstName:'',
            lastName:'',
      }
  })
 

  return (
    <div>
 <UserDataContext.Provider value={[user, setuser]}>
 {children}
 </UserDataContext.Provider>
  </div>
  )
}

export default Usercontext