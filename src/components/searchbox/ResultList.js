import { FlatList, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import ResultItem from "./ResultItem";

const ResultList = ({ data }) => {
  const renderItem = useCallback(
    ({ item }) => {
      return <ResultItem item={item} />;
    },
    [data]
  );

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 120,
      offset: 120 * index,
      index,
    }),
    []
  );

  return (
    <View style={styles.itemsContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        initialNumToRender={10}
        windowSize={21}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={30}
        getItemLayout={getItemLayout}
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderColor: "gray",
    maxHeight: 200,
    zIndex: 2,
  },
});
