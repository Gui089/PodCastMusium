import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItem, ScrollView, Text} from "react-native";
import {LinearGradient} from 'react-native-linear-gradient';
import { ExploreSearch } from "./Components/ExploreSearch";
import { TopGenreTypes } from "../../../domain/TopGenre/TopGenreTypes";
import { TopGenreService } from "../../../domain/TopGenre/TopGenreService";
import { CardComponent } from "./Components/Cards/CardComponent";



export const ExploreScreen = () => {

    const [topGenre, setTopGenre] = useState<TopGenreTypes[]>([]);

    useEffect(() => {
        TopGenreService.getTopGenreService().then((item) => setTopGenre(item));
    }, [topGenre]);

    const renderTopGenre: ListRenderItem<TopGenreTypes> = ({item}) => {
        return (
            <CardComponent {...item}/>
        )
    }

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

                <Text 
                style={{
                    fontWeight: 'bold',
                    fontSize:20,
                    color:'white',
                    marginTop:34,
                    marginLeft:35
                }}
            >
                Your Top Genres
            </Text>

            <FlatList
                data={topGenre}
                keyExtractor={(item) => item.id}
                renderItem={renderTopGenre}
                numColumns={2}
            />
            </LinearGradient>
        </ScrollView>
    )
}