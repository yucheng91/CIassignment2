/* global axios */
/* global $ */

function NameSearch() {
    
    let name = document.getElementById("NameInput").value.toLowerCase();

    //PokeAPI api works by having the pokemon name/Stat right behind the URL
    let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;
    
    $.get(pokemonurl).fail(function () {
        alert(
`You may have input the incorrect name/index
Pokemon list covered up to Alola Region
Hint : index 1-807`);
    });

    axios.get(pokemonurl)
        .then(function(response) {
            // console.log(response.data);
            let pokemonfront = response.data.sprites.front_default;
            let pokemonback = response.data.sprites.back_default;
            let pokemonname = response.data.name;
            let pokemonweight = response.data.weight / 10;
            let pokemonheight = response.data.height / 10;
            let pokemontype1 = response.data.types[0].type.name;
            let pokemontype1url = response.data.types[0].type.url;
            let pokemonid = response.data.id;
            
            console.log(pokemontype1url);

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
                response.data.types[1].type.url;
            }
            catch (e) {
                $('#pokemontype2').html("");
                makeGraphs(statdata);
                makeTypes1(pokemontype1url)
            }

            let pokemontype2 = response.data.types[1].type.name;
            let pokemontype2url = response.data.types[1].type.url;

            $('#pokemontype2').html('/' + pokemontype2);
            
            console.log(pokemontype2url)
            
            makeGraphs(statdata);
            makeTypes1(pokemontype1url)
            makeTypes2(pokemontype2url)
        })
        // .catch(function (error) {
        // console.log(error);
        // });
        
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
            .externalLabels(15)
            .externalRadiusPadding(30)
            .drawPaths(true)
            .dimension(nameDim)
            .group(statGroup)
        //   .legend(dc.legend());
        dc.renderAll();
    }
    
    function makeTypes1(pokemontype1url){
        axios.get(pokemontype1url)
        .then(function(response){
            //dr = damage relation
            let dr = response.data.damage_relations;
            
            //Double Damage From//
            let ddf1;
            try {
                ddf1 = dr.double_damage_from[0].name;
            } 
            catch(error){
                ddf1="";
            }
            
            let ddf2;
            try {
                ddf2 = dr.double_damage_from[1].name;
            } 
            catch(error){
                ddf2 = "";
            }
            
            let ddf3;
            try {
                ddf3 = dr.double_damage_from[2].name;
            } 
            catch(error){
                ddf3 = "";
            }
            
            if (ddf1 == "") {
                $('#doubledamagefrom').html("")
            }else{
            $('#doubledamagefrom').html("Double Damage from : " + ddf1 + " " + ddf2 + " " + ddf3);
            }
            
            //Double Damage To//
            let ddt1;
            try {
                ddt1 = dr.double_damage_to[0].name;
            } 
            catch(error){
                ddt1="";
            }
            
            let ddt2;
            try {
                ddt2 = dr.double_damage_to[1].name;
            } 
            catch(error){
                ddt2 = "";
            }
            
            let ddt3;
            try {
                ddt3 = dr.double_damage_to[2].name;
            } 
            catch(error){
                ddt3 = "";
            }
            
            if (ddt1 == "") {
                $('#doubledamageto').html("");
            }else{
            $('#doubledamageto').html("Double Damage to : " + ddt1 + " " + ddt2 + " " + ddt3);
            }
            
            //Half Damage From//
            
            //Half Damage To//
            
            //No Damage From//
            
            //No Damage To//
            
            // let double_damage_to = dr.double_damage_to;
            // let half_damage_from = dr.half_damage_from;
            // let half_damage_to = dr.half_damage_to;       
            // let no_damage_from = dr.no_damage_from;
            // let no_damage_to = dr.no_damage_to;

            // console.log (double_damage_to);
            // console.log (half_damage_from);
            // console.log (half_damage_to);
            // console.log (no_damage_from);
            // console.log (no_damage_to);
            
            })      
    }
    
    function makeTypes2(pokemontype2url){
        console.log(pokemontype2url)
    }
}