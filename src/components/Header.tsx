'use client'
import { FaMoon, FaSun, FaGlobeAmericas } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import { useRouter } from "next/navigation";

export default function Header() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    },[]);

    const renderThemeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
            <FaSun size={25} role="button" onClick={() => setTheme('light')} />
            );
        }
        else {
            return(
                <FaMoon size={25} role="button" onClick={() => setTheme('dark')} />
            );
        }
    };
    return(
        <div className= "bg-light-elements text-light-text dark:bg-dark-elements dark:text-dark-text flex justify-between h-24 items-center shadow-lg">
            <div className=" ml-12 flex items-center">
                <FaGlobeAmericas
                size={30}
                onClick={() => router.push('/')}
                className="mr-4 cursor-pointer"/>
                <h2 className="text-2xl font-bold">  Where in the world?</h2>
            </div>
            <div className="mr-6 flex items-center hover:cursor-pointer">
                {renderThemeChanger()}
            </div>
        </div>
    )
}