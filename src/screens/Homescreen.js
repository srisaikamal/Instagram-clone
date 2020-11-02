import React from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Reel from "../components/Reel";
import Stories from "../components/Stories";

const Homescreen = () => {
  return (
    <View>
      <ScrollView>
        <Reel />
        <Stories />
      </ScrollView>
    </View>
  );
};

export default Homescreen;
