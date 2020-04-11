// jshint esversion: 6

const initGame = () => {

    const playAgain = document.querySelector('.play-again');

    const runGame = () => {

        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        let randomDiceImage = `images/dice${randomNumber1}.png`;
        let randomDiceImage2 = `images/dice${randomNumber2}.png`;

        let image1 = document.querySelectorAll("img")[0];
        let image2 = document.querySelectorAll("img")[1];

        image1.setAttribute('src', randomDiceImage);
        image2.setAttribute('src', randomDiceImage2);
        let fireEmoji = '🔥';


        randomNumber1 > randomNumber2 ? document.querySelector('h1').textContent = fireEmoji + 'Player 1 Wins!' : randomNumber1 === randomNumber2 ? document.querySelector('h1').textContent = 'Draw' : document.querySelector('h1').textContent = 'Player 2 Wins!' + fireEmoji;

        playAgain.textContent = 'Play Again';

    };

    playAgain.addEventListener('click', runGame);

};


initGame();