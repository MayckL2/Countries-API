import { useState } from "react"
import sol from '../img/sol.png'
import lua from '../img/lua.png'

function Header() {
    const [mode, setMode]= useState(true)

    return (
        <header className="bg-slate-700 
        flex 
        justify-between
        items-center 
        p-5
        ">
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
            items-center"
            onClick={()=>setMode(!mode)}>
                <img 
                className="
                w-8
                mx-2"
                src={mode? lua : sol } alt="" />
                <p>{mode? 'Dark Mode' : 'Light Mode'}</p>
            </button>
        </header>
    )
}

export default Header;