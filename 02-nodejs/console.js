var monService =require('./service.js');

/*
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




function menu(){

console.log('*** Application Conférence ***');
console.log('1. Liste de tous les présentateurs');
console.log('2. Top présentateurs');
console.log('3. Liste des sessions');
console.log('4. Détail d'+'une session');
console.log('5. Exit');
};


menu();
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
      rl.question('Entrez idSession: ', (answer) => {
        
      console.log(monService.findASession(`${answer}`).desc);
      
      });
       rl.prompt();
     break;
    
    case '5': 
    console.log('Au revoir :)')
    rl.close();
  }
  rl.close();
});
*/



//=======================
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '\n\*** Application Conférence *** \n\
 1. Liste de tous les présentateurs \n\
 2. Top présentateurs \n\
 3. Liste des sessions \n\
 4. Détail d'+'une session \n\
 5. Exit \n\ Entrez votre choix: '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
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
      rl.question('Entrez idSession: ', (answer) => {
        
      console.log(monService.findASession(`${answer}`).desc);
      
      });
       
     break;
    
    case '5': 
    rl.close();
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});



