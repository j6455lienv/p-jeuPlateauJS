class Game {
    creer(nbCol, nbRow) {

        this.nbCol = nbCol;
        this.nbRow = nbRow;

        //gestion du DOM
        var getDivElt = document.getElementById('jeu');
        var tableElt = document.createElement('table');
        tableElt.className = 'table table-bordered';
        var tbodyElt = document.createElement('tbody');
        tableElt.appendChild(tbodyElt);
        getDivElt.appendChild(tableElt);

        var couteauObj = new Couteau(Outils.getRandomId(nbCol, nbRow));
        var pistoletObj = new Pistolet(Outils.getRandomId(nbCol, nbRow));
        var batteObj = new Batte(Outils.getRandomId(nbCol, nbRow));
        var tronconneuseObj = new Tronconneuse(Outils.getRandomId(nbCol, nbRow));

        console.log("id couteau : " + couteauObj.id);
        console.log("id pistolet : " + pistoletObj.id);
        console.log("id batte : " + batteObj.id);
        console.log("id tronconneuse : " + tronconneuseObj.id);
        //****intialisation id arme OK****//

        console.log('couteauObj => construct Row : ' + couteauObj.intRow + ' et construct Col : ' + couteauObj.intCol);
        console.log('pistoletObj => construct Row : ' + pistoletObj.intRow + ' et construct Col : ' + pistoletObj.intCol);
        console.log('batteObj => construct Row : ' + batteObj.intRow + ' et construct Col : ' + batteObj.intCol);
        console.log('tronconneuseObj => construct Row : ' + tronconneuseObj.intRow + ' et construct Col : ' + tronconneuseObj.intCol);


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
                //tdElt.innerHTML = i + "-" + j;
                tdElt.addEventListener("click", function () {
                    console.log('this.id = ' + this.id + ', this.backgroundColor = ' + this.style.backgroundColor);
                }, false);

                //insertion des armes dans la map
                if (tdElt.id === couteauObj.id) {
                    tdElt.style.backgroundColor = 'none';
                    var imgElt = document.createElement('img');
                    imgElt.src = couteauObj.image;
                    tdElt.appendChild(imgElt);
                } else if (tdElt.id === pistoletObj.id) {
                    tdElt.style.backgroundColor = 'none';
                    var imgElt = document.createElement('img');
                    imgElt.src = pistoletObj.image;
                    tdElt.appendChild(imgElt);
                } else if (tdElt.id === batteObj.id) {
                    tdElt.style.backgroundColor = 'none';
                    var imgElt = document.createElement('img');
                    imgElt.src = batteObj.image;
                    tdElt.appendChild(imgElt);
                } else if (tdElt.id === tronconneuseObj.id) {
                    tdElt.style.backgroundColor = 'none';
                    var imgElt = document.createElement('img');
                    imgElt.src = tronconneuseObj.image;
                    tdElt.appendChild(imgElt);
                } else {
                    tdElt.style.backgroundColor = Outils.getRandomColor(nbCol);
                }

                //on peuple une ligne jusqu'à la fin de tour de boucle
                tabRow.push(tdElt.id);
                trElt.appendChild(tdElt);
            }
            //chaque ligne cree vient peupler le tableau initial pour avoir un tableau de tableau
            tab.push(tabRow);
        }
        console.log(tab);//tableau 2D en console
        //document.write(tab);
    }
}