import { TopMixesApi } from "./TopMixesApi";

export const getTopMixesService = async () => {
    const result =  await TopMixesApi.getTopMixes();
    return result;
};

export const TopMixesService = {
    getTopMixesService,
};