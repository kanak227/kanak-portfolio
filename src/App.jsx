import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoadingScreen from './components/LoadingScreen'
import './index.css'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'


function App() {
  const [isLoaded , setIsLoaded] = useState(false);
  const [menuOpen , setmenuOpen] = useState(false);


  return (
    <>
   {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}

    <div className='{min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 } '>
      
    <Navbar menuOpen ={menuOpen} setmenuOpen = {setmenuOpen}/>
    <MobileMenu menuOpen ={menuOpen} setmenuOpen = {setmenuOpen}/>

    </div>
    </>
  )
}

export default App
