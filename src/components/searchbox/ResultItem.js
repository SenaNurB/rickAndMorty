import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useCallback } from "react";
import { useCharacterStore } from "../../stores/characterStore";
import IconButton from "../ui/IconButton";
import { horizontalScale, verticalScale } from "../../constants/scaling";

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
      <View style={[styles.checkbox, isSelected && styles.selectedCheckbox]}>
        {isSelected && (
          <IconButton
            name="checkmark-sharp"
            size={24}
            color="white"
            onPress={handleSelect}
          />
        )}
      </View>
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
    borderTopWidth: 1,
    borderRadius: horizontalScale(5),
    borderColor: "gray",
    padding: horizontalScale(10),
    alignItems: "center",
    maxHeight: verticalScale(100),
  },
  checkbox: {
    width: horizontalScale(30),
    height: horizontalScale(30),
    backgroundColor: "white",
    marginRight: horizontalScale(10),
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: horizontalScale(4),
    padding: horizontalScale(4),
  },
  selectedCheckbox: {
    backgroundColor: "blue",
  },
  image: {
    width: horizontalScale(60),
    height: horizontalScale(60),
    borderRadius: horizontalScale(6),
    marginRight: horizontalScale(10),
  },
});
