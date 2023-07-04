'use strict';

import { API_KEY_TMDB } from './api.js';



// функция ищет жанр с заданным genreId в массиве жанров data.genres
async function getGenre(genreId) {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY_TMDB}&language=ru`;
  const response = await fetch(url);
  const data = await response.json();

  if (response.ok) {
    const genre = data.genres.find(genre => genre.id === genreId);
    return genre;
  } else {
    throw new Error(data.status_message);
  }
}

async function getMoviesByGenre(genreId) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_TMDB}&with_genres=${genreId}&language=ru`;
  const response = await fetch(url);
  const data = await response.json();

  if (response.ok) {
    return data.results;
  } else {
    throw new Error(data.status_message);
  }
}

async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY_TMDB}&language=ru`;
  const response = await fetch(url);
  const data = await response.json();

  if (response.ok) {
    return data.results;
  } else {
    throw new Error(data.status_message);
  }
}

async function showMoviesByGenres(genreIds) {
  const movieElement = document.querySelector('.genre__container');
  const genreContainer = document.createElement('div');
  genreContainer.classList.add('genres__movies');

  // Отображение секции "Популярные фильмы"
  const popularMoviesElement = document.createElement('div');
  popularMoviesElement.classList.add('genre__section');
	const genreBox = document.createElement('div'); //
	genreBox.classList.add('genre__section-slider', 'popular');

  const titleGenre = document.createElement('h2');
  titleGenre.classList.add('genre__title');
  titleGenre.textContent = 'Популярные фильмы';
	genreBox.append(titleGenre);
  genreContainer.append(genreBox);

  const popularMovies = await getPopularMovies();
  for (const movie of popularMovies) {
    const movieElement = createMovieElement(movie);
    popularMoviesElement.appendChild(movieElement);
  }


  genreBox.appendChild(popularMoviesElement);

  // Отображение секций по жанрам
  for (const genreId of genreIds) {
    const genreElement = document.createElement('div');
    genreElement.classList.add('genre__section');

    const genre = await getGenre(genreId);
		const genreBox = document.createElement('div'); //
		genreBox.classList.add('genre__section-slider', `${genre.id}`);
    const titleGenre = document.createElement('h2');
    titleGenre.classList.add('genre__title');
    titleGenre.textContent = `${genre.name}`;
		genreBox.append(titleGenre);
    genreContainer.append(genreBox);

    const movies = await getMoviesByGenre(genreId);
    for (const movie of movies) {
      const movieElement = createMovieElement(movie);
      genreElement.appendChild(movieElement);
    }

    genreBox.appendChild(genreElement);
  }

  movieElement.innerHTML = '';
  movieElement.appendChild(genreContainer);
}


function createMovieElement(movie) {
  const sliderFilm = document.createElement('div');
  sliderFilm.classList.add('slider__film');

  const linkElement = document.createElement('a');
  linkElement.href = `movie.html?id=${movie.id}&title=${encodeURIComponent(movie.title)}`;
  // linkElement.setAttribute('target', '_blank');
  linkElement.classList.add('slider__poster-genre');

  const imageElement = document.createElement('img');
  imageElement.classList.add('slider__poster');
  imageElement.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  linkElement.appendChild(imageElement);
  sliderFilm.appendChild(linkElement);

  linkElement.addEventListener('click', () => {
    // const movieId = movie.id;
    window.location.href = `movie.html?id=${movie.id}&title=${encodeURIComponent(movie.title)}`;
    // window.open(`movie.html?id=${movie.id}&title=${encodeURIComponent(movie.title)}`, '_blank');
  });

  return sliderFilm;
}

const genreIds = [28, 12, 35, 18, 14];
showMoviesByGenres(genreIds)
  .catch(error => console.error(error));
  


// Функция для показа фильмов по выбранным жанрам
function showMoviesByGenre(genre) {
  const genreSections = document.querySelectorAll('.genre__section-slider');

  genreSections.forEach(section => {
    if (section.classList.contains(genre) || genre === 'all') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// Обработчик события изменения выбранного жанра
const selectGenre = document.getElementById('films__genre');
selectGenre.addEventListener('change', function() {
  const selectedGenre = this.value;
  showMoviesByGenre(selectedGenre);
});

// Показать все фильмы и жанры при загрузке страницы
showMoviesByGenre('all');

// ====================================

