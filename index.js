let player = {
    name: "Grant: ",
    chips: "$" + 2500
}
let cards  = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + player.chips

function getRandomCards() {
    let rdmCards = Math.floor(Math.random() * 13) + 1
    if (rdmCards > 10) {
        return 10
    } 
    else if (rdmCards === 1){
    return 11}
    else {
        return rdmCards
    }
}
function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    cards  = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
    }
sumEL.textContent = "Sum: " + sum
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} 
else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! "
    hasBlackJack = true
} 
else {
    message = "You're out of the game! "
    isAlive = false
}
messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCards()
        sum += card
        cards.push(card)
        renderGame()        
    }
}


