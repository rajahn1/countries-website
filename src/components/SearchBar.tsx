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
            <div className="flex h-16 w-4/12 gap-3 items-center">
                <Image
                src={SearchLight}
                alt="search-light"
                width={20}
                height={20}
                className="ml-4 absolute cursor-pointer hover:scale-105"
                onClick={handleSearch}
                />
                <input type="text" placeholder='Search for a country...'
                className='w-full h-full pl-12 text-white bg-slate-700 placeholder:text-white rounded-md shadow-lg'
                onChange={e => setCountry(e.target.value)}
                />
            </div>
            <select className="bg-slate-700 text-white h-16 w-56 rounded-md outline-none text-lg p-4">
                <option value="" selected disabled hidden> Filter by region </option>
                <option> África </option>
                <option> America </option>
                <option> Asia </option>
                <option> Europe </option>
                <option> Oceania </option>
            </select>
  
       </div>
    )

}