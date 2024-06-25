import { StyleSheet, View, Text } from "react-native";
import React, { useState, useCallback } from "react";
import SelectedItemsList from "./SelectedItemsList";
import ResultList from "./ResultList";
import { useCharacterQuery } from "../../hooks/useCharacterQuery";
import { useCharacterStore } from "../../stores/characterStore";
import LoadingOverlay from "../ui/LoadingOverlay";

const SearchBox = () => {
  const [searchText, setSearchText] = useState();
  const { data, isLoading, error } = useCharacterQuery(searchText);
  const { selectedCharacters } = useCharacterStore();
  const [visible, setVisible] = useState(false);

  const onChangeTextHandler = useCallback((text) => {
    setVisible(true);
    setSearchText(text);
  }, []);

  const onPressHandler = useCallback(() => {
    setVisible((prevState) => !prevState);
  }, []);

  return (
    <View style={styles.container}>
      <SelectedItemsList
        data={selectedCharacters}
        onChangeText={onChangeTextHandler}
        value={searchText}
        onPress={onPressHandler}
      />
      {visible && (
        <View style={styles.resultContainer}>
          {isLoading ? (
            <LoadingOverlay />
          ) : error ? (
            <Text style={styles.errorText}>Error loading data</Text>
          ) : data?.length ? (
            <ResultList data={data} />
          ) : (
            <Text style={styles.noCharacterText}>No Character Found</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingBottom: 50,
  },
  resultContainer: {
    flex: 1,
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  noCharacterText: {
    textAlign: "center",
    marginTop: 20,
  },
});
