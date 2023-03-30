const monFilm = new URLSearchParams(window.location.search).get("id");
// console.log(window.location.search)
// console.log(monFilm)

// Je crée une fonction qui va comparer l'id de l'URL avec l'id de mon film
const rechercheId = (film) => {
    // je renvoie l'id de mon film
    return film._id == monFilm;
}

// J'effectue une recherche en passant par l'id unique afin de renvoyer l'objet film que je souhaite afficher
let ficheFilm = Film.find(rechercheId);
console.log(ficheFilm);