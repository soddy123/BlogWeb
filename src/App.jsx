import React,{ useState,useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import { Footer } from './component';
import {Header} from './component'
import { Outlet } from 'react-router-dom';
import bgimg from './assets/background.png'

function App() {
  

  // aagar hame deta debase se puchna ho our network se deta lena ho then we have to give loding beacuse it take time sometime

  const [loading,setLoding] = useState(true)
  const dispatch = useDispatch()

  

  //Application load hone ke bad pucho user se ki aap login ho ya nahi ho
  useEffect(()=>{

  
      authService.currentUser()
      .then((userData)=>{
        // ham yaha dekte he ki user login he ki nahi aagar he to user user login ho jayega aagar nahi he to user update ho jayega iis se hamri stste update rahegi
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }

      })
      // sab kam ho gaya he iisliye loding off kar dege
      .finally(()=>setLoding(false))
  },[])
  return !loading ? <div
  className="min-h-screen flex flex-wrap content-between bg-[#1C2841] bg-cover bg-center" // Yankees Blue background
  style={{ backgroundImage: `url(${bgimg})` }} // Use the imported image as background
    >
    <div className='w-full block' >
      <Header />
      <main>
        <Outlet/>{/* ToDo <Outlet/> */}
        {/* {<Outlet/>} */}
      </main>
      <Footer />
    </div>
  </div> : null;
}

export default App
