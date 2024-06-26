import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (name, page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/character`, {
      params: { name: name, page: page },
    });

    return response.data;
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
