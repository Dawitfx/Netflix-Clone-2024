const Api_key = import.meta.env.VITE_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${Api_key}&language=en-US`, // no space at the front and back of the link
  fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
  fetchAnimation: `/discover/movie?api_key=${Api_key}&with_genres=16`,
  fetchTvShow: `tv/popular?api_key=${Api_key}&language=en-US&page=1`,
};

export default requests;
