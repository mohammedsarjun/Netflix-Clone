import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { Routes,Route, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  console.log("API KEY:", import.meta.env.VITE_FIREBASE_API_KEY);
const navigate=useNavigate()
  useEffect(()=>{

    onAuthStateChanged(auth,(user)=>{
      if(user){
      navigate("/")
      }else{
        navigate("/login")
      }
    })
  },[])
  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/player/:id" element={<Player/>}/>
      </Routes>
     
    </div>
  )
}

export default App
