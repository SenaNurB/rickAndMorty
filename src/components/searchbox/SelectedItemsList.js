import { FlatList, StyleSheet, TextInput, View } from "react-native";
import React, { useCallback } from "react";
import SelectedItem from "./SelectedItem";
import { useCharacterStore } from "../../stores/characterStore";
import IconButton from "../ui/IconButton";

const SelectedItemsList = ({ data, onChangeText, value, onPress }) => {
  const { removeCharacter } = useCharacterStore();

  const handleRemove = useCallback(
    (id) => {
      removeCharacter(id);
    },
    [removeCharacter]
  );

  const renderItem = useCallback(
    ({ item }) => {
      return <SelectedItem data={item} handleRemove={handleRemove} />;
    },
    [handleRemove]
  );

  const input = (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        placeholder="Search Character"
        value={value}
        onChangeText={onChangeText}
        style={{
          minWidth: 200,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 10,
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListFooterComponent={input}
      />
      <IconButton
        name="chevron-down"
        size={20}
        color="lightgray"
        onPress={onPress}
      />
    </View>
  );
};

export default SelectedItemsList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 5,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
