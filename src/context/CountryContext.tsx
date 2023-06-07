'use client';
import { createContext, useState, ReactNode } from "react";
import { CountriesI, CountryContextProps } from "@/interfaces/CountriesData";

export const CountryContext = createContext<CountryContextProps | undefined>(undefined);

export default function CountryProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState<string>('');
  const [countries, setCountries] = useState<CountriesI[]>([]);

  const values: CountryContextProps = { country, setCountry, countries, setCountries };
  return (
    <CountryContext.Provider value={values}>
      {children}
    </CountryContext.Provider>
  );
}