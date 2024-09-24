import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text h3>Tab Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  },
});