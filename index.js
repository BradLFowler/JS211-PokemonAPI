let battleHistory = [];
let battlePokemon = [];

const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((res) => res.json())
    .then((data) => {
      let pokemon1 = data
      let mainDiv1 = document.getElementById("myDiv");

      let firstDiv = document.createElement("div");
      let firstText = `Name: ${data.name} <br>HP: ${data.stats[0].base_stat}`;
      firstDiv.innerHTML = firstText;
      mainDiv1.append(firstDiv);

      let randomNum1 = () => {
        return Math.floor(Math.random() * data.moves.length);
      };
      let move1 = randomNum1();
      let move2 = randomNum1();
      let move3 = randomNum1();
      let move4 = randomNum1();
      if (!(move1 == move2) || move1 == move3 || move1 == move4) {
        let moves = `Moves: <br> 
        ${data.moves[move1].move.name}<br> 
        ${data.moves[move2].move.name}<br> 
        ${data.moves[move3].move.name}<br>
        ${data.moves[move4].move.name}`;
        let displayMoves = document.createElement("div");
        displayMoves.innerHTML = moves;
        mainDiv1.append(displayMoves);
      } else {
        console.log("Error");
      }
      let spriteImg1 = document.createElement("img");
      spriteImg1.src = data.sprites.front_default;
      mainDiv1.append(spriteImg1);
      battlePokemon.push(data)

  fetch("https://pokeapi.co/api/v2/pokemon/dragonite")
    .then((res) => res.json())
    .then((data2) => {
      let pokemon2 = data2
      let mainDiv2 = document.getElementById("myDiv");

      let spriteImg2 = document.createElement("img");
      spriteImg2.src = data2.sprites.front_default;
      mainDiv2.append(spriteImg2);

      let randomNum2 = () => {
        return Math.floor(Math.random() * data2.moves.length);
      };
      let secMove1 = randomNum2();
      let secMove2 = randomNum2();
      let secMove3 = randomNum2();
      let secMove4 = randomNum2();
      if (
        !(secMove1 == secMove2) ||
        secMove1 == secMove3 ||
        secMove1 == secMove4
      ) {
        let moves2 = `Moves: <br> 
        ${data2.moves[secMove1].move.name}<br> 
        ${data2.moves[secMove2].move.name}<br> 
        ${data2.moves[secMove3].move.name}<br>
        ${data2.moves[secMove4].move.name}`;
        let displayMoves2 = document.createElement("div");
        displayMoves2.innerHTML = moves2;
        mainDiv2.append(displayMoves2);
      } else {
        console.log("Error");
      }
      if(pokemon1.stats[0].base_stat < pokemon2.stats[0].base_stat) {
          battleHistory.push(`${pokemon2.name} defeated ${pokemon1.name}`)
      } else {
        battleHistory.push(`${pokemon1.name} defeated ${pokemon2.name}`)
      }
      let myHistory = document.getElementById('battleHistory')
      let battleDiv = document.createElement('div')
      battleDiv.innerHTML = battleHistory
      myHistory.append(battleDiv)
      let secDiv = document.createElement("div");
      let secText = `Name: ${data2.name} <br>HP: ${data2.stats[0].base_stat}`;
      secDiv.innerHTML = secText;
      mainDiv2.append(secDiv);
    });
    });
};
getPokemon();