import React from "react";
import { ScrollView, Text} from "react-native";
import {LinearGradient} from 'react-native-linear-gradient';
import { ExploreSearch } from "./Components/ExploreSearch";


export const ExploreScreen = () => {
    return (
        <ScrollView style={{backgroundColor:'black', flex:1}}>
            <LinearGradient
                colors={['#01383A','#102B2D','#000']}
                start={{x: 0, y: 0}}
                end={{x: 0.0, y:1}}
                locations={[0.01,0.1,0.6]}
            >
                <Text
                    style={{
                        color:'#00C2CB',
                        fontSize:27,
                        fontWeight:'bold',
                        marginTop:20,
                        marginLeft:30
                    }}
                >
                    Search
                </Text>
                <ExploreSearch />
            </LinearGradient>
        </ScrollView>
    )
}