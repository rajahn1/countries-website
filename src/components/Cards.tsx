'use client'
import Link from "next/link";
import { CountriesDataI } from "@/app/interfaces/CountriesData";
import { useContext } from "react";
import { CountryContext } from "@/context/CountryContext";
import { CountriesServices } from "@/services";
export default function Card ({flag, name, region, capital, population, handleOnClick}:CountriesDataI) {

    const styling = {
        width: '21.66%',
    }

    return(
        <div className="flex flex-col bg-slate-700 text-white shadow-xl hover:opacity-90 hover:cursor-pointer rounded-md" style={styling}
        onClick={handleOnClick}
        >
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
        </div>
    )
};
