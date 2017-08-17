/*
Créer une variable villes qui a comme valeur un tableau des chaînes de caractères suivantes :
'nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'.
*/
var villes = ['nantes', 'paris', 'saint-nazaire', 'anges', 'le mans'];

villes.forEach(function(element) {
	console.log(element);
});

//=============every()====================

var contientLettreA = function(element, index, array) {
	return element.match('a');
}

console.log('villes avec une lettre a: ' + villes.every(contientLettreA));

//============somme()=====================

var auMoinsUneVilleAvecUnTiret = function(element, index, array) {
	return element.match('-');
}


console.log('villes avec un tiret: ' + villes.some(auMoinsUneVilleAvecUnTiret));

//============filter()=====================

villesSansTiretSansEspace = function(element, index, array) {

	return (!element.match('-') && !element.match(' '));



}

console.log('villes sans espace et tiret: ' + villes.filter(villesSansTiretSansEspace));


//===============Chainer les Fonctions=======
var ajoutLettreSandMajuscule = function(element, index, array) {
	return (element.substring(element.length - 1) != 's');
}


var villesAvecS = function(element, index, array) {
	return (element.substring(element.length - 1) === 's');
}

console.log((villes.filter(villesAvecS) + ' ' + villes.filter(ajoutLettreSandMajuscule) + 's').toUpperCase());