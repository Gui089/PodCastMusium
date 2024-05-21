import React from "react";
import { FlatList, ListRenderItem, Text } from "react-native";
import Box from "../../../../Components/Box/Box";

const FilterData = [
    {
        id:'1',
        title:'Folders'
    },
    {
        id:'2',
        title:'Playlists'
    },
    {
        id:'3',
        title:'Artists'
    },
    {
        id:'4',
        title:'Albums'
    },
    {
        id:'5',
        title:'Podcasts'
    },
];


export const FilterLibary = () => {

    const renderRilter: ListRenderItem<any> = ({item}) => {
        return (
            <Box 
                mt="s20"
                mr="s4"
                ml="s20"
                borderRadius="s16"
                borderWidth={1} 
                borderColor="grayWhite" 
                width={78} 
                height={30}
                >
                <Text  style={{color:'#FFFFFF', alignSelf:'center', marginTop:3, fontSize:12}}>{item.title}</Text>
            </Box>
        )
    }

    return (
        <FlatList
            data={FilterData}
            keyExtractor={(item) => item.id}
            renderItem={renderRilter}
            horizontal
        />
    )
}