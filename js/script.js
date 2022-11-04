/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const arrRandomNumbers = [];
const eleNumbers = document.querySelector('.numbers');
const showResult = document.querySelector('.user-numbers');
const eleCountdown = document.querySelector('.time-countdown');
const elePoints = document.querySelector('.points');
const userNumbers = [];

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function checkVictory(){
    eleCountdown.innerHTML = '';
    eleNumbers.classList.remove('hidden'); 
    let points = 0;

    for(let i = 0; i < 5; i++){
        let numberChoice = parseInt(prompt('Quali erano i numeri?'));
        if (arrRandomNumbers.includes(numberChoice)) {
            userNumbers.push(numberChoice);
            points++;
        }
    } 
    console.log(userNumbers);
    console.log(points);

    let textUser = userNumbers.toString();
    showResult.innerHTML = `I tuoi numeri uguali sono: ${textUser}`;

    let victory;
    for (let i = 0; i < 5; i++){
        if(arrRandomNumbers.includes(userNumbers [i])){
            victory = true;
        } else{
            victory = false;
        }
    }

    if(victory){
        eleNumbers.innerHTML = `Complimenti hai vinto! I numeri erano: ${textBot}`;
    } else{
        eleNumbers.innerHTML = `Mi dispiace hai perso! I numeri erano: ${textBot}`;
    }

    elePoints.innerHTML = 'Il tuo punteggio è di: ' + points;
}

for (let i = 0; i < 5; i++){
    let randomNumber;
    do {
        randomNumber = getRandomInteger(1, 100);
    } while (arrRandomNumbers.includes(randomNumber))
    arrRandomNumbers.push(randomNumber);
}
console.log(arrRandomNumbers);

let textBot = arrRandomNumbers.toString();
eleNumbers.innerHTML = (textBot);

let counter = 29;

const eleInterval = setInterval(count, 1000);
function count() {
	if (counter === 0) {
		clearInterval(eleInterval);
	} else {
		eleCountdown.innerHTML = 'Ricordati questi numeri ti rimangono ' + counter + ' secondi';
		counter--;
	}
}

setTimeout(() => {
    eleNumbers.classList.add('hidden'); 
    eleCountdown.innerHTML = 'Inserisci i numeri dove indicato';
    }, 30000)

setTimeout(checkVictory, 31000);


