import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { TextInput } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentification/authentification_context";
import { Button } from "react-native-paper";

const register_screen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);

  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <TextInput
        label="Email"
        value={email}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
        onChangeText={(u) => setEmail(u)}
      />

      <TextInput
        label="Password"
        value={password}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        secure
        onChangeText={(p) => setPassword(p)}
      />

      <TextInput
        label="Repeat Password"
        value={repeatedPassword}
        secureTextEntry
        textContentType="password"
        autoCapitalize="none"
        onChangeText={(p) => setRepeatedPassword(p)}
      />

      {error && <Text variant="error">{error}</Text>}

      <Button
        mode="contained"
        onPress={() => onRegister(email, password, repeatedPassword)}
      >
        Register
      </Button>
    </View>
  );
};

export default register_screen;

const styles = StyleSheet.create({});
