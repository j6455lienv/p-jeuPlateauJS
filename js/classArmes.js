class Armes {
    constructor(id) {
        this.resistance = 100;
        this.id = id;
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

    infligerDegat() {
        return 'Vous avez infligé ' + this.degat + ' points de dégat avec l\'arme : ' + this.name;
    }

    armeCassee() {
        return 'Vous avez cassé votre arme, résistance de l\'arme : ' + this.resistance;
    }
}

class Batte extends Armes {
    constructor(id) {
        super(id);
        this.name = 'Batte';
        this.degat = 15;
        this.image = './img/bat.png';
    }
}

class Couteau extends Armes {
    constructor(id) {
        super(id);
        this.name = 'Couteau';
        this.degat = 10;
        this.image = './img/cou.jpg';
    }
}

class Pistolet extends Armes {
    constructor(id) {
        super(id);
        this.name = 'Pistolet';
        this.degat = 25;
        this.image = './img/pis.jpg';
    }
}

class Tronconneuse extends Armes {
    constructor(id) {
        super(id);
        this.name = 'Tronconneuse';
        this.degat = 20;
        this.image = './img/tro.png';
    }
}