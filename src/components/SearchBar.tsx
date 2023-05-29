'use client';
import Image from "next/image";
import SearchDark from '../../public/search-dark.png';
import SearchLight from '../../public/search-white.png';
import { useState } from "react";
import { CountriesServices } from "@/services";

export default function SearchBar() {
    const [country, setCountry] = useState('');

    async function handleSearch() {
        if (!country) {
            alert('type a country name..')
            return;
        }
        await CountriesServices.getByName(country)
    }

    return(
        <div className='flex justify-between'>
            <div className="flex gap-3 items-center">
                <Image
                src={SearchDark}
                alt="search-dark"
                width={20}
                height={20}
                className="ml-4 absolute cursor-pointer hover:scale-105"
                onClick={handleSearch}
                />
                <input type="text" placeholder='Search for a country...'
                className='w-72 h-12 pl-12 text-white bg-slate-400 placeholder:text-white'
                onChange={e => setCountry(e.target.value)}
                />
            </div>
            <select defaultValue='Filter by region' id="">
                <option> África </option>
                <option> America </option>
                <option> Asia </option>
                <option> Europe </option>
                <option> Oceania </option>
            </select>
  
       </div>
    )

}