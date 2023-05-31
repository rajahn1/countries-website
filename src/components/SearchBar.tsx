'use client';
import Image from "next/image";
import SearchDark from '../../public/search-dark.png';
import SearchLight from '../../public/search-white.png';
import { CountryContext } from "@/context/CountryContext";
import { useContext, useEffect } from "react";
import { CountriesServices } from "@/services";

export default function SearchBar({selectedOption, handleOptionChange}) {
    const {country, setCountry, setCountries} = useContext(CountryContext);

    const handleSearchClick = async () => {
        if (!country) {
            alert('type a country name..')
            return;
        }
        const data = await CountriesServices.getByName(country);
        if (!data) return alert('no country found');
        setCountries(data);
    }
    const handleSearchEnter = async (event) => {
        if (event.key !== "Enter") return; 
        const data = await CountriesServices.getByName(country);
        if (!data) return alert('no country found');
        setCountries(data);
    }

    return(
        <div className='flex justify-between'>
            <div className="flex h-16 w-4/12 gap-3 items-center">
                <Image
                src={SearchLight}
                alt="search-light"
                width={20}
                height={20}
                className="ml-4 absolute cursor-pointer hover:scale-105"
                onClick={handleSearchClick}
                />
                <input type="text" placeholder='Search for a country...'
                className='w-full h-full pl-12 text-white bg-slate-700 placeholder:text-white rounded-md shadow-lg text-md'
                onChange={e => setCountry(e.target.value)}
                onKeyDown={handleSearchEnter}
                />
            </div>
            <select className="bg-slate-700 text-white h-16 w-56 rounded-md outline-none text-md p-4"
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