
const api = "https://api.themoviedb.org/3"
const apiKey = 'df1a8a2aad5fbba70d7851155c59e9f7';
const defaultOptions= '&language=pt-BR';

/*export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())*/

export const search = query =>
  fetch(`${api}/search/movie?api_key=${apiKey}&query=${query}${defaultOptions}`)
    .then(res => res.json())
    .then(data => data)
