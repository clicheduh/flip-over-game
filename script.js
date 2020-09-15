document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'burger',
            img: 'images/burger.png'
        },
        {
            name: 'burger',
            img: 'images/burger.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'omelette',
            img: 'images/omelette.png'
        },
        {
            name: 'omelette',
            img: 'images/omelette.png'
        },
        {
            name: 'cheese',
            img: 'images/cheese.png'
        },
        {
            name: 'cheese',
            img: 'images/cheese.png'
        },
        {
            name: 'donut',
            img: 'images/donut.png'
        },
        {
            name: 'donut',
            img: 'images/donut.png'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const congratsText = document.querySelector('#congrats');
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/block.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check your match
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert('Hoorah! You found a match.');
            cards[optionOneId].setAttribute('src', 'images/blue.png');
            cards[optionTwoId].setAttribute('src', 'images/blue.png');
            cardsWon.push(cardsChosen);
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
        } else {
            // alert('Sorry, try again :)');
            cards[optionOneId].setAttribute('src', 'images/block.png');
            cards[optionTwoId].setAttribute('src', 'images/block.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            congratsText.textContent = 'Woohoo! You found all of them! 🥳';
        }
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
});
