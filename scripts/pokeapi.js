/* global axios */
/* global $ */

function NameSearch(){
    let name = document.getElementById("NameInput").value.toLowerCase();
    //PokeAPI api works by having the pokemon name right behind the URL
    let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;
    
    axios.get(pokemonurl)
        .then(function(response){
            console.log(response.data)
            // console.log(response.data.name)
            let pokemonname = response.data.name;
            console.log(response.data.types[0].type.name)
            console.log(response.data.id);
            
                $("#PokemonName").append(`Name : ${pokemonname}`);
        })
}