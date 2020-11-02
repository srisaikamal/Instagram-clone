import React from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

const Reel = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Avatar.Image
            style={{ marginHorizontal: 10, marginVertical: 10 }}
            size={60}
            source={{
              uri:
                "https://avatars0.githubusercontent.com/u/24625310?s=460&u=a7b9ed3c11c7c7a56502fbb7b9d0498a2d2c17cb&v=4",
            }}
          />
          <Entypo
            name="circle-with-plus"
            size={20}
            style={{
              color: "#3498db",
              position: "absolute",
              left: 60,
              top: 50,
            }}
          />
        </View>
        <Avatar.Image
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            borderRadius: 60 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "#e84393",
          }}
          size={60}
          source={{
            uri:
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          }}
        />
        <Avatar.Image
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            borderRadius: 60 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "#e84393",
          }}
          size={60}
          source={{
            uri:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          }}
        />
        <Avatar.Image
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            borderRadius: 60 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "#e84393",
          }}
          size={60}
          source={{
            uri:
              "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          }}
        />
        <Avatar.Image
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            borderRadius: 60 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "#e84393",
          }}
          size={60}
          source={{
            uri:
              "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80",
          }}
        />
        <Avatar.Image
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            borderRadius: 60 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "#e84393",
          }}
          size={60}
          source={{
            uri:
              "https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          }}
        />
        <Avatar.Image
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            borderRadius: 60 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "#e84393",
          }}
          size={60}
          source={{
            uri:
              "https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80",
          }}
        />
        <Avatar.Image
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            borderRadius: 60 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "#e84393",
          }}
          size={60}
          source={{
            uri:
              "https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Reel;
