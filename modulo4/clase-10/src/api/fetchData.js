import axios from "axios";

const base_url = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  const res = await fetch(base_url);
  const data = await res.json();
  return data.results;
}

async function fetchWithAxios() {
  const { data } = await axios(base_url);
  return data.results;
}

export { fetchCharacters, fetchWithAxios };
