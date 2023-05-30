import { api } from "@/providers/Api";

const getAll = async () => {
    try {
        const response = await api.get('/all');
        return response.data;
    } catch (error) {
        return alert(error.message);
    }
}

const getByName = async (name:string) => {
    try {
      const response = await api.get(`/name/${name}`);
      return response.data;
    } catch (error) {
      alert(error.message)
    }
  }

export const CountriesServices = {
    getAll,
    getByName
};