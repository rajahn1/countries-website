'use client';
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import formatNumber from "@/utils/FormatNumbers";
import { CountryI } from "@/interfaces/CountryData";
export default function CountryInformation({ flags, name, population, region, subregion, capital, area, currencies, languages, borders }: CountryI) {
    const router = useRouter();
    return (
        <div className="flex flex-row text-sm gap-16 items-center">
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
                    <span>Native Name: {Object.values(name.nativeName)[0].common}
                    </span>
                    <span> Population: {formatNumber(population)}</span>
                    <span> Region: {region}</span>
                    <span> Sub Region: {subregion}</span>
                    <span> Capital: {capital}</span>
                    <div className="flex justify-center items-center gap-2">
                        <span> Border Countries: </span>
                        {borders ? (
                            <>
                            {borders.slice(0,3).map((border,index) => (
                                <button key={index} className="shadow-md w-12 ">{border}</button> 
                            ))}
                        </>
                        ): 'no borders'}
                    </div>
                </div>
                <div className="flex flex-col gap-2 pt-10">
                    <span> Area: {formatNumber(area)} km²</span>
                        <span> Currencies:
                        {Object.entries(currencies).map(([key, currency]) => (
                            <span 
                            key={key}>Name: {currency.name}, Symbol: {currency.symbol}
                            </span>
                        ))}
                    </span>	
                    <span> Languages: 
                        {Object.entries(languages).map(([key,language]) => (
                            <span key={key}> 
                                {language} 
                            </span>
                        ))} 
                    </span>
                </div>
            </div>
        </div>
    )    
}