import { StyleSheet, TextInput } from "react-native";
import { horizontalScale, verticalScale } from "../../constants/scaling";

const Input = ({ value, onChangeText }) => {
  return (
    <TextInput
      placeholder="Search Character"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    minWidth: horizontalScale(200),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: verticalScale(5),
  },
});
