import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AppTabBottomTabParams, AppTabNavigator } from "./AppTabNav";

import { LibaryScreen } from "../Screen/app/LibaryScreen/LibaryScreen";
import { NavigatorScreenParams } from "@react-navigation/native";
import { PlayListScreen } from "../Screen/app/PlayListScreen/PlayListScreen";
import { PlayMusicScreen } from "../Screen/app/PlayMusicScreen/PlayMusicScreen";

export type AppStackParams = {
    AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParams>,
    LibaryScreen: undefined
    PlayListScreen: {
        title: string
        index: number
    },
    PlayMusicScreen: {
        id:string;
        title: string;
        artist: string;
        songUrl: string;
        imageUrl: string;
    }
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
            <Stack.Screen name="LibaryScreen" component={LibaryScreen}/>
            <Stack.Screen name="PlayListScreen" component={PlayListScreen} />
            <Stack.Screen name="PlayMusicScreen" component={PlayMusicScreen}/>
        </Stack.Navigator>
    )
}
