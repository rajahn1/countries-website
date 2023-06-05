'use client'
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

import formatNumber from "@/utils/FormatNumbers";

export default function CountryInformation({ flag, countryName, nativeName, population, region, subregion, capital, area, currencies, languages, borders }) {
    const router = useRouter();
    const natimeNameValues = Object.values(nativeName);
    const currenciesValues = Object.values(currencies);
    const languagesValues = Object.values(languages);
    return (
        <div className="flex flex-row text-sm gap-16 items-center">
            <div className="flex flex-col gap-8 container-left">
                <button
                onClick={() => router.push('/')}
                className="bg-light-elements text-light-text dark:bg-dark-elements dark:text-dark-text shadow-md flex items-center mt-4 justify-center gap-2 w-32 h-8 ">
                <FaArrowLeft />
                    Back
                </button>
                <img src={flag} alt="flag" className="border-2 border-slate-200 shadow-md" />
            </div>
            <div className="flex flex-row gap-10 container-right pt-16">
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold">
                        {countryName}
                    </h2>
                    <span>Native Name: {natimeNameValues[0].common}
                    </span>
                    <span> Population: {formatNumber(population)}</span>
                    <span> Region: {region}</span>
                    <span> Sub Region: {subregion}</span>
                    <span> Capital: {capital}</span>
                    <div className="flex justify-center items-center gap-2">
                        <span> Border Countries: </span>
                        {borders ? borders.map(border => (
                            <button className="shadow-md w-12 ">{border} </button>
                        )): 'no borders'}
                    </div>
                </div>
                <div className="flex flex-col gap-2 pt-10">
                    <span> Area: {formatNumber(area)} km²</span>
                    <span> Currencies: {currenciesValues.map((item, index) => (
                        <span key={index}>{item.name}, symbol: {item.symbol}</span>
                    ))} </span>
                    <span> Languages: {languagesValues.map((item,index) => (
                        <span key={index}> {item} </span>
                    ))} </span>
                </div>
            </div>
        </div>
    )    
}