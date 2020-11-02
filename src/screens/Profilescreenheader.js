import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from ".";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, View, Text } from "react-native";
import { FontAwesome, Feather, EvilIcons } from "@expo/vector-icons";
const ProfileStack = createStackNavigator();

function Profilescreenheader() {
  return (
    <ProfileStack.Navigator initialRouteName="Home">
      <ProfileStack.Screen
        name="Home"
        component={Profile}
        options={{
          headerTitle: () => {},
          headerLeft: () => {
            return (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 18,
                    color: "black",
                  }}
                >
                  kamal_vasamsetti
                </Text>
                <MaterialCommunityIcons name="menu-down" size={25} />
              </View>
            );
          },
          headerRight: () => {
            return (
              <View style={{ flexDirection: "row" }}>
                <FontAwesome
                  name="gears"
                  style={{ marginRight: 10 }}
                  size={24}
                  color="black"
                />
                <EvilIcons
                  name="clock"
                  size={35}
                  style={{ marginRight: 10 }}
                  color="black"
                />
                <Feather
                  name="menu"
                  size={28}
                  style={{ marginRight: 10 }}
                  color="black"
                />
              </View>
            );
          },
        }}
      />
    </ProfileStack.Navigator>
  );
}

export default Profilescreenheader;
