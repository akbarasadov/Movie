function Movie(data) {
    //1
    const li = document.createElement("li")
    const deleteBtn = document.createElement("div")

    //2
    li.classList.add("promo__interactive-item")
    deleteBtn.classList.add("delete")

    li.textContent = data.title

    //3
    li.append(deleteBtn)

    li.onclick = () => {
        let bg = document.querySelector(".promo__bg")
        let promo__genre = document.querySelector(".promo__genre")
        let promo__title = document.querySelector(".promo__title")
        let promo__descr = document.querySelector(".promo__descr")
        let [imdb, kinopoisk] = document.querySelectorAll(".promo__ratings span")


        bg.style.backgroundImage = `url(${data.poster})`
        promo__genre.textContent = data.genre
        promo__title.textContent = data.title
        promo__descr.textContent = data.description

        imdb.textContent = `IMDb: ${data.imdbRating}`
        kinopoisk.textContent = `Кинопоиск: ${data.kinopoiskRating}`

    }


    return li
}

export { Movie }