//table parameters
var insertNbRow = '';
var insertNbCol = '';
var recordFormObj = '';

var btnReset = document.getElementById('btn-reset');
btnReset.type = 'hidden';

function init(nom_j1, typePerso_j1, nom_j2, typePerso_j2, levelGame) {//record des form data
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

    if (nom_j1.value === '' || nom_j2.value === '') {//test si les nom sont rempli + affichage erreur
        var formElt = document.getElementById('form');
        var divElt = document.createElement('div');
        var strongElt = document.createElement('strong');
        strongElt.innerHTML = 'Erreur :';
        divElt.className = 'alert alert-danger';
        divElt.innerHTML = ' Vous devez renseigner un nom pour chacun des joueurs';

        divElt.insertBefore(strongElt, divElt.firstChild);//appendChild mais en mettant l'element en debut de liste du node parent
        formElt.insertBefore(divElt, formElt.firstChild);
        window.setTimeout(function () {
            divElt.innerHTML = '';
            divElt.className = '';
        }, 2200);
    } else {
        recordFormObj = {
            "j1": {"nom": nom_j1.value, "type": typePerso_j1.value},
            "j2": {"nom": nom_j2.value, "type": typePerso_j2.value},
        };

        document.getElementById('form').innerHTML = '';//on vide la page
        btnReset.type = 'button';

        var game = new Game(insertNbRow, insertNbCol, nom_j1.value, typePerso_j1.value, nom_j2.value, typePerso_j2.value);//Initialisation d'un Jeu
    }
}

function reset() {
    //var loadRecordFormObj = recordFormObj;
    console.clear();
    document.getElementById('jeu').innerHTML = '';//on vide le jeu
    var game = new Game(insertNbRow, insertNbCol, recordFormObj.j1.nom, recordFormObj.j1.type, recordFormObj.j2.nom, recordFormObj.j2.type);//Initialisation d'un Jeu
}




