class Persos {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //this.sante = 160;
    }
    getIntRow(){//retourne un Integer corespondant à la ligne de l'id 'axe y'
        var result = 0;
        do{
            result = parseInt(this.id.substring(0, 1));
        }while(Number.isNaN(result)){
            result = parseInt(this.id.substring(0, 1));
        }
        return result;
    }

    getIntCol(){//retourne un Integer corespondant à la colonne de l'id 'axe x'
        var result = 0;
        do{
            result = parseInt(this.id.substring(2, 3));
        }while(Number.isNaN(result)){
            result = parseInt(this.id.substring(2, 3));
        }
        return result;
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