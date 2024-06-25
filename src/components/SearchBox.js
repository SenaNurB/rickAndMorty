import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import SelectedItemsList from "./SelectedItemsList";
import ResultList from "./ResultList";
import { useCharacterQuery } from "../hooks/useCharacterQuery";
import { useCharacterStore } from "../stores/characterStore";

const SearchBox = () => {
  const [searchText, setSearchText] = useState();
  const { data, isLoading, error } = useCharacterQuery(searchText);
  const { selectedCharacters, addCharacter, removeCharacter } =
    useCharacterStore();

  const onChangeTextHandler = (text) => {
    setSearchText(text);
  };

  const handleSelect = (character) => {
    const characterIdList = selectedCharacters.map((item) => item.id);
    const filterID = characterIdList.includes(character.id);

    if (!filterID) {
      addCharacter(character);
    }
  };

  const handleRemove = (id) => {
    removeCharacter(id);
  };

  return (
    <View style={{ marginHorizontal: 20 }}>
      <View style={styles.container}>
        <SelectedItemsList
          data={selectedCharacters}
          handleRemove={handleRemove}
        />
        <TextInput placeholder="Search" onChangeText={onChangeTextHandler} />
      </View>
      <View>
        <ResultList data={data} handleSelect={handleSelect} />
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    borderRadius: 6,
  },
});
