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
    static getRandomColor(nbCol) {
        var color;
        var booleanRandom = Math.floor(Math.random() * nbCol); //randomisation, est égale à un nombre entre 0 et nbCol passé en parametre lors de l'instanciation map
        //        console.log("Nombre boolean = "+booleanRandom);
        if (booleanRandom === 0 || booleanRandom === 1 /*|| booleanRandom == 2*/ ) //permet d'avoir que 30% de case grisées
        {
            color = 'grey';
        } else {
            color = 'none';
        }
        return color;
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
}