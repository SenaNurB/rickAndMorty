import { StyleSheet, View } from "react-native";
import { horizontalScale } from "../../constants/scaling";
import IconButton from "./IconButton";

const Checkbox = ({ isSelected, handleSelect }) => {
  return (
    <View style={[styles.checkbox, isSelected && styles.selectedCheckbox]}>
      {isSelected && (
        <IconButton
          name="checkmark-sharp"
          size={horizontalScale(15)}
          color="white"
          onPress={handleSelect}
        />
      )}
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkbox: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    backgroundColor: "white",
    marginRight: horizontalScale(10),
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: horizontalScale(4),
    padding: horizontalScale(2),
    borderWidth: 1,
    borderColor: "#797979",
  },
  selectedCheckbox: {
    backgroundColor: "#0075ff",
    borderColor: "#0075ff",
  },
});
