class Persos {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.sante = 160;
    }
}

class Bourrin extends Persos {
    constructor(id, name) {
        super(id, name);
        this.sante = 200;
        this.image = "./img/perso4.png";
    }

    attaqueSpecial() {
        document.write('attaque spéciale du bourrin => rien pour le moment');
    }

}

class Mage extends Persos {
    constructor(id, name) {
        super(id, name);
        this.image = "./img/perso2.jpg";
    }

    attaqueSpecial() {
        document.write('attaque spéciale du Mage => rien pour le moment');
    }

    attaqueMagique() {
        document.write('attaque Magique du Mage => rien pour le moment');
    }
}