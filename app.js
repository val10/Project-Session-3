let computerPlay = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

let personChoice = () => {
    //invoke the computer choice function
    let computerChoice = computerPlay();
    const pcChoice = computerChoice.toLowerCase();
    //playing with the DOM
    const yourChoice = document.getElementById('choice').value.toLowerCase();
    //writing in the DOM
    document.getElementById('PersonChoice').textContent = `Your choice is ${yourChoice}.`;
    document.getElementById('ComputerChoice').textContent = `Computer choice is ${pcChoice}.`;

    for (let rounds = 1; rounds <= 5; rounds++) {
        // console.log(rounds);
        if (yourChoice === pcChoice) {
            document.getElementById('Winner').textContent = `It's a tie!`;
        } else if (
            (yourChoice === "rock" && pcChoice === "scissors") ||
            (yourChoice === "paper" && pcChoice === "rock") ||
            (yourChoice === "scissors" && pcChoice === "paper")
        ) {
            document.getElementById('Winner').textContent = `You Win`;
        } else {
            document.getElementById('Winner').textContent = `You Lose`;
        }
    }
}