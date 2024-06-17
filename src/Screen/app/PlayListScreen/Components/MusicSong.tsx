import { Image, Text, View } from "react-native"

export interface Sounds {
    id: string;
    title: string;
    artist: string;
    imageUrl: string;
}
export const MusicSong = ({title, artist, imageUrl}: Sounds) => {
    return (
        <View style={{flexDirection:'row', marginTop:11, marginLeft:33}}>
            <Image source={{uri: imageUrl}} width={52} height={52} borderRadius={5}/>


            <View style={{marginLeft:13}}>
                <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>
                    {title}
                </Text>
                <Text style={{color:'#8A9A9D', fontSize:12, fontWeight:'bold'}}>
                    {artist}
                </Text>
            </View>
        </View>
    )
}