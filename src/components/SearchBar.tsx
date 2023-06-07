'use client';
import Image from "next/image";
import SearchDark from '../../public/search-dark.png';
import SearchLight from '../../public/search-white.png';
import { CountryContext } from "@/context/CountryContext";
import { useContext, useEffect, useState } from "react";
import { CountriesServices } from "@/services";
import { useTheme } from 'next-themes';
import { CheckContext } from "@/utils/CheckContext";

export default function SearchBar({selectedOption, handleOptionChange}:any) {
    const context = useContext(CountryContext);
    if (!context) {
    alert('error');
    return null;
}    
    const {country, setCountry, setCountries} = context;

    const handleSearchClick = async () => {
        if (!country) {
            alert('type a country name..')
            return;
        }
        const data = await CountriesServices.getByName(country);
        if (!data) return alert('no country found');
        setCountries(data);
    }
    const handleSearchEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== "Enter") return; 
        const data = await CountriesServices.getByName(country);
        if (!data) return alert('no country found');
        setCountries(data);
    }

    const {systemTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[]);

    const renderThemeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <Image
                src={SearchLight}
                alt="search-dark"
                width={20}
                height={20}
                className="ml-4 absolute cursor-pointer hover:scale-105"
                onClick={handleSearchClick}
                />
            );
        }
        else {
            return(
                <Image
                src={SearchDark}
                alt="search-light"
                width={20}
                height={20}
                className="ml-4 absolute cursor-pointer hover:scale-105"
                onClick={handleSearchClick}
                />
            );
        }
    };

    return(
        <div className='flex justify-between'>
            <div className="flex h-16 w-4/12 gap-3 items-center">
                {renderThemeChanger()}
                <input type="text" placeholder='Search for a country...'
                className='w-full h-full pl-12 text-light-text bg-light-elements placeholder:text-light-input dark:text-dark-text dark:bg-dark-elements dark:placeholder:text-dark-text rounded-md shadow-lg text-md'
                onChange={e => setCountry(e.target.value)}
                onKeyDown={handleSearchEnter}
                />
            </div>
            <select className="bg-light-elements text-light-text dark:bg-dark-elements dark:text-dark-text h-16 w-56 rounded-md outline-none shadow-lg text-md p-4"
            value={selectedOption}
            onChange={handleOptionChange}>
                <option value='' disabled hidden> Filter By Region </option>
                <option value='africa'> África </option>
                <option value='america'> America </option>
                <option value='asia'> Asia </option>
                <option value='europe'> Europe </option>
                <option value='oceania'> Oceania </option>
            </select>
  
       </div>
    )

}