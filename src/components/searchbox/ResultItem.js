import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useCallback } from "react";
import { useCharacterStore } from "../../stores/characterStore";

const ResultItem = ({ item }) => {
  const { selectedCharacters, addCharacter, removeCharacter } =
    useCharacterStore();

  const characterIdList = useMemo(
    () => selectedCharacters?.map((item) => item.id),
    [selectedCharacters]
  );

  const isSelected = useMemo(
    () => characterIdList?.includes(item.id),
    [characterIdList, item.id]
  );

  const handleSelect = useCallback(() => {
    if (!isSelected) {
      addCharacter(item);
    } else {
      removeCharacter(item.id);
    }
  }, [isSelected, addCharacter, removeCharacter, item]);

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handleSelect}>
      <View style={[styles.checkbox, isSelected && styles.selectedCheckbox]} />
      <Image style={styles.image} source={{ uri: item.image }} />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.episode.length} Episodes</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 10,
    alignItems: "center",
    maxHeight: 100,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "white",
    marginRight: 10,
  },
  selectedCheckbox: {
    backgroundColor: "red",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 10,
  },
});
