import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStartedScreen } from "../Screen/app/GetStartedScreen/GetStartedScreen";
import { LoginScreen } from "../Screen/Auth/LoginScreen/LoginScreen";
import { SignUpScreen } from "../Screen/Auth/SignUpScreen/SignUpScreen";
import { RegisterScreen } from "../Screen/Auth/RegisterScreen/RegisterScreen";

const Stack = createNativeStackNavigator();

export const RoutesContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="GetStartedScreen"
                screenOptions={{
                    headerShown:false,
                }}
                >
                <Stack.Screen name="GetStartedScreen" component={GetStartedScreen}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
                <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}