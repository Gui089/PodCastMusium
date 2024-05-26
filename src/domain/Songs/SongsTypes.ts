

export interface PlayListTypes {
    id: string;
    title: string;
    artists: string;
    genre: string;
    imageUrl: string;
    sounds: Sounds[];
};

interface Sounds { 
    id: string
    title: string
    artist: string
    imageUrl: string
    soundUrl: string
}