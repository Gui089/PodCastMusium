import { ListeningApi } from "./listeningApi"


export const serviceGetList = async() => {
    const listGenre = await ListeningApi.getListGenre();
    return  listGenre;
}

export const ListeningService = {
    serviceGetList,
}