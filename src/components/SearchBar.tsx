import Image from "next/image";
import SearchDark from '../../public/search-dark.png';
import SearchLight from '../../public/search-white.png';
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';

type PropsSearch = {
    handleFilterCountries: (country: string) => void;
    handleFilterCountriesRegion: (region: string) => void;
}

export default function SearchBar({ handleFilterCountries, handleFilterCountriesRegion }:PropsSearch) {

    const [inputSearch, setInputSearch] = useState('');
    const { systemTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === '') return handleFilterCountries('');
        handleFilterCountriesRegion(e.target.value);
    }
        
    const filterCountriesName = () => {
        console.log(inputSearch);
        handleFilterCountries(inputSearch);
    }

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
                />
            );
        }
    };

    return(
        <div className='flex flex-col gap-3 md:flex-row justify-between items-center'>
            <div className="flex h-16 w-10/12 md:w-4/12 gap-3 items-center">
                {renderThemeChanger()}
                <input type="text" placeholder='Search for a country...'
                className='w-full h-full pl-12 text-light-text bg-light-elements placeholder:text-light-input dark:text-dark-text dark:bg-dark-elements dark:placeholder:text-dark-text rounded-md shadow-lg text-sm md:text-md'
                onChange={e => setInputSearch(e.target.value)}
                value={inputSearch  ? inputSearch : ''}
                onKeyUp={filterCountriesName}
                /> 
            </div> 
            <select className="bg-light-elements text-light-text dark:bg-dark-elements dark:text-dark-text h-16 w-10/12 md:w-2/12 rounded-md outline-none shadow-lg text-md p-4"
            onChange={handleOptionChange}
            defaultValue={''}>
                <option value=''> Filter By Region </option>
                <option value='africa'> Africa </option>
                <option value='americas'> Americas </option>
                <option value='asia'> Asia </option>
                <option value='europe'> Europe </option>
                <option value='oceania'> Oceania </option>
            </select>
       </div>
    )

}