import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../services/api";

export const useCharacterQuery = (query) => {
  return useInfiniteQuery({
    queryKey: ["characters", query],
    queryFn: ({ pageParam = 1 }) => fetchCharacters(query, pageParam),
    enabled: !!query,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.info.next) {
        return allPages.length + 1;
      }
      return undefined;
    },
  });
};
