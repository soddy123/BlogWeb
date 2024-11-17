// ye ek type ka mechnasim he ki kis tarah ke  pages ko ya rout ko protect kiya jata he
// ye ek type ka protected component he

import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// file ka name and function ka name different ho sakta he
export default function Protected({children, authentication = true}) {
  
      const navigate=useNavigate()
      const [loader,setLoader] = useState(true)
      const authStatus = useSelector(state => state.auth.status)
  
      //useEffect hame batayega ki hame login pe bhejeka ,signup pe bhejega etc & kis kis field me change hota he to me dubara 

      useEffect(()=>{ 
         //it like todo make more easy to understand
         // if(authStatus ===true){
         //    navigate("/")
         // }else if(authStatus === false){
         //    navigate("/login")
         // }
//or
         // let authValue = authStatus === true ? true : false

         //or

          if(authentication && authStatus !==authentication){
            navigate("/login")
          }else if(!authentication && authStatus !== authentication){
            navigate("/")
          }
          // condition load ho ya na ho setloder false ho hi jayega
          setLoader(false)
      },[authStatus, navigate,authentication])
   return loader ? <h1> Loading... </h1> : <>{children}</>
}
