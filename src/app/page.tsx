'use client'
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Cards';
import { CountriesServices } from '@/services';
import { useEffect, useContext } from 'react';
import { CountryContext } from '@/context/CountryContext';

export default function Home() {
  const { countries, setCountries } = useContext(CountryContext);

  useEffect(() => {
    const getCountries = async () => {
        const data = await CountriesServices.getAll();
        const countriesData = data.slice(0,8);
        setCountries(countriesData);
    };

    getCountries();
  }, []);

  return (
    <div className='p-12 main-container bg-slate-800'>
     <SearchBar/>
     <div className='flex flex-wrap w-full gap-20 mt-16'> 
      { countries.map((country,index)=> (
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
