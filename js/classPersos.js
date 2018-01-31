class Persos {
    constructor(id, name) {
        this.id = id;
        this.intRow = parseInt(id.substring(0, 1));
        this.intCol = parseInt(id.substring(2, 3));
        this.name = name;
        this.sante = 160;
    }
}

class Bourrin extends Persos {
    constructor(id, name) {
        super(id, name);
        this.sante = 200;
        this.image = './img/perso4.png';
    }

    attaqueSpecial(){
        console.log('attaque spéciale du bourrin => rien pour le moment');
    }

}

class Mage extends Persos {
    constructor(id, name) {
        super(id, name);
        this.image = './img/perso2.jpg';
    }

    attaqueSpecial(){
        console.log('attaque spéciale du Mage => rien pour le moment');
    }

    attaqueMagique(){
        console.log('attaque Magique du Mage => rien pour le moment');
    }
}