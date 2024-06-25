import { FlatList, StyleSheet, TextInput, View } from "react-native";
import React, { useCallback } from "react";
import SelectedItem from "./SelectedItem";
import { useCharacterStore } from "../../stores/characterStore";
import IconButton from "../ui/IconButton";
import { horizontalScale, verticalScale } from "../../constants/scaling";
import Input from "../ui/Input";

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

  const input = <Input value={value} onChangeText={onChangeText} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListFooterComponent={input}
        showsHorizontalScrollIndicator={false}
      />
      <IconButton
        name="caret-down-outline"
        size={20}
        color="#475569"
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
    borderColor: "#9aa8bc",
    padding: horizontalScale(5),
    borderRadius: horizontalScale(10),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(5),
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
