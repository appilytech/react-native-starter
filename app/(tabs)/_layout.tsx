import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext(Navigator);

export default function TabLayout() {
  return (
    <MaterialTopTabs>
      <MaterialTopTabs.Screen
        name="index"
        options={{
          title: "Tab One",
        }}
      />
      <MaterialTopTabs.Screen
        name="two"
        options={{
          title: "Tab Two",
        }}
      />
    </MaterialTopTabs>
  );
}
