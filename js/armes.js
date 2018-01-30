class Armes {
    constructor(id) {
        this.resistance = 100;
        this.id = id;
        this.axeX = parseInt(id.substring(0,1));
        this.axeY = parseInt(id.substring(2,3));
    }

    // //permet de parser l'id sur l'axe des X pour avoir un Int de 1 charactere
    // coordonneesParseAxeX(id){
    //     var axeXCoordonnee = parseInt(id.substring(0,1));
    //     return axeXCoordonnee;
    // }
    //
    // coordonneesParseAxeY(id){
    //     var axeYCoordonnee = parseInt(id.substring(2,3));
    //     return axeYCoordonnee;
    // }

    infligerDegat() {
        return 'Vous avez infligé ' + this.degat + ' points de dégat avec l\'arme : ' + this.name;
    }
    armeCassee(){
        return 'Vous avez cassé votre arme, résistance de l\'arme : '+this.resistance;   
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
    constructor(id){
        super(id);
        this.name = 'Pistolet';
        this.degat = 25;
        this.image = './img/pis.jpg';
    }
}

class Tronconneuse extends Armes {
    constructor(id){
        super(id);
        this.name = 'Tronconneuse';
        this.degat = 20;
        this.image = './img/tro.png';
    }
}