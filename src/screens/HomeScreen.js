import React from "react";
import { View } from "react-native";
import SearchBox from "../components/searchbox/SearchBox";
import { SafeAreaView as SafeAreaViewContext } from "react-native-safe-area-context";

function HomeScreen() {
  return (
    <SafeAreaViewContext className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <SearchBox />
      </View>
    </SafeAreaViewContext>
  );
}

export default HomeScreen;
