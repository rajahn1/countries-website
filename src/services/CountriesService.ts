import { api } from "@/providers/Api";

const getAll = async () => {
    try {
        const response = await api.get('/all?fields=name,flags,capital,population,region');
        return response.data;
    } catch (error:any) {
        console.log(error.message);
    }
}

const getByName = async (name:string) => {
    try {
      const response = await api.get(`/name/${name}`);
      return response.data;
    } catch (error:any) {
      console.log(error.message)
    }
  }

const getByRegion = async (region:string) => {
  try {
    const response = await api.get(`/region/${region}`);
    return response.data;
  } catch (error:any) {
    console.log(error.message);
  }
}

export const CountriesServices = {
    getAll,
    getByName,
    getByRegion,
};