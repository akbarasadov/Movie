
import { Genre } from "../components/Genre.js";
import { Movie } from "../components/Movie.js";
import { movies } from "./db.js";
import { reload } from "./utils.js";


const moviesContainer = document.querySelector(".promo__interactive-list")
const genresContainer = document.querySelector(".promo__menu-list")
const search = document.querySelector(".header__search input")


const genres = ["All", ...new Set(movies.map(movie => movie.genre))]

// console.log(new Set(["Alex", "Alex"]));

/* for (const item of movies) { 
        genres.push(item.genre)
}   */

//arr, container, component
reload(movies, moviesContainer, Movie)
reload(genres, genresContainer, Genre)


search.onkeyup = (e) => {
        const filtered = movies.filter(movie => {
                const title = movie.title.trim().toLowerCase()
                if (title.includes(e.target.value.trim().toLowerCase())) {
                        return movie
                }
        })

        reload(filtered, moviesContainer, Movie)
}
