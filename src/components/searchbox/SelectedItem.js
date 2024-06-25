import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SelectedItem = ({ data, handleRemove }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleRemove(data.id)}>
        <Text>X </Text>
      </TouchableOpacity>
      <Text>{data.name}</Text>
    </View>
  );
};

export default SelectedItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    margin: 2,
    borderRadius: 6,
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
