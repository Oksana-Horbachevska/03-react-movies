import axios from "axios";
import type { MoviesResponse } from "../types/movie";

const myKey = import.meta.env.VITE_TMDB_TOKEN;
const URL = "https://api.themoviedb.org/3/search/movie";

export default async function fetchMovies(
  query: string
): Promise<MoviesResponse> {
  const options = {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  };
  const response = await axios.get<MoviesResponse>(URL, options);
  console.log(response.data);
  return response.data;
}
