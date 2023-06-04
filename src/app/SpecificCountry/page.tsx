'use client';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import CountryInformation from '../../components/CountryInformation';

export default function SpecificCountry() {
    const router = useRouter();
    const dataJSON = localStorage.getItem('selectedCountryData');
    const selectedCountryDataArray = JSON.parse(dataJSON);
    const selectedCountryData = selectedCountryDataArray[0];
    console.log(selectedCountryData);

    return (
    <div className="w-screen text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg flex flex-col h-screen">
        <button
        onClick={() => router.push('/')}
        className="bg-light-elements text-light-text dark:bg-dark-elements dark:text-dark-text shadow-md flex items-center mt-4 justify-center gap-2 w-2/12 h-8 ">
            <FaArrowLeft />
            Back
         </button>
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