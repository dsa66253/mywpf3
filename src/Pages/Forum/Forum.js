import React, {useEffect} from 'react'
import  { Navigate } from 'react-router-dom'
import {useProfile} from "../../Hooks/useProfile.js"
import {InputForm} from "./InputForm.js"
import {Posts} from "./Posts.js"



const Forum = () => {
    const {signIn, setSignIn} = useProfile();
    
    if (!signIn){
        // console.log("signIn", signIn)
        alert("you need to log in")
        return <Navigate to='/home'  />
    }


    return (
        <>
        <InputForm/>
        <Posts/>
        </>

        
    );
  };
  
  export  {Forum};