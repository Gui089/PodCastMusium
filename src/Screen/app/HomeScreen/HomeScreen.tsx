import React from "react";
import { Image, StyleSheet, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

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
            <View style={{
                borderRadius:100,
                backgroundColor:'#00DBFC',
                alignItems:'center',
                justifyContent:'center',
                width:50,
                height:50
            }}>
                <Image style={{height:43, width:43, borderRadius:100}} source={require('../../../assets/img/gui02.jpg')}/>
            </View>
        </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
})
