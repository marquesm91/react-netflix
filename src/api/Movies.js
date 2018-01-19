const api = "https://api.themoviedb.org/3"
const apiKey = 'df1a8a2aad5fbba70d7851155c59e9f7';
const defaultOptions= 'language=pt-BR';

const searchPersonPath = 'search/person';
const searchMoviesPath = 'search/movie';
const genresMoviesPath = 'genre/movie/list';
const discoverMoviesPath = 'discover/movie';
const moviesTheaterPath = 'movie/now_playing';
const mostPopularMoviePath = 'movie/popular';

export const getByGenrer = (genrer) =>
  fetch(`${api}/${genresMoviesPath}?api_key=${apiKey}&${defaultOptions}`)
    .then(res => res.json())
    .then(res => res.genres)
    .then(genres => {
      let ids = genres.filter(g => g.name === genrer).map(g => g.id).join(',');

      return fetch(`${api}/${discoverMoviesPath}?api_key=${apiKey}&${defaultOptions}&sort_by=popularity.desc&with_genres=${ids}`)
        .then(res => res.json())
        .then(data => data.results)
    })

export const getInTheater = () =>
  fetch(`${api}/${moviesTheaterPath}?api_key=${apiKey}&${defaultOptions}`)
    .then(res => res.json())
    .then(data => data.results)

export const getMostPopular = () =>
fetch(`${api}/${mostPopularMoviePath}?api_key=${apiKey}&${defaultOptions}`)
  .then(res => res.json())
  .then(data => data.results[Math.floor(Math.random()*19)])

export const search = query =>
  fetch(`${api}/${searchMoviesPath}?api_key=${apiKey}&query=${query}&${defaultOptions}`)
    .then(res => res.json())
    .then(data => {
      if (!data.total_results) {
        return fetch(`${api}/${searchPersonPath}?api_key=${apiKey}&query=${query}&${defaultOptions}`)
          .then(res => res.json())
          .then(data => {
            let movies = data.results
              .map(result => result.known_for)
              .reduce((a, b) => [...a, ...b]);

            return movies;
          })
      }

      return data.results;
    })
