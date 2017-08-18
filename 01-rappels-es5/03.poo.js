function Personne(nom, prenom, pseudo, numero) {
	this.nom = nom;
	this.prenom = prenom;
	this.pseudo = pseudo;
	this.numero = numero;
	this.getNomComplet = function() {
		return this.nom + " " + this.prenom + " " + this.pseudo;
	};
}

var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");


var afficherPersonne = function(personne) {
	console.log(personne.nom, "|", personne.prenom, "|", personne.pseudo, "|", personne.getNomComplet());
};
afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = "jules44";
console.log(jules.getNomComplet());

console.log(jules.age);
Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

Personne.prototype.getInitiales = function() {
	return this.prenom.charAt(0).toUpperCase() + this.nom.charAt(0).toUpperCase();
};
console.log(jules.getInitiales());

var robert = {
	prenom: "Robert",
	nom: "LEPREFET",
	pseudo: "robert77",
	getNomComplet: function() {
		return this.nom + " " + this.prenom + " " + this.pseudo;
	}
};
afficherPersonne(robert);