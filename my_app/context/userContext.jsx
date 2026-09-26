import { createContext, useState } from "react";
import { account } from '../lib/appwrit'


export const userContext = createContext()

export function UserProvider({children}){
    const [user,setuser]= useState(null);
    async function  login(email,password) {
        
        
    }
    async function  register(email,password) {
        await account.create();
    }
    async function logout() {
        
    }
    return(
       <userContext.Provider value={{user,setuser,login,register,logout}}>
            {children}
       </userContext.Provider>
       

    )
}