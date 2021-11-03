import { AxiosResponse } from "axios"
import api, { baseURL } from "../../providers/api"
import { loadCache, saveCache } from "../../providers/cache"
import { IPokemonNameListResponse, IPokemonRequestResponse } from "./types"

export const serviceRequestPokemonList = async (url?: string): Promise<IPokemonRequestResponse> => {
    if(!url) {
        url = "pokemon"
    }
    else url = url.replace(baseURL, '');

    try{
        const cached = await loadCache<IPokemonRequestResponse>(url);

        if(cached !== null && cached !== undefined) return cached;
    }
    catch(error) {
    }

    try{
        const response = await api.get<IPokemonRequestResponse, AxiosResponse<IPokemonRequestResponse>>(url)
        
        await saveCache(url, response.data);

        return response.data;
    }
    catch(error){
        throw new Error("Error trying get pokemon list");
        
    }

}

