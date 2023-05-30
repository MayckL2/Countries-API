import { useState } from "react"
import sol from '../img/sol.png'
import lua from '../img/lua.png'

function Header() {
    const [mode, setMode]= useState(true)

    function mudaTema(){
        document.querySelector("header").classList.toggle('bg-slate-700')
        document.querySelector("header p").classList.toggle('text-black')
        document.querySelector("button").classList.toggle('text-black')
        document.querySelector("header").classList.toggle('border-slate-700')
        setMode(!mode)
    }

    return (
        <header className="
        flex 
        justify-between
        items-center 
        p-5
        border-b-4
        bg-slate-700
        "
        >
            <p className="text-white font-bold">Where in the world?</p>

            <button 
            className="
            text-white
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
            onClick={mudaTema}>
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