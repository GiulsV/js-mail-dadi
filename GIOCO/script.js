// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// DA RIVEDERE il risultato si deve vedere a video non solo in console

// 1. Chiedi nome player

const nomePlayer = prompt("Inserisci il nome del primo giocatore");
document.getElementById('nome').innerHTML = "Nome giocatore: " + nomePlayer;
console.log(nomePlayer);

// Click a video per generare il lancio del dado

const giocatore = document.getElementById('umano');
giocatore.addEventListener('click', 

    function(){
        
        // 2. Player deve generare un numero casuale da 1 a 6 

        const pointPlayer = Math.floor(Math.random() * 6) + 1;

        document.getElementById('pointPlayer').innerHTML = nomePlayer +" hai realizzato "+ pointPlayer + " punti";
        
        console.log(pointPlayer);

        // 3. Computer genera un numero casuale da 1 a 6

        const pointAI = Math.floor(Math.random() * 6) + 1;

        document.getElementById('pointAI').innerHTML ="Il computer ha realizzato "+ pointAI + " punti";
        
        console.log(pointAI);

        // 4. Risultato finale 

        if(pointPlayer > pointAI) {

            document.getElementById('result').innerHTML = 'Complimenti, hai vinto';

        }else if (pointPlayer == pointAI) {

            document.getElementById('result').innerHTML = 'Pari. Nessun vincitore';

        }else {

            document.getElementById('result').innerHTML = 'Hai perso';

        }

    }
)