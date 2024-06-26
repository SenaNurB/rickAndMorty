import { FlatList, View, ActivityIndicator } from "react-native";
import React, { useCallback } from "react";
import { useCharacterQuery } from "../../hooks/useCharacterQuery";

import ResultItem from "./ResultItem";
import { verticalScale } from "../../constants/scaling";
import { Colors } from "../../constants/colors";

const ResultList = ({ data, searchText }) => {
  const { fetchNextPage, isFetchingNextPage } = useCharacterQuery(searchText);

  const renderItem = useCallback(
    ({ item }) => <ResultItem item={item} searchText={searchText} />,
    [searchText]
  );

  const getItemLayout = useCallback(
    (data, index) => ({
      length: verticalScale(60),
      offset: verticalScale(60) * index,
      index,
    }),
    []
  );

  const MySeparator = () => <View className="border-b border-gray400 mx-2" />;

  return (
    <View className="absolute border rounded-[10px] border-gray400 inset-x-0 top-0 bg-white400 max-h-96 z-20">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        initialNumToRender={10}
        windowSize={21}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={30}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={MySeparator}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage && (
            <ActivityIndicator size="small" color={Colors.gray400} />
          )
        }
      />
    </View>
  );
};

export default ResultList;
