import React from "react";
import { ScrollView, Text } from "react-native";
import { HeaderLibary } from "./Components/HeaderLibary";
import { FilterLibary } from "./Components/Filter";

export const LibaryScreen = () => {
    return (
        <ScrollView 
            style={{backgroundColor:'black'}}
        >
            <HeaderLibary />
            <FilterLibary />
        </ScrollView>
    )
}