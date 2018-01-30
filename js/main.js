function demarrer(nom_j1, typePerso_j1, nom_j2, typePerso_j2) {

    document.getElementById('form').innerHTML = '';

    console.log('nom_j1 = ' + nom_j1.value);
    console.log('nom_j2 = ' + nom_j2.value);
    console.log('typePerso_j1 = ' + typePerso_j1.value);
    console.log('typePerso_j2 = ' + typePerso_j2.value);
    console.log('...');

    //Initialisation d'un Jeu
    var game = new Game();
    game.creer(10, 10);

    //******************nouveau-creation d'instance perso depuis formulaire html***********//
    if (typePerso_j1.value === 'Bourrin') {
        var j1 = new Bourrin(Outils.getRandomId(game.nbCol, game.nbRow), nom_j1.value);
    } else if (typePerso_j1.value === 'Mage') {
        var j1 = new Mage(Outils.getRandomId(game.nbCol, game.nbRow), nom_j1.value);
    } else {
        alert('Le Joueur 1 n\'a pas choisis de type de personnage');
    }

    if (typePerso_j2.value === 'Bourrin') {
        var j2 = new Bourrin(Outils.getRandomId(game.nbCol, game.nbRow), nom_j2.value);
    } else if (typePerso_j2.value === 'Mage') {
        var j2 = new Mage(Outils.getRandomId(game.nbCol, game.nbRow), nom_j2.value);
    } else {
        alert('Le Joueur 2 n\'a pas choisis de type de personnage');
    }
    console.log('-------Controle instance des joueurs-------')
    console.log('Nom du j1 : ' + j1.name);
    console.log('Type de j1 : ' + typePerso_j1.value);
    console.log('Id de j1 : ' + j1.id);
    console.log('...');
    //*************************************************************************************//

    /**
     * Controle fonctionnement des objets Armes.
     * @type {Armes}
     */
    var hsCouteau = new Couteau(Outils.getRandomId(game.nbCol, game.nbRow));
    var hsPistolet = new Pistolet(Outils.getRandomId(game.nbCol, game.nbRow));
    var hsBatte = new Batte(Outils.getRandomId(game.nbCol, game.nbRow));
    var hsTronconneuse = new Tronconneuse(Outils.getRandomId(game.nbCol, game.nbRow));

    console.log('Nom du couteau : ' + hsCouteau.name);
    console.log('Degat du couteau : ' + hsCouteau.degat);
    console.log(hsCouteau.infligerDegat());
    console.log('Resistance du couteau : ' + hsCouteau.resistance);
    console.log(hsCouteau.armeCassee());
    console.log('Id du couteau hors scope Game : ' + hsCouteau.id);
    console.log('Ligne du couteau hors scope Game : ' + hsCouteau.intRow);
    console.log('Colonne du couteau hors scope Game : ' + hsCouteau.intCol);
    console.log('...');

}