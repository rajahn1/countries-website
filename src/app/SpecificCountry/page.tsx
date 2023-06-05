'use client';
import CountryInformation from '../../components/CountryInformation';

export default function SpecificCountry() {
    const dataJSON = localStorage.getItem('selectedCountryData');
    const selectedCountryDataArray = JSON.parse(dataJSON);
    const selectedCountryData = selectedCountryDataArray[0];

    return (

    <div className=" text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg flex flex-col h-screen items-center pt-16">
            <CountryInformation
            flag={selectedCountryData.flags.png}
            countryName={selectedCountryData.name.common}
            nativeName={selectedCountryData.name.nativeName}
            population={selectedCountryData.population}
            region={selectedCountryData.region}
            subregion={selectedCountryData.subregion}
            capital={selectedCountryData.capital}
            area={selectedCountryData.area}
            currencies={selectedCountryData.currencies}
            languages={selectedCountryData.languages}
            borders={selectedCountryData.borders} 
            />
        </div>
    )
}