const API_KEY = process.env.REACT_APP_ACCESS_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
};

export default requests;
