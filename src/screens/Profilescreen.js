import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
const Profilescreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <View
          style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 20 }}
        >
          <View
            style={{
              height: 97,
              width: 97,
              borderWidth: 2,
              borderColor: "#e84393",
              borderRadius: 97 / 2,
            }}
          >
            <Image
              style={{
                height: 90,
                width: 90,
                borderRadius: 90 / 2,
                marginLeft: 1.5,
                marginTop: 1.2,
              }}
              source={{
                uri:
                  "https://avatars0.githubusercontent.com/u/24625310?s=460&u=a7b9ed3c11c7c7a56502fbb7b9d0498a2d2c17cb&v=4",
              }}
            />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginHorizontal: 15 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  0
                </Text>
                <Text style={{ fontSize: 13, color: "gray" }}>posts</Text>
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  552m
                </Text>
                <Text style={{ fontSize: 13, color: "gray" }}>followers</Text>
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  205
                </Text>
                <Text style={{ fontSize: 13, color: "gray" }}>followings</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View style={{ flex: 7 }}>
                <TouchableOpacity
                  style={{
                    height: 25,
                    borderRadius: 5,
                    marginRight: 10,
                    borderWidth: 0.6,
                    borderColor: "gray",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 13,
                      marginTop: 1.5,
                    }}
                  >
                    Message
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 3.5, flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    height: 25,
                    width: 35,
                    borderRadius: 5,
                    marginRight: 10,
                    borderWidth: 0.6,
                    borderColor: "gray",
                  }}
                >
                  <Feather
                    name="user-check"
                    size={24}
                    color="black"
                    style={{
                      textAlign: "center",
                      marginLeft: 1.5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 25,
                    width: 35,
                    borderRadius: 5,
                    marginRight: 10,
                    borderWidth: 0.6,
                    borderColor: "gray",
                  }}
                >
                  <AntDesign
                    name="caretdown"
                    size={10}
                    color="black"
                    style={{
                      textAlign: "center",
                      marginLeft: 1,
                      marginTop: 5.5,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>Kamal Vasamsetti</Text>
            <Image
              style={{ height: 13, width: 13, marginLeft: 5 }}
              source={require("../assets/correct.png")}
            />
          </View>
          <Text>React and React Native Developer</Text>
          <Text style={{ color: "#0097e6" }}>vsskamal.me/</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginTop: 20, marginHorizontal: 20 }}>
            <View
              style={{
                height: 60,
                width: 60,
                borderWidth: 0.6,
                borderColor: "gray",
                borderRadius: 60 / 2,
              }}
            >
              <Feather
                name="plus"
                size={24}
                color="black"
                style={{ textAlign: "center", marginTop: 16.5 }}
              />
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <View
              style={{
                height: 60,
                width: 60,
                borderWidth: 0.6,
                borderColor: "gray",
                borderRadius: 60 / 2,
              }}
            >
              <Image
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 55 / 2,
                  marginLeft: 1.8,
                  marginTop: 1.5,
                }}
                source={{
                  uri:
                    "https://avatars0.githubusercontent.com/u/24625310?s=460&u=a7b9ed3c11c7c7a56502fbb7b9d0498a2d2c17cb&v=4",
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "gray",
          borderBottomWidth: 0.3,
          marginTop: 20,
        }}
      />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 40,
            marginTop: 10,
          }}
        >
          <MaterialCommunityIcons name="grid" size={30} color="gray" />
          <MaterialCommunityIcons name="altimeter" size={30} color="gray" />
          <FontAwesome name="user-circle-o" size={30} color="gray" />
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "gray",
          borderBottomWidth: 0.3,
          marginTop: 10,
        }}
      />
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontWeight: "bold" }}>No Posts found</Text>
      </View>
    </View>
  );
};

export default Profilescreen;
