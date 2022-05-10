// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// DA RIVEDERE DEVE STAMPARE A VIDEO NON IN CONSOLE

// 1. Creazione array email

const listaMail = ['utente0@gmail.com' , 'utente1@gmail.com', 'utente2@gmail.com', 'utente3@gmail.com', 'utente4@gmail.com', 'utente5@gmail.com'];


// 2. Chiedo di inserire la mail

const checkMail = prompt('Inserisci la tua email');
let mail = false;

// 3. Controllo che l'email è presente nell'array

for (let i = 0; i < listaMail.length; i++) {
    
    let lista = listaMail[i];

    if(lista == checkMail){
      mail = true;
     
    //   console.log(mail);
    //   console.log(lista);
    }
}

 document.getElementById('email').innerHTML = "L'email inserita è: " + checkMail;
// 4. Se è presente accede altrimenti no

if (mail == true){

    document.getElementById('text').innerHTML= "Email riconosciuta, puoi accedere";

    // console.log(mail);

}else{

    document.getElementById('text').innerHTML= "Email non riconosciuta, non puoi accedere";

    // console.log(mail);

}