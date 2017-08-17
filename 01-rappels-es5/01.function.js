console.log("01 - Fonctions");

//----------------------------------

/*
Créer une variable resultat1 dont le résultat est l’invocation de la fonction additionner avec les
paramètres nombre1 et nombre2.

*/
var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1, nb2){
	var resultat1 = nb1 + nb2;
	return resultat1;
}

console.log("resultat1: " + additionner(nombre1,nombre2));

//----------------------------------

/*
Créer une variable somme dont la valeur est une référence à la fonction additionner.
• Créer une variable resultat2 dont le résultat est l’invocation de la fonction somme avec les
paramètres nombre1 et nombre2.
• Afficher dans la console la valeur de la variable resultat2. La console devrait afficher désormais


*/

var somme = additionner;
var resultat2 = somme(nombre1, nombre2);
console.log("resultat2: " +resultat2);

//------------------------------------
/*
Créer une variable multiplication dont la valeur est une fonction qui effectue la multiplication
entre 2 nombres.
• Créer une variable resultat3 dont le résultat est l’invocation de la fonction multiplication avec
les paramètres nombre1 et nombre2.

*/


var multiplication = function(nb1, nb2){
 	return nb1*nb2;
}

var resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3: "+ resultat3);

//-------------------------------------



var afficheOperation = function(nomOperation, operation, nb1, nb2){
	return nomOperation +"[ nb1 == "+ nb1 + " nb2 == " + nb2  +"] == "+ operation(nb1,nb2);
}

console.log(afficheOperation("Somme",additionner, 20,40));
console.log(afficheOperation("Multiplication",multiplication, 10,20));

console.log(afficheOperation("Soustraction",function(nb1,nb2){
	return nb1-nb2;
}, 15,5));




