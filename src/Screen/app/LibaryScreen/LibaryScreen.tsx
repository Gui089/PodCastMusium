import React, { useRef } from "react";
import { FlatList, Image, ListRenderItem, ScrollView, Text } from "react-native";
import { HeaderLibary } from "./Components/HeaderLibary";
import { FilterLibary } from "./Components/Filter";
import { ButtonUseCase } from "./Components/ButtonUseCase";
import Box from "../../../Components/Box/Box";
import { RecentPlayed } from "./Components/RecentPlayed";

const recentPlayed = [
    {
        id: '1',
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.FJb3Ku9_JBE6EerqB-YYHQHaHa&pid=Api&P=0&h=180',
        title: 'Conan Gray'
    },
    {
        id: '2',
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.M365aQCxIb7-nTDgIGPYsgHaJQ&pid=Api&P=0&h=180',
        title: '3:00am vibes',
        subTitle: '18 songs'
    },
    {
        id: '3',
        imageUrl: 'https://i.pinimg.com/originals/69/66/22/6966227a142c7d59d777cdd89e1e7311.jpg',
        title: 'Wiped Out!',
        subTitle: 'The Neighbourhood'
    }, 
    {
        id: '4',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded_nologo400/5798907/5798907-1631687812704-740221d27af6.jpg',
        title: 'Extra Dynamic',
        subTitle: 'Updated Aug 10 ur mon ashley'
    }
];

export const LibaryScreen = () => {

    const renderRecentPlayed: ListRenderItem<any> = ({item}) => {
        return (
            <RecentPlayed imageUrl={item.imageUrl} title={item.title} subtitle={item?.subTitle} />
        )
    }

    return (
        <ScrollView 
            style={{backgroundColor:'black'}}
        >
            <HeaderLibary />

            <FilterLibary />

            <ButtonUseCase text="Add New Playlist" title="add"/>
            <ButtonUseCase text="Your Liked Songs" title="favorite" />

            <Box 
            style={{
                marginLeft:40,
                marginTop:34.5,
                flexDirection:'row',
                alignItems:'center'
            }}>
                <Image  width={17} height={13} source={require('../../../assets/img/sort.png')}/>
                <Text 
                style={{
                    color:'#39C0D4',
                    fontSize:16,
                    fontWeight:'bold',
                    marginLeft:5

                }} >
                    Recently played
                </Text>

            </Box>
                <FlatList
                    data={recentPlayed}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRecentPlayed}
                />
        </ScrollView>
    )
}