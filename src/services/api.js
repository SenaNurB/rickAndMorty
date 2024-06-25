import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/character`, {
      params: { name: name },
    });

    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error("No Character Found");
      } else {
        throw new Error("Failed to fetch characters");
      }
    }
    console.error("Error fetching characters:", error);
    throw error;
  }
};
