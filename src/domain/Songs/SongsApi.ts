import { PlayListData } from "./SongsMocks"


export const getPlayList = async () => {
    const response = await PlayListData;
    return response;
}

export const PlayListApi = {
    getPlayList,
}