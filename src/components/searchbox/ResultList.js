import { FlatList, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import ResultItem from "./ResultItem";
import { horizontalScale, verticalScale } from "../../constants/scaling";

const ResultList = ({ data, searchText }) => {
  const renderItem = useCallback(
    ({ item }) => {
      return <ResultItem item={item} searchText={searchText} />;
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

  const MySeparator = () => <View style={styles.separator} />;

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
        ItemSeparatorComponent={MySeparator}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  itemsContainer: {
    borderWidth: 1,
    borderRadius: horizontalScale(10),
    backgroundColor: "#f8fafc",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderColor: "#94a3b8",
    maxHeight: verticalScale(400),
    zIndex: 2,
  },
  list: {
    overflow: "hidden",
    borderRadius: horizontalScale(10),
  },
  separator: {
    height: 1,
    backgroundColor: "#94a3b8",
    marginHorizontal: horizontalScale(10),
  },
});
