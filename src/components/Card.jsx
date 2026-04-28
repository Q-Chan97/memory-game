export default function Card({pokemonName, pokemonImage}) {

    const capitalizeName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        <div className="card">
            <div className="image-container">
                <img src={pokemonImage}></img>
            </div>
            <div className="name-container">
                <p>{capitalizeName(pokemonName)}</p>
            </div>
        </div>
    )
}