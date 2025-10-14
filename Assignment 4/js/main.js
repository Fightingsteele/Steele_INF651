let movies = [];

movieInput = document.getElementById("movie-name");
addMovieBtn = document.getElementById("add-movie-btn");
movieList = document.getElementById("movie-list");

function addMovie(){
    movieName = movieInput.value;
    if (movieName === "") {
        alert("Please enter a movie title!");
        return;
    }
    if (movies.includes(movieName)) {
        alert("Movie already in your watchlist!");
        return;
    }

    movies.push(movieName);

    movieInput.value = "";

    displayMovies();
}

function displayMovies() {
  let html = "";

  for (let i = 0; i < movies.length; i++) {
    html += `<li class="collection-item">${movies[i]}<button class="btn red right" onclick="removeMovie(${i})">Remove</button></li>
    `;
  }

  movieList.innerHTML = html;
}

function removeMovie(index) {
    movies.splice(index, 1);
    displayMovies();
}

addMovieBtn.addEventListener("click", addMovie);

movieInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addMovie();
    }
});
