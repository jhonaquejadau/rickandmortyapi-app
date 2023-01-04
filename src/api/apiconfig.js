export const apiconfig = {
    base_url: "https://rickandmortyapi.com/api/",
    fetchdata: type => `https://rickandmortyapi.com/api/${type}`,
    fetch_single_data: (type, num) => `https://rickandmortyapi.com/api/${type}/${num}`,
    filter_character: (type, value) => `https://rickandmortyapi.com/api/character/?${type}=${value}`,
    filter_location: (type, value) => `https://rickandmortyapi.com/api/location/?${type}=${value}`,
}