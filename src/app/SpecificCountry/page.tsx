'use client';
import CountryInformation from '../../components/CountryInformation';
import { CountryI } from '@/interfaces/CountryData';

export default function SpecificCountry() {
    const countryJSON = localStorage.getItem('selectedCountryData');
    let countryData: CountryI = JSON.parse(countryJSON!)[0];   
    return (

    <div className=" text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg flex flex-col h-screen items-center pt-16">
            <CountryInformation
            flags={countryData.flags}
            name={countryData.name}
            population={countryData.population}
            region={countryData.region}
            subregion={countryData.subregion}
            capital={countryData.capital}
            area={countryData.area}
            currencies={countryData.currencies}
            languages={countryData.languages}
            borders={countryData.borders} 
            />
        </div>
    )
}