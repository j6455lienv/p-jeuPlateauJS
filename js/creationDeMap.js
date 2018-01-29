$(function () { //attendre que la page soit totalement chargée

    var cou = new Couteau();
    var pis = new Pistolet();
    var bat = new Batte();
    var tro = new Tronconneuse();

    //Retourne couleur 'grey' ou 'none'
    function getRandomColor(nbCol) {
        var color;
        var booleanRandom = Math.floor(Math.random() * nbCol); //randomisation, est égale à un nombre entre 0 et nbCol passé en parametre lors de l'instanciation map
        //        console.log("Nombre boolean = "+booleanRandom);
        if (booleanRandom == 0 || booleanRandom == 1 /*|| booleanRandom == 2*/) //permet d'avoir que 30% de case grisées
        {
            color = 'grey';
        } else {
            color = 'none';
        }
        return color;
    }

    //Permet de retourner une Id unique au hasard
    function getRandomIdMap(nbCol, nbRow) {
        var varId;
        var randomIdndCol = Math.floor(Math.random() * nbCol);
        var randomIdnbRow = Math.floor(Math.random() * nbRow);;
        varId = randomIdndCol + "-" + randomIdnbRow;
        return varId;
    }
    //test de la fonction getRandomIdMap(nbCol, nbRow)
    //    console.log(getRandomIdMap(10,10));

    //creation de la Map
    function creerMap(nbCol, nbRow) {

        //****initialisation des ID de chacunes de armes****//
        cou.setId(getRandomIdMap(nbCol, nbRow));
        pis.setId(getRandomIdMap(nbCol, nbRow));
        bat.setId(getRandomIdMap(nbCol, nbRow));
        tro.setId(getRandomIdMap(nbCol, nbRow));
        //verification si les objets sont bien settés.
        console.log("id couteau : " + cou.id);
        console.log("id pistolet : " + pis.id);
        console.log("id batte : " + bat.id);
        console.log("id tronconneuse : " + tro.id);
        //****intialisation id arme OK****//

        //creation d'un tableau
        var tab = [];
        
        for (var i = 0; i < nbRow; i++) {

            var trElt = document.createElement('tr');
            tbodyElt.appendChild(trElt);
            
            //creation d'un deuxieme tableau 'row'
            var tabRow = [];
            
            for (var j = 0; j < nbCol; j++) {
                var tdElt = document.createElement('td');
                tdElt.id = i + "-" + j;
//                tdElt.innerHTML = i + "-" + j;
//                console.log('row : '+i+' col : '+j+' => '+parseInt(tdElt.id));
                
//                var strToIntNb1 = parseInt(tdElt.id.substring(0,1));
//                var strToIntNb2 = parseInt(tdElt.id.substring(2,3));
//                console.log('nb1 de row : '+i+' col : '+j+' => '+strToIntNb1);
//                console.log('nb2 de row : '+i+' col : '+j+' => '+strToIntNb2);
                
                //insertion des armes dans la map
                if (tdElt.id == cou.id) {
                    tdElt.style.backgroundColor = 'none';
                    var imgElt = document.createElement('img');
                    imgElt.src = cou.image;
                    tdElt.appendChild(imgElt);
                } else if (tdElt.id == pis.id) {
                    tdElt.style.backgroundColor = 'none';
                    var imgElt = document.createElement('img');
                    imgElt.src = pis.image;
                    tdElt.appendChild(imgElt);
                } else if (tdElt.id == bat.id) {
                    tdElt.style.backgroundColor = 'none';
                    var imgElt = document.createElement('img');
                    imgElt.src = bat.image;
                    tdElt.appendChild(imgElt);
                } else if (tdElt.id == tro.id) {
                    tdElt.style.backgroundColor = 'none';
                    var imgElt = document.createElement('img');
                    imgElt.src = tro.image;
                    tdElt.appendChild(imgElt);
                }
                //                else if (tdElt.id == '9-9'){
                //                    var imgElt = document.createElement('img');
                //                    imgElt.src = tro.image;
                //                    tdElt.appendChild(imgElt);
                //                }
                else {
                    tdElt.style.backgroundColor = getRandomColor(nbCol);
                }
                
                //on peuple une ligne jusqu'à la fin de tour de boucle
                tabRow.push(tdElt.id);
                trElt.appendChild(tdElt);
                
            }
            //chaque ligne cree vient peupler le tableau initial pour avoir un tableau de tableau
            tab.push(tabRow);
        }
        console.log(tab);//tableau 2D en console
        //console.write(tab);

    }

    //gestion du DOM
    var getDivElt = document.getElementById('jeu');
    var tableElt = document.createElement('table');
    tableElt.className = 'table table-bordered';
    var tbodyElt = document.createElement('tbody');
    tableElt.appendChild(tbodyElt);
    getDivElt.appendChild(tableElt);

    //Instanciation d'une nouvelle map 
    creerMap(10, 10);
});