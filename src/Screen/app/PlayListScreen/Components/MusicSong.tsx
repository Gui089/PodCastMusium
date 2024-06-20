import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export interface Sounds {
    id: string;
    title: string;
    artist: string;
    imageUrl: string;
    soundUrl:string;
    onPress: () => void;
}

interface MusicSongProps {
    id: string;
    title: string;
    artist: string;
    imageUrl: string;
    soundUrl:string;
    onPress: (music: Sounds) => void;
}

export const MusicSong = ({ id, title, artist, imageUrl,soundUrl,onPress }: MusicSongProps) => {
    const handlePress = () => {
        onPress({ id, title, artist, imageUrl,soundUrl, onPress: handlePress });
    };

    return (
        <Pressable onPress={handlePress}>
            <View style={{ flexDirection: 'row', marginTop: 11, marginLeft: 33 }}>
                <Image source={{ uri: imageUrl }} style={{ width: 52, height: 52, borderRadius: 5 }} />

                <View style={{ marginLeft: 13 }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                        {title}
                    </Text>
                    <Text style={{ color: '#8A9A9D', fontSize: 12, fontWeight: 'bold' }}>
                        {artist}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};
