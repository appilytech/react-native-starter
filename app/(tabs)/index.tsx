import { View, StyleSheet, Pressable, FlatList } from "react-native";
import { Text, Card } from "@rneui/themed";
import { Link } from "expo-router";

import { ItemProps, useItemsAPI } from "@/hooks/useItemsAPI";

const renderItem = ({ item }: { item: ItemProps }) => {
  return (
    <Link
      href={{
        pathname: "/item/[id]",
        params: item,
      }}
      asChild
    >
      <Pressable>
        <Card>
          <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
          <Card.Divider></Card.Divider>
          <Text>{item.desc}</Text>
        </Card>
      </Pressable>
    </Link>
  );
};

export default function TabOneScreen() {
  const { data: items } = useItemsAPI();

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={items}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cardTitle: {
    textAlign: "left",
  },
});
