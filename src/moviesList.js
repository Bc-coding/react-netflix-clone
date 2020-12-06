import requests from "./requests";

const moviesList = [
  {
    title: "Netflix Original",
    fetchURL: requests.fetchNetflixOriginal,
  },
  {
    title: "Top Rated",
    fetchURL: requests.fetchTopRated,
  },
  {
    title: "Action",
    fetchURL: requests.fetchAction,
  },
  {
    title: "Adventure",
    fetchURL: requests.fetchAdventure,
  },
  {
    title: "Animation",
    fetchURL: requests.fetchAnimation,
  },
  {
    title: "Comedy",
    fetchURL: requests.fetchComedy,
  },
];

export default moviesList;
