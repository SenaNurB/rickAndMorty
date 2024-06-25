import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import SelectedItem from "./SelectedItem";

const SelectedItemsList = ({ data, handleRemove }) => {
  const renderItem = (itemData) => {
    return <SelectedItem data={itemData.item} handleRemove={handleRemove} />;
  };

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SelectedItemsList;

const styles = StyleSheet.create({});
