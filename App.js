import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components/native";
import { StyleSheet, Text, View, Image } from "react-native";

import theme from "./src/infrastructure/theme";

import RestaurantsScreen from "./src/features/screens/Restuarantscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native";
import { SafeArea } from "./src/features/components/utility/SafeArea";
import { Ionicons } from "@expo/vector-icons";
import { restaurantRequest } from "./src/services/restaurants/restaurants_services";

import { RestaurantContextProvider } from "./src/services/restaurants/restuarant_context";
import { LocationContextProvider } from "./src/services/location/location_context";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentification/authentification_context";

import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADW-VPC1116nkyPX_MM8uyPcRu2i4QJ3w",
  authDomain: "mealsgo-c6b03.firebaseapp.com",
  projectId: "mealsgo-c6b03",
  storageBucket: "mealsgo-c6b03.appspot.com",
  messagingSenderId: "187126035365",
  appId: "1:187126035365:web:8c69ccd8d96b69e34eee4c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
