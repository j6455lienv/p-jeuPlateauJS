class Armes {
    constructor() {
        this.resistance = 100;
        this.id = '';
    }

    infligerDegat() {
        return 'Vous avez infligé ' + this.degat + ' points de dégat avec l\'arme : ' + this.name;
    }
    
    setId(id){
        this.id = id;
    }
}

class Batte extends Armes {
    constructor() {
        super();
        this.name = 'Batte';
        this.degat = 15;
        this.image = './img/bat.png';
    }
}

class Couteau extends Armes {
    constructor() {
        super();
        this.name = 'Couteau';
        this.degat = 10;
        this.image = './img/cou.jpg';
    }
}

class Pistolet extends Armes {
    constructor(){
        super();
        this.name = 'Pistolet';
        this.degat = 25;
        this.image = './img/pis.jpg';
    }
}

class Tronconneuse extends Armes {
    constructor(){
        super();
        this.name = 'Tronconneuse';
        this.degat = 20;
        this.image = './img/tro.png';
    }
}