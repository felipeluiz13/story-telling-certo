import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "../navigation/bottomTab";
import Profile from "../screens/profile";
import StoryScreen from "../screens/storyScreen";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={BottomTabNavigator}></Stack.Screen>
      <Stack.Screen name="StoryScreen" component={StoryScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
