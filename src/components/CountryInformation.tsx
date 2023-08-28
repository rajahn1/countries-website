'use client';
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import formatNumber from "@/utils/FormatNumbers";
import { CountryI } from "@/interfaces/CountryData";
export default function CountryInformation({ flags, name, population, region, subregion, capital, area, currencies, languages, borders }: CountryI) {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-center md:flex-row text-md md:gap-16 items-center">
            <div className="flex flex-col gap-8 container-left">
                <button
                onClick={() => router.push('/')}
                className="bg-light-elements text-light-text dark:bg-dark-elements dark:text-dark-text shadow-md flex items-center mt-4 justify-center gap-2 w-32 h-8 ">
                <FaArrowLeft />
                    Back
                </button>
                <img src={flags.png} alt="flag" className="border-2 border-slate-200 shadow-md" />
            </div>
            <div className="flex flex-row gap-10 container-right pt-16">
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold">
                        {name.common}
                    </h2>
                    <span>Native Name: {name.nativeName ? Object.values(name.nativeName)[0].common : 'no name'}
                    </span>
                    <span> Population: {formatNumber(population)}</span>
                    <span> Region: {region}</span>
                    <span> Sub Region: {subregion}</span>
                    <span> Capital: {capital}</span>
                    <div className="flex items-center gap-2">
                        Border Countries:
                        {borders ? (
                            <div>
                            {borders.slice(0,3).map((border,index) => (
                                <button key={index} className="shadow-md w-12 ">{border}</button> 
                            ))}
                            </div>
                        ): "no borders"}
                    </div>
                </div>
                <div className="flex flex-col gap-2 pt-10">
                    <span> Area: {formatNumber(area)} km²</span>
                        <div className="flex gap-2"> Currencies:
                        {currencies ? Object.entries(currencies).slice(0,3).map(([key, currency]) => (
                            <span 
                            key={key}>{currency.name}, {currency.symbol}
                            </span>
                        )): <span> no currency </span>}
                    </div>	
                    <div className="flex gap-2"> Languages:  
                        {languages ? Object.entries(languages).slice(0,3).map(([key,language]) => (
                            <span key={key}> 
                                {language} 
                            </span>
                        )): <span> No languages </span>} 
                    </div>
                </div>
            </div>
        </div>
    )    
}