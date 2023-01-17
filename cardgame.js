// 10. Generera en kortlek med 52 kort där varje kort innehåller en färg och ett värde mellan 2 och 14 (ess).
let cardstack = [];
let suits = ['&hearts;', '&diams;', '&spades;', '&clubs;'];

// Loopar över färgerna
for (let i = 0; i < suits.length; i++) {
    // Loopar över värden
    for (let j = 2; j < 15; j++) {
        let newCard = {};

        // Skapar en ny egenskap (suit) i objektet newCard
        newCard.suit = suits[i];
        
        // För att identifiera klädda kort
        if (j === 11) {
            // Skapar en ny egenskap (value) i objektet newCard
            newCard.value = 'J';
        } else if (j === 12) {
            newCard.value = 'Q';
        } else if (j === 13) {
            newCard.value = 'K';
        } else if (j === 14) {
            newCard.value = 'A';
        } else {
            newCard.value = j;
        }
        // Lägger till det nya kortet i arrayen cardstack
        cardstack.push(newCard);
        // Skriver ut det nya kortet 
        // console.log(newCard);
    } 
}


let score = document.querySelector('header p .score');
let scoreCounter = 0;
let triesLeft = document.querySelector('.attempts');
let triesLeftCounter = 3;
let cardsLeft = document.querySelector('main .left');

let nextLower = document.querySelector('#lower');
let nextEqual = document.querySelector('#equal');
let nextHigher = document.querySelector('#higher');

/* let cardDisplay = document.getElementsByClassName('cardPee'); */

let newCard = 0;
let oldCard = renderCard();

function randomNumber() {
    return Math.floor(Math.random() * cardstack.length);
};

function setCard(card) {
    let cardEL = document.createElement('article');
    cardEL.classList.add('card');

    if (card.suit === '&hearts;' || card.suit === '&diams;') {
        card.color = 'red'
    } else {
        card.color = 'black'
    };

    cardEL.innerHTML = `
    <section class="front">
    <header>
        <span class="${card.color}">${card.suit}</span>
        <span>${card.value}</span>
    </header>
    <section class="${card.color} big">${card.suit}</section>
    <footer>
        <span class="${card.color}">${card.suit}</span>
        <span>${card.value}</span>
    </footer>
    </section>
    <section class="back"></section>
    `;
    document.querySelector('.placeholder').appendChild(cardEL);

    
}

function renderCard() {
    let index = randomNumber();
    setCard(cardstack[index]);
    /* cardDisplay.textContent = cardstack[index].value + cardstack[index].suit; */

    if (cardstack[index].value === 'J') {
        cardstack[index].value = 11;
    } else if (cardstack[index].value === 'Q') {
        cardstack[index].value = 12;
    } else if (cardstack[index].value === 'K') {
        cardstack[index].value = 13;
    } else if (cardstack[index].value === 'A') {
        cardstack[index].value = 14;
    }
    let renderedCard = cardstack[index].value;
    cardstack.splice(index, 1);

    return renderedCard;
};

function addPoints() {
    scoreCounter++;
    score.textContent = `${scoreCounter}`;
};

function decreaseCards() {
    let cardsLeftCounter = cardstack.length;
    cardsLeft.textContent = `${cardsLeftCounter} kort kvar.`;
};

function wrong() {
    triesLeftCounter--;

    if (triesLeftCounter < 1) {
        triesLeft.textContent = 'Spelet slut!';
        gameOver();
    } else {
        triesLeft.textContent = triesLeftCounter;
    }
};

nextLower.addEventListener('click', function () {
    newCard = renderCard();

    decreaseCards();
    if (newCard < oldCard) {
        addPoints();
    } else {
        wrong();
    }
    oldCard = newCard;
});

nextEqual.addEventListener('click', function() {
    newCard = renderCard();

    decreaseCards();
    if (newCard === oldCard) {
        addPoints();
    } else {
        wrong();
    }
    oldCard = newCard;
});

nextHigher.addEventListener('click', function() {
    newCard = renderCard();

    decreaseCards();
    if (newCard > oldCard) {
        addPoints();
    } else {
        wrong();
    }
    oldCard = newCard;
});

// Game-over

function gameOver() {
    document.querySelector('#gameover').classList.add('show');
    let retryBtn = document.querySelector('.retry');

    retryBtn.addEventListener('click', () => {
        location.reload();
    })
}