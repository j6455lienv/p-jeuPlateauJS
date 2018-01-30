class Outils{

    //Permet de retourner une Id unique au hasard
    static getRandomId(nbCol, nbRow) {
        var varId;
        var randomIdCol = Math.floor(Math.random() * nbCol);
        var randomIdRow = Math.floor(Math.random() * nbRow);
        varId = randomIdRow + "-" + randomIdCol;
        return varId;
    }

    //Retourne couleur 'grey' ou 'none'
    static getRandomColor(nbCol) {
        var color;
        var booleanRandom = Math.floor(Math.random() * nbCol); //randomisation, est égale à un nombre entre 0 et nbCol passé en parametre lors de l'instanciation map
        //        console.log("Nombre boolean = "+booleanRandom);
        if (booleanRandom === 0 || booleanRandom === 1 /*|| booleanRandom == 2*/) //permet d'avoir que 30% de case grisées
        {
            color = 'grey';
        } else {
            color = 'none';
        }
        return color;
    }


}