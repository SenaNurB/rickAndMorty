import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ResultItem from "./ResultItem";

const ResultList = ({ data, handleSelect }) => {
  const renderItem = (itemData) => {
    return <ResultItem item={itemData.item} handleSelect={handleSelect} />;
  };

  return (
    <View style={styles.itemsContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  itemsContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "lightgray",
  },
});
