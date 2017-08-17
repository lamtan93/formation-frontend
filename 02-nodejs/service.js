var moduleDevfest =require('./data/devfest-2015.js');


function listerTousLesPresentateurs(){
	return moduleDevfest.speakers;
}


function listerToutesLesSessions(){
	return moduleDevfest.sessions;
}


function trouverUneSession(idSession){
  return moduleDevfest.sessions.find(
            function(element){
                return element.id===idSession;
            }
        );	
}

var ifTopSpeaker = function(element){
		return element.topspeaker === true;
};

function listerTopPresentateurs(){
	return listerTousLesPresentateurs().filter(ifTopSpeaker)
}

exports.displayAllPresentateurs = listerTousLesPresentateurs;
exports.displayAllSessions = listerToutesLesSessions;
exports.findASession = trouverUneSession;
exports.displayTopPresentateurs = listerTopPresentateurs;