import React from "react";
import { Image, StyleSheet, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { HeaderHome } from "../Components/HeaderHome/HeaderHome";

export const HomeScreen = () => {
    return (
        <>
        <LinearGradient
            colors={['#01383A','#102B2D','#000']}
            start={{x: 0, y: 0}}
            end={{x: 0.0, y:1}}
            locations={[0.01,0.1,0.4]}
            style={styles.container}
        >
            <HeaderHome />
        </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
})
