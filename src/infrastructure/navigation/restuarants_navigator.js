import React from "react";

import {
  createStackNavigator,
  TransitionPreset,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/screens/Restuarantscreen";
import {
  StatusBar,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import RestuarantDetailsScreen from "../../features/screens/RestuarantDetailsScreen";

const RestuarantStack = createStackNavigator();

const RestuarantsNavigator = () => {
  return (
    <RestuarantStack.Navigator
      headerMode={"none"}
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestuarantStack.Screen
        name="Restuarants"
        component={RestaurantsScreen}
      />

      <RestuarantStack.Screen
        name="RestaurantDetail"
        component={RestuarantDetailsScreen}
      />
    </RestuarantStack.Navigator>
  );
};

export default RestuarantsNavigator;
