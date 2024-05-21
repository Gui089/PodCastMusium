import React from "react";
import { ScrollView, Text } from "react-native";
import { HeaderLibary } from "./Components/HeaderLibary";
import { FilterLibary } from "./Components/Filter";
import { ButtonUseCase } from "./Components/ButtonUseCase";

export const LibaryScreen = () => {
    return (
        <ScrollView 
            style={{backgroundColor:'black'}}
        >
            <HeaderLibary />
            <FilterLibary />
            <ButtonUseCase title="add"/>
            <ButtonUseCase title="favorite" />
        </ScrollView>
    )
}