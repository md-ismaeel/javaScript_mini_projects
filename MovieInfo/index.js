const searchForm = document.querySelector(".search-form");
const inputVal = document.querySelector(".input-form");
const searchBtn = document.querySelector(".btn");
const poster = document.querySelector("#poster")
const title = document.querySelector("#title")
const genre = document.querySelector("#genre")
const cast = document.querySelector("#cast")
const rating = document.querySelector("#rating")
const releaseDate = document.querySelector("#release-date")
const director = document.querySelector("#director")

const apiKey = 'adff2bf8';

const movieInfo = document.querySelector(".movie-info")
// movieInfo.classList.add("hidden")

function updateUI(data) {
    console.log("updateUi", data);
    if (data.Response === "False") {
        alert("Please Enter a valid movie name!!");
        return
    }

    poster.src = data.Poster
    title.textContent = data.Title
    genre.textContent = data.Genre
    cast.textContent = data.Actors
    rating.textContent = ""
    releaseDate.textContent = data.Released
    director.textContent = data.Director
    movieInfo.style.display = "flex"
    // movieInfo.classList.remove(".hidden")

}

const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(inputVal.value);

    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${inputVal.value}&apikey=${apiKey}`)
        const data = await response.json()
        // console.log(data);
        updateUI(data)
    } catch (err) {
        console.log("Error occurred while fetching data");
    }

    inputVal.value = ""

}


searchForm.addEventListener("submit", handleSubmit)

//      fetch(`https://www.omdbapi.com/?t=${inputVal.value}&apikey=${apiKey}`)
//         .then((response) => {
//             return response.json()
//         }).then((data) => {
//             console.log(data);
//         }).catch((err) => {
//             console.log("error occurred while fetching movies");

//         })