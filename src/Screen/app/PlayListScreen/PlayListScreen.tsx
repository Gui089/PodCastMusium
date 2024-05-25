import React from "react";

import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PlayListHeader } from "./Components/PlayListHeader";

export const PlayListScreen = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <ScrollView style={{backgroundColor:'black'}}>

        <PlayListHeader  onPress={goBack}/>
        

        </ScrollView>
    )
}