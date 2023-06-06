'use client';
import CountryInformation from '../../components/CountryInformation';
import { Country } from '@/interfaces/CountryData';

export default function SpecificCountry() {
    const dataJSON = localStorage.getItem('selectedCountryData');
    const selectedCountryData:Country = JSON.parse(dataJSON)[0];
    
    return (

    <div className=" text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg flex flex-col h-screen items-center pt-16">
            <CountryInformation
            flags={selectedCountryData.flags.png}
            countryName={selectedCountryData.name.common}
            nativeName={Object.values(selectedCountryData.name.nativeName)[0]}
            population={selectedCountryData.population}
            region={selectedCountryData.region}
            subregion={selectedCountryData.subregion}
            capital={selectedCountryData.capital}
            area={selectedCountryData.area}
            currencies={Object.values(selectedCountryData.currencies)}
            languages={Object.values(selectedCountryData.languages)}
            borders={selectedCountryData.borders} 
            />
        </div>
    )
}