import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ name, size, color, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className={style}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
}

export default IconButton;
