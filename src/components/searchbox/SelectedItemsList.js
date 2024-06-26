import { FlatList, View } from "react-native";
import React, { useCallback } from "react";
import SelectedItem from "./SelectedItem";
import { useCharacterStore } from "../../stores/characterStore";
import IconButton from "../ui/IconButton";
import { horizontalScale } from "../../constants/scaling";
import Input from "../ui/Input";
import { Colors } from "../../constants/colors";

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
    <View className="flex-row border bg-white border-gray300 rounded-[10px] p-2 items-center justify-center mb-2 shadow-sm shadow-black/40">
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
        size={horizontalScale(20)}
        color={Colors.gray600}
        onPress={onPress}
      />
    </View>
  );
};

export default SelectedItemsList;
