import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import IconButton from "../ui/IconButton";

const SelectedItem = ({ data, handleRemove }) => {
  return (
    <View style={styles.container}>
      <Text>{data.name}</Text>
      <IconButton
        name="close"
        size={20}
        color="white"
        style={{
          backgroundColor: "lightgray",
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
    padding: 5,
    borderWidth: 1,
    marginRight: 5,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
