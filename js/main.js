function demarrer(nom_j1, typePerso_j1, nom_j2, typePerso_j2) {

    document.getElementById('form').innerHTML = '';

    // console.log('...');
    // console.log('nom_j1 = ' + nom_j1.value);
    // console.log('nom_j2 = ' + nom_j2.value);
    // console.log('typePerso_j1 = ' + typePerso_j1.value);
    // console.log('typePerso_j2 = ' + typePerso_j2.value);
    // console.log('...');

    //Initialisation d'un Jeu
    var game = new Game();
    game.creer(10, 10, nom_j1.value, typePerso_j1.value, nom_j2.value, typePerso_j2.value);

    /**
     * Controle fonctionnement des objets Armes.
     * @type {Armes}
     */
    // var hsCouteau = new Couteau(Outils.getRandomId(game.nbCol, game.nbRow));
    // var hsPistolet = new Pistolet(Outils.getRandomId(game.nbCol, game.nbRow));
    // var hsBatte = new Batte(Outils.getRandomId(game.nbCol, game.nbRow));
    // var hsTronconneuse = new Tronconneuse(Outils.getRandomId(game.nbCol, game.nbRow));
    //
    // console.log('Nom du couteau : ' + hsCouteau.name);
    // console.log('Degat du couteau : ' + hsCouteau.degat);
    // console.log(hsCouteau.infligerDegat());
    // console.log('Resistance du couteau : ' + hsCouteau.resistance);
    // console.log(hsCouteau.armeCassee());
    // console.log('Id du couteau hors scope Game : ' + hsCouteau.id);
    // console.log('Ligne du couteau hors scope Game : ' + hsCouteau.intRow);
    // console.log('Colonne du couteau hors scope Game : ' + hsCouteau.intCol);
    // console.log('...');

    function reset(){
        document.getElementById('jeu').innerHTML = '';
        game.delete();
        demarrer(nom_j1, typePerso_j1, nom_j2, typePerso_j2);
    }
}
