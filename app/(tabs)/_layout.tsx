import React from "react";
import { withLayoutContext } from "expo-router";
import { createNativeBottomTabNavigator } from "@bottom-tabs/react-navigation";

export default function TabLayout() {
  const Tabs = withLayoutContext(createNativeBottomTabNavigator().Navigator);
  return (
    <Tabs sidebarAdaptable>
      <Tabs.Screen
        name="index"
        options={{
          title: "Tabs Welcome",
          tabBarIcon: () => ({ sfSymbol: "sidebar.left" }),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: () => ({ sfSymbol: "magnifyingglass.circle.fill" }),
        }}
      />
      <Tabs.Screen
        name="tv_focus"
        options={{
          title: "TV focus",
          tabBarIcon: () => ({ sfSymbol: "tv.fill" }),
        }}
      />
    </Tabs>
  );
}
