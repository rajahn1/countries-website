'use client'
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
export default function Header() {
    const [theme, setTheme] = useState('dark');
    localStorage.setItem('theme', theme);
    const handleChangeTheme = () => {
        if (theme ==='dark') setTheme('light');
        if (theme ==='light') setTheme('dark');
    }
    const localTheme = localStorage.getItem('theme');
    return(
        <div className=" bg-slate-700 text-white flex justify-between h-24 items-center">
            <h2 className="ml-24 text-2xl font-bold"> Where in the world?</h2>
            <div className="mr-6 flex items-center hover:cursor-pointer" onClick={handleChangeTheme} >
                {theme === 'dark' ? <FaMoon /> : <FaSun /> }
                {theme === 'dark' ? <span className="ml-2"> Dark mode</span>: <span className="ml-2"> Light mode</span>}
                
            </div>
        </div>
    )
}