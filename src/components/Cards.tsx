'use client'
import { CardProps } from "@/interfaces/CountryData";
import formatNumber from "@/utils/FormatNumbers";

export default function Card ({flags, name, region, capital, population, handleOnClick}:CardProps) {
   
    return(
        <div className="flex flex-col w-8/12 md:w-1/6 bg-light-elements text-light-text dark:bg-dark-bg dark:text-dark-text shadow-xl hover:opacity-90 hover:cursor-pointer rounded-md"
        onClick={handleOnClick}
        >
            <img
            className="h-36 w-full border-2 dark:border-slate-300 border-slate-600"
            src={flags.png}
            alt='flag'
            />
            <div className="p-6 flex flex-col text-sm">
                <span className="mb-4 text-xl font-bold"> {name.common} </span>
                <span> Population: {formatNumber(population)}</span>
                <span> Region: {region} </span>
                <span> Capital: {capital ? Object.values(capital)[0]: 'no capital'} </span>
            </div>
        </div>
    )
};
