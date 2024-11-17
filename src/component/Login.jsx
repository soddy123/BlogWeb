import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from "./index"
import { useDispatch } from 'react-redux'
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const {register,handleSubmit} = useForm()
   const [error, setError] = useState("")

   const login = async(data) =>{
      setError("")
      try{
         const session = await authService.login(data)

         if(session){
            const userData = await authService.currentUser()
            if (userData) dispatch(authLogin(userData));
            navigate("/") // iis navigate se ham progmatically kayi our bhej sakte ho
            
         }
      }catch (error){
         setError(error.message)
      }
   }
  return (
   <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>

        {/* error huwa to ye run hoga */}
        
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        
        {/* form jab bi submit hoga tab handle submit call hoga
        handleSubmit [come from useForm] ye ek aapne aap me ek method he jisme ham aapna method dete he ki ham form yese handle karna chahate he 
        handle submit come from useForm so ye ek kryword ban chuka he and form jab submit hoga handalsubmit ek event he wo call hoga
        */}
        
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    // copy email validator from google or chat GBT                       below .text(value) here test for value  or print string
                    validate: {                                                        
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
            <p>
              Forgot your password? <Link to="/forgot-password">Reset here</Link>
            </p>

        </form>
        </div>
    </div>
  )
}

export default Login