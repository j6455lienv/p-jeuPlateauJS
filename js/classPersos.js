class Persos {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //this.sante = 160;
    }
}

class Bourrin extends Persos {
    constructor(id, name) {
        super(id, name);
        this.type = 'Bourrin';
        this.image = './img/perso4.png';
    }

    attaqueSpecial(){
        console.log('attaque spéciale du bourrin => rien pour le moment');
    }
}

class Mage extends Persos {
    constructor(id, name) {
        super(id, name);
        this.type = 'Mage';
        this.image = './img/perso2.jpg';
    }

    attaqueSpecial(){
        console.log('attaque spéciale du Mage => rien pour le moment');
    }

    attaqueMagique(){
        console.log('attaque Magique du Mage => rien pour le moment');
    }
}