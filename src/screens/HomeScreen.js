import { SafeAreaView } from "react-native";
import SearchBox from "../components/searchbox/SearchBox";

function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <SearchBox />
    </SafeAreaView>
  );
}

export default HomeScreen;
