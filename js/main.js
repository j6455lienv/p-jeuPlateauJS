var btnReset = document.getElementById('btn-reset');//bouton reset caché quand on est sur le formulaire
btnReset.type = 'hidden';

//déclaration des objet globaux pour constructeur Game
var recordFormObj = '';//objet param
var thatNom_j1 = '';
var thatNom_j2 = '';
var thatTypePerso_j1 = '';
var thatTypePerso_j2 = '';

var j1Obj = '';
var j2Obj = '';
var batteObj = '';
var couteauObj = '';
var pistoletObj = '';
var tronconneuseObj = '';
var game = '';//global game

function init(nom_j1, typePerso_j1, nom_j2, typePerso_j2, levelGame) {//record des form data

    thatNom_j1 = nom_j1;
    thatNom_j2 = nom_j2;
    thatTypePerso_j1 = typePerso_j1;
    thatTypePerso_j2 = typePerso_j2;

    var insertNbRow = '';
    var insertNbCol = '';

    switch (levelGame.value) {
        case 'Easy':
            insertNbRow = 4, insertNbCol = 4;
            break;
        case 'Medium':
            insertNbRow = 7, insertNbCol = 7;
            break;
        case 'Hard':
            insertNbRow = 10, insertNbCol = 10;
            break;
    }
    //on enregistre les valeurs de formulaire dans un objet
    recordFormObj = {
        "players":{
                "j1":{"nom": nom_j1.value, "type": typePerso_j1.value},
                "j2":{"nom": nom_j2.value,"type": typePerso_j2.value}
            },
        "paramTable":{"nbRow": insertNbRow,"nbCol": insertNbCol}
    };
//console.log(recordFormObj);
    if (recordFormObj.players.j1.nom === '' || recordFormObj.players.j2.nom === '') {//test si les nom sont rempli + affichage erreur
        var formElt = document.getElementById('form');
        var divElt = document.createElement('div');
        var strongElt = document.createElement('strong');
        strongElt.innerHTML = 'Erreur :';
        divElt.className = 'alert alert-danger';
        divElt.innerHTML = ' Vous devez renseigner un nom pour chacun des joueurs';

        divElt.insertBefore(strongElt, divElt.firstChild);//appendChild mais en mettant l'element en debut de liste du node parent
        formElt.insertBefore(divElt, formElt.firstChild);
        window.setTimeout(function () {//compte a rebourd suppression alert
            divElt.innerHTML = '';
            divElt.className = '';
        }, 2200);
    } else {
        allInstanciations();

        document.getElementById('form').innerHTML = '';//on vide la page
        btnReset.type = 'button';

        game = new Game(recordFormObj, j1Obj, j2Obj, batteObj, couteauObj, pistoletObj, tronconneuseObj);//Initialisation d'un Jeu
    }
}

function allInstanciations(){//permet d'instancier tous les objets du jeu
    //instanciation joueurs
    do {
        switch (recordFormObj.players.j1.type) {
            case 'Bourrin':j1Obj = new Bourrin(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j1.nom);break;
            case 'Mage':j1Obj = new Mage(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j1.nom);break;
        }
        switch (recordFormObj.players.j2.type) {
            case 'Bourrin':j2Obj = new Bourrin(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j2.nom);break;
            case 'Mage':j2Obj = new Mage(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j2.nom);break;
        }
    } while (j1Obj.id === j2Obj.id)
    {
        switch (recordFormObj.players.j1.type) {
            case 'Bourrin':j1Obj = new Bourrin(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j1.nom);break;
            case 'Mage':j1Obj = new Mage(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j1.nom);break;
        }
        switch (recordFormObj.players.j2.type) {
            case 'Bourrin':j2Obj = new Bourrin(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j2.nom);break;
            case 'Mage':j2Obj = new Mage(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j2.nom);break;
        }
    }

    //instanciation armes
    do {
        batteObj = new Batte(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
        couteauObj = new Couteau(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
        pistoletObj = new Pistolet(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
        tronconneuseObj = new Tronconneuse(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
    } while (couteauObj.id === pistoletObj.id
        || couteauObj.id === batteObj.id
        || couteauObj.id === tronconneuseObj.id
        || pistoletObj.id === batteObj.id
        || pistoletObj.id === tronconneuseObj.id
        || tronconneuseObj.id === batteObj.id
        )
    {
        batteObj = new Batte(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
        couteauObj = new Couteau(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
        pistoletObj = new Pistolet(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
        tronconneuseObj = new Tronconneuse(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
    }
}

function reset() {
    console.clear();
    document.getElementById('jeu').innerHTML = '';//on vide le jeu

    allInstanciations();

    game = new Game(recordFormObj, j1Obj, j2Obj, batteObj, couteauObj, pistoletObj, tronconneuseObj);//Initialisation d'un Jeu
}