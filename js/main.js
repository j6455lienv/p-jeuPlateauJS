var $btnReset = $('#btn-reset'); //bouton reset caché quand on est sur le formulaire
$btnReset.hide();

//déclaration des objet globaux pour constructeur Game
var recordFormObj = ''; //objet param

var j1Obj = '';
var j2Obj = '';
var batteObj = '';
var couteauObj = '';
var pistoletObj = '';
var tronconneuseObj = '';
var game = ''; //global game
var compteur = 0; //gere le tour à tour

function init(nom_j1, typePerso_j1, nom_j2, typePerso_j2, levelGame) {

	compteur = 0;
	var insertNbRow = '';
	var insertNbCol = '';

	switch (levelGame.value) {
		case 'Easy':
			insertNbRow = 5, insertNbCol = 5;
			break;
		case 'Medium':
			insertNbRow = 8, insertNbCol = 8;
			break;
		case 'Hard':
			insertNbRow = 10, insertNbCol = 10;
			break;
	}

	//on enregistre les valeurs de formulaire dans un objet
	recordFormObj = {
		"players": {
			"j1": {
				"nom": nom_j1.value,
				"type": typePerso_j1.value
			},
			"j2": {
				"nom": nom_j2.value,
				"type": typePerso_j2.value
			}
		},
		"paramTable": {
			"nbRow": insertNbRow,
			"nbCol": insertNbCol
		}
	};

	if (recordFormObj.players.j1.nom === '' || recordFormObj.players.j2.nom === '') { //test si les nom sont rempli + affichage erreur
		Outils.errorMessage(' Vous devez renseigner un nom pour chacun des joueurs');
	} else {
		allInstanciations();

		document.getElementById('form').innerHTML = ''; //on vide la page
		$btnReset.show();

		game = new Game(recordFormObj, j1Obj, j2Obj, batteObj, couteauObj, pistoletObj, tronconneuseObj); //Initialisation d'un Jeu
	}

	//jQuery selecteur sur chacun des td
	$(document).on("click", ".table td", function () {

		if (compteur % 2 === 0) {
			j1Obj.moveToward($(this), compteur, j2Obj, batteObj, couteauObj, pistoletObj, tronconneuseObj); //se deplacer vers nouvelle id avec id,compteur et le joueru adverse
			compteur = j1Obj.compteur;
		} else {
			j2Obj.moveToward($(this), compteur, j1Obj, batteObj, couteauObj, pistoletObj, tronconneuseObj);
			compteur = j2Obj.compteur;
		}
		//console.log(compteur);
	});
}

/** 
 * Instancier tous les objets du jeu
 */
function allInstanciations() {
	//instanciation joueurs
	do { //controle id
		switch (recordFormObj.players.j1.type) {
			case 'Bourrin':
				j1Obj = new Bourrin(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j1.nom, '.weapon-display-j1');
				break;
			case 'Mage':
				j1Obj = new Mage(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j1.nom, '.weapon-display-j1');
				break;
		}
		switch (recordFormObj.players.j2.type) {
			case 'Bourrin':
				j2Obj = new Bourrin(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j2.nom, '.weapon-display-j2');
				break;
			case 'Mage':
				j2Obj = new Mage(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j2.nom, '.weapon-display-j2');
				break;
		}
	} while (j1Obj.id === j2Obj.id) {
		switch (recordFormObj.players.j1.type) {
			case 'Bourrin':
				j1Obj = new Bourrin(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j1.nom, '.weapon-display-j1');
				break;
			case 'Mage':
				j1Obj = new Mage(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j1.nom, '.weapon-display-j1');
				break;
		}
		switch (recordFormObj.players.j2.type) {
			case 'Bourrin':
				j2Obj = new Bourrin(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j2.nom, '.weapon-display-j2');
				break;
			case 'Mage':
				j2Obj = new Mage(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol), recordFormObj.players.j2.nom, '.weapon-display-j2');
				break;
		}
	}

	//instanciation armes
	do { //controle id
		batteObj = new Batte(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
		couteauObj = new Couteau(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
		pistoletObj = new Pistolet(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
		tronconneuseObj = new Tronconneuse(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
	} while (couteauObj.id === pistoletObj.id ||
		couteauObj.id === batteObj.id ||
		couteauObj.id === tronconneuseObj.id ||
		pistoletObj.id === batteObj.id ||
		pistoletObj.id === tronconneuseObj.id ||
		tronconneuseObj.id === batteObj.id
	) {
		batteObj = new Batte(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
		couteauObj = new Couteau(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
		pistoletObj = new Pistolet(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
		tronconneuseObj = new Tronconneuse(Outils.getRandomId(recordFormObj.paramTable.nbRow, recordFormObj.paramTable.nbCol));
	}
}

function reset() {
	console.clear();
	document.getElementById('jeu').innerHTML = ''; //on vide le jeu
	allInstanciations();
	game = new Game(recordFormObj, j1Obj, j2Obj, batteObj, couteauObj, pistoletObj, tronconneuseObj); //Initialisation d'un Jeu
}