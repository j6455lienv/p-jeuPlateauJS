class Persos {
	constructor(id, name, displayLocation) {
		this.id = id;
		this.name = name;
		this.displayLocation = displayLocation;
		this.image = '';
		this.type = '';
		this.sante = 100;
		this.compteur = 0;
		this.degat = 10;

		//getWeapon
		this.weapon = '';
	}

	getDamage() { //retourne la nouvelle valeur de degat en fonction de l'arme en main
		return this.degat + this.weapon.degat;
	}

	setCashDamage(opponentDamage) { //
		this.sante = this.sante - opponentDamage;
	}

	moveAttack(newId, opponent) {
		if (newId === opponent.id) {
			//console.log(adversaire.sante);
			//console.log(this.weapon.degat);
			//console.log(this.weapon);
			opponent.setCashDamage(this.getDamage());
			console.log(opponent.name + ' le ' + opponent.type + ' a ' + opponent.sante + ' de points de santé.');
		}
	}

	moveToward(tdElt, compteur, opponent, batteObj, couteauObj, pistoletObj, tronconneuseObj) {

		var tdEltOld = document.getElementById(this.id);
		var newId = tdElt.attr('id');
		this.compteur = compteur;

		//utilisé pour la condition
		var rowEvent = Outils.getIntRow(newId);
		var colEvent = Outils.getIntCol(newId);
		var thisRow = Outils.getIntRow(this.id);
		var thisCol = Outils.getIntCol(this.id);

		if (tdElt.attr('class') === 'caseInterdite') {
			Outils.errorMessage(' Tu ne peux pas te déplacer sur cette case');
		} else {
			if (this.id !== newId) {
				if (rowEvent >= (thisRow - 1) && rowEvent <= (thisRow + 1) && colEvent >= (thisCol - 1) && colEvent <= (thisCol + 1)) {
					this.id = newId; //set id vers new Id
					var tdEltNew = document.getElementById(this.id);
					var imgElt = document.createElement('img');
					imgElt.src = this.image;
					tdEltNew.appendChild(imgElt);
					this.compteur++;
					Outils.setDisplayGame('C\'est à ' + opponent.name + ' le ' + opponent.type + ' de jouer'); //message annonçant que c'est à l'adversaire de jouer
					this.setWeaponOnPerso(newId, batteObj, couteauObj, pistoletObj, tronconneuseObj);
					this.moveAttack(newId, opponent);

					tdEltOld.innerHTML = '';

				} else {
					Outils.errorMessage(' déplacement impossible, le ' + this.type + ' ne peut se déplacer que d\'une case');
				}
			} else {
				Outils.errorMessage(' c\'est la même case ');
			}
		}
		return this.compteur;
	}

	setWeaponOnPerso(newId, batteObj, couteauObj, pistoletObj, tronconneuseObj) {
		//controle des id dans la meme case puis recupe de l'arme ou non
		switch (newId) {
			case batteObj.id:
				Outils.setDisplayGame('Vous avez récupéré le/la ' + batteObj.name);
				this.weapon = batteObj;
				break;
			case couteauObj.id:
				Outils.setDisplayGame('Vous avez récupéré le/la ' + couteauObj.name);
				this.weapon = couteauObj;
				break;
			case pistoletObj.id:
				Outils.setDisplayGame('Vous avez récupéré le/la ' + pistoletObj.name);
				this.weapon = pistoletObj;
				break;
			case tronconneuseObj.id:
				Outils.setDisplayGame('Vous avez récupéré le/la ' + tronconneuseObj.name);
				this.weapon = tronconneuseObj;
				break;
		}
		Persos.addImageWeaponInTopDisplay(this.weapon.image, this.displayLocation);
	}

	static addImageWeaponInTopDisplay(weaponImage, displayLocation) {
		if (weaponImage !== undefined) {
			var img = document.createElement('IMG');
			img.src = weaponImage;
			$(displayLocation).html(img);
		}
	}
}

class Bourrin extends Persos {
	constructor(id, name, displayLocation) {
		super(id, name, displayLocation);
		this.type = 'Bourrin';
		this.image = './img/perso4.png';
	}
}

class Mage extends Persos {
	constructor(id, name, displayLocation) {
		super(id, name, displayLocation);
		this.type = 'Mage';
		this.image = './img/perso2.jpg';
	}

	attaquer(advSante) {
		console.log('attaque spéciale du Mage => rien pour le moment');
	}
}