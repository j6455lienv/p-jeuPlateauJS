$(function () {

    //Initialisation d'un Jeu
    var game = new Game();
    game.creer(10, 10);

    var perso1 = new Persos(Outils.getRandomId(game.nbCol, game.nbRow), 'Julien');
    console.log('Nom du perso : ' + perso1.name);
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

});