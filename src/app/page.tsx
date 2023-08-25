import TableCountries from '@/components/TableCountries';

const getCountriesData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region");

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json();
}

export default async function Home() {
  const data = await getCountriesData();
  return (
    <div className='p-12 main-container bg-light-bg dark:bg-dark-bg'>
      <TableCountries
      data={data}
      />
    </div>
  )
};
