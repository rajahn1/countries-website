'use client';
import { createContext, useState} from "react";
import { CountriesDataI } from "@/app/interfaces/CountriesData";

export const CountryContext = createContext({
    country: '',
    setCountry: (value: string) => {},
    countries: [],
    setCountries: (value: CountriesDataI[]) => {}
});

export default function CountryProvider({ children }:any) {
    const [country, setCountry] = useState<String>('');
    const [countries, setCountries] = useState<CountriesDataI[]>([]);

    const values = { country, setCountry, countries, setCountries };
    return(
        <CountryContext.Provider value={values}> {children} </CountryContext.Provider>
    )
} 