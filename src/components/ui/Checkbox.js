import { StyleSheet, View } from "react-native";
import { horizontalScale } from "../../constants/scaling";
import IconButton from "./IconButton";
import { Colors } from "../../constants/colors";

const Checkbox = ({ isSelected, handleSelect }) => {
  const variantStyles = {
    default:
      "bg-white mr-2.5 w-[24px] h-[24px] items-center justify-center rounded p-0.5 border border-gray-800",
    selected: "border-accent500 bg-accent500",
  };

  return (
    <View
      className={`${variantStyles.default} ${
        isSelected && variantStyles.selected
      }`}
    >
      {isSelected && (
        <IconButton
          name="checkmark-sharp"
          size={horizontalScale(15)}
          color={Colors.white}
          onPress={handleSelect}
        />
      )}
    </View>
  );
};

export default Checkbox;
