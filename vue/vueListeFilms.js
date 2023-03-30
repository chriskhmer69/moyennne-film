// J'ai besoin de créer une liste qui va afficher un template (vue HTML) et de le faire passer dans une boucle qui passera dans le tableau contenant notre liste de films

// je récupère l'élément qui va accueillir le template
const listeFilms = document.getElementById("listeFilms");

// Je crée une fonction qui avec une boucle for afin de récupérer mes films
const creationFilms = () => {
  for (let film of films) {
    // est-que le film est déjà vu ?
    if (film.conditionVisionnage) {
      // Si oui, alors je passe un check vert de fontawesome
      estDejaVu = "<i class='fa-solid fa-check vert'></i>";
      calculPourcentageVisionnageAffichage = ""
    } else {
      // sinon, un cercle rouge
      estDejaVu = "<i class='fa-solid fa-ban rouge'></i>";
      calculPourcentageVisionnageAffichage =
        "durée restante : " + film.calculPourcentageVisionnage() + "%";
    }
    console.log(film._id);
    // Ici, je vais créer des éléments dans le DOM et les rajouter
    // ma 1ère div.col
    const divCol = document.createElement("div");
    divCol.classList.add("col");
    listeFilms.appendChild(divCol);
    // div.card.shadow-sm
    const divCard = document.createElement("div");
    divCard.classList.add("card", "shadow-sm");
    divCol.appendChild(divCard);
    // div.card-body
    const divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    divCard.appendChild(divCardBody);
    // div.d-flex
    const divFlex = document.createElement("div");
    divFlex.classList.add("d-flex");
    divCardBody.appendChild(divFlex);
    // h3
    const h3Card = document.createElement("h3");
    h3Card.textContent = film.titre;
    divFlex.appendChild(h3Card);
    // div i
    const divCheckVisionnage = document.createElement("div");
    divCheckVisionnage.classList.add("validationLecture");
    divCheckVisionnage.innerHTML = estDejaVu;
    divFlex.appendChild(divCheckVisionnage);
    // span
    const spanRealisateur = document.createElement("span");
    spanRealisateur.innerHTML = `de <b>${film.realisateur}<b>`;
    spanRealisateur.classList.add("text-muted");
    divCardBody.appendChild(spanRealisateur);
    // p.card-text.text-ellipsis--3 (texte tronqué à 3 lignes)
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.classList.add("card-text", "text-ellipsis--3");
    descriptionParagraph.innerHTML = `Desc : "${film.description}"`;
    divCardBody.appendChild(descriptionParagraph);
    // div.d-flex.justif-content-between.align-items-center
    const divAlignSettings = document.createElement("div");
    divAlignSettings.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    divCardBody.appendChild(divAlignSettings);
    // small.text-muted
    smallDuration = document.createElement("small");
    smallDuration.classList.add("text-muted");
    // Ici, j'appelle la foncigton conversionMinutesHeures contenue dans utils
    smallDuration.innerHTML = `${conversionMinutesHeures(
      film.dureeTotale
    )} <br> ${calculPourcentageVisionnageAffichage}`;
    divAlignSettings.appendChild(smallDuration);
    // div.btn-group
    divButtonGroup = document.createElement("div");
    divButtonGroup.classList.add("btn-group");
    divAlignSettings.appendChild(divButtonGroup);
    // a - _id
    const aLienFiche = document.createElement("a");
    // je crée une base url
    const baseURL = window.location.origin;
    aLienFiche.href = `${baseURL}/films/fiche-detail.html?id=${film._id}`;
    divButtonGroup.appendChild(aLienFiche);
    // button.btn.btn-sm.btn-outline.success
    buttonMoreInformation = document.createElement("button");
    buttonMoreInformation.classList.add("btn", "btn-sm", "btn-outline-success");
    buttonMoreInformation.setAttribute("type", "button");
    buttonMoreInformation.textContent = "voir la fiche du film";
    aLienFiche.appendChild(buttonMoreInformation);
  }
};
