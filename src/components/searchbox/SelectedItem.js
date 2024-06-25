import { StyleSheet, Text, View } from "react-native";
import IconButton from "../ui/IconButton";
import { horizontalScale, scaleFontSize } from "../../constants/scaling";

const SelectedItem = ({ data, handleRemove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.name}</Text>
      <IconButton
        name="close"
        size={20}
        color="white"
        style={{
          backgroundColor: "#94a3b8",
          borderRadius: 4,
          marginLeft: 3,
        }}
        onPress={() => handleRemove(data.id)}
      />
    </View>
  );
};

export default SelectedItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: horizontalScale(5),
    marginRight: horizontalScale(5),
    borderRadius: horizontalScale(6),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e2e8f0",
  },
  text: {
    color: "#334155",
    fontSize: scaleFontSize(16),
  },
});
