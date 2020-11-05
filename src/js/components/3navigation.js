import fetchRequest from '../fetchRequest.js';

export default function (moveId) {
  setSelectFilm(moveId);
}

function setSelectFilm(moveId) {
  fetchRequest
    .fetchMovieDetails(moveId)
    .then(data => Object.assign(selectFilm, data));
  fetchRequest.fetchGenres(data => data.map(gen => genres.push(gen)));
}
