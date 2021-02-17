import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

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

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
                <LocationContextProvider>

        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === "Restaurants") {
                    iconName = "md-restaurant";
                  } else if (route.name === "Settings") {
                    iconName = "md-settings";
                  } else if (route.name === "Map") {
                    iconName = "md-map";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
                </LocationContextProvider>

      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
