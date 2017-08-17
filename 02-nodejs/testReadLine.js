const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '\n\*** Application Conférence *** \n\
 1. Liste de tous les présentateurs \n\
 2. Top présentateurs \n\
 3. Liste des sessions \n\
 4. Détail d'+'une session \n\
 5. Exit \n\Entrez votre choix: '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case '1':
      console.log('Nom1 -- Prenom');
   
        break;
    case '2':
      console.log('Nom2 -- Prenom');
        
       
       
        break;
    case '3':
        console.log('Titre des sessions');
       
        break;
    case '4':
      rl.question('Entrez idSession: ', (answer) => {
        
      console.log('choisi:'+`${answer}`);
      
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
