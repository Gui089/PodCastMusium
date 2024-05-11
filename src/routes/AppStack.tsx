import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AppTabBottomTabParams, AppTabNavigator } from "./AppTabNav";
import { NavigatorScreenParams } from "@react-navigation/native";

export type AppStackParams = {
    AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParams>
}

const Stack = createNativeStackNavigator<AppStackParams>();

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
