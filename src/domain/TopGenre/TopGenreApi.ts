import { AllGenresMock } from "./AllGenreMock";
import { TopGenreMock } from "./TopGenreMocks";

export const getTopGenres = async () => {
    return TopGenreMock;
}

export const getAllGenres = async () => {
    return AllGenresMock;
}
export const TopGenreApi = {
    getTopGenres,
    getAllGenres
}