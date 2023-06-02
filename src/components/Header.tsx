'use client'
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';

export default function Header() {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[]);

    const renderThemeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
            <FaSun role="button" onClick={() => setTheme('light')} />
            );
        }
        else {
            return(
                <FaMoon role="button" onClick={() => setTheme('dark')} />
            );
        }
    };
    return(
        <div className= "bg-light-elements text-light-text dark:bg-dark-elements dark:text-dark-text flex justify-between h-24 items-center shadow-lg">
            <h2 className="ml-24 text-2xl font-bold"> Where in the world?</h2>
            <div className="mr-6 flex items-center hover:cursor-pointer">
                {renderThemeChanger()}
            </div>
        </div>
    )
}