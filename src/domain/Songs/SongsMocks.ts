
import { PlayListTypes } from "./SongsTypes";

export const PlayListData: PlayListTypes[] = [
    {
        id: '1',
        title: 'MPB',
        artists: 'Djavan, Caetano Veloso, Legião urbana',
        genre: 'MPB',
        imageUrl: 'https://1.bp.blogspot.com/-CaF5tpMzwsQ/Xai2lVNDiEI/AAAAAAAAfy0/QgOU_yx-bQ0vLujllX-l1TTnw2mYvPh6ACLcBGAsYHQ/s1600/MPB.jpg',
        sounds: [
            {
                id:'1',
                title:'Oceano',
                artist: 'Djavan',
                imageUrl:'https://djavan.com.br/content/uploads/2018/11/oceano-1152x0-c-default.jpg',
                soundUrl:'../../assets/sounds/oceano_djavan.m4a'
            }, 
            {
                id:'2',
                title: 'Sozinho',
                artist: 'Caeteno Veloso',
                imageUrl: 'https://i.ytimg.com/vi/6YudHd6kTZ8/maxresdefault.jpg',
                soundUrl:'../../assets/sounds/CaetanoVeloso_Sozinho.mp3'
            }
        ]
    }
];
