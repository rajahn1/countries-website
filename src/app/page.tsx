'use client'
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Cards';
import { CountriesServices } from '@/services';
import { useEffect, useContext, useState } from 'react';
import { CountryContext } from '@/context/CountryContext';
import { useRouter } from 'next/navigation';
import { HomeCountries } from '@/interfaces/CountryData';
import { useLocalStorage } from 'react-use';

export default function Home() {
  const [value, setValue, remove] = useLocalStorage('country-data');

  const context = useContext(CountryContext);
  if (!context) {
      alert('error');
      return null;
  }    
  const { countries, setCountries} = context;
  const [selectedOption, setSelectedOption] = useState('');
  
  const router = useRouter();

  useEffect(() => {
    const getCountries = async () => {
        const data = await CountriesServices.getAll();

        function getRandomNumber(min:number, max:number):number {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const randomNumber = getRandomNumber(1,242);
        const countriesData = data.slice(randomNumber,Number(randomNumber)+8);
        setCountries(countriesData);
    };
    getCountries();
  },[]);

  async function handleOnClick(countryName:string) {
    const data = await CountriesServices.getByName(countryName);
    setValue(data);
    router.push('/SpecificCountry');
  }

  const handleOptionChange = (e:any):void => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  }

  useEffect(() => {
    const filterRegion = async () => {
      if (selectedOption !== '') {
        const data = await CountriesServices.getByRegion(selectedOption);
        setCountries(data);
      }
    }
    filterRegion();
  },[selectedOption])
  
  return (
    <div className='p-12 main-container bg-light-bg dark:bg-dark-bg'>
     <SearchBar
     handleOptionChange={handleOptionChange}
     selectedOption={selectedOption}
     />
     <div className='flex flex-col justify-center md:flex-row flex-wrap w-full gap-32 mt-16'> 
      { countries.map((country:HomeCountries ,index:number) => (
          <Card
          key={index}
          flags={country.flags}
          name={country.name}
          region={country.region}
          population={country.population}
          capital={country.capital}
          handleOnClick={() => handleOnClick(country.name.common)}
          />
      ))}
     </div>
    </div>
  )
};
