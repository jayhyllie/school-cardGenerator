// 1
for (let i = 0; i <= 1000; i++) {
    console.log(i);
}

// 2 
for (let d = 100; d >= 0; d--) {
    console.log(d);
}

// 3 & 4
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for (let fruit of fruits) {
    console.log(fruit);
}


// 6
let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

for (let thing of things) {
    console.log(thing);
}

// 7 & 8
things.forEach(thing => {
    console.log(thing);
})

// 9 

i = 0;

while (i <= 1000) {
    console.log(i);
    i++;
}

// 10

let cardDeck = [];
let cards = ['hearts', 'spades', 'clubs', 'diamonds'];

cards.forEach(card => {
    for (let num = 2; num <= 14; num++) {
        let typeCardArr = [card, num];
        cardDeck.push(typeCardArr);
    }
})
cardDeck.forEach(card => {
    console.log(card);
})

// 11

let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]
friends.forEach( friend => {
    friend.likes.forEach( like => {
        console.log(like);
    });
});