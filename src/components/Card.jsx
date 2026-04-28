export default function Card({pokemonName, pokemonImage, pokemonId, handleClick}) {

    const capitalizeName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        <button className="invisible-button" onClick={() => handleClick(pokemonId)}>
        <div className="card">
            <div className="image-container">
                <img src={pokemonImage}></img>
            </div>
            <div className="name-container">
                <p>{capitalizeName(pokemonName)}</p>
            </div>
        </div>
        </button>
    )
}