// Je crée une fonction réutilisable afin de convertir les minutes en heures
const conversionMinutesHeures = (totalMinutes) => {
    // on utilise l'opérateur modulo % afin de récupérer les minutes restantes
    const minutes = totalMinutes % 60;
    // on récupère le nombre d'heures pleines en arrondissant au nombre entier inférieur
    const heures = Math.floor(totalMinutes / 60);
    // J'appelle ma fonction de formatage
    return `${heures}h${string2Digits(minutes)}`;
}

// Cette fonction sert à ajouter un 0 si jamais le nombre retourné est inférieur à 10
const string2Digits = (number) => {
    return number.toString().padStart(2, '0');
}