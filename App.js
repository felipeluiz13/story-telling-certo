import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/drawer";
import firebase from "firebase";
import { firebaseConfig } from "./Config";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stac = createStackNavigator();
const StackNav = () => {
  return (
    <Stac.Navigator>
      <Stac.Screen name="Login" component={LoginScreen}></Stac.Screen>
      <Stac.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      ></Stac.Screen>
      <Stac.Screen name="drawer" component={DrawerNavigator}></Stac.Screen>
    </Stac.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNav></StackNav>
    </NavigationContainer>
  );
}
