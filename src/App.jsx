import { useState, useEffect, useRef } from "react"
import GameBoard from "./components/Gameboard.jsx"

export default function MainContent() {
  const [allPokemonInfo, setAllPokemonInfo] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const hasFetched = useRef(false);

  useEffect(() => { // API request for pokemon information
    const fetchData = async () => {
        const baseUrl = "https://pokeapi.co/api/v2/pokemon/"
        const pokemonList = ["mudkip", "pikachu", "dachsbun", "volcarona", "orthworm", "sceptile", "bidoof", "piplup", "charizard", "gardevoir"]

        try {

          if (hasFetched.current) return;  // Guard for duplicate API request in strict mode
          hasFetched.current = true;
          
          let pokemonInfo = pokemonList.map((pokemon) => (
              fetch(`${baseUrl}${pokemon}`).then((res) => res.json())
          ));

          const result = await Promise.all(pokemonInfo);
            
          const formattedPokemonInfo = result.map((pokemon) => ({
            name: pokemon.name,
            id: pokemon.id,
            image: pokemon.sprites.other["official-artwork"].front_default
          }));

          setAllPokemonInfo(formattedPokemonInfo);

        } catch(error) {
            console.log(error);
        }
    };

    fetchData();
  }, [])


  let clickedCards = useRef(new Set());

  function handleClick(cardId) {
    if (!clickedCards.current.has(cardId)) {
      handleWin(cardId);
    }
    else {
      handleLoss();
    }
  }

  function handleWin(cardId) {
    const newScore = currentScore + 1;
    setCurrentScore(newScore)

    clickedCards.current.add(cardId)

    if (newScore > bestScore) {
      setBestScore(newScore)
    }
  }

  function handleLoss() {
    clickedCards.current.clear();

    setCurrentScore(0);
  }

  return (
    <div>
      <header className="header-wrapper">
      <div>
        <h1 className="main-title">Memory Game</h1>
        <h2>Do your best to select each card only once!</h2>
      </div>
      <article className="score-wrapper">
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
        </article>
      </header>
      <main>
        <GameBoard pokemonInfo={allPokemonInfo} handleClick={handleClick}/>
      </main>
    </div>
  )
}