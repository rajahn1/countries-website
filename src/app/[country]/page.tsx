import CountryInformation from "@/components/CountryInformation";
import { CountryI } from "@/interfaces/CountryData";
import { api } from "@/providers/Api"

const getCountryData = async (countryName: string) => {
    try {
        const res = await api.get(`/name/${countryName}`);
        return res.data;
    } catch (error) {
        alert(error)
    }
};

export default async function SpecificCountry({ params }: any) {
    const arrayData = await getCountryData(params.country);
    const data: CountryI = arrayData[0];
    if (!data) return <span> error </span>    
    return (
    <div className=" text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg flex flex-col h-screen items-center pt-16">
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