import { Listening } from "./listeningType";

type ListeningData = {
    GenreData: Listening;
};

const ListeningMock: Record<string, ListeningData> = {
    "listening1": {
        GenreData: {
            id: "id1",
            genre: "genre1",
            imageUrl: "imageUrl1"
        }
    },
    "listening2": {
        GenreData: {
            id: "id2",
            genre: "genre2",
            imageUrl: "imageUrl2"
        }
    },
};

export default ListeningMock;