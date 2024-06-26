import { View, ActivityIndicator } from "react-native";
import { Colors } from "../../constants/colors";

function LoadingOverlay() {
  return (
    <View className="flex-1 justify-center items-center bg-white400 border border-gray400 max-h-52 rounded-[10px]">
      <ActivityIndicator size="large" color={Colors.gray400} />
    </View>
  );
}

export default LoadingOverlay;
