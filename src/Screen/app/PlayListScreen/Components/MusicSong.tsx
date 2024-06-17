import { Text, View } from "react-native"

export interface Sounds {
    id: string;
    title: string;
    artist: string;
}
export const MusicSong = ({title, artist}: Sounds) => {
    return (
        <View>
            <Text style={{color:'white'}}>
                {title}
            </Text>
            <Text>
                {artist}
            </Text>
        </View>
    )
}