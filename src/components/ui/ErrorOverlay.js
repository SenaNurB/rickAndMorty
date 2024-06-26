import { Text, View } from "react-native";

const ErrorOverlay = ({ message }) => {
  return (
    <View className="flex-1 justify-center items-center bg-white400 border border-gray400 max-h-52 rounded-[10px]">
      <Text className="text-gray500 font-bold text-base">{message}</Text>
    </View>
  );
};

export default ErrorOverlay;
