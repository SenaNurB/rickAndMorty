import { View } from "react-native";
import React, { useState, useCallback } from "react";
import SelectedItemsList from "./SelectedItemsList";
import ResultList from "./ResultList";
import { useCharacterQuery } from "../../hooks/useCharacterQuery";
import { useCharacterStore } from "../../stores/characterStore";
import LoadingOverlay from "../ui/LoadingOverlay";
import ErrorOverlay from "../ui/ErrorOverlay";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const { selectedCharacters } = useCharacterStore();
  const [visible, setVisible] = useState(false);

  const { data, isLoading, isError, error } = useCharacterQuery(searchText);

  const onChangeTextHandler = useCallback((text) => {
    setVisible(true);
    setSearchText(text);
  }, []);

  const onPressHandler = useCallback(() => {
    setVisible((prevState) => !prevState);
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingOverlay />;
    }

    if (isError) {
      return (
        <ErrorOverlay
          message={
            error.message === "No Character Found"
              ? "No Character Found"
              : "Error loading data"
          }
        />
      );
    }

    return data?.pages?.[0]?.results?.length ? (
      <ResultList
        data={data.pages.flatMap((page) => page.results)}
        searchText={searchText}
      />
    ) : null;
  };

  return (
    <View className="flex-1 z-10 mx-4">
      <SelectedItemsList
        data={selectedCharacters}
        onChangeText={onChangeTextHandler}
        value={searchText}
        onPress={onPressHandler}
      />
      {visible && <View className="flex-1">{renderContent()}</View>}
    </View>
  );
};

export default SearchBox;
