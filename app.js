//  const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

// console.dir(pokemon, { maxArrayLength: null })

// console.log("exercise 2", game);


// console.log("gyms:", game.gyms);

// console.log("party:",game.party);

// console.log("items:",game.items);

// console.log(pokemon);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

const gameDifficulty = ["Easy", "Medium", "Hard"]

const difficultySelected = []
game.difficulty = gameDifficulty[difficultySelected]

console.log("difficulty",gameDifficulty);



/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

// const pokemon = []

pokemon.forEach((starterPokemon) => {
  // console.log("forEach", starterPokemon); //* This "prints/logs" every pokemon
  if (starterPokemon.starter ===  true) {    
  console.log("starters",starterPokemon); //* This "prints/logs" true starter   
  }
});

let starterPokemon = []

starterPokemon.forEach((s) => {
  console.log("start",s);
  
});