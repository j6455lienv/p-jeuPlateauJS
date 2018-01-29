var cout = new Couteau();
var pis = new Pistolet();
var bat = new Batte();
var tronc = new Tronconneuse();

console.log('Nom du couteau : ' + cout.name);
console.log('Degat du couteau : ' + cout.degat);
console.log(cout.infligerDegat());
console.log('Resistance du couteau : ' + cout.resistance);
console.log('...');

console.log('Nom du pistolet : ' + pis.name);
console.log('Degat du pistolet : ' + pis.degat);
console.log(pis.infligerDegat());
console.log('Resistance du pistolet : ' + pis.resistance);
console.log('...');

console.log('Nom de la batte : ' + bat.name);
console.log('Degat de la batte : ' + bat.degat);
console.log(bat.infligerDegat());
console.log('Resistance de la batte : ' + bat.resistance);
console.log('...');

console.log('Nom de la tronconneuse : ' + tronc.name);
console.log('Degat de la tronconneuse : ' + tronc.degat);
console.log(tronc.infligerDegat());
console.log('Resistance de la tronconneuse : ' + tronc.resistance);
console.log('...');


