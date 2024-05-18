import React from "react";
import { ScrollView, Text } from "react-native";
import { HeaderLibary } from "./Components/HeaderLibary";

export const LibaryScreen = () => {
    return (
        <ScrollView 
            style={{backgroundColor:'black'}}
        >
            <HeaderLibary />
        </ScrollView>
    )
}