'use client';
import { CountryI } from '@/interfaces/CountryData';
import useLocalStorage from 'react-use/lib/useLocalStorage';
import CountryInformation from '../../components/CountryInformation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SpecificCountry() {
    const [mounted, setMounted] = useState(false);
    const [value] = useLocalStorage<CountryI[]>('country-data');
    const router = useRouter();
    let specificCountryData;
    
    useEffect(() => {
      setMounted(true);
      if (!value) {
        router.push('/');
        }
    },[]);
    
    if (!mounted){
        return null;
    }

    if (value === undefined) {
        return null;
    }

    specificCountryData = value[0];
    return (
    <div className=" text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg flex flex-col h-screen items-center pt-16">
            <CountryInformation
            flags={specificCountryData.flags}
            name={specificCountryData.name}
            population={specificCountryData.population}
            region={specificCountryData.region}
            subregion={specificCountryData.subregion}
            capital={specificCountryData.capital}
            area={specificCountryData.area}
            currencies={specificCountryData.currencies}
            languages={specificCountryData.languages}
            borders={specificCountryData.borders} 
            />
        </div>
    )
}