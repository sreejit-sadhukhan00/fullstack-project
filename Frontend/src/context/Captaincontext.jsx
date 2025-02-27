import React, { createContext, useState } from 'react'
import { UserDataContext } from './Usercontext';


export const CaptainDataContext=createContext();
function Captaincontext({children}) {
    const [captain,setcaptain]=useState(null);
    const[isLoading,setIsLoading]=useState(false);
        const[isError,setIsError]=useState(false);
        const value={
            captain,
            setcaptain,
            isLoading,
            setIsLoading,
            isError,
            setIsError
        }
  return (
    <div>
        <CaptainDataContext.Provider value={value} >
            {children}
        </CaptainDataContext.Provider>
    </div>
  )
}

export default Captaincontext