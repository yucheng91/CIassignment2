/* global axios */
/* global $ */

function NameSearch(){
    let name = document.getElementById("NameInput").value.toLowerCase();
    //PokeAPI api works by having the pokemon name right behind the URL
    let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;
    
    axios.get(pokemonurl)
        .then(function(response){
            console.log(response.data);
            // console.log(response.data.name)
            let pokemonfront = response.data.sprites.front_default;
            let pokemonback = response.data.sprites.back_default;
            let pokemonname = response.data.name;
            let pokemontype = response.data.types[0].type.name;
            let pokemonid = response.data.id;
            
                //try inner HTML;
            $('#pokemonfront').attr("src",pokemonfront)
            $('#pokemonback').attr("src",pokemonback)
            $('#pokemonid').html(pokemonid);    
            $('#pokemonname').html(pokemonname);
            $('#pokemontype').html(pokemontype);
            
        })
}