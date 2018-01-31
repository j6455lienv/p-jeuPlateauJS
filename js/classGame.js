class Game {
    creer(nbCol, nbRow, nom_j1, typePerso_j1, nom_j2, typePerso_j2) {

        this.nbCol = nbCol;
        this.nbRow = nbRow;

        //gestion du DOM
        var getDivElt = document.getElementById('jeu');
        var tableElt = document.createElement('table');
        tableElt.className = 'table table-bordered';
        var tbodyElt = document.createElement('tbody');
        tableElt.appendChild(tbodyElt);
        getDivElt.appendChild(tableElt);
        //implementation buut reset

        // var divButtElt = document.createElement('div');
        // divButtElt.className = 'form-group row';
        // var buttElt = document.createElement('input');
        // buttElt.type = 'submit';
        // buttElt.className = 'btn btn-primary';
        // buttElt.value = 'Reset';
        // buttElt.onclick = 'reset';
        //
        // divButtElt.appendChild(buttElt);
        // getDivElt.appendChild(divButtElt);



    //         <input type="submit" class="btn btn-primary" value="test"
    //     onclick="demarrer(nom_j1, typePerso_j1, nom_j2, typePerso_j2)"/>


        //instanciation joueurs
        //******************nouveau-creation d'instance perso depuis formulaire html***********//
        if (typePerso_j1 === 'Bourrin') {
            var j1 = new Bourrin(Outils.getRandomId(this.nbCol, this.nbRow), nom_j1);
        } else if (typePerso_j1 === 'Mage') {
            var j1 = new Mage(Outils.getRandomId(this.nbCol, this.nbRow), nom_j1);
        } else {
            alert('Le Joueur 1 n\'a pas choisis de type de personnage');
        }

        if (typePerso_j2 === 'Bourrin') {
            var j2 = new Bourrin(Outils.getRandomId(this.nbCol, this.nbRow), nom_j2);
        } else if (typePerso_j2 === 'Mage') {
            var j2 = new Mage(Outils.getRandomId(this.nbCol, this.nbRow), nom_j2);
        } else {
            alert('Le Joueur 2 n\'a pas choisis de type de personnage');
        }

        console.log('-------Controle instance des joueurs1-------');
        console.log('Nom du j1 : ' + j1.name);
        console.log('Type de j1 : ' + typePerso_j1.value);
        console.log('Id de j1 : ' + j1.id);
        console.log('...');

        console.log('-------Controle instance des joueurs2-------');
        console.log('Nom du j2 : ' + j2.name);
        console.log('Type de j2 : ' + typePerso_j2.value);
        console.log('Id de j2 : ' + j2.id);
        console.log('...');
        //*************************************************************************************//

        //instanciation armes
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
                } else if (tdElt.id === j1.id) {
                    tdElt.style.backgroundColor = 'none';
                    var imgElt = document.createElement('img');
                    imgElt.src = j1.image;
                    tdElt.appendChild(imgElt);
                } else if (tdElt.id === j2.id) {
                    tdElt.style.backgroundColor = 'none';
                    var imgElt = document.createElement('img');
                    imgElt.src = j2.image;
                    tdElt.appendChild(imgElt);
                } else {tdElt.style.backgroundColor = Outils.getRandomColor(nbCol)};

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