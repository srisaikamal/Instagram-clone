import React from "react";
import { View, Text, Image } from "react-native";
import { Avatar, Card, Paragraph } from "react-native-paper";
import { Feather, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
const Stories = () => {
  return (
    <>
      <Card style={{ borderRadius: 0, marginVertical: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar.Image
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                borderRadius: 60 / 2,
                overflow: "hidden",
                borderWidth: 1.5,
                borderColor: "#e84393",
              }}
              size={40}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80",
              }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Ariana_Grande
            </Text>
          </View>
          <View>
            <Feather
              name="more-vertical"
              size={20}
              style={{ marginHorizontal: 10 }}
            />
          </View>
        </View>
        <View>
          <Image
            style={{ height: 400, width: "100%" }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1496440543089-3d0eb669f6f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1088&q=80",
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Feather name="heart" size={25} style={{ marginHorizontal: 10 }} />
            <MaterialIcons
              name="chat-bubble-outline"
              size={25}
              style={{ marginHorizontal: 10 }}
            />
            <SimpleLineIcons
              name="paper-plane"
              size={22}
              style={{ marginHorizontal: 10 }}
            />
          </View>
          <View>
            <Feather
              name="bookmark"
              size={25}
              style={{ marginHorizontal: 10 }}
            />
          </View>
        </View>
      </Card>

      <Card style={{ borderRadius: 0, marginVertical: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar.Image
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                borderRadius: 60 / 2,
                overflow: "hidden",
                borderWidth: 1.5,
                borderColor: "#e84393",
              }}
              size={40}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1513207565459-d7f36bfa1222?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80",
              }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Ariana_Grande
            </Text>
          </View>
          <View>
            <Feather
              name="more-vertical"
              size={20}
              style={{ marginHorizontal: 10 }}
            />
          </View>
        </View>
        <View>
          <Image
            style={{ height: 400, width: "100%" }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1496440543089-3d0eb669f6f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1088&q=80",
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Feather name="heart" size={25} style={{ marginHorizontal: 10 }} />
            <MaterialIcons
              name="chat-bubble-outline"
              size={25}
              style={{ marginHorizontal: 10 }}
            />
            <SimpleLineIcons
              name="paper-plane"
              size={22}
              style={{ marginHorizontal: 10 }}
            />
          </View>
          <View>
            <Feather
              name="bookmark"
              size={25}
              style={{ marginHorizontal: 10 }}
            />
          </View>
        </View>
      </Card>
    </>
  );
};

export default Stories;
