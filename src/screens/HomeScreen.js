import { SafeAreaView } from "react-native";
import SearchBox from "../components/searchbox/SearchBox";

function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <SearchBox />
    </SafeAreaView>
  );
}

export default HomeScreen;
