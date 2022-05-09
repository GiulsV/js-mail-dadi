// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var utentiAutorizzati, utentiAutorizzatiLen, inputEmail, emailValue, esitoValidazione, messaggioUtente, messaggioUtente, i, iesimoUtenteAutorizzato;

function validatoreEmail() {   

    // Creazione array email  
    utentiAutorizzati = ['utente0@gmail.com' , 'utente1@gmail.com', 'utente2@gmail.com', 'utente3@gmail.com', 'utente4@gmail.com', 'utente5@gmail.com'];
    //console.log(utentiAutorizzati);
    //console.log(utentiAutorizzati.length);

    utentiAutorizzatiLen = utentiAutorizzati.length;

    inputEmail = document.getElementById("input_email");
    emailValue = inputEmail.value;
    //console.log(emailValue);

    esitoValidazione = document.getElementById("esito_validazione");

    // Controllo che l'email è presente nell'array

    for(var i = 0; i < utentiAutorizzatiLen; ++i) {

        iesimoUtenteAutorizzato = utentiAutorizzati[i];

        if (iesimoUtenteAutorizzato === emailValue) {
            messaggioUtente = "Utente Autorizzato";
            esitoValidazione.innerHTML = messaggioUtente;
            console.log(messaggioUtente);
            break;
        } else {
            messaggioUtente = "Utente Non Autorizzato";
            esitoValidazione.innerHTML = messaggioUtente;
            console.log(esitoValidazione);
        }
        
    }
}
