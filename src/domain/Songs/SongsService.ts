import { PlayListApi } from "./SongsApi"


export const getPLayListService = async () => {
    const response = await PlayListApi.getPlayList();
    return response;
}

export const PlayListService = {
    getPLayListService,
}