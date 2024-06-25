import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useCallback } from "react";
import { useCharacterStore } from "../../stores/characterStore";
import IconButton from "../ui/IconButton";
import { horizontalScale, scaleFontSize } from "../../constants/scaling";
import Checkbox from "../ui/Checkbox";

const ResultItem = ({ item, searchText }) => {
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
      <Checkbox isSelected={isSelected} handleSelect={handleSelect} />
      <Image style={styles.image} source={{ uri: item.image }} />
      <View>
        <Text style={styles.title}>
          {item.name
            .split(new RegExp(`(${searchText})`, "i"))
            .map((part, index) => (
              <Text
                key={index}
                style={
                  part.toLowerCase() === searchText.toLowerCase()
                    ? [styles.boldText]
                    : ""
                }
              >
                {part}
              </Text>
            ))}
        </Text>
        <Text style={styles.text}>{item.episode.length} Episodes</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    borderRadius: horizontalScale(10),
    padding: horizontalScale(10),
    alignItems: "center",
  },
  image: {
    width: horizontalScale(40),
    height: horizontalScale(40),
    borderRadius: horizontalScale(6),
    marginRight: horizontalScale(10),
  },
  text: {
    color: "#4b596c",
  },
  title: {
    fontSize: scaleFontSize(16),
    fontWeight: "500",
    color: "#4b596c",
  },
  boldText: {
    fontWeight: "bold",
    fontWeight: "900",
  },
});
