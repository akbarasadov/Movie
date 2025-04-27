import { movies } from "../js/db.js"
import { reload } from "../js/utils.js"
import { Movie } from "./Movie.js"

function Genre(genre) {
    const link = document.createElement("a")
    link.href = "#"

    

    console.log(link);


    // link.classList.add("promo__menu-item_active")



    link.classList.add("promo__menu-item")
    link.textContent = genre

    link.onclick = (e) => {
        e.preventDefault()

        const allLinks = document.querySelectorAll(".promo__menu-item")
        allLinks.forEach(item => item.classList.remove("promo__menu-item_active"))


        link.classList.add("promo__menu-item_active")

        const moviesContainer = document.querySelector(".promo__interactive-list")

        if (genre === "All") {
            reload(movies, moviesContainer, Movie)
            return;
        }

        const filtered = movies.filter(movie => movie.genre === genre)
        reload(filtered, moviesContainer, Movie)
    }


    return link
}

export { Genre }