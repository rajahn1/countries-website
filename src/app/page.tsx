import TableCountries from '@/components/TableCountries';
import { api } from '@/providers/Api';

const getCountriesData = async () => {
  try {
      const response = await api.get('/all?fields=name,flags,capital,population,region');
      return response.data;
  } catch (error:any) {
      console.log(error.message);
  }
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
