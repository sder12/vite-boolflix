import { reactive } from "vue";

export const store = reactive({
    loading: false,
    //API---------
    apiUrlInfo: "https://developers.themoviedb.org/3/getting-started/introduction",
    //SEARCH LINK
    apiSearch: "https://api.themoviedb.org/3/search/",
    apiGenre: "movie",  // Movie or TV
    //PARAMS
    apiKeyParams: "api_key",
    apiKey: "234ab6b846070d0218770bc0f363a089",
    apiSearchParams: "query",
    apiSearchInput: "",
    //SAVING DATA ARRAY 
    movies: [],
    seriesTv: [],

    //LANGUAGES 
    // languages: ["en", "it","es", "fr", "pt", "ja", "de", "ko"],
});