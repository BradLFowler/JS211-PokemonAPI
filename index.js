const getPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(allPokemon => {
      let pokemon1 = allPokemon.results.at(randoNum(151))
      let pokemon2 = allPokemon.results.at(randoNum(151))
      let pokemon = [pokemon1, pokemon2]
      getPokemonData(pokemon)
    })
}
getPokemon();

const getPokemonData = (pokemon) => {
  for(i=0; i < pokemon.length; i++) {
    let url = pokemon[i].url
    fetch(url)
    .then(response => response.json())
    .then((pokeData) => {
      renderPokemon(pokeData)
    })
  }
}

const randoNum = (max) => {
  let sum = Math.floor(Math.random() * max)
  return sum
}

const renderPokemon = (pokeData) => {
  let pokeNames = pokeData.name
  let pokeHp = pokeData.stats[0].base_stat
  let allMoves = pokeData.moves.length
  let move1 = pokeData.moves[randoNum(allMoves)].move.url
  let move2 = pokeData.moves[randoNum(allMoves)].move.url
  let move3 = pokeData.moves[randoNum(allMoves)].move.url
  let move4 = pokeData.moves[randoNum(allMoves)].move.url

  let mainDiv = document.getElementById('myDiv')
  let nameHpDiv = document.createElement('div')
  let allMovesDiv = document.createElement('div')
  let movesDiv1 = document.createElement('div')
  let movesDiv2 = document.createElement('div')
  let movesDiv3 = document.createElement('div')
  let movesDiv4 = document.createElement('div')
  let spriteImg = document.createElement('img')
  allMovesDiv.innerHTML = `Moves: <br>`

  fetch(move1)
  .then(res => res.json())
  .then(move1Data => {
    movesDiv1.innerHTML = `${move1Data.name}<br>  PP: ${move1Data.pp}`
    movesDiv1.classList.add('moves1')
    allMovesDiv.append(movesDiv1)
  })

  fetch(move2)
  .then(res => res.json())
  .then(move2Data => {
    movesDiv2.innerHTML = `${move2Data.name}<br>  PP: ${move2Data.pp}`
    movesDiv2.classList.add('moves2')
    allMovesDiv.append(movesDiv2)
  })

  fetch(move3)
  .then(res => res.json())
  .then(move3Data => {
    movesDiv3.innerHTML = `${move3Data.name}<br>  PP: ${move3Data.pp}`
    movesDiv3.classList.add('moves3')
    allMovesDiv.append(movesDiv3)
  })

  fetch(move4)
  .then(res => res.json())
  .then(move4Data => {
    movesDiv4.innerHTML = `${move4Data.name}<br>  PP: ${move4Data.pp}`
    movesDiv4.classList.add('moves4')
    allMovesDiv.append(movesDiv4)
  })

  nameHpDiv.innerHTML = `Name: ${pokeNames}<br><br> HP: ${pokeHp}`
  mainDiv.append(nameHpDiv)

  spriteImg.src = pokeData.sprites.front_default
  mainDiv.append(spriteImg)

  mainDiv.append(allMovesDiv)
}