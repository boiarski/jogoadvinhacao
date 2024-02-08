const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector('#btnTry');
const btnTryAgain = document.querySelector('#btnTryAgain');

let error = document.querySelector(".error");
let number = Math.round(Math.random()*10);
let numberOfGuesses = 1;

btnTry.addEventListener('click', handleTryClick);
btnTryAgain.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleKeyPress);

function handleTryClick(event) {
    event.preventDefault();

    const guess = document.querySelector("#guess");
    
    if (Number(guess.value) == number) {
        toggleScreen();
    
        screen2.querySelector("h2").innerText = `Acertou em ${numberOfGuesses} tentativas!`;
    }
    else if (Number(guess.value) < 0 || Number(guess.value) > 10 || Number(guess.value) == NaN){
        guess.value = ""
        error.innerText = 'Insira um número válido.'
    }
    else{
        guess.value = ""
        error.innerText = 'Errou, tente novamente!';
        numberOfGuesses++;
    }
    
}

function handleResetClick(){
    toggleScreen();
    numberOfGuesses = 1;
    guess.value = ""
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
    number = Math.round(Math.random()*10);  
    error.innerText = "";  
}

function handleKeyPress(event) {
    if (event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick();
    }
}

