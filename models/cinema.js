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

Cinema.prototype.filmFromYear = function (year) {
  const inFilmList = this.films.some( (film) => {
    return film.year === year;
  });
  return inFilmList;
};

Cinema.prototype.filmsAreLonger = function (length) {
  const longer = this.films.every ( (film) => {
    return film.length > length;
  });
  return longer;
};

Cinema.prototype.totalRunningTime = function () {
  const total = this.films.reduce ( (runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return total;
};

module.exports = Cinema;
