import React, { useEffect, useState } from "react";
import {  FlatList, ListRenderItem, ListRenderItemInfo, StyleSheet, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { HeaderHome } from "../Components/HeaderHome/HeaderHome";
import { ListeningList } from "../Components/ListeningList";
import { ListeningService } from "../../../domain/Listening/ListeningService";
import { Listening } from "../../../domain/Listening/listeningType";
import { ScrollView } from "react-native";
import { TopMixes } from "../../../domain/TopMixes/TopMixesTypes";
import { TopMixesService } from "../../../domain/TopMixes/TopMixesService";
import { TopMixesComponent } from "../Components/TopMixes";
import { RecentListeningTypes } from "../../../domain/RecentListening/RecentListeningTypes";
import { RecentListeningService } from "../../../domain/RecentListening/RecentListeningService";
import { RecentListening } from "../Components/RecentListening";


export const HomeScreen = () => {

    const [genre, setGenre] = useState<Listening[]>([]);
    const [mixes, setMixes] = useState<TopMixes[]>([]);
    const [recentListening, setRecentListening] = useState<RecentListeningTypes[]>([]);

    useEffect(() => {
        ListeningService.serviceGetList().then((list) => setGenre(list));
    });

    useEffect(() => {
        TopMixesService.getTopMixesService().then((mix) => setMixes(mix));
    });

    useEffect(() => {
        RecentListeningService.getRecentListeningService().then((item) => setRecentListening(item));
    });

    const mixRender: ListRenderItem<TopMixes> = ({item}) => {
        return (
            <TopMixesComponent {...item}/>
        )
    }


    const listRender: ListRenderItem<Listening> = ({ item }) => {
        return (
            <ListeningList {...item} />
        )
    }

    const recentListeningRender: ListRenderItem<RecentListeningTypes> = ({item}) => {
        return (
            <RecentListening {...item}/>
        )
    }


    return (
        <ScrollView style={{flex:1, backgroundColor:'black'}}>
        <LinearGradient
            colors={['#01383A','#102B2D','#000']}
            start={{x: 0, y: 0}}
            end={{x: 0.0, y:1}}
            locations={[0.01,0.1,0.6]}
            style={styles.container}
        >
            <HeaderHome />
            <Text 
                style={{
                    fontWeight: 'bold',
                    fontSize:22,
                    color:'white',
                    marginTop:34,
                    marginLeft:29
                }}
            >
                Continue Listening
            </Text>
            <FlatList 
                data={genre}
                renderItem={listRender}
                numColumns={2}
            />
            <Text 
                style={{
                    fontWeight: 'bold',
                    fontSize:22,
                    color:'white',
                    marginTop:34,
                    marginLeft:29
                }}
            >
                Your top Mixes
            </Text>
            <FlatList
                data={mixes}
                keyExtractor={(item) => item.id}
                renderItem={mixRender}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <Text 
                style={{
                    fontWeight: 'bold',
                    fontSize:22,
                    color:'white',
                    marginTop:34,
                    marginLeft:29
                }}
            >
                Based on your recent listening
            </Text>
            <FlatList
                data={recentListening}
                keyExtractor={(item) => item.id}
                renderItem={recentListeningRender}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
})
