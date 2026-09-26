import { useContext } from "react";
import { userContext } from "../context/userContext";


export function useUser(){
    const context = useContext(userContext)
    if(!context){
        throw new Error("Must be inside UserProvider");
    }

    return context;
} 