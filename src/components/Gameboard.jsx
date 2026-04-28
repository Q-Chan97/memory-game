import Card from "./Card.jsx"

export default function GameBoard({pokemonInfo}) {
    return (
        <section className="board-wrapper">
            {pokemonInfo.map((pokemon) => (
                <Card key={pokemon.name} pokemonName={pokemon.name} pokemonImage={pokemon.image} />
            ))}
        </section>
    )
}