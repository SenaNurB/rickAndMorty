import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useCallback } from "react";
import { useCharacterStore } from "../../stores/characterStore";

import Checkbox from "../ui/Checkbox";
import { horizontalScale } from "../../constants/scaling";

const ResultItem = React.memo(({ item, searchText }) => {
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
    <TouchableOpacity
      className="flex-row rounded-[10px] p-[10px] items-center"
      onPress={handleSelect}
    >
      <Checkbox isSelected={isSelected} handleSelect={handleSelect} />
      <Image
        className="rounded-[10px] mr-2"
        source={{ uri: item.image }}
        style={{ height: horizontalScale(40), width: horizontalScale(40) }}
      />
      <View className="flex-1">
        <Text className="text-base text-gray500 font-medium">
          {item.name
            .split(new RegExp(`(${searchText})`, "i"))
            .map((part, index) => (
              <Text
                key={index}
                className={
                  part.toLowerCase() === searchText.toLowerCase() &&
                  "font-black"
                }
              >
                {part}
              </Text>
            ))}
        </Text>
        <Text className="text-gray500 text-sm">
          {item.episode.length} Episodes
        </Text>
      </View>
    </TouchableOpacity>
  );
});

export default ResultItem;
