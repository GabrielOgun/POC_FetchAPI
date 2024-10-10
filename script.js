
async function fetchPkm() {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Não existe esse pokemon");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
       const imgElement = document.getElementById("pokemonSprite");
       imgElement.src = pokemonSprite;
       imgElement.style.display = "block";

    }
    catch(error){
        console.error(error);
    }
}