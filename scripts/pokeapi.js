/* global axios */
/* global $ */

function NameSearch(){
    let name = document.getElementById("NameInput").value.toLowerCase();
    //PokeAPI api works by having the pokemon name/number right behind the URL
    let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;
    
    axios.get(pokemonurl)
        .then(function(response){
            console.log(response.data);
            let pokemonfront = response.data.sprites.front_default;
            let pokemonback = response.data.sprites.back_default;
            let pokemonname = response.data.name;
            let pokemonweight = response.data.weight / 100;
            let pokemonheight = response.data.height * 10
            let pokemontype = response.data.types[0].type.name;
            let pokemonid = response.data.id;
            
            //using inner.html to display results on html
            $('#pokemonfront').attr("src",pokemonfront);
            $('#pokemonback').attr("src",pokemonback);
            $('#pokemonweight').html(pokemonweight + 'kg');
            $('#pokemonheight').html(pokemonheight + 'cm');
            $('#pokemonid').html(pokemonid);    
            $('#pokemonname').html(pokemonname);
            $('#pokemontype').html(pokemontype);

            let pokemonspeed = response.data.stats[0].base_stat;
            let pokemonspecialdefense = response.data.stats[1].base_stat;
            let pokemonspecialattack = response.data.stats[2].base_stat;
            let pokemondefense = response.data.stats[3].base_stat;
            let pokemonattack = response.data.stats[4].base_stat;
            let pokemonhp = response.data.stats[5].base_stat;
            
            let statdata = {
                "Speed": pokemonspeed,
                "Special Defense" : pokemonspecialdefense,
                "Special Attack" : pokemonspecialattack,
                "Defense" : pokemondefense,
                "Attack" : pokemonattack,
                "HP" : pokemonhp
            }
            
            
        })
}