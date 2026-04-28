import { useState, useEffect, useRef } from "react"
import GameBoard from "./components/Gameboard.jsx"

export default function MainContent() {
  const [allPokemonInfo, setAllPokemonInfo] = useState([]);
  const hasFetched = useRef(false);

  useEffect(() => { // API request for pokemon information
    const fetchData = async () => {
        const baseUrl = "https://pokeapi.co/api/v2/pokemon/"
        const pokemonList = ["mudkip", "pikachu", "dachsbun", "volcarona", "orthworm", "sceptile", "bidoof", "piplup", "charizard", "gardevoir"]

        try {

          if (hasFetched.current === false) { // Guard for duplicate API request in strict mode
            hasFetched.current = true;
          } else return;
          
          let pokemonInfo = pokemonList.map((pokemon) => (
              fetch(`${baseUrl}${pokemon}`).then((res) => res.json())
          ));

          const result = await Promise.all(pokemonInfo);
            
          const formattedPokemonInfo = result.map((pokemon) => ({
            name: pokemon.name,
            image: pokemon.sprites.other["official-artwork"].front_default
          }));

          setAllPokemonInfo(formattedPokemonInfo);

        } catch(error) {
            console.log(error);
        }
    };

    fetchData();
}, [])

  return (
    <div>
      <header className="header-wrapper">
      <div>
        <h1 className="main-title">Memory Game</h1>
        <h2>Do your best to select each card only once!</h2>
      </div>
      <article className="score-wrapper">
        <p>Current Score: 0</p>
        <p>Best Score: 0</p>
        </article>
      </header>
      <main>
        <GameBoard pokemonInfo={allPokemonInfo}/>
      </main>
    </div>
  )
}