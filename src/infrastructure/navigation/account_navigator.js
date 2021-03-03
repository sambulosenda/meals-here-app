import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import account_screen from "../../features/screens/account_screen";
import login_screen from "../../features/screens/login_screen";
import register_screen from "../../features/screens/register_screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={account_screen} />
    <Stack.Screen name="Login" component={login_screen} />
    <Stack.Screen name="Register" component={register_screen} />
  </Stack.Navigator>
);
