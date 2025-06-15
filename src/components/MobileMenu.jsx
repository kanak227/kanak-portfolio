import React, { useEffect } from 'react'

const MobileMenu = ({menuOpen , setmenuOpen}) => {

  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen 
    ? "h-screen opacity-100 pointer-events-auto"
    : "h-0 opacity-0 pointer-events-none"}`}>
      
      <button onClick={()=>setmenuOpen(false)} className='absolute top-4 right-8 text-white opacity-70 text-3xl focus:outline-none cursor-pointer'
        aria-label='Close menu'>
        &times;
      </button>

        <a href="#home"className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`} onClick={()=>setmenuOpen(false)}>
                    Home
        </a>
        <a href="#about"className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`} onClick={()=>setmenuOpen(false)}>
                    About
        </a>
        <a href="#projects"className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`} onClick={()=>setmenuOpen(false)}>
                    Projects
        </a>
        <a href="#contact"className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`} onClick={()=>setmenuOpen(false)}>
                    Contact
        </a>

    </div>
  );
}

export default MobileMenu
