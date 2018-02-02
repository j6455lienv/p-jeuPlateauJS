class Persos {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.image = '';
        this.type = '';
        //this.sante = 160;
    }

    seDeplacerVers(newId){

        var tdEltOld = document.getElementById(this.id);
        //$('#this.id').html('');

        //utilisé pour la condition
        var rowEvent = Outils.getIntRow(newId);
        var colEvent = Outils.getIntCol(newId);
        var thisRow = Outils.getIntRow(this.id);
        var thisCol = Outils.getIntCol(this.id);

        if(this.id !== newId) {
            if (((rowEvent >= (thisRow - 2) && rowEvent <= (thisRow + 2)) && (colEvent >= (thisCol - 2) && colEvent <= (thisCol + 2)))/*||
                ((rowEvent >= (thisRow - 1) && rowEvent <= (thisRow + 1)) && (colEvent >= (thisCol - 1) && colEvent <= (thisCol + 1)))*/) {

                this.id = newId;//set id vers new Id
                var tdEltNew = document.getElementById(this.id);

                var imgElt = document.createElement('img');
                imgElt.src = this.image;
                tdEltNew.appendChild(imgElt);

                //$('#newId').add('img').attr('src', this.image);
                //console.log('nouvelle id de '+this.id);
                tdEltOld.innerHTML = '';
            }else {
                Outils.errorMessage(' déplacement impossible, le '+ this.type + ' ne peut se déplacer que 2 case par 2');
            }
        }else{
            Outils.errorMessage(' c\'est la même case ');
        }

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