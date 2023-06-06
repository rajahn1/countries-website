'use client';
import { createContext, useState} from "react";
import { Countries } from "@/interfaces/CountriesData";

export const CountryContext = createContext({
    country: '',
    setCountry: (value: string) => {},
    countries: [],
    setCountries: (value: Countries[]) => {}
});

export default function CountryProvider({ children }:any) {
    const [country, setCountry] = useState<String>('');
    const [countries, setCountries] = useState<Countries[]>([]);

    const values = { country, setCountry, countries, setCountries };
    return(
        <CountryContext.Provider value={values}> {children} </CountryContext.Provider>
    )
} 