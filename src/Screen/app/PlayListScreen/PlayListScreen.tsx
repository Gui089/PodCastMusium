import React, { useEffect, useState } from "react";
import { FlatList, Image, ListRenderItem, ListRenderItemInfo, ScrollView, Text } from "react-native";
import { PlayListHeader } from "./Components/PlayListHeader";
import { PlayListTypes } from "../../../domain/Songs/SongsTypes";
import { PlayListService } from "../../../domain/Songs/SongsService";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParams } from "../../../routes/AppStack";
import { MusicPlayer } from "../Components/MusicPlayer/MusicPlayer";
import { MusicSong, Sounds } from "./Components/MusicSong";

type PlayListProps = NativeStackScreenProps<AppStackParams, 'PlayListScreen'>;

export const PlayListScreen = ({ navigation, route }: PlayListProps) => {

    const [playList, setPlayList] = useState<PlayListTypes[]>([]);
    const [uiPlayList, setUiPlayList] = useState<PlayListTypes[]>([]);
    const [musics, setMusics] = useState<Sounds[]>([]);

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
            console.log('Index da playlist:', route.params.index);
            const musicsSongs = uiPlayList[route.params.index % uiPlayList.length].sounds;
            setMusics(musicsSongs);
            
            console.log('Filtered Playlist:', uiPlayList);
            console.log('Songs', musics);
        }
    }, [uiPlayList, route.params.index, musics]);

    const renderMusics: ListRenderItem<any> = ({item, index}) => {

        console.log(item);
        
        return (
            <MusicSong id={item.id} title={item.title} artist={item.artist}/>
        )
    } 

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

           <FlatList 
                keyExtractor={(item) => item.id}
                data={musics}
                renderItem={renderMusics}
            /> 

            {/* <MusicPlayer /> */}
        </ScrollView>
    );
};



