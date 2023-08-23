'use client';
import { createContext, useState, ReactNode } from "react";
import { CountryContextProps } from "@/interfaces/CountryData";
import { HomeCountries } from "@/interfaces/CountryData";

export const CountryContext = createContext<CountryContextProps | undefined>(undefined);

export default function CountryProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState<string>('');
  const [countries, setCountries] = useState<HomeCountries[]>([]);
  
  const values: CountryContextProps = { country, setCountry, countries, setCountries};
  return (
    <CountryContext.Provider value={values}>
      {children}
    </CountryContext.Provider>
  );
}