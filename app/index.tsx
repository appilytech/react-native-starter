import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "@rneui/themed";
import { useRouter } from "expo-router";

import { useDispatch } from "react-redux";

import { setToken } from "@/store/auth";
const DUMMY_TOKEN = "abcdefghijklmnopqrstuvwxyz";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  /*
   * Placeholder code. Need to replace with token fetched from server after authentication.
   */
  useEffect(() => {
    dispatch(setToken(DUMMY_TOKEN));
  }, []);

  const buttonPressHandler = () => {
    router.push("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text h1>React Native Starter</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Text>
      <Button buttonStyle={styles.button} onPress={buttonPressHandler}>
        Proceed
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  text: {
    marginTop: 12,
    textAlign: "center",
  },
  button: {
    marginTop: 24,
    paddingHorizontal: 32,
  },
});
