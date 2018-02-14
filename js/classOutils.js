class Outils {

    //Permet de retourner une Id unique au hasard
    static getRandomId(nbRow, nbCol) {
        var varId;
        var randomIdRow = Math.floor(Math.random() * nbRow);
        var randomIdCol = Math.floor(Math.random() * nbCol);
        varId = randomIdRow + "-" + randomIdCol;
        return varId;
    }

    //Retourne couleur 'grey' ou 'none'
    static getRandomClassName(nbCol) {
        var className = '';
        var booleanRandom = Math.floor(Math.random() * nbCol); //randomisation, est égale à un nombre entre 0 et nbCol passé en parametre lors de l'instanciation map
        //        console.log("Nombre boolean = "+booleanRandom);
        if (booleanRandom === 0 || booleanRandom === 1 /*|| booleanRandom == 2*/ ) //permet d'avoir que 30% de case grisées
        {
            className = 'caseInterdite';
        } else {
            className = 'none';
        }
        return className;
    }

    //Retourne la row (Integer) de l'id en param
    static getIntRow(id){
        var result = 0;
        do{
            result = parseInt(id.substring(0, 1));
        }while(Number.isNaN(result)){
            result = parseInt(id.substring(0, 1));
        }
        return result;
    }

    //Retourne la col (Integer) de l'id en param
    static getIntCol(id){
        var result = 0;
        do{
            result = parseInt(id.substring(2, 3));
        }while(Number.isNaN(result)){
            result = parseInt(id.substring(2, 3));
        }
        return result;
    }

    //retourn un message d'erreur dynamic 'alert' puis s'efface
    static errorMessage(stringMess) {
        var formElt = document.getElementById('form');
        var divElt = document.createElement('div');
        var strongElt = document.createElement('strong');
        strongElt.innerHTML = 'Erreur :';
        divElt.className = 'alert alert-danger';
          
        //divElt.style.position = 'absolute';
        divElt.innerHTML = stringMess;
        divElt.insertBefore(strongElt, divElt.firstChild);//appendChild mais en mettant l'element en debut de liste du node parent
        formElt.insertBefore(divElt, formElt.firstChild);

        window.setTimeout(function () {//compte a rebourd suppression alert
            divElt.innerHTML = '';
            divElt.className = '';
        }, 2200);
    }
    
    static setDisplayGame(str) {
        $('.displayText').attr('value', str);
    }
}