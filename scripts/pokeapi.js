/* global axios */
/* global $ */
/* global Swal */

$("#results").hide();

function NameSearch(pokemon) {
    $("#results").fadeIn(2500);
    
    let name = document.getElementById("NameInput").value.toLowerCase();

    //PokeAPI api works by having the pokemon name/Stat right behind the URL
    let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;

    $.get(pokemonurl).fail(function() {
            Swal.fire(
          'Pokémon Not Found!',
          `You may have input the incorrect name/index! Pokémon list covered up to Alola Region / Index 1-807`,
          'question'
        );
    });

    axios.get(pokemonurl)
        .then(function(response) {

            let rd = response.data;

            let pokemonfront = rd.sprites.front_default;
            let pokemonback = rd.sprites.back_default;
            let pokemonname = rd.name;
            let pokemonweight = rd.weight / 10;
            let pokemonheight = rd.height / 10;
            let pokemontype1 = rd.types[0].type.name;
            let pokemontype1url = rd.types[0].type.url;
            let pokemonid = rd.id;

            //using inner.html to display results on index.html
            $('#pokemonfront').attr("src", pokemonfront);
            $('#pokemonback').attr("src", pokemonback);
            $('#pokemonweight').html('Weight : ' + pokemonweight + 'kg');
            $('#pokemonheight').html('Height : ' + pokemonheight + 'm');
            $('#pokemonid').html(pokemonid + " ");
            $('#pokemonname').html(pokemonname);
            $('#pokemontype').html("Type: ");
            $('#pokemontype1').html(pokemontype1);
            $('#ddf').html("Double Damange From : ");
            $('#ddt').html("Double Damange To : ");
            $('#hdf').html("Half Damange From : ");
            $('#hdt').html("Half Damange To : ");
            $('#ndf').html("No Damange From : ");
            $('#ndt').html("No Damange To : ");

            //combining the stat & stat result 
            let pokemonstatname1 = rd.stats[0].stat.name;
            let pokemonstatname2 = rd.stats[1].stat.name;
            let pokemonstatname3 = rd.stats[2].stat.name;
            let pokemonstatname4 = rd.stats[3].stat.name;
            let pokemonstatname5 = rd.stats[4].stat.name;
            let pokemonstatname6 = rd.stats[5].stat.name;

            let pokemonstat1 = rd.stats[0].base_stat;
            let pokemonstat2 = rd.stats[1].base_stat;
            let pokemonstat3 = rd.stats[2].base_stat;
            let pokemonstat4 = rd.stats[3].base_stat;
            let pokemonstat5 = rd.stats[4].base_stat;
            let pokemonstat6 = rd.stats[5].base_stat;

            //combining all stats into usable array

            let statdata = [{ "name": pokemonstatname1, "stat": pokemonstat1 },
                { "name": pokemonstatname2, "stat": pokemonstat2 },
                { "name": pokemonstatname3, "stat": pokemonstat3 },
                { "name": pokemonstatname4, "stat": pokemonstat4 },
                { "name": pokemonstatname5, "stat": pokemonstat5 },
                { "name": pokemonstatname6, "stat": pokemonstat6 }
            ];

            let pokemontype2, pokemontype2url;
            try {
                pokemontype2 = rd.types[1].type.name;
                pokemontype2url = rd.types[1].type.url;
            }
            catch (e) {
                $('#pokemontype2').html("");
                pokemontype2 = "";
                pokemontype2url = "";
                makeGraphs(statdata);
                makeTypes1(pokemontype1url);
                $('#doubledamagefrom2').html("");
                $('#doubledamageto2').html("");
                $('#halfdamagefrom2').html("");
                $('#halfdamageto2').html("");
                $('#nodamagefrom2').html("");
                $('#nodamageto2').html("");
            }
            finally {
                if (pokemontype2 == "") {
                    $('#pokemontype2').html("");
                }else{
                    $('#pokemontype2').html(pokemontype2);
                }
            }
            makeGraphs(statdata);
            makeTypes1(pokemontype1url);
            makeTypes2(pokemontype2url);
        });

    //may want to add the "stats overview" inside
    function makeGraphs(statdata) {

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
            .group(statGroup);
        dc.renderAll();
    }

    function makeTypes1(pokemontype1url) {
        axios.get(pokemontype1url)
            .then(function(response) {
                //dr = damage relation
                let dr = response.data.damage_relations;

                //Double Damage From//
                let ddf1;
                try {
                    ddf1 = dr.double_damage_from[0].name;
                }
                catch (error) {
                    ddf1 = "";
                }

                let ddf2;
                try {
                    ddf2 = "/ " + dr.double_damage_from[1].name;
                }
                catch (error) {
                    ddf2 = "";
                }

                let ddf3;
                try {
                    ddf3 = "/ " + dr.double_damage_from[2].name;
                }
                catch (error) {
                    ddf3 = "";
                }
                let ddf4;
                try {
                    ddf4 = "/ " + dr.double_damage_from[3].name;
                }
                catch (error) {
                    ddf4 = "";
                }

                let ddf5;
                try {
                    ddf5 = "/ " + dr.double_damage_from[4].name;
                }
                catch (error) {
                    ddf5 = "";
                }

                let ddf6;
                try {
                    ddf6 = "/ " + dr.double_damage_from[5].name;
                }
                catch (error) {
                    ddf6 = "";
                }
                let ddf7;
                try {
                    ddf7 = "/ " + dr.double_damage_from[6].name;
                }
                catch (error) {
                    ddf7 = "";
                }
                if (ddf1 == "") {
                    $('#doubledamagefrom').html("");
                }
                else {
                    $('#doubledamagefrom').html(ddf1 + " " + ddf2 + " " + ddf3 + " " + ddf4 + " " + ddf5 + " " + ddf6 + " " + ddf7);
                }

                //Double Damage To//
                               let ddt1;
                try {
                    ddt1 = dr.double_damage_to[0].name;
                }
                catch (error) {
                    ddt1 = "";
                }

                let ddt2;
                try {
                    ddt2 = "/ " + dr.double_damage_to[1].name;
                }
                catch (error) {
                    ddt2 = "";
                }

                let ddt3;
                try {
                    ddt3 = "/ " + dr.double_damage_to[2].name;
                }
                catch (error) {
                    ddt3 = "";
                }
                let ddt4;
                try {
                    ddt4 = "/ " + dr.double_damage_to[3].name;
                }
                catch (error) {
                    ddt4 = "";
                }

                let ddt5;
                try {
                    ddt5 = "/ " + dr.double_damage_to[4].name;
                }
                catch (error) {
                    ddt5 = "";
                }

                let ddt6;
                try {
                    ddt6 = "/ " + dr.double_damage_to[5].name;
                }
                catch (error) {
                    ddt6 = "";
                }
                let ddt7;
                try {
                    ddt7 = "/ " + dr.double_damage_to[6].name;
                }
                catch (error) {
                    ddt7 = "";
                }
                if (ddt1 == "") {
                    $('#doubledamageto').html("");
                }
                else {
                    $('#doubledamageto').html(ddt1 + " " + ddt2 + " " + ddt3 + " " + ddt4 + " " + ddt5 + " " + ddt6 + " " + ddt7);
                }


                //Half Damage From//
                let hdf1;
                try {
                    hdf1 = dr.half_damage_from[0].name;
                }
                catch (error) {
                    hdf1 = "";
                }

                let hdf2;
                try {
                    hdf2 = "/ " + dr.half_damage_from[1].name;
                }
                catch (error) {
                    hdf2 = "";
                }

                let hdf3;
                try {
                    hdf3 = "/ " + dr.half_damage_from[2].name;
                }
                catch (error) {
                    hdf3 = "";
                }
                let hdf4;
                try {
                    hdf4 = "/ " + dr.half_damage_from[3].name;
                }
                catch (error) {
                    hdf4 = "";
                }

                let hdf5;
                try {
                    hdf5 = "/ " + dr.half_damage_from[4].name;
                }
                catch (error) {
                    hdf5 = "";
                }

                let hdf6;
                try {
                    hdf6 = "/ " + dr.half_damage_from[5].name;
                }
                catch (error) {
                    hdf6 = "";
                }
                let hdf7;
                try {
                    hdf7 = "/ " + dr.half_damage_from[6].name;
                }
                catch (error) {
                    hdf7 = "";
                }
                if (hdf1 == "") {
                    $('#halfdamagefrom').html("");
                }
                else {
                    $('#halfdamagefrom').html(hdf1 + " " + hdf2 + " " + hdf3 + " " + hdf4 + " " + hdf5 + " " + hdf6 + " " + hdf7);
                }

                //Half Damage To//
                let hdt1;
                try {
                    hdt1 = dr.half_damage_to[0].name;
                }
                catch (error) {
                    hdt1 = "";
                }

                let hdt2;
                try {
                    hdt2 = "/ " + dr.half_damage_to[1].name;
                }
                catch (error) {
                    hdt2 = "";
                }

                let hdt3;
                try {
                    hdt3 = "/ " + dr.half_damage_to[2].name;
                }
                catch (error) {
                    hdt3 = "";
                }
                let hdt4;
                try {
                    hdt4 = "/ " + dr.half_damage_to[3].name;
                }
                catch (error) {
                    hdt4 = "";
                }

                let hdt5;
                try {
                    hdt5 = "/ " + dr.half_damage_to[4].name;
                }
                catch (error) {
                    hdt5 = "";
                }

                let hdt6;
                try {
                    hdt6 = "/ " + dr.half_damage_to[5].name;
                }
                catch (error) {
                    hdt6 = "";
                }
                let hdt7;
                try {
                    hdt7 = "/ " + dr.half_damage_to[6].name;
                }
                catch (error) {
                    hdt7 = "";
                }
                if (hdt1 == "") {
                    $('#halfdamageto').html("");
                }
                else {
                    $('#halfdamageto').html(hdt1 + " " + hdt2 + " " + hdt3 + " " + hdt4 + " " + hdt5 + " " + hdt6 + " " + hdt7);
                }


                //No Damage From//
                let ndf1;
                try {
                    ndf1 = dr.no_damage_from[0].name;
                }
                catch (error) {
                    ndf1 = "";
                }

                let ndf2;
                try {
                    ndf2 = "/ " + dr.no_damage_from[1].name;
                }
                catch (error) {
                    ndf2 = "";
                }

                let ndf3;
                try {
                    ndf3 = "/ " + dr.no_damage_from[2].name;
                }
                catch (error) {
                    ndf3 = "";
                }
                let ndf4;
                try {
                    ndf4 = "/" + dr.no_damage_from[3].name;
                }
                catch (error) {
                    ndf4 = "";
                }

                let ndf5;
                try {
                    ndf5 = "/ " + dr.no_damage_from[4].name;
                }
                catch (error) {
                    ndf5 = "";
                }

                let ndf6;
                try {
                    ndf6 = "/ " + dr.no_damage_from[5].name;
                }
                catch (error) {
                    ndf6 = "";
                }
                let ndf7;
                try {
                    ndf7 = "/ " + dr.no_damage_from[6].name;
                }
                catch (error) {
                    ndf7 = "";
                }
                if (ndf1 == "") {
                    $('#nodamagefrom').html("");
                }
                else {
                    $('#nodamagefrom').html(ndf1 + " " + ndf2 + " " + ndf3 + " " + ndf4 + " " + ndf5 + " " + ndf6 + " " + ndf7);
                }

                //No Damage To//
                let ndt1;
                try {
                    ndt1 = dr.no_damage_to[0].name;
                }
                catch (error) {
                    ndt1 = "";
                }

                let ndt2;
                try {
                    ndt2 = "/ " + dr.no_damage_to[1].name;
                }
                catch (error) {
                    ndt2 = "";
                }

                let ndt3;
                try {
                    ndt3 = "/ " + dr.no_damage_to[2].name;
                }
                catch (error) {
                    ndt3 = "";
                }
                let ndt4;
                try {
                    ndt4 = "/ " + dr.no_damage_to[3].name;
                }
                catch (error) {
                    ndt4 = "";
                }

                let ndt5;
                try {
                    ndt5 = "/ " + dr.no_damage_to[4].name;
                }
                catch (error) {
                    ndt5 = "";
                }

                let ndt6;
                try {
                    ndt6 = "/ " + dr.no_damage_to[5].name;
                }
                catch (error) {
                    ndt6 = "";
                }
                let ndt7;
                try {
                    ndt7 = "/ " + dr.no_damage_to[6].name;
                }
                catch (error) {
                    ndt7 = "";
                }
                if (ndt1 == "") {
                    $('#nodamageto').html("");
                }
                else {
                    $('#nodamageto').html(ndt1 + " " + ndt2 + " " + ndt3 + " " + ndt4 + " " + ndt5 + " " + ndt6 + " " + ndt7);
                }
            });
    }
    function makeTypes2(pokemontype2url) {
        axios.get(pokemontype2url)
            .then(function(response) {
                //dr = damage relation
                let dr = response.data.damage_relations;

                //Double Damage From//
                let ddf1;
                try {
                    ddf1 = dr.double_damage_from[0].name;
                }
                catch (error) {
                    ddf1 = "";
                }

                let ddf2;
                try {
                    ddf2 = "/ " + dr.double_damage_from[1].name;
                }
                catch (error) {
                    ddf2 = "";
                }

                let ddf3;
                try {
                    ddf3 = "/ " + dr.double_damage_from[2].name;
                }
                catch (error) {
                    ddf3 = "";
                }
                let ddf4;
                try {
                    ddf4 = "/ " + dr.double_damage_from[3].name;
                }
                catch (error) {
                    ddf4 = "";
                }

                let ddf5;
                try {
                    ddf5 = "/ " + dr.double_damage_from[4].name;
                }
                catch (error) {
                    ddf5 = "";
                }

                let ddf6;
                try {
                    ddf6 = "/ " + dr.double_damage_from[5].name;
                }
                catch (error) {
                    ddf6 = "";
                }
                let ddf7;
                try {
                    ddf7 = "/ " + dr.double_damage_from[6].name;
                }
                catch (error) {
                    ddf7 = "";
                }
                if (ddf1 == "") {
                    $('#doubledamagefrom2').html("");
                }
                else {
                    $('#doubledamagefrom2').html(ddf1 + " " + ddf2 + " " + ddf3 + " " + ddf4 + " " + ddf5 + " " + ddf6 + " " + ddf7);
                }

                //Double Damage To//
                let ddt1;
                try {
                    ddt1 = dr.double_damage_to[0].name;
                }
                catch (error) {
                    ddt1 = "";
                }

                let ddt2;
                try {
                    ddt2 = "/ " + dr.double_damage_to[1].name;
                }
                catch (error) {
                    ddt2 = "";
                }

                let ddt3;
                try {
                    ddt3 = "/ " + dr.double_damage_to[2].name;
                }
                catch (error) {
                    ddt3 = "";
                }
                let ddt4;
                try {
                    ddt4 = "/ " + dr.double_damage_to[3].name;
                }
                catch (error) {
                    ddt4 = "";
                }

                let ddt5;
                try {
                    ddt5 = "/ " + dr.double_damage_to[4].name;
                }
                catch (error) {
                    ddt5 = "";
                }

                let ddt6;
                try {
                    ddt6 = "/ " + dr.double_damage_to[5].name;
                }
                catch (error) {
                    ddt6 = "";
                }
                let ddt7;
                try {
                    ddt7 = "/ " + dr.double_damage_to[6].name;
                }
                catch (error) {
                    ddt7 = "";
                }
                if (ddt1 == "") {
                    $('#doubledamageto2').html("");
                }
                else {
                    $('#doubledamageto2').html(ddt1 + " " + ddt2 + " " + ddt3 + " " + ddt4 + " " + ddt5 + " " + ddt6 + " " + ddt7);
                }


                //Half Damage From//
                let hdf1;
                try {
                    hdf1 = dr.half_damage_from[0].name;
                }
                catch (error) {
                    hdf1 = "";
                }

                let hdf2;
                try {
                    hdf2 = "/ " + dr.half_damage_from[1].name;
                }
                catch (error) {
                    hdf2 = "";
                }

                let hdf3;
                try {
                    hdf3 = "/ " + dr.half_damage_from[2].name;
                }
                catch (error) {
                    hdf3 = "";
                }
                let hdf4;
                try {
                    hdf4 = "/ " + dr.half_damage_from[3].name;
                }
                catch (error) {
                    hdf4 = "";
                }

                let hdf5;
                try {
                    hdf5 = "/ " + dr.half_damage_from[4].name;
                }
                catch (error) {
                    hdf5 = "";
                }

                let hdf6;
                try {
                    hdf6 = "/ " + dr.half_damage_from[5].name;
                }
                catch (error) {
                    hdf6 = "";
                }
                let hdf7;
                try {
                    hdf7 = "/ " + dr.half_damage_from[6].name;
                }
                catch (error) {
                    hdf7 = "";
                }
                if (hdf1 == "") {
                    $('#halfdamagefrom2').html("");
                }
                else {
                    $('#halfdamagefrom2').html(hdf1 + " " + hdf2 + " " + hdf3 + " " + hdf4 + " " + hdf5 + " " + hdf6 + " " + hdf7);
                }

                //Half Damage To//
                let hdt1;
                try {
                    hdt1 = dr.half_damage_to[0].name;
                }
                catch (error) {
                    hdt1 = "";
                }

                let hdt2;
                try {
                    hdt2 = "/ " + dr.half_damage_to[1].name;
                }
                catch (error) {
                    hdt2 = "";
                }

                let hdt3;
                try {
                    hdt3 = "/ " + dr.half_damage_to[2].name;
                }
                catch (error) {
                    hdt3 = "";
                }
                let hdt4;
                try {
                    hdt4 = "/ " + dr.half_damage_to[3].name;
                }
                catch (error) {
                    hdt4 = "";
                }

                let hdt5;
                try {
                    hdt5 = "/ " + dr.half_damage_to[4].name;
                }
                catch (error) {
                    hdt5 = "";
                }

                let hdt6;
                try {
                    hdt6 = "/ " + dr.half_damage_to[5].name;
                }
                catch (error) {
                    hdt6 = "";
                }
                let hdt7;
                try {
                    hdt7 = "/ " + dr.half_damage_to[6].name;
                }
                catch (error) {
                    hdt7 = "";
                }
                if (hdt1 == "") {
                    $('#halfdamageto2').html("");
                }
                else {
                    $('#halfdamageto2').html(hdt1 + " " + hdt2 + " " + hdt3 + " " + hdt4 + " " + hdt5 + " " + hdt6 + " " + hdt7);
                }


                //No Damage From//
                let ndf1;
                try {
                    ndf1 = dr.no_damage_from[0].name;
                }
                catch (error) {
                    ndf1 = "";
                }

                let ndf2;
                try {
                    ndf2 = "/ " + dr.no_damage_from[1].name;
                }
                catch (error) {
                    ndf2 = "";
                }

                let ndf3;
                try {
                    ndf3 = "/ " + dr.no_damage_from[2].name;
                }
                catch (error) {
                    ndf3 = "";
                }
                let ndf4;
                try {
                    ndf4 = "/" + dr.no_damage_from[3].name;
                }
                catch (error) {
                    ndf4 = "";
                }

                let ndf5;
                try {
                    ndf5 = "/ " + dr.no_damage_from[4].name;
                }
                catch (error) {
                    ndf5 = "";
                }

                let ndf6;
                try {
                    ndf6 = "/ " + dr.no_damage_from[5].name;
                }
                catch (error) {
                    ndf6 = "";
                }
                let ndf7;
                try {
                    ndf7 = "/ " + dr.no_damage_from[6].name;
                }
                catch (error) {
                    ndf7 = "";
                }
                if (ndf1 == "") {
                    $('#nodamagefrom2').html("");
                }
                else {
                    $('#nodamagefrom2').html(ndf1 + " " + ndf2 + " " + ndf3 + " " + ndf4 + " " + ndf5 + " " + ndf6 + " " + ndf7);
                }

                //No Damage To//
                let ndt1;
                try {
                    ndt1 = dr.no_damage_to[0].name;
                }
                catch (error) {
                    ndt1 = "";
                }

                let ndt2;
                try {
                    ndt2 = "/ " + dr.no_damage_to[1].name;
                }
                catch (error) {
                    ndt2 = "";
                }

                let ndt3;
                try {
                    ndt3 = "/ " + dr.no_damage_to[2].name;
                }
                catch (error) {
                    ndt3 = "";
                }
                let ndt4;
                try {
                    ndt4 = "/ " + dr.no_damage_to[3].name;
                }
                catch (error) {
                    ndt4 = "";
                }

                let ndt5;
                try {
                    ndt5 = "/ " + dr.no_damage_to[4].name;
                }
                catch (error) {
                    ndt5 = "";
                }

                let ndt6;
                try {
                    ndt6 = "/ " + dr.no_damage_to[5].name;
                }
                catch (error) {
                    ndt6 = "";
                }
                let ndt7;
                try {
                    ndt7 = "/ " + dr.no_damage_to[6].name;
                }
                catch (error) {
                    ndt7 = "";
                }
                if (ndt1 == "") {
                    $('#nodamageto2').html("");
                }
                else {
                    $('#nodamageto2').html(ndt1 + " " + ndt2 + " " + ndt3 + " " + ndt4 + " " + ndt5 + " " + ndt6 + " " + ndt7);
                }
            });
        }
}
