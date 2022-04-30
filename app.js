document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
    {
        name: 'burger',
        img: 'img/burger.png'
    },
    {
        name: 'burger',
        img: 'img/burger.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'pizza',
        img:'img/pizza.png'
    },
    {
        name: 'pizza',
        img:'img/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const score = document.querySelector('#result');
var chosenCards = [];
var chosenCardId = [];
var foundMatches = [];

//create board
function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'img/placeholder.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);

    }
}




//flipCard
function flipCard(){
    var cardId = this.getAttribute('data-id');
    chosenCards.push(cardArray[cardId].name);
    chosenCardId.push(cardId);
    this.setAttribute('src' , cardArray[cardId].img);
    console.log(this);
    if (chosenCards.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

//check your match
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const firstChosenCard = chosenCardId[0];
    const secondChosenCard = chosenCardId[1];
    console.log(chosenCardId);
    console.log(chosenCards);
     if (chosenCards[0] === chosenCards[1]) {
         alert('Congrats, you found a match!');
         cards[firstChosenCard].setAttribute('src', 'img/white.png');
         cards[secondChosenCard].setAttribute('src', 'img/white.png');
         foundMatches.push(chosenCards);
     } else {
         cards[firstChosenCard].setAttribute('src', 'img/placeholder.png');
         cards[secondChosenCard].setAttribute('src', 'img/placeholder.png');
         alert('Better try again!')
     }
     chosenCards = [];
     chosenCardId = [];
     score.textContent = foundMatches.length;
     if (foundMatches.length === cardArray.length/2){
         score.textContent = 'Bravo , you found all the pairs!'
     }
}
createBoard();

})