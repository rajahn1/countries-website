import { HomeCountriesProps } from "@/interfaces/CountryData";
import formatNumber from "@/utils/FormatNumbers";
import { useRouter } from "next/navigation";

export default function Card({ flags, name, region, capital, population, handleOpenLoading }: HomeCountriesProps) {
    const router = useRouter();
    
    const handleOnClick = (countryName: string) => {
        handleOpenLoading();
        router.push(`/${encodeURIComponent(countryName)}`);
    };

    return(
    <div className="flex flex-col mb-16 h-80 w-[60%] md:max-w-[20%] md:min-w-[15%] bg-light-elements text-light-text dark:bg-dark-bg dark:text-dark-text shadow-xl hover:opacity-90 hover:scale-105 hover:cursor-pointer rounded-md">
        <img
        onClick={() => handleOnClick(name.common)}
        className="h-36 w-full border-2 dark:border-slate-300 border-slate-600"
        src={flags.png}
        alt='flag'
        />
        <div className="p-6 flex flex-col text-sm">
            <span className="mb-4 text-xl font-bold"> {name.common} </span>
            <span> Population: {formatNumber(population)}</span>
            <span> Region: {region} </span>
            <span> Capital: {capital ? Object.values(capital)[0]: 'no capital'} </span>
        </div>
    </div>
    )
}