import React from "react";
import Box from "../../../../Components/Box/Box";
import { Image, Pressable, Text } from "react-native";

interface Props {
    onPress: () => void;
}
export const PlayListHeader = ({onPress}: Props) => {
    return (
        <Box flexDirection="row" justifyContent="space-between" margin="s24">

            <Pressable onPress={onPress} hitSlop={10}>
                <Image source={require('../../../../assets/img/left-md.png')}/>
            </Pressable>

            <Text style={{
                color:'white',
                fontWeight:'400',
                alignSelf:'center'
            }}>
                FROM "PLAYLISTS"
            </Text>

            <Box width={28} />
                
        </Box>
    )
}