import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import SelectedItemsList from "./SelectedItemsList";
import ResultList from "./ResultList";
import { fetchCharacters } from "../services/api";

const SearchBox = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchText, setSearchText] = useState();
  const [characters, setCharacters] = useState();

  async function getCharacters(text) {
    try {
      const data = await fetchCharacters(text);
      setCharacters(data);
    } catch (error) {
      setError(error.message);
    }
  }

  const onChangeTextHandler = (text) => {
    setSearchText(text);
    getCharacters(text);
  };

  const handleSelect = (character) => {
    const characterIdList = selectedItems.map((item) => item.id);
    const filterID = characterIdList.includes(character.id);

    if (!filterID) {
      setSelectedItems((prevState) => [...prevState, character]);
    }
  };

  const handleRemove = (id) => {
    setSelectedItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <View style={{ marginHorizontal: 20 }}>
      <View style={styles.container}>
        <SelectedItemsList data={selectedItems} handleRemove={handleRemove} />
        <TextInput placeholder="Search" onChangeText={onChangeTextHandler} />
      </View>
      <View>
        <ResultList data={characters} handleSelect={handleSelect} />
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
