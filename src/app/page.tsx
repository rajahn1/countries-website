'use client'
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Cards';
import { CountriesServices } from '@/services';
import { useEffect, useContext, useState, ChangeEvent } from 'react';
import { CountryContext } from '@/context/CountryContext';
import { useRouter } from 'next/navigation';
import { HomeCountries } from '@/interfaces/CountryData';
import { useLocalStorage } from 'react-use';

export default function Home() {
  const [, setValue,] = useLocalStorage('country-data');

  const context = useContext(CountryContext);
  if (!context) {
    alert('error');
    return null;
  }
  const { countries, setCountries } = context;
  const [selectedOption, setSelectedOption] = useState<string>('');

  const router = useRouter();

  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getCountries = async () => {
    const data = await CountriesServices.getAll();
    const randomNumber = getRandomNumber(1, 242);
    const countriesData = data.slice(randomNumber, Number(randomNumber) + 8);
    setCountries(countriesData);
  };

  useEffect(() => {
    getCountries();
  }, []);

  async function handleOnClick(countryName: string) {
    const data = await CountriesServices.getByName(countryName);
    setValue(data);
    router.push('/SpecificCountry');
  }

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  }

  const filterRegion = async () => {
    if (selectedOption.length) {
      const data = await CountriesServices.getByRegion(selectedOption);
      setCountries(data);
    }
  }
  useEffect(() => {
    filterRegion();
  }, [selectedOption])

  return (
    <div className='p-12 main-container bg-light-bg dark:bg-dark-bg'>
      <SearchBar
        handleOptionChange={handleOptionChange}
        selectedOption={selectedOption} filterRegion
      />
      <div className='flex flex-col justify-center md:flex-row flex-wrap w-full gap-32 mt-16'>
        {countries?.map(({ flags, name, region, population, capital }: HomeCountries) => (
          <Card
            key={name.official}
            flags={flags}
            name={name}
            region={region}
            population={population}
            capital={capital}
            handleOnClick={() => handleOnClick(name.common)}
          />
        ))}
      </div>
    </div>
  )
};
