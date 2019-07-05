/* global axios */
/* global $ */

function NameSearch() {
    
    let name = document.getElementById("NameInput").value.toLowerCase();
    if (name > 807){
        alert(`You have exceeded the Pokemon Index!
Hint : The Pokedex covered every Pokemon until the Alola Region`);
    }

    //PokeAPI api works by having the pokemon name/Stat right behind the URL
    let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;

    axios.get(pokemonurl)
        .then(function(response) {
            // console.log(response.data);
            let pokemonfront = response.data.sprites.front_default;
            let pokemonback = response.data.sprites.back_default;
            let pokemonname = response.data.name;
            let pokemonweight = response.data.weight / 10;
            let pokemonheight = response.data.height / 10;
            let pokemontype1 = response.data.types[0].type.name;
            let pokemonid = response.data.id;

            //using inner.html to display results on html
            $('#pokemonfront').attr("src", pokemonfront);
            $('#pokemonback').attr("src", pokemonback);
            $('#pokemonweight').html('Weight :' + pokemonweight + 'kg');
            $('#pokemonheight').html('Height :' + pokemonheight + 'm');
            $('#pokemonid').html("#" + pokemonid);
            $('#pokemonname').html(pokemonname);
            $('#pokemontype1').html('Type :' + pokemontype1);

            //combining the stat & stat result 
            let pokemonstatname1 = response.data.stats[0].stat.name;
            let pokemonstatname2 = response.data.stats[1].stat.name;
            let pokemonstatname3 = response.data.stats[2].stat.name;
            let pokemonstatname4 = response.data.stats[3].stat.name;
            let pokemonstatname5 = response.data.stats[4].stat.name;
            let pokemonstatname6 = response.data.stats[5].stat.name;

            let pokemonstat1 = response.data.stats[0].base_stat;
            let pokemonstat2 = response.data.stats[1].base_stat;
            let pokemonstat3 = response.data.stats[2].base_stat;
            let pokemonstat4 = response.data.stats[3].base_stat;
            let pokemonstat5 = response.data.stats[4].base_stat;
            let pokemonstat6 = response.data.stats[5].base_stat;

            //combining all stats into usable array

            let statdata = [{ "name": pokemonstatname1, "stat": pokemonstat1 },
                { "name": pokemonstatname2, "stat": pokemonstat2 },
                { "name": pokemonstatname3, "stat": pokemonstat3 },
                { "name": pokemonstatname4, "stat": pokemonstat4 },
                { "name": pokemonstatname5, "stat": pokemonstat5 },
                { "name": pokemonstatname6, "stat": pokemonstat6 }
            ];

            try {
                response.data.types[1].type.name;
            }
            catch (e) {
                $('#pokemontype2').html("");
                makeGraphs(statdata);
            }

            let pokemontype2 = response.data.types[1].type.name;

            $('#pokemontype2').html('/' + pokemontype2);

            makeGraphs(statdata);
        })
        .catch(function (error) {
        console.log(error);
        });
        
    //may want to add the "stats overview" inside
    function makeGraphs(statdata) {
        // console.log(_.pluck(statdata,"name"));
        var cf = crossfilter(statdata)

        var nameDim = cf.dimension(function(d) { return d.name; });
        var statGroup = nameDim.group().reduceSum(function(d) { return d.stat; });

        var statesPieChart = dc.pieChart("#pokemonstatchart")
            .width(384)
            .height(300)
            .innerRadius(60)
            .externalLabels(20)
            .externalRadiusPadding(20)
            .drawPaths(true)
            .dimension(nameDim)
            .group(statGroup)
        //   .legend(dc.legend());

        dc.renderAll()

    }
}
