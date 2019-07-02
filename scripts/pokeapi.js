/* global axios */

function NameSearch(){
    let name = document.getElementById("NameInput").value;
    //PokeAPI api works by having the pokemon name right behind the URL
    let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;
    
    axios.get(pokemonurl)
        .then(function(response){
            console.log(response.data)
            console.log(response.data.id)
        })
}