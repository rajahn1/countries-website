'use client'
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Cards';
import { CountriesServices } from '@/services';
import { useEffect, useContext, useState } from 'react';
import { CountryContext } from '@/context/CountryContext';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { countries, setCountries } = useContext(CountryContext);
  const [selectedOption, setSelectedOption] = useState('');

  const [theme, setTheme] = useState('dark');

  const handleChangeTheme = () => {
    
    setTheme(theme)
  }

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
  }, []);

  async function handleOnClick(countryName:string) {
    const data = await CountriesServices.getByName(countryName);
    const dataJSON = JSON.stringify(data);
    localStorage.setItem('selectedCountryData', dataJSON);
    router.push('/SpecificCountry');
  }

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  }

  useEffect(() => {
    const filterRegion = async () => {
      if (selectedOption !== '') {
        const data = await CountriesServices.getByRegion(selectedOption);
        console.log(data);
        setCountries(data);
      }
    }

    filterRegion();
  },[selectedOption])

  return (
    <div className='p-12 main-container bg-slate-800'>
     <SearchBar
     handleOptionChange={handleOptionChange}
     selectedOption={selectedOption}
     />
     <div className='flex flex-wrap w-full gap-20 mt-16'> 
      { countries.map((country,index) => (
          <Card
          key={index}
          flag={country.flags.png}
          name={country.name.common}
          region={country.region}
          population={country.population}
          capital={country.capital ? country.capital[0] : 'no capital'}
          handleOnClick={() => handleOnClick(country.name.common)}
          />
      ))}
     </div>
    </div>
  )
};
