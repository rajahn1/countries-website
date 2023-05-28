import { api } from "@/providers/Api";

const getAll = async () => {
    try {
        const response = await api.get('/all');
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

const getByName = async (name:string) => {
    try {
      const response = await api.get(`/name/${name}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

export const CountriesServices = {
    getAll,
    getByName
};