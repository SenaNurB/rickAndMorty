import { StyleSheet, View } from "react-native";
import React, { useState, useCallback } from "react";
import SelectedItemsList from "./SelectedItemsList";
import ResultList from "./ResultList";
import { useCharacterQuery } from "../../hooks/useCharacterQuery";
import { useCharacterStore } from "../../stores/characterStore";
import LoadingOverlay from "../ui/LoadingOverlay";
import ErrorOverlay from "../ui/ErrorOverlay";
import { horizontalScale } from "../../constants/scaling";

const SearchBox = () => {
  const [searchText, setSearchText] = useState();
  const { selectedCharacters } = useCharacterStore();
  const [visible, setVisible] = useState(false);

  const { data, isLoading, error } = useCharacterQuery(searchText, {
    onError: (err) => {
      if (err.message === "No Character Found") {
        setVisible(true);
      }
    },
  });

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

    if (error) {
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

    return data?.length ? (
      <ResultList data={data} searchText={searchText} />
    ) : null;
  };

  return (
    <View style={styles.container}>
      <SelectedItemsList
        data={selectedCharacters}
        onChangeText={onChangeTextHandler}
        value={searchText}
        onPress={onPressHandler}
      />
      {visible && <View style={styles.resultContainer}>{renderContent()}</View>}
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    zIndex: 1,
  },
  resultContainer: {
    flex: 1,
  },
});
