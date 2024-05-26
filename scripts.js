const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const Choices = ['pedra', 'papel', 'tesoura']
    const randonNumber = Math.floor(Math.random() * 3)


    return Choices[randonNumber]
}


const playTheGame = (human, machine) => {
    console.log('humano: ' + human + 'Maquina : ' + machine)

    if (human == machine) {
        result.innerHTML = "Deu empate"

    } else if (
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Voce ganhou !'

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Voce perdeu para a Alexa !'
    }
}