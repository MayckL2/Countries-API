import { useState } from "react"
import sol from '../img/sol.png'
import lua from '../img/lua.png'

function Header() {
    const [mode, setMode]= useState(true)

    // carrega o tema configurado pelo navegador
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    // muda o tema do site usando localStorage com tailwind
    function mudaTema(){
        mode? localStorage.theme = 'light' : localStorage.theme = 'dark'
        setMode(!mode)
    }
    

    return (
        <header className="
        flex 
        justify-between
        items-center 
        p-5
        drop-shadow
        dark:drop-shadow-[0_1px_1px_rgba(255,255,255)]
        bg-white
        dark:bg-slate-700
        "
        >
            <p className="text-black dark:text-white font-bold">Where in the world?</p>

            <button 
            className="
            text-black 
            dark:text-white
            rounded-full
            p-2
            text-sm
            font-bold
            border-2
            border-solid
            border-transparent
            hover:border-white
            flex
            items-center
            transition-all
            "
            onClick={()=> mudaTema()}
            >
                <img 
                className="
                w-8
                mx-2"
                src={mode? lua : sol } alt="" />
                {mode? 'Dark Mode' : 'Light Mode'}
            </button>
        </header>
    )
}

export default Header;