// Access all the html elements
const showUserImg = document.getElementById('user-img');
const showAiImg = document.getElementById('comp-img');
const getUserScore = document.getElementById('user-score');
const getAiScore = document.getElementById('comp-score');
const result = document.getElementById('result');
const choiceBtn = document.querySelectorAll('.choice');

// Declare the game score to start the game
let userScore = 0;
let aiScore = 0;

// Function to get user button
choiceBtn.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        showUserChoice(userChoice);
        playgame(userChoice);
    });
});

// Function to display the user choice
const showUserChoice = (userChoice) => {
    let imgPath = '';
    if (userChoice === 'rock') {
        imgPath = '..img/r.jpg';
    } else if (userChoice === 'paper') {
        imgPath = '..img/p.jpg';
    } else {
        imgPath = '..img/s.jpg';
    }
    showUserImg.style.backgroundImage = 'url(' + imgPath + ')';
    setUserBg();
};

// Function to display the ai choice
const showAiChoice = (genAiChoice) => {
    setTimeout(() => {
        let imgPath = '';
        if (genAiChoice === 'rock') {
            imgPath = '..img/r.jpg';
        } else if (genAiChoice === 'paper') {
            imgPath = '..img/p.jpg';
        } else {
            imgPath = '..img/s.jpg';
        }
        showAiImg.style.backgroundImage = 'url(' + imgPath + ')';
        setAiBg();
    }, 4000);
    imgPath = '../img/loading.gif';
    showAiImg.style.backgroundImage = 'url(' + imgPath + ')';
    setAiBg();
};

// Function to set image on user's selective div
const setUserBg = () => {
    showUserImg.style.backgroundPosition = 'center';
    showUserImg.style.backgroundRepeat = 'no-repeat';
    showUserImg.style.backgroundSize = 'cover';
};

// Function to set ai'selective div
const setAiBg = () => {
    showAiImg.style.backgroundPosition = 'center';
    showAiImg.style.backgroundRepeat = 'no-repeat';
    showAiImg.style.backgroundSize = 'cover';
};

// Function to generate AI's choice
const genAiChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const getIndx = Math.floor(Math.random() * 3);
    return options[getIndx];
};

// Draw game function
const drawGame = () => {
    result.innerHTML = `Game is draw. Play again`;
    result.style.backgroundColor = 'green';
    result.style.color = 'white';
};

// Function to show the winner between user and ai
const showWinner = (userWin, userChoice, aiChoice) => {
    setTimeout(() => {
        if (userWin) {
            userScore++;
            getUserScore.innerText = userScore;
            result.innerText = `You win! Your ${userChoice} beats ${aiChoice}`;
            result.style.backgroundColor = 'yellow';
            result.style.color = 'black';
        }
        else {
            aiScore++;
            getAiScore.innerText = aiScore;
            result.innerText = `Ai win! Ai ${aiChoice} beats your ${userChoice}`;
            result.style.backgroundColor = 'red';
            result.style.color = 'white';
        }
    }, 4000);
};

// Main game function
const playgame = (userChoice) => {
    const aiChoice = genAiChoice();
    showAiChoice(aiChoice);
    if (userChoice == aiChoice) {
        setTimeout(() => {
            drawGame();
        }, 4000);
    }
    else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = aiChoice === 'paper' ? false : true;
        }
        else if (userChoice === 'paper') {
            userWin = aiChoice === 'scissors' ? false : true;
        }
        else {
            userWin = aiChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, aiChoice);
    }
};

// Restart the game
const restart = document.getElementById('restart');
restart.addEventListener('click', () => {
    location.reload();
});

