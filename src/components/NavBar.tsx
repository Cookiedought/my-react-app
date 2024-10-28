interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBar {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];    
}

function NavBar ({pokemonIndex, setPokemonIndex, pokemonList }: NavBar) {

const handlePrev = () => {
    setPokemonIndex(pokemonIndex -1);
};

const handleNext = () => {
    setPokemonIndex(pokemonIndex +1);
};

return (
    <div>
        {pokemonIndex > 0 ? (
            <button onClick={handlePrev}>Précédent</button>
        ) : (
            <button style={{ display: "none"}}></button>
        )}

        {pokemonIndex < pokemonList.length -1 ? (
        <button onClick={handleNext}>Suivant</button>
        ) : (
        <button style={{ display: "none"}}></button>
        )} 
        
    </div>
);
}

export default NavBar;