import axios from 'axios';

const apikey = '2f3933e4';
const endpoint = `http://www.omdbapi.com/?apikey=${apikey}`;

export async function fetchMovies (page, query = '*apple*') {
    const response = await axios(`${endpoint}&s=${query}&page=${page}`);

    console.log(response);

    return response.data.Search;
}

export async function loadDetails(id) {
    const response = await axios(`${endpoint}&i=${id}`);

    return response.data;
}