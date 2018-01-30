class Outils{

    // //Create a set of Weapons
    // static setOfWeapons(){
    //     var couteauObj = new Couteau();
    //     var pistoletObj = new Pistolet();
    //     var batteObj = new Batte();
    //     var tronconneuseObj = new Tronconneuse();
    //     return couteauObj, pistoletObj, batteObj, tronconneuseObj;
    // }

    //Permet de retourner une Id unique au hasard
    static getRandomId(nbCol, nbRow) {
        var varId;
        var randomIdCol = Math.floor(Math.random() * nbCol);
        var randomIdRow = Math.floor(Math.random() * nbRow);
        varId = randomIdRow + "-" + randomIdCol;
        return varId;
    }
    //test de la fonction getRandomIdMap(nbCol, nbRow)
    //    console.log(getRandomIdMap(10,10));

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