const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

const humanVictory = document.querySelector('#human-victory')
const machineVictory = document.querySelector('#machine-victory')

let humanScoreNumber = 0
let machineScoreNumber = 0

let humanVictoryNumber = 0
let machineVictoryNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const Choices = ['pedra', 'papel', 'tesoura']
    const randonNumber = Math.floor(Math.random() * 3)
    return Choices[randonNumber]
}

const checkVictory = () => {
    if (humanScoreNumber === 5) {
        humanVictoryNumber++
        humanVictory.innerHTML = humanVictoryNumber

        result.innerHTML = '🏆 Você venceu a partida!'

        resetGame()
    }

    if (machineScoreNumber === 5) {
        machineVictoryNumber++
        machineVictory.innerHTML = machineVictoryNumber

        result.innerHTML = '🤖 Alexa venceu a partida!'

        resetGame()
    }
}

const resetGame = () => {
    humanScoreNumber = 0
    machineScoreNumber = 0

    humanScore.innerHTML = 0
    machineScore.innerHTML = 0
}

const playTheGame = (human, machine) => {
    console.log('humano: ' + human + ' Maquina: ' + machine)

    if (human == machine) {
        result.innerHTML = "Deu empate"
    }
    else if (
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou!'
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu para a Alexa!'
    }

    checkVictory()
}