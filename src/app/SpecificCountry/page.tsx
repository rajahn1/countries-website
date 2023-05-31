'use client';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
export default function SpecificCountry() {
    const dataJSON = localStorage.getItem('selectedCountryData');
    const selectedCountryDataArray = JSON.parse(dataJSON);
    const selectedCountryData = selectedCountryDataArray[0];

    const values = Object.values(selectedCountryData.name.nativeName);
    const firstElement = values[0];
    const nativeName:string = firstElement.common;

    type stringObjectT = Record<string,string>;
    const borders:stringObjectT = selectedCountryData.borders;
    const borderEntries = Object.entries(borders);
    const limitedBorderEntries = borderEntries.length > 3 ? borderEntries.slice(0, 3) : borderEntries;

    console.log(selectedCountryDataArray[0]);
    return (
    <div className="w-screen text-white bg-slate-800 flex flex-row items-center justify-center">
        <div className="w-1/ flex flex-col gap-8">
        <Link href='/'>
        <button
         className="bg-slate-500 text-white flex items-center mt-4 justify-center gap-2 w-5/12 h-8 ">
            <FaArrowLeft />
            Back
         </button>
         </Link>
                <img src={selectedCountryData.flags.png} alt="flag" />
            </div>

            <div className=" w-1/2 flex flex-col items-center justify-between container-right">
                <div className="flex">
                    <div className="flex flex-col">
                        <h2>{selectedCountryData.name.common}</h2>
                        <span>Native Name: {nativeName}</span>
                        <span>Population: {selectedCountryData.population}</span>
                        <span>Region: {selectedCountryData.region}</span>
                        <span>Subregions: {selectedCountryData.subregion}</span>
                        <span>Capital: {selectedCountryData.capital}</span>
                    </div>
                    <div className="flex flex-col">
                        <span>Top Level Domain:</span>
                        <span>Currencies:</span>
                        <span>Languaages:</span>
                        </div>
                    </div>               
                <div className="flex gap-5">
                    <span>Border Countries:</span>
                    {limitedBorderEntries && limitedBorderEntries.map((border,index) =>(
                        <button
                        key={index}
                        >
                        {border.slice(1, border.length)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}