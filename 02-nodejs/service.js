var moduleDevfest =require('./data/devfest-2015.js');


function listerTousLesPresentateurs(){
	return moduleDevfest.speakers;
}


function listerToutesLesSessions(){
	return moduleDevfest.sessions;
}


var ifIdValide = function(element){
	return element.id;
}

function trouverUneSession(idSession){
	return listerToutesLesSessions().filter(ifIdValide);
		
	
}

var ifTopSeaker = function(element){
		return element.topspeaker === true;
};

function listerTopPresentateurs(){
	return listerTousLesPresentateurs().filter(ifTopSeaker)
}

exports.displayAllPresentateurs = listerTousLesPresentateurs;
exports.displayAllSessions = listerToutesLesSessions;
exports.findASession = trouverUneSession;
exports.displayTopPresentateurs = listerTopPresentateurs;