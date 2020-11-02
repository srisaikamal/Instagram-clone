import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Love, Plus, Profile, Search } from "./src/screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Homescreenheader from "./src/screens/Homescreenheader";
import Profilescreenheader from "./src/screens/Profilescreenheader";
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 60,
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? "home-variant" : "home-outline"}
                color={focused ? "#353b48" : "#bdc3c7"}
                size={focused ? 32 : 38}
                style={{ marginTop: 15 }}
              />
            ),
          }}
          name="Home"
          component={Homescreenheader}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Feather
                  name="search"
                  color={focused ? "#353b48" : "#bdc3c7"}
                  size={32}
                  style={{ marginTop: 15 }}
                />
              ) : (
                <EvilIcons
                  name="search"
                  size={40}
                  color={focused ? "#353b48" : "#bdc3c7"}
                  style={{ marginTop: 13 }}
                />
              ),
          }}
          name="Search"
          component={Search}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="plus-square"
                color={focused ? "#353b48" : "#bdc3c7"}
                size={32}
                style={{ marginTop: 15 }}
              />
            ),
          }}
          name="Plus"
          component={Plus}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? "heart" : "heart-outline"}
                color={focused ? "#353b48" : "#bdc3c7"}
                size={32}
                style={{ marginTop: 20 }}
              />
            ),
          }}
          name="Love"
          component={Love}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name={focused ? "person" : "person-outline"}
                color={focused ? "#353b48" : "#bdc3c7"}
                size={32}
                style={{ marginTop: 20 }}
              />
            ),
          }}
          name="Profile"
          component={Profilescreenheader}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
