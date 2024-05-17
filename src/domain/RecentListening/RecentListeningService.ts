import { getRecentListening } from "./RecentListeningApi"


export const getRecentListeningService =  async () => {
    const response = await getRecentListening();
    return response;
}

export const RecentListeningService = {
    getRecentListeningService
}