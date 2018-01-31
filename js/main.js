//class record form, désolé c'est la seul maniere que j'ai gratté pour enregistrer mes champs de maniere persistante

/**
 * trouvéééé envoi d'un fichier peupler JSON
 */
class recordForm{
    constructor(nom_j1, typePerso_j1, nom_j2, typePerso_j2){
    this.nom_j1 = nom_j1.value;
    this.typePerso_j1 = typePerso_j1.value;
    this.nom_j2 = nom_j2.value;
    this.typePerso_j2 = typePerso_j2.value;
    }
}
function init(nom_j1, typePerso_j1, nom_j2, typePerso_j2){
    var recordFormObj = new recordForm(nom_j1, typePerso_j1, nom_j2, typePerso_j2)
    return recordFormObj;
}

function initialisation(nom_j1, typePerso_j1, nom_j2, typePerso_j2) {
    document.getElementById('form').innerHTML = '';
    //Initialisation d'un Jeu
    var game = new Game(10, 10, nom_j1.value, typePerso_j1.value, nom_j2.value, typePerso_j2.value);
}

function reset() {
    var divElt = document.getElementById('jeu');
    divElt.innerHTML = '';
    init;
}



