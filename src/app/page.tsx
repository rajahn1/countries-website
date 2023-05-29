'use client'
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Cards';
import { CountriesServices } from '@/services';
import { CountriesDataI } from './interfaces/CountriesData';
import { useState, useEffect } from 'react';

export default function Home() {
  const [countries, setCountries] = useState<CountriesDataI[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await CountriesServices.getAll();
        const countriesData = data.slice(0,8);
        setCountries(countriesData);
      } catch (error) {
        console.log(error);
      }
    };

    getCountries();
  }, []);

  console.log(countries);

  return (
    <div className='p-12 main-container bg-slate-800 h-screen max-h-screen'>
     <SearchBar/>
     <div className='flex flex-wrap w-full gap-16 mt-10'> 
      {countries.map((country,index)=> (
          <Card
          key={index}
          flag={country.flags.png}
          name={country.name.common}
          region={country.region}
          population={country.population}
          capital={country.capital[0]}
          />
      ))}
     </div>

    </div>
  )
};
