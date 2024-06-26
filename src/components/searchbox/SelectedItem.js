import { Text, View } from "react-native";
import IconButton from "../ui/IconButton";
import { horizontalScale } from "../../constants/scaling";
import { Colors } from "../../constants/colors";

const SelectedItem = ({ data, handleRemove }) => {
  return (
    <View className="flex-row p-2 mr-1 bg-white500 rounded-[10px] items-center justify-center">
      <Text className="text-gray700 text-base">{data.name}</Text>
      <IconButton
        name="close"
        size={horizontalScale(20)}
        color={Colors.white}
        style="bg-gray400 rounded-md ml-1"
        onPress={() => handleRemove(data.id)}
      />
    </View>
  );
};

export default SelectedItem;
