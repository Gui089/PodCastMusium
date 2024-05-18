import { TopGenreMock } from "./TopGenreMocks";

export const getTopGenres = async () => {
    return TopGenreMock;
}

export const TopGenreApi = {
    getTopGenres,
}