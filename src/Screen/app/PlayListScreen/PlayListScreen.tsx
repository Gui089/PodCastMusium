import React, { useEffect, useState } from "react";
import { Image, ScrollView } from "react-native";
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

            console.log('Filtered Playlist:', uiPlayListMusic);
            console.log('Route params title:', route.params.title);
            console.log('Item index:', playListIndex);
        });

    }, [route.params.title, route.params.index]);

    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <PlayListHeader onPress={goBack} />

            {uiPlayList.length > 0 && (
                <Image 
                    style={{ width: 263, height: 252 }} 
                    source={{ uri: uiPlayList[route.params.index % uiPlayList.length]?.imageUrl }} 
                />
            )}
        </ScrollView>
    );
};


