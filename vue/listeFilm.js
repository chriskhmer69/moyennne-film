class Film {
  constructor(titre, realisateur, dureeTotale, dureeVisionnee, description) {
    this.titre = titre;
    this.realisateur = realisateur;
    this.dureeTotale = dureeTotale;
    this.dureeVisionnee = dureeVisionnee;
    this.description = description; 
    // j'ai besoin d'un id
    this._id = titre
                    // je passe en minuscule 
                    .toLowerCase()
                    // je remplace les espaces (/ /gi) par un underscore
                    .replace(/ /gi, "_")
                    // je supprime les apostrophes
                    .replace("'", "_")
                    // je supprime les ":"
                    .replace(":", "")
                    // je remplace les accents
                    .replace("é", "e")
                    .replace("è", "e")
                    .replace("â", "a")
                    .replace("î", "i")

  }

//   Je crée une méthode (fonction dans une classe) pour vérifier si le film a été visionné en entier. J'utilise "get" afin de lancer de ma fonction automatiquement
    get  conditionVisionnage() {
        // Si la durée totale = la durée visionné
        if (this.dureeTotale === this.dureeVisionnee) {
            // alors la condition du visionnage est vraie
            return true;
        }
        else {
            // sinon il retourne faux
            return false;
        }
    }

  // Je calcule le %age de visionnage
  calculPourcentageVisionnage = () => 
    (100 - (this.dureeVisionnee / this.dureeTotale) * 100).toFixed(0);
}

const films = [
  new Film(
    "Le Parrain",
    "Francis Ford Coppola",
    175,
    75,
    "La vie de la famille Corleone",
    "url_image_le_parrain"
  ),
  new Film(
    "Pulp Fiction",
    "Quentin Tarantino",
    154,
    100,
    "Des histoires croisées dans le milieu de la pègre",
    "url_image_pulp_fiction"
  ),
  
  new Film(
    "Fight Club",
    "David Fincher",
    139,
    120,
    "Un homme qui crée un club de combats clandestins",
    "url_image_fight_club"
  ),

  new Film(
    "La Ligne Verte",
    "Frank Darabont",
    189,
    120,
    "La vie de prisonniers condamnés à mort",
    "url_image_la_ligne_verte"
  ),

  new Film(
    "Le Seigneur des Anneaux : La Communauté de l'Anneau",
    "Peter Jackson",
    178,
    60,
    "L'aventure de la communauté de l'Anneau pour sauver la Terre du Milieu",
    "url_image_le_seigneur_des_anneaux"
   
    
  ),
];