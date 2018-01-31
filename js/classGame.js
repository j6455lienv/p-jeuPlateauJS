class Game {
    creer(nbCol, nbRow, nom_j1, typePerso_j1, nom_j2, typePerso_j2) {
        
        this.nbCol = nbCol;
        this.nbRow = nbRow;
        this.nom_j1 = nom_j1;
        this.typePerso_j1 = typePerso_j1;
        this.nom_j2 = nom_j2;
        this.typePerso_j2 =typePerso_j2;        

        //gestion du DOM
        var getDivElt = document.getElementById('jeu');
        var tableElt = document.createElement('table');
        tableElt.className = 'table table-bordered';
        var tbodyElt = document.createElement('tbody');
        tableElt.appendChild(tbodyElt);
        getDivElt.appendChild(tableElt);
        
        //instanciation joueurs
        //******************nouveau-creation d'instance perso depuis formulaire html***********//
        var j1 = '';
        var j2 = '';
        switch(this.typePerso_j1){
            case 'Bourrin':j1 = new Bourrin(Outils.getRandomId(this.nbCol, this.nbRow), this.nom_j1);break;
            case 'Mage':j1 = new Mage(Outils.getRandomId(this.nbCol, this.nbRow), this.nom_j1);break;
        }
        switch(this.typePerso_j2){
            case 'Bourrin':j2 = new Bourrin(Outils.getRandomId(this.nbCol, this.nbRow), this.nom_j2);break;
            case 'Mage':j2 = new Mage(Outils.getRandomId(this.nbCol, this.nbRow), this.nom_j2);break;
        }

        console.log('-------Controle instance des joueurs1-------');
        console.log('Nom du j1 : ' + j1.name);
        console.log('Type de j1 : ' + this.typePerso_j1);
        console.log('Id de j1 : ' + j1.id);
        console.log('Img : ' + j1.image);
        console.log('...');

        console.log('-------Controle instance des joueurs2-------');
        console.log('Nom du j2 : ' + j2.name);
        console.log('Type de j2 : ' + this.typePerso_j2);
        console.log('Id de j2 : ' + j2.id);
        console.log('Img : ' + j2.image);
        console.log('...');
        //*************************************************************************************//

        //instanciation armes
        //**************************************************************************************//
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
        //***************************************************************************************//
        
        var tab = [];//creation d'un tableau 'qui ne sert a rien pour le moment'

        function setArrayCase(Obj) {
            tdElt.style.backgroundColor = 'none';
            var imgElt = document.createElement('img');
            imgElt.src = Obj.image;
            tdElt.appendChild(imgElt);
        }
        
        for (var i = 0; i < nbRow; i++) {

            var trElt = document.createElement('tr');
            tbodyElt.appendChild(trElt);

            var tabRow = [];//creation d'un deuxieme tableau 'row'

            for (var j = 0; j < nbCol; j++) {

                var tdElt = document.createElement('td');
                tdElt.id = i + "-" + j;
                
                //insertion des armes dans la map
                switch(tdElt.id){
                    case couteauObj.id:setArrayCase(couteauObj);break;
                    case pistoletObj.id:setArrayCase(pistoletObj);break;
                    case batteObj.id:setArrayCase(batteObj);break;
                    case tronconneuseObj.id:setArrayCase(tronconneuseObj);break;
                    case j1.id:setArrayCase(j1);break;
                    case j2.id:setArrayCase(j2);break;
                    default:  tdElt.style.backgroundColor = Outils.getRandomColor(nbCol);
                }

                tabRow.push(tdElt.id);//on peuple une ligne jusqu'à la fin de tour de boucle
                trElt.appendChild(tdElt);
                
                tdElt.addEventListener("click", function () {
                    console.log('this.id = ' + this.id + ', this.backgroundColor = ' + this.style.backgroundColor);
                }, false);
            }
            tab.push(tabRow);//chaque ligne cree vient peupler le tableau initial pour avoir un tableau de tableau
        }
        //console.log(tab);//tableau 2D en console
    }
}