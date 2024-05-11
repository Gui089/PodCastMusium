import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AppTabNavigator } from "./AppTabNav";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="AppTabNavigator"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="AppTabNavigator" component={AppTabNavigator}/>
        </Stack.Navigator>
    )
}
