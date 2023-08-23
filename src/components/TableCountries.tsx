'use client';
import { HomeCountries } from "@/interfaces/CountryData";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Loading from "./Loading";
import { verifyInputSearch } from "@/utils/compareInput";
export default function TableCountries({ data }:any) {

    const countriesData = data ? data : [];
    const [countriesFiltered, setCountriesFiltered] = useState(data);

    const [open, setOpen] = useState(false);

    const handleOpenLoading = () => {
      setOpen(true);
    };
   

    const handleFilterCountriesName = (searchedCountry: string) => {
        const filteredCountries:any = [];
        for (const country of countriesData) {
            if (verifyInputSearch(country.name.common.toLowerCase(), searchedCountry.toLowerCase()) || 
                verifyInputSearch(country.name.official.toLowerCase(), searchedCountry.toLowerCase())) {    
                filteredCountries.push(country);
            }
        };

        console.log(filteredCountries);
        setCountriesFiltered(filteredCountries);
    }

    const handleFilterCountriesRegion = (selectedRegion: string) => {
      const filteredCountries:any = [];

      for (const country of countriesData) {
        if (country.region.toLowerCase() === selectedRegion.toLowerCase()){
          filteredCountries.push(country);
        }

        console.log(filteredCountries);
        setCountriesFiltered(filteredCountries);
      };
    };

    return(
        <>
        <Loading
        open={open}/>
        <SearchBar
        handleFilterCountries={handleFilterCountriesName}
        handleFilterCountriesRegion={handleFilterCountriesRegion}/>
        <div className='flex items-center flex-col gap-[6.5%] md:flex-row flex-wrap w-full mt-16'> 
      {countriesFiltered.length !== 0  ? countriesFiltered.map((country:HomeCountries, index:number) => (
        <Card
        handleOpenLoading={handleOpenLoading}
        key={index}
        name={country.name}
        population={country.population}
        region={country.region}
        flags={country.flags}
        capital={country.capital}
        />
      )):
    <span>Ooops, no results found xD</span>}
     </div>
    </>
    )
}