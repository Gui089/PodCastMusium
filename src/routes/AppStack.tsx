import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "../Screen/app/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        </Stack.Navigator>
    )
}
