import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemons = async (search: string) => {
    try {
        const { data } = await api.get(`/pokemon/${search}`);
        return data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};

