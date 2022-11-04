/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const arrRandomNumbers = [];
const eleNumbers = document.querySelector('.numbers');
const btnPlay = document.querySelector('.btn-play')
const eleResult = document.querySelector('.time-countdown')
const userNumbers = [];

for (let i = 0; i < 5; i++){
    let randomNumber;
    do {
        randomNumber = getRandomInteger(1, 100);
    } while (arrRandomNumbers.includes(randomNumber))
    arrRandomNumbers.push(randomNumber);
}
console.log(arrRandomNumbers);

let text = arrRandomNumbers.toString();
eleNumbers.innerHTML = (text);


setTimeout(() => {
    eleNumbers.classList.add('hidden'); 
    eleResult.innerHTML = 'Inserisci i numeri dove indicato';
    }, 9000)

setTimeout(checkVictory, 10000);


function checkVictory(){

    for(let i = 0; i < 5; i++){
        let numberChoice = parseInt(prompt('Quali erano i numeri?'));
        userNumbers.push(numberChoice);
    } 
    console.log(userNumbers);


    //TODO - questo dovrebbe confrontare solo se sono corrispondono e sono in ordine, modificare per controllare anche solo se sono presenti
    let victory;
    for (let i = 0; i < 5; i++){
        if(arrRandomNumbers[i] == userNumbers [i]){
            victory = true;
        } else{
            victory = false;
        }
    }

    if(victory){
        eleResult.innerHTML = ('Complimenti hai vinto!')
    } else{
        eleResult.innerHTML = ('Mi dispiace, hai perso')
    }
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}