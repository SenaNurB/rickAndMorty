import { View, ActivityIndicator, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../constants/scaling";

function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#94a3b8" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(100),
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderRadius: horizontalScale(10),
    borderColor: "#94a3b8",
  },
});
