var recordFormObj = '';
var btnReset = document.getElementById('btn-reset');
btnReset.type = 'hidden';


function init(nom_j1, typePerso_j1, nom_j2, typePerso_j2) {
    //on enregistre les valeur de maniere persistante dans un objet
    recordFormObj = {
        "j1": {
            "nom": nom_j1.value,
            "type": typePerso_j1.value
        },
        "j2": {
            "nom": nom_j2.value,
            "type": typePerso_j2.value
        }
    };

    document.getElementById('form').innerHTML = '';//on vide la page
    btnReset.type = 'button';
    
    var game = new Game(10, 10, nom_j1.value, typePerso_j1.value, nom_j2.value, typePerso_j2.value);//Initialisation d'un Jeu
}

function reset() {
    //var loadRecordFormObj = recordFormObj;
    console.clear();
    document.getElementById('jeu').innerHTML = '';//on vide le jeu
    var game = new Game(10, 10, recordFormObj.j1.nom, recordFormObj.typePerso_j1, recordFormObj.j2.nom, recordFormObj.j2.type);//Initialisation d'un Jeu
}




