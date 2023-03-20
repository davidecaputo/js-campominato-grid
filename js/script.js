/*
    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

const form = document.querySelector('form');
const grill = document.querySelector('.grill');
form.addEventListener('submit', play);

function createSquares(i, squareSize){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style = `width: calc(100% / ${squareSize}); height: calc(100% / ${squareSize});`;
    square.innerHTML = i;
    return square;
}

function createBombs(numberOfBombs, numSquare){
    const bombs = [];
    while(bombs.length <= numberOfBombs){
        const bomb = getRndInteger(1, numSquare);
        if(!bombs.includes(bomb)){
            bombs.push(bomb);
        }
    }
    return bombs;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function play(e){
    e.preventDefault();
    grill.innerHTML = '';
    const difficulty = document.getElementById('level').value;
    const numberOfBombs = 16;
    let numSquare = 0;
    let squareSize = 0;
    switch (difficulty) {
        case "easy":
            console.log('facile');
            numSquare = 100;
            squareSize = 10;
            break;
        case "medium":
            console.log('medio');
            numSquare = 81;
            squareSize = 9;
            break;
        case "hard":
            console.log('difficile');
            numSquare = 49;
            squareSize = 7;
            break;   
    }

    const bombs = createBombs(numberOfBombs, numSquare);
    console.log(bombs);

    for(let i = 1; i <= numSquare; i++){
        const square = createSquares(i, squareSize);
        square.addEventListener('click', function(){
            square.classList.add('safe');
        })
        grill.appendChild(square);
    }
}