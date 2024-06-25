import { StyleSheet, Text, View } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../constants/scaling";

const ErrorOverlay = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(100),
    backgroundColor: "#f8fafc",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: horizontalScale(10),
    borderColor: "#94a3b8",
  },
  text: {
    color: "#4b596c",
    fontWeight: "bold",
    fontSize: scaleFontSize(15),
  },
});
