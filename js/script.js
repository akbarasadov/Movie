/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


const movies = [
    {
        "title": "Inception",
        "director": "Christopher Nolan",
        "year": 2010,
        "genre": "Sci-Fi",
        "poster": "https://upload.wikimedia.org/wikipedia/ru/b/bc/Poster_Inception_film_2010.jpg",
        "description": "Mind-bending thriller about dream manipulation and subconscious exploration.",
        "rating": 8.8
    },
    {
        "title": "The Matrix",
        "director": "The Wachowskis",
        "year": 1999,
        "genre": "Sci-Fi",
        "poster": "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
        "description": "A hacker discovers reality is an artificial simulation controlled by machines.",
        "rating": 8.7
    },
    {
        "title": "The Dark Knight",
        "director": "Christopher Nolan",
        "year": 2008,
        "genre": "Action",
        "poster": "https://static.okko.tv/images/v4/87bd8154-1f83-4c22-adcb-74ab0eafa07a?scale=1&quality=80",
        "description": "Batman faces chaos as the Joker pushes Gotham to its limits.",
        "rating": 9.0
    },
    {
        "title": "Interstellar",
        "director": "Christopher Nolan",
        "year": 2014,
        "genre": "Sci-Fi",
        "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/78c36c0f-aefd-4102-bc3b-bac0dd4314d8/1920x",
        "description": "Astronauts travel through a wormhole to save humanity from extinction.",
        "rating": 8.6
    },
    {
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "year": 1994,
        "genre": "Drama",
        "poster": "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
        "description": "A man escapes prison through resilience, friendship, and clever planning.",
        "rating": 9.3
    },
    {
        "title": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "year": 1994,
        "genre": "Crime",
        "poster": "https://m.media-amazon.com/images/I/615YKIBRACL._SX300_SY300_QL70_FMwebp_.jpg",
        "description": "Non-linear storytelling intertwines multiple criminal stories in Los Angeles.",
        "rating": 8.9
    },
    {
        "title": "Forrest Gump",
        "director": "Robert Zemeckis",
        "year": 1994,
        "genre": "Drama",
        "poster": "https://m.media-amazon.com/images/S/pv-target-images/f9ddd832d1b566f5b8dd29a4dbc76b7531c420c8c8d9fdfe94eca128bda8e2b1.jpg",
        "description": "A simple man’s journey impacts key moments in American history.",
        "rating": 8.8
    },
    {
        "title": "The Godfather",
        "director": "Francis Ford Coppola",
        "year": 1972,
        "genre": "Crime",
        "poster": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6326_p_v13_be.jpg",
        "description": "A mafia family's saga of power, loyalty, and betrayal.",
        "rating": 9.2
    },
    {
        "title": "Gladiator",
        "director": "Ridley Scott",
        "year": 2000,
        "genre": "Action",
        "poster": "https://m.media-amazon.com/images/I/71Emol9GByL.jpg",
        "description": "A betrayed general seeks revenge in ancient Rome’s gladiatorial arenas.",
        "rating": 8.5
    },
    {
        "title": "The Lion King",
        "director": "Roger Allers, Rob Minkoff",
        "year": 1994,
        "genre": "Animation",
        "poster": "https://m.media-amazon.com/images/I/71tvsmgNjeL._AC_UF1000,1000_QL80_.jpg",
        "description": "A young lion overcomes fear to embrace his destiny as king.",
        "rating": 8.5
    }
];




let moviesContainer = document.querySelector(".promo__interactive-list");
let genresContainer = document.querySelector(".promo__menu-list");

function Movie(data) {
    let li = document.createElement("li");
    let deleteBtn = document.createElement("div");

    li.classList.add("promo__interactive-item");
    deleteBtn.classList.add("delete");

    li.textContent = data.title;

    li.append(deleteBtn);

    li.onclick = () => {
        let promo__title = document.querySelector(".promo__title")  
        let promo__descr = document.querySelector(".promo__descr")
        let promo__bg = document.querySelector(".promo__bg")
        let rayting = document.querySelector(".rating")
        let year = document.querySelector(".year")

        promo__title.textContent = data.title
        promo__descr.textContent = data.description
        rayting.textContent = "Кинопоиск: " + data.rating
        year.textContent = "Year: " + data.year
        promo__bg.style.background = `url('${data.poster}') center center/cover no-repeat`;
    }
    return li;
}

function Genre(data) {
    let a = document.createElement("a");
    a.classList.add("promo__menu-item");
    a.textContent = data.genre; 

    a.onclick = () => {
        let promo__genre = document.querySelector(".promo__genre")
        promo__genre.textContent = data.genre
    }

    return a
}



genresContainer.innerHTML = "";

for (const genre of movies) {
    genresContainer.append(Genre(genre));
}

moviesContainer.innerHTML = "";

for (const movie of movies) {
    moviesContainer.append(Movie(movie));
}