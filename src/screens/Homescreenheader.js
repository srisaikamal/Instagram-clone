import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from ".";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, View } from "react-native";

const HomeStack = createStackNavigator();

function Homescreenheader() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                marginTop: 5,
              }}
            >
              <Image
                resizeMode="contain"
                style={{ height: 50, width: 100 }}
                source={require("./../assets/instaclone.png")}
              />
            </View>
          ),
          headerLeft: () => {
            return (
              <MaterialCommunityIcons
                name="camera"
                size={25}
                style={{ marginHorizontal: 10 }}
              />
            );
          },
          headerRight: () => {
            return (
              <MaterialCommunityIcons
                name="telegram"
                size={25}
                style={{ marginRight: 10 }}
              />
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

export default Homescreenheader;
