import { useState } from "react"

function Header() {
    const [mode, setMode]= useState(true)

    return (
        <header>
            <p>Where in the world?</p>

            <button onClick={()=>setMode(!mode)}>
                <img src="" alt="" />
                <p>{mode? 'Dark Mode' : 'Light Mode'}</p>
            </button>
        </header>
    )
}

export default Header;