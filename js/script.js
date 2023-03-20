/*
    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

const form = document.querySelector('form');
form.addEventListener('submit', play);


function play(e){
    e.preventDefault();
    const difficulty = document.getElementById('level').value;
    let square = 0;
    let squareSize = 0;
    switch (difficulty) {
        case "easy":
            console.log('facile');
            square = 100;
            squareSize = 10;
            break;
        case "medium":
            console.log('medio');
            square = 81;
            squareSize = 9;
            break;
        case "hard":
            console.log('difficile');
            square = 49;
            squareSize = 7;
            break;      
    }
    
    console.log(squareSize);
    for(let i = 1; i <= square; i++){
        
    }
}