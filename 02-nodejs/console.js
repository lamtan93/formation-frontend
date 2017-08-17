var monService =require('./service.js');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('*** Application Conférence ***');
console.log('1. Liste de tous les présentateurs');
console.log('2. Top présentateurs');
console.log('3. Liste des sessions');
console.log('4. Détail d'+'une session');
console.log('5. Exit');

/*
rl.question('Entrez idSession: ', (answer) => {
  			
  monService.findASession(`${answer}`).forEach(function(e){
  	console.log(e.desc);
  });
  rl.close();		
});
 
*/ 




rl.question('Entrez votre choix: ', (answer) => {
  
  switch (`${answer}`) {
    case '1':
    	console.log('Nom -- Prenom');
       monService.displayAllPresentateurs().forEach(function(e){
       		console.log(e.firstname + " -- " + e.lastname);
       })
        break;
    case '2':
    	console.log('Nom -- Prenom');
      	 monService.displayTopPresentateurs().forEach(function(e){
       	console.log(e.firstname + " -- " + e.lastname);
       });
        break;
    case '3':
        console.log('Titre des sessions');
        monService.displayAllSessions().forEach(function(e){
        	console.log(e.title);
        })
        break;
  	case '4':
  		
  	break;
	}

  rl.close();

});

