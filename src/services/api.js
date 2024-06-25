import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/character`, {
      params: { name: name },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw new Error("Failed to fetch characters");
  }
};
