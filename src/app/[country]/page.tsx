import CountryInformation from "@/components/CountryInformation";
import { CountryI } from "@/interfaces/CountryData";

const getCountryData = async (countryName: string) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    
    if (!res.ok) {
        throw new Error("Failed to load country")
    }
    
    return res.json();
};

export default async function SpecificCountry({ params }: any) {
    const arrayData = await getCountryData(params.country);
    const data: CountryI = arrayData[0];
    if (!data) return <span> error </span>    
    return (
    <div className=" text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg flex flex-col h-screen items-center p-12">
        <CountryInformation
        area={data.area}
        borders={data.borders}
        flags={data.flags}
        capital={data.capital}
        currencies={data.currencies}
        languages={data.languages}
        population={data.population}
        region={data.region}
        subregion={data.subregion}
        name={data.name}
        />
    </div>
    )
}