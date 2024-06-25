import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ResultItem = ({ item, handleSelect }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleSelect(item)}
    >
      <View style={styles.checkbox} />
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
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "white",
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 10,
  },
});
