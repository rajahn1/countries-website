import Image from "next/image";
import { CountriesDataI } from "@/app/interfaces/CountriesData";
import { Hi_Melody } from "next/font/google";
export default function Card ({flag, name, region, capital, population}:CountriesDataI) {

    return(
        <div className="flex flex-col bg-white w-1/5">
            <img
            className="w-full h-3/6"
            src={flag}
            alt='flag'
            />
            <span> {name} </span>
            <div className="flex flex-col">
                <span> Population: {population}</span>
                <span> Region: {region} </span>
                <span> Capital: {capital}</span>
            </div>
        </div>
    )
};
