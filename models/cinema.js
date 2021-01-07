const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titles = this.films.map( (film) => {
    return film.title;
});
return titles;
};

Cinema.prototype.findByTitle = function (title) {
  const foundFilm = this.films.find( (film) => {
    return film.title === title;
  });
  return foundFilm;
};

Cinema.prototype.filterByGenre = function (genre) {
  const filteredFilms = this.films.filter( (film) => {
    return film.genre === genre;
  });
  return filteredFilms;
};

module.exports = Cinema;
