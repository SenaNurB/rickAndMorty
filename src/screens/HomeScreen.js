import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../services/api";

const HomeScreen = () => {
  useEffect(() => {
    async function getCharacters() {
      try {
        const data = await fetchCharacters();
        console.log("====================================");
        console.log(data);
        console.log("====================================");
      } catch (error) {
        setError(error.message);
      }
    }
    getCharacters();
  }, []);

  return (
    <View>
      {/* searchBox */}
      {/* resultList */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
