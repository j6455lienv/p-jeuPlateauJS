class Game {

	constructor(recordFormObj, j1Obj, j2Obj, batteObj, couteauObj, pistoletObj, tronconneuseObj) {

		this.nbRow = recordFormObj.paramTable.nbRow;
		this.nbCol = recordFormObj.paramTable.nbCol;
		this.nom_j1 = recordFormObj.players.j1.nom;
		this.typePerso_j1 = recordFormObj.players.j1.type;
		this.nom_j2 = recordFormObj.players.j2.nom;
		this.typePerso_j2 = recordFormObj.players.j2.type;

		//gestion du DOM
		var getDivElt = document.getElementById('jeu');
		var tableElt = document.createElement('table');
		tableElt.className = 'table table-bordered';
		var tbodyElt = document.createElement('tbody');
		tableElt.appendChild(tbodyElt);
		getDivElt.appendChild(tableElt);

		//ici IHM client
		$('.display').attr('style', 'visibility :visible'); //rendre visible la class associée
		$('.displayBarreJ1 h3').html(j1Obj.name);
		$('.displayBarreJ2 h3').html(j2Obj.name);
		//        $('.horizontal .progress-fill span').each(function () {
		//            var percent = $(this).html();
		//            $(this).parent().css('width', percent);
		//        });


		var tab = []; //creation d'un tableau 'qui ne sert a rien pour le moment'

		for (var i = 0; i < this.nbRow; i++) {

			var trElt = document.createElement('tr');
			tbodyElt.appendChild(trElt);

			var tabRow = []; //creation d'un deuxieme tableau 'row'

			for (var j = 0; j < this.nbCol; j++) {
				var tdElt = document.createElement('td');
				tdElt.id = i + "-" + j;

				//set
				switch (tdElt.id) {
					case batteObj.id:
						Game.setArrayCase(batteObj, tdElt);
						break;
					case couteauObj.id:
						Game.setArrayCase(couteauObj, tdElt);
						break;
					case pistoletObj.id:
						Game.setArrayCase(pistoletObj, tdElt);
						break;
					case tronconneuseObj.id:
						Game.setArrayCase(tronconneuseObj, tdElt);
						break;
					case j1Obj.id:
						Game.setArrayCase(j1Obj, tdElt);
						break;
					case j2Obj.id:
						Game.setArrayCase(j2Obj, tdElt);
						break;
					default:
						tdElt.className = Outils.getRandomClassName(this.nbCol);
				}
				tabRow.push(tdElt.id); //on peuple une ligne jusqu'à la fin de tour de boucle
				trElt.appendChild(tdElt);
			}
			tab.push(tabRow); //chaque ligne cree vient peupler le tableau initial pour avoir un tableau de tableau
		}


		console.log('displayLocation J1 ' + j1Obj.displayLocation);
		console.log('displayLocation J2 ' + j2Obj.displayLocation);
		console.log('****************');
		console.log('****Player 1****');
		console.log('Nom du j1 : ' + j1Obj.name);
		console.log('Type de j1 : ' + j1Obj.type);
		console.log('Id de j1 : ' + j1Obj.id);
		console.log('Img : ' + j1Obj.image);
		console.log('row : ' + Outils.getIntRow(j1Obj.id));
		console.log('col : ' + Outils.getIntCol(j1Obj.id));
		console.log('...');
		console.log('****Player 2****');
		console.log('Nom du j2 : ' + j2Obj.name);
		console.log('Type de j2 : ' + j2Obj.type);
		console.log('Id de j2 : ' + j2Obj.id);
		console.log('Img : ' + j2Obj.image);
		console.log('j2.intRow : ' + Outils.getIntRow(j2Obj.id));
		console.log('j2.intCol : ' + Outils.getIntCol(j2Obj.id));
		console.log('****************');
		console.log('****Arme****');
		console.log("id couteau : " + couteauObj.id);
		console.log("id pistolet : " + pistoletObj.id);
		console.log("id batte : " + batteObj.id);
		console.log("id tronconneuse : " + tronconneuseObj.id);
		console.log('...');
		console.log('couteauObj, row : ' + Outils.getIntRow(couteauObj.id));
		console.log('couteauObj, col : ' + Outils.getIntCol(couteauObj.id));
		console.log('pistoletObj, row : ' + Outils.getIntRow(pistoletObj.id));
		console.log('pistoletObj, col : ' + Outils.getIntCol(pistoletObj.id));
		console.log('batteObj, row : ' + Outils.getIntRow(batteObj.id));
		console.log('batteObj, col : ' + Outils.getIntCol(batteObj.id));
		console.log('tronconneuseObj, row : ' + Outils.getIntRow(tronconneuseObj.id));
		console.log('tronconneuseObj, col : ' + Outils.getIntCol(tronconneuseObj.id));
	}

	static setArrayCase(Obj, tdElt) {
		tdElt.style.backgroundColor = 'none';
		var imgElt = document.createElement('img');
		imgElt.src = Obj.image;
		tdElt.appendChild(imgElt);
	}
}