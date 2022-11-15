import { reactive } from "vue";

export const store = reactive({
    loadingMovies: false,
    loadingSeries: false,
    // .finally(() => {this.store.loadingSeries = true})
    //API---------
    apiUrlInfo: "https://developers.themoviedb.org/3/getting-started/introduction",
    //SEARCH LINK
    apiSearch: "https://api.themoviedb.org/3/search/",
    apiGenreMovie: "movie",  // Movie or TV
    apiGenreTv: "tv",
    //PARAMS
    apiKeyParams: "api_key",
    apiKey: "234ab6b846070d0218770bc0f363a089",
    apiSearchParams: "query",
    apiSearchInput: "",
    //SAVING DATA ARRAY 
    movies: [],
    seriesTv: [],

    //LANGUAGES 
    languages: ["en", "it", "es", "fr", "pt", "ja", "de", "ko", "sv", "da", "hi", "nl"],

    //IMAGES with w342
    imgLink: "https://image.tmdb.org/t/p/w342"

    //STARS FONTAWSOME
    // <font-awesome-icon icon="fa-solid fa-star" />
    //<font-awesome-icon icon="fa-regular fa-star" />

});