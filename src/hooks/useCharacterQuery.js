import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../services/api";

export const useCharacterQuery = (query) => {
  return useQuery({
    queryKey: ["characters", query],
    queryFn: () => fetchCharacters(query),
    enabled: !!query,
  });
};
