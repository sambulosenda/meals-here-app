/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const account_screen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          width: 150,
          padding: 10,
          backgroundColor: "black",
          margin: 10,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </Pressable>
      <Pressable
        style={{
          padding: 10,
          backgroundColor: "black",
          margin: 10,
          width: 150,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ color: "white" }}>Register</Text>
      </Pressable>
    </View>
  );
};

export default account_screen;

const styles = StyleSheet.create({});
