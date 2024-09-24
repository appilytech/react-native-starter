import { useLocalSearchParams, useNavigation } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import { useEffect } from "react";

export default function ItemDetails() {
  const item = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: item.title,
    });
  }, [item]);

  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>
        {item.title}
      </Text>
      <Text>{item.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    marginBottom: 24,
  },
});
