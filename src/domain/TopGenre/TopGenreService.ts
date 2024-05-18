import { TopGenreApi } from "./TopGenreApi"


export const getTopGenreService = async () => {
    const response = await TopGenreApi.getTopGenres();
    return response;
}

export const TopGenreService = {
    getTopGenreService,
}