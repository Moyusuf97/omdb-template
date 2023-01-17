/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */

/**
 * According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
 * 1 Required parameter: apikey
 * 2 Required parameter: One of the following i=, t= or s=
 *
 *
 * Example with parameter s=star trek
 * http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
 *
 * Example with parameter s=star trek AND y=2020
 * http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
 *
 * Example with parameter s=star trek AND type=series
 * http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
 *
 */
const input = document.getElementById("input-1");
const divcontent = document.getElementById("content");
const movietype = document.getElementById("movie-type");
const yeartype = document.getElementById("movieYear");

input.addEventListener("input", async function () {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=274112d0&s=" + input.value
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const movies = await response.json();
    const searchResults = movies["Search"];

    console.log(movies);

    divcontent.innerHTML = "";

    for (let movie of searchResults) {
      divcontent.innerHTML += `<ul>

      <li>${movie.Title}</li>
      <li>${movie.Year}</li>
      <li>${movie.imdbID}</li>
      <li>${movie.Type}</li>
      <img src = ${movie.Poster}>
      
      
      
      
      </ul>`;
    }
  } catch (error) {
    document.getElementById("content").innerHTML;
  }
});

movietype.addEventListener("change", async function () {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=274112d0&s=" +
        input.value +
        "&type=" +
        movietype.value
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const movies = await response.json();
    const searchResults = movies["Search"];

    console.log(movies);

    divcontent.innerHTML = "";
    for (let movie of searchResults) {
      divcontent.innerHTML += `<ul>

      <li>${movie.Title}</li>
      <li>${movie.Year}</li>
      <li>${movie.imdbID}</li>
      <li>${movie.Type}</li>
      <img src = ${movie.Poster}>
      
      
      
      
      </ul>`;
    }
  } catch (error) {
    console.log(error);
  }
});

yeartype.addEventListener("change", async function () {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=274112d0&s=" +
        input.value +
        "&type=" +
        movietype.value +
        "&y" +
        yeartype.value
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const movies = await response.json();
    const searchResults = movies["Search"];

    console.log("år:" + yeartype);

    divcontent.innerHTML = "";
    for (let movie of searchResults) {
      divcontent.innerHTML += `<ul>

      <li>${movie.Title}</li>
      <li>${movie.Year}</li>
      <li>${movie.imdbID}</li>
      <li>${movie.Type}</li>
      <img src = ${movie.Poster}>
      
      
      
      
      </ul>`;
    }
  } catch (error) {
    console.log(error);
  }
});

movieYear.innerHTML = "";
for (let i = 2022; i >= 1980; i--) {
  movieYear.innerHTML += `<option>${i}</option>`;
}
