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


module.exports = Cinema;
