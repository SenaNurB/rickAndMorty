import React from "react";
import { View } from "react-native";
import { SafeAreaView as SafeAreaViewContext } from "react-native-safe-area-context";
import SearchBox from "../components/searchbox/SearchBox";

function HomeScreen() {
  return (
    <SafeAreaViewContext className="flex-1 bg-white pt-5">
      <View className="flex-1 bg-white">
        <SearchBox />
      </View>
    </SafeAreaViewContext>
  );
}

export default HomeScreen;
