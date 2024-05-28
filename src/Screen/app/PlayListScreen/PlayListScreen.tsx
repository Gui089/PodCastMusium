import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text } from "react-native";
import { PlayListHeader } from "./Components/PlayListHeader";
import { PlayListTypes } from "../../../domain/Songs/SongsTypes";
import { PlayListService } from "../../../domain/Songs/SongsService";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParams } from "../../../routes/AppStack";

type PlayListProps = NativeStackScreenProps<AppStackParams, 'PlayListScreen'>;

export const PlayListScreen = ({ navigation, route }: PlayListProps) => {

    const [playList, setPlayList] = useState<PlayListTypes[]>([]);
    const [uiPlayList, setUiPlayList] = useState<PlayListTypes[]>([]);

    const goBack = () => {
        navigation.goBack();
    }

    useEffect(() => {
        const playListName = route.params.title;
        const playListIndex = route.params.index;

        PlayListService.getPLayListService().then((item) => {
            setPlayList(item);

            const uiPlayListMusic = item.filter((playlistItem) => playlistItem.title === playListName);
            setUiPlayList(uiPlayListMusic);
        });

    }, [route.params.title, route.params.index]);

    useEffect(() => {
        if (uiPlayList.length > 0) {
            console.log('Filtered Playlist:', uiPlayList);
            console.log('Route params title:', uiPlayList[route.params.index % uiPlayList.length].title);
            console.log('Item index:', route.params.index);
        }
    }, [uiPlayList, route.params.index]);

    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <PlayListHeader onPress={goBack} />

            {uiPlayList.length > 0 && (
                <Image 
                    style={{
                        width: 263, 
                        height: 252, 
                        alignSelf:'center',
                        marginTop:36,
                        borderRadius:4
                    }} 
                    source={{ uri: uiPlayList[route.params.index % uiPlayList.length]?.imageUrl }} 
                />
            )}

            <Text
                style={{
                    color:'white',
                    fontSize:34,
                    fontWeight:'bold',
                    alignSelf:'center',
                    marginTop:21
                }}
            >
                {route.params.title}
            </Text>

            <Text
                style={{
                    fontSize:13,
                    color:'gray',
                    fontWeight:'bold',
                    alignSelf:'center'
                }}
            >
                {uiPlayList[route.params.index % uiPlayList.length]?.artists}
            </Text>
        </ScrollView>
    );
};



