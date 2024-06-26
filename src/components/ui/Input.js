import { TextInput } from "react-native";

const Input = ({ value, onChangeText }) => {
  return (
    <TextInput
      placeholder="Search Character"
      value={value}
      onChangeText={onChangeText}
      className="min-w-[200px] items-center justify-center my-3"
    />
  );
};

export default Input;
