const api = "https://api.themoviedb.org/3"
const apiKey = 'df1a8a2aad5fbba70d7851155c59e9f7';
const defaultOptions= 'language=pt-BR';

export const getByGenrer = (genrer) =>
  fetch(`${api}/genre/movie/list?api_key=${apiKey}&${defaultOptions}`)
    .then(res => res.json())
    .then(res => res.genres) /* Return a list with all genres */
    .then(genresArray => {
      /* get the id of specific genrer */
      let id = genresArray.filter(g => g.name === genrer).map(g => g.id).join(',');

      return fetch(`${api}/discover/movie?api_key=${apiKey}&${defaultOptions}&sort_by=popularity.desc&with_genres=${id}`)
        .then(res => res.json())
        .then(data => data.results) /* return a list of movies based on genrer */
    })

export const getInTheater = () =>
  fetch(`${api}/movie/now_playing?api_key=${apiKey}&${defaultOptions}`)
    .then(res => res.json())
    .then(data => data.results) /* return a list of movies in theater */

export const getMostPopular = () =>
fetch(`${api}/movie/popular?api_key=${apiKey}&${defaultOptions}`)
  .then(res => res.json())
  .then(data => data.results[Math.floor(Math.random() * (data.results.length - 1))])

export const search = query =>
  fetch(`${api}/search/movie?api_key=${apiKey}&query=${query}&${defaultOptions}`)
    .then(res => res.json())
    .then(data => {
      /* In cases when no movies were found. Try search for movies known for */
      if (!data.total_results) {
        return fetch(`${api}/search/person?api_key=${apiKey}&query=${query}&${defaultOptions}`)
          .then(res => res.json())
          .then(data => {
            if (!data.total_results) {
              return [];
            }
            
            let movies = data.results
              .map(result => result.known_for) /* get only array of known_for */
              .reduce((a, b) => [...a, ...b]); /* reduce many arrays into only one */

            return movies;
          })
      }

      /* In cases when movie were searched for return it */
      return data.results;
    })
