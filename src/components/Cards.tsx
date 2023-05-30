'use client'
import Link from "next/link";
import { CountriesDataI } from "@/app/interfaces/CountriesData";
import { useContext } from "react";
import { CountryContext } from "@/context/CountryContext";
import { CountriesServices } from "@/services";
export default function Card ({flag, name, region, capital, population}:CountriesDataI) {

    async function handleOnClick() {
        const data = await CountriesServices.getByName(name);
        const dataJSON = JSON.stringify(data);
        localStorage.setItem('selectedCountryData', dataJSON);
      }

    const styling = {
        width: '21.66%',
    }

    return(
        <div className="flex flex-col bg-slate-700 text-white shadow-xl hover:opacity-90 hover:cursor-pointer rounded-md" style={styling}
        onClick={handleOnClick}
        >
            
        <Link href='/SpecificCountry' className="h-full w-full">
            <img
            className="w-full h-3/6 border-2 border-slate-300"
            src={flag}
            alt='flag'
            />
            <div className="p-6 flex flex-col text-sm">
                <span className="mb-4 text-xl font-bold"> {name} </span>
                <span> Population: {new Intl.NumberFormat().format(population)}</span>
                <span> Region: {region} </span>
                <span> Capital: {capital}</span>
            </div>
        </Link>
        </div>
    )
};
