//record des enregistrement venant du formulaire
function init(nom_j1, typePerso_j1, nom_j2, typePerso_j2){
    var nom_j1 = nom_j1.value;
    var typePerso_j1 = typePerso_j1.value;
    var nom_j2 = nom_j2.value;
    var typePerso_j2 = typePerso_j2.value;
    demarrer(nom_j1, typePerso_j1, nom_j2, typePerso_j2);
}
    
function demarrer(nom_j1, typePerso_j1, nom_j2, typePerso_j2) {

    document.getElementById('form').innerHTML = '';

    //Initialisation d'un Jeu
    var game = new Game();
    game.creer(10, 10, nom_j1, typePerso_j1, nom_j2, typePerso_j2);
}

function reset() {
    //comment faire ??
}


//
//var tdEvent = document.getElementsByTagName('td');
//tdEvent.addEventListener("click", function ()   {
//    return this.id;
//}, false);

