{"filter":false,"title":"pokeapi.js","tooltip":"/scripts/pokeapi.js","undoManager":{"mark":87,"position":87,"stack":[[{"start":{"row":26,"column":36},"end":{"row":26,"column":47},"action":"remove","lines":["'Type :' + "],"id":2}],[{"start":{"row":40,"column":11},"end":{"row":41,"column":0},"action":"remove","lines":["",""],"id":3},{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"remove","lines":[" "]},{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"remove","lines":[" "]},{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"remove","lines":[" "]},{"start":{"row":40,"column":4},"end":{"row":40,"column":8},"action":"remove","lines":["    "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"remove","lines":["",""],"id":4}],[{"start":{"row":0,"column":0},"end":{"row":90,"column":0},"action":"remove","lines":["/* global axios */","/* global $ */","","function NameSearch() {","    let name = document.getElementById(\"NameInput\").value.toLowerCase();","    //PokeAPI api works by having the pokemon name/Stat right behind the URL","    let pokemonurl = \"https://pokeapi.co/api/v2/pokemon/\" + name;","","    axios.get(pokemonurl)","        .then(function(response) {","            // console.log(response.data);","            let pokemonfront = response.data.sprites.front_default;","            let pokemonback = response.data.sprites.back_default;","            let pokemonname = response.data.name;","            let pokemonweight = response.data.weight / 10;","            let pokemonheight = response.data.height / 10;","            let pokemontype1 = response.data.types[0].type.name;","            let pokemonid = response.data.id;","","            //using inner.html to display results on html","            $('#pokemonfront').attr(\"src\", pokemonfront);","            $('#pokemonback').attr(\"src\", pokemonback);","            $('#pokemonweight').html('Weight :' + pokemonweight + 'kg');","            $('#pokemonheight').html('Height :' + pokemonheight + 'm');","            $('#pokemonid').html(\"#\" + pokemonid);","            $('#pokemonname').html(pokemonname);","            $('#pokemontype1').html(pokemontype1);","","            try {","                response.data.types[1].type.name;","                }","            catch (e) {","                $('#pokemontype2').html(\"\");","                }","            ","            let pokemontype2 = response.data.types[1].type.name;","            ","            // error - html not refreshing","            $('#pokemontype2').html('/' + pokemontype2);","","            //combining the stat & stat result ","            let pokemonstatname1 = response.data.stats[0].stat.name;","            let pokemonstatname2 = response.data.stats[1].stat.name;","            let pokemonstatname3 = response.data.stats[2].stat.name;","            let pokemonstatname4 = response.data.stats[3].stat.name;","            let pokemonstatname5 = response.data.stats[4].stat.name;","            let pokemonstatname6 = response.data.stats[5].stat.name;","","            let pokemonstat1 = response.data.stats[0].base_stat;","            let pokemonstat2 = response.data.stats[1].base_stat;","            let pokemonstat3 = response.data.stats[2].base_stat;","            let pokemonstat4 = response.data.stats[3].base_stat;","            let pokemonstat5 = response.data.stats[4].base_stat;","            let pokemonstat6 = response.data.stats[5].base_stat;","","            //combining all stats into usable array","","            let statdata = [{ \"name\": pokemonstatname1, \"stat\": pokemonstat1 },","                { \"name\": pokemonstatname2, \"stat\": pokemonstat2 },","                { \"name\": pokemonstatname3, \"stat\": pokemonstat3 },","                { \"name\": pokemonstatname4, \"stat\": pokemonstat4 },","                { \"name\": pokemonstatname5, \"stat\": pokemonstat5 },","                { \"name\": pokemonstatname6, \"stat\": pokemonstat6 }","            ];","","            makeGraphs(statdata)","        })","","    function makeGraphs(statdata) {","        // console.log(_.pluck(statdata,\"name\"));","        var cf = crossfilter(statdata)","","        var nameDim = cf.dimension(function(d) { return d.name; });","        var statGroup = nameDim.group().reduceSum(function(d) { return d.stat; });","","        var statesPieChart = dc.pieChart(\"#pokemonstatchart\")","            .width(384)","            .height(300)","            .innerRadius(60)","            .externalLabels(20)","            .externalRadiusPadding(20)","            .drawPaths(true)","            .dimension(nameDim)","            .group(statGroup)","        //   .legend(dc.legend());","","        dc.renderAll()","","    }","}",""],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":91,"column":1},"action":"insert","lines":["/* global axios */","/* global $ */","","function NameSearch() {","    let name = document.getElementById(\"NameInput\").value.toLowerCase();","    //PokeAPI api works by having the pokemon name/Stat right behind the URL","    let pokemonurl = \"https://pokeapi.co/api/v2/pokemon/\" + name;","","    axios.get(pokemonurl)","        .then(function(response) {","            // console.log(response.data);","            let pokemonfront = response.data.sprites.front_default;","            let pokemonback = response.data.sprites.back_default;","            let pokemonname = response.data.name;","            let pokemonweight = response.data.weight / 10;","            let pokemonheight = response.data.height / 10;","            let pokemontype1 = response.data.types[0].type.name;","            let pokemonid = response.data.id;","","            //using inner.html to display results on html","            $('#pokemonfront').attr(\"src\", pokemonfront);","            $('#pokemonback').attr(\"src\", pokemonback);","            $('#pokemonweight').html('Weight :' + pokemonweight + 'kg');","            $('#pokemonheight').html('Height :' + pokemonheight + 'm');","            $('#pokemonid').html(\"#\" + pokemonid);","            $('#pokemonname').html(pokemonname);","            $('#pokemontype1').html(pokemontype1);","","            try {","                response.data.types[1].type.name;","                }","            catch (e) {","                $('#pokemontype2').html(\"\");","                }","            ","            let pokemontype2 = response.data.types[1].type.name;","            ","            // error - html not refreshing","            $('#pokemontype2').html('/' + pokemontype2);","","           ","","            //combining the stat & stat result ","            let pokemonstatname1 = response.data.stats[0].stat.name;","            let pokemonstatname2 = response.data.stats[1].stat.name;","            let pokemonstatname3 = response.data.stats[2].stat.name;","            let pokemonstatname4 = response.data.stats[3].stat.name;","            let pokemonstatname5 = response.data.stats[4].stat.name;","            let pokemonstatname6 = response.data.stats[5].stat.name;","","            let pokemonstat1 = response.data.stats[0].base_stat;","            let pokemonstat2 = response.data.stats[1].base_stat;","            let pokemonstat3 = response.data.stats[2].base_stat;","            let pokemonstat4 = response.data.stats[3].base_stat;","            let pokemonstat5 = response.data.stats[4].base_stat;","            let pokemonstat6 = response.data.stats[5].base_stat;","","            //combining all stats into usable array","","            let statdata = [{ \"name\": pokemonstatname1, \"stat\": pokemonstat1 },","                { \"name\": pokemonstatname2, \"stat\": pokemonstat2 },","                { \"name\": pokemonstatname3, \"stat\": pokemonstat3 },","                { \"name\": pokemonstatname4, \"stat\": pokemonstat4 },","                { \"name\": pokemonstatname5, \"stat\": pokemonstat5 },","                { \"name\": pokemonstatname6, \"stat\": pokemonstat6 }","            ];","","            makeGraphs(statdata)","        })","","    function makeGraphs(statdata) {","        // console.log(_.pluck(statdata,\"name\"));","        var cf = crossfilter(statdata)","","        var nameDim = cf.dimension(function(d) { return d.name; });","        var statGroup = nameDim.group().reduceSum(function(d) { return d.stat; });","","        var statesPieChart = dc.pieChart(\"#pokemonstatchart\")","            .width(384)","            .height(300)","            .innerRadius(60)","            .externalLabels(20)","            .externalRadiusPadding(20)","            .drawPaths(true)","            .dimension(nameDim)","            .group(statGroup)","        //   .legend(dc.legend());","","        dc.renderAll()","","    }","}"],"id":6}],[{"start":{"row":40,"column":11},"end":{"row":41,"column":0},"action":"remove","lines":["",""],"id":7},{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"remove","lines":[" "]},{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"remove","lines":[" "]},{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"remove","lines":[" "]},{"start":{"row":40,"column":4},"end":{"row":40,"column":8},"action":"remove","lines":["    "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"remove","lines":["",""],"id":8}],[{"start":{"row":26,"column":36},"end":{"row":26,"column":37},"action":"insert","lines":["T"],"id":68},{"start":{"row":26,"column":37},"end":{"row":26,"column":38},"action":"insert","lines":["y"]}],[{"start":{"row":26,"column":37},"end":{"row":26,"column":38},"action":"remove","lines":["y"],"id":69},{"start":{"row":26,"column":36},"end":{"row":26,"column":37},"action":"remove","lines":["T"]}],[{"start":{"row":26,"column":36},"end":{"row":26,"column":37},"action":"insert","lines":["'"],"id":70},{"start":{"row":26,"column":37},"end":{"row":26,"column":38},"action":"insert","lines":["T"]},{"start":{"row":26,"column":38},"end":{"row":26,"column":39},"action":"insert","lines":["y"]},{"start":{"row":26,"column":39},"end":{"row":26,"column":40},"action":"insert","lines":["p"]},{"start":{"row":26,"column":40},"end":{"row":26,"column":41},"action":"insert","lines":["e"]}],[{"start":{"row":26,"column":41},"end":{"row":26,"column":42},"action":"insert","lines":[" "],"id":71}],[{"start":{"row":26,"column":41},"end":{"row":26,"column":42},"action":"remove","lines":[" "],"id":72}],[{"start":{"row":26,"column":41},"end":{"row":26,"column":42},"action":"insert","lines":[" "],"id":73},{"start":{"row":26,"column":42},"end":{"row":26,"column":43},"action":"insert","lines":[":"]},{"start":{"row":26,"column":43},"end":{"row":26,"column":44},"action":"insert","lines":["'"]}],[{"start":{"row":26,"column":44},"end":{"row":26,"column":45},"action":"insert","lines":[" "],"id":74},{"start":{"row":26,"column":45},"end":{"row":26,"column":46},"action":"insert","lines":["+"]}],[{"start":{"row":26,"column":46},"end":{"row":26,"column":47},"action":"insert","lines":[" "],"id":75}],[{"start":{"row":37,"column":9},"end":{"row":37,"column":42},"action":"remove","lines":["   // error - html not refreshing"],"id":76},{"start":{"row":37,"column":8},"end":{"row":37,"column":9},"action":"remove","lines":[" "]},{"start":{"row":37,"column":4},"end":{"row":37,"column":8},"action":"remove","lines":["    "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"remove","lines":["    "]},{"start":{"row":36,"column":12},"end":{"row":37,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":37,"column":56},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":77},{"start":{"row":38,"column":0},"end":{"row":38,"column":12},"action":"insert","lines":["            "]},{"start":{"row":38,"column":12},"end":{"row":39,"column":0},"action":"insert","lines":["",""]},{"start":{"row":39,"column":0},"end":{"row":39,"column":12},"action":"insert","lines":["            "]},{"start":{"row":39,"column":12},"end":{"row":39,"column":13},"action":"insert","lines":["/"]},{"start":{"row":39,"column":13},"end":{"row":39,"column":14},"action":"insert","lines":["/"]},{"start":{"row":39,"column":14},"end":{"row":39,"column":15},"action":"insert","lines":["o"]},{"start":{"row":39,"column":15},"end":{"row":39,"column":16},"action":"insert","lines":["n"]},{"start":{"row":39,"column":16},"end":{"row":39,"column":17},"action":"insert","lines":["c"]}],[{"start":{"row":39,"column":17},"end":{"row":39,"column":18},"action":"insert","lines":["e"],"id":78}],[{"start":{"row":39,"column":18},"end":{"row":39,"column":19},"action":"insert","lines":[" "],"id":79},{"start":{"row":39,"column":19},"end":{"row":39,"column":20},"action":"insert","lines":["p"]},{"start":{"row":39,"column":20},"end":{"row":39,"column":21},"action":"insert","lines":["o"]},{"start":{"row":39,"column":21},"end":{"row":39,"column":22},"action":"insert","lines":["k"]},{"start":{"row":39,"column":22},"end":{"row":39,"column":23},"action":"insert","lines":["e"]},{"start":{"row":39,"column":23},"end":{"row":39,"column":24},"action":"insert","lines":["m"]},{"start":{"row":39,"column":24},"end":{"row":39,"column":25},"action":"insert","lines":["o"]},{"start":{"row":39,"column":25},"end":{"row":39,"column":26},"action":"insert","lines":["n"]},{"start":{"row":39,"column":26},"end":{"row":39,"column":27},"action":"insert","lines":["t"]},{"start":{"row":39,"column":27},"end":{"row":39,"column":28},"action":"insert","lines":["y"]},{"start":{"row":39,"column":28},"end":{"row":39,"column":29},"action":"insert","lines":["p"]},{"start":{"row":39,"column":29},"end":{"row":39,"column":30},"action":"insert","lines":["e"]},{"start":{"row":39,"column":30},"end":{"row":39,"column":31},"action":"insert","lines":["2"]}],[{"start":{"row":39,"column":31},"end":{"row":39,"column":32},"action":"insert","lines":[" "],"id":80},{"start":{"row":39,"column":32},"end":{"row":39,"column":33},"action":"insert","lines":["h"]},{"start":{"row":39,"column":33},"end":{"row":39,"column":34},"action":"insert","lines":["i"]},{"start":{"row":39,"column":34},"end":{"row":39,"column":35},"action":"insert","lines":["t"]},{"start":{"row":39,"column":35},"end":{"row":39,"column":36},"action":"insert","lines":["s"]}],[{"start":{"row":39,"column":36},"end":{"row":39,"column":37},"action":"insert","lines":[" "],"id":81},{"start":{"row":39,"column":37},"end":{"row":39,"column":38},"action":"insert","lines":["a"]},{"start":{"row":39,"column":38},"end":{"row":39,"column":39},"action":"insert","lines":["r"]}],[{"start":{"row":39,"column":38},"end":{"row":39,"column":39},"action":"remove","lines":["r"],"id":82},{"start":{"row":39,"column":37},"end":{"row":39,"column":38},"action":"remove","lines":["a"]}],[{"start":{"row":39,"column":37},"end":{"row":39,"column":38},"action":"insert","lines":["e"],"id":83},{"start":{"row":39,"column":38},"end":{"row":39,"column":39},"action":"insert","lines":["r"]},{"start":{"row":39,"column":39},"end":{"row":39,"column":40},"action":"insert","lines":["r"]},{"start":{"row":39,"column":40},"end":{"row":39,"column":41},"action":"insert","lines":["o"]},{"start":{"row":39,"column":41},"end":{"row":39,"column":42},"action":"insert","lines":["r"]}],[{"start":{"row":39,"column":42},"end":{"row":39,"column":43},"action":"insert","lines":[" "],"id":84},{"start":{"row":39,"column":43},"end":{"row":39,"column":44},"action":"insert","lines":["t"]},{"start":{"row":39,"column":44},"end":{"row":39,"column":45},"action":"insert","lines":["h"]},{"start":{"row":39,"column":45},"end":{"row":39,"column":46},"action":"insert","lines":["e"]}],[{"start":{"row":39,"column":46},"end":{"row":39,"column":47},"action":"insert","lines":[" "],"id":85}],[{"start":{"row":39,"column":47},"end":{"row":39,"column":48},"action":"insert","lines":["c"],"id":86}],[{"start":{"row":39,"column":47},"end":{"row":39,"column":48},"action":"remove","lines":["c"],"id":87}],[{"start":{"row":39,"column":47},"end":{"row":39,"column":48},"action":"insert","lines":["p"],"id":88},{"start":{"row":39,"column":48},"end":{"row":39,"column":49},"action":"insert","lines":["i"]},{"start":{"row":39,"column":49},"end":{"row":39,"column":50},"action":"insert","lines":["e"]}],[{"start":{"row":39,"column":50},"end":{"row":39,"column":51},"action":"insert","lines":[" "],"id":89},{"start":{"row":39,"column":51},"end":{"row":39,"column":52},"action":"insert","lines":["c"]},{"start":{"row":39,"column":52},"end":{"row":39,"column":53},"action":"insert","lines":["h"]},{"start":{"row":39,"column":53},"end":{"row":39,"column":54},"action":"insert","lines":["a"]},{"start":{"row":39,"column":54},"end":{"row":39,"column":55},"action":"insert","lines":["r"]},{"start":{"row":39,"column":55},"end":{"row":39,"column":56},"action":"insert","lines":["t"]}],[{"start":{"row":39,"column":56},"end":{"row":39,"column":57},"action":"insert","lines":[" "],"id":90},{"start":{"row":39,"column":57},"end":{"row":39,"column":58},"action":"insert","lines":["n"]},{"start":{"row":39,"column":58},"end":{"row":39,"column":59},"action":"insert","lines":["o"]},{"start":{"row":39,"column":59},"end":{"row":39,"column":60},"action":"insert","lines":["t"]}],[{"start":{"row":39,"column":60},"end":{"row":39,"column":61},"action":"insert","lines":[" "],"id":91},{"start":{"row":39,"column":61},"end":{"row":39,"column":62},"action":"insert","lines":["u"]},{"start":{"row":39,"column":62},"end":{"row":39,"column":63},"action":"insert","lines":["p"]},{"start":{"row":39,"column":63},"end":{"row":39,"column":64},"action":"insert","lines":["d"]},{"start":{"row":39,"column":64},"end":{"row":39,"column":65},"action":"insert","lines":["a"]},{"start":{"row":39,"column":65},"end":{"row":39,"column":66},"action":"insert","lines":["t"]},{"start":{"row":39,"column":66},"end":{"row":39,"column":67},"action":"insert","lines":["i"]},{"start":{"row":39,"column":67},"end":{"row":39,"column":68},"action":"insert","lines":["n"]}],[{"start":{"row":39,"column":68},"end":{"row":39,"column":69},"action":"insert","lines":[" "],"id":92}],[{"start":{"row":39,"column":68},"end":{"row":39,"column":69},"action":"remove","lines":[" "],"id":93}],[{"start":{"row":39,"column":68},"end":{"row":39,"column":69},"action":"insert","lines":["g"],"id":94},{"start":{"row":39,"column":69},"end":{"row":39,"column":70},"action":"insert","lines":["."]}],[{"start":{"row":39,"column":69},"end":{"row":39,"column":70},"action":"remove","lines":["."],"id":95}],[{"start":{"row":34,"column":0},"end":{"row":35,"column":64},"action":"remove","lines":["            ","            let pokemontype2 = response.data.types[1].type.name;"],"id":96}],[{"start":{"row":27,"column":0},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":97}],[{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"insert","lines":["    "],"id":98}],[{"start":{"row":28,"column":4},"end":{"row":28,"column":8},"action":"insert","lines":["    "],"id":99}],[{"start":{"row":28,"column":8},"end":{"row":28,"column":12},"action":"insert","lines":["    "],"id":100}],[{"start":{"row":28,"column":12},"end":{"row":29,"column":64},"action":"insert","lines":["            ","            let pokemontype2 = response.data.types[1].type.name;"],"id":101}],[{"start":{"row":29,"column":64},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":102},{"start":{"row":30,"column":0},"end":{"row":30,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":26,"column":61},"end":{"row":27,"column":0},"action":"remove","lines":["",""],"id":103},{"start":{"row":26,"column":60},"end":{"row":26,"column":61},"action":"remove","lines":[";"]}],[{"start":{"row":37,"column":8},"end":{"row":37,"column":12},"action":"remove","lines":["    "],"id":104},{"start":{"row":37,"column":4},"end":{"row":37,"column":8},"action":"remove","lines":["    "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"remove","lines":["    "]},{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":28,"column":0},"end":{"row":29,"column":12},"action":"remove","lines":["            let pokemontype2 = response.data.types[1].type.name;","            "],"id":105}],[{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":106}],[{"start":{"row":36,"column":0},"end":{"row":37,"column":12},"action":"insert","lines":["            let pokemontype2 = response.data.types[1].type.name;","            "],"id":107}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["l"],"id":108},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["e"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["t"]}],[{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":[" "],"id":109}],[{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"remove","lines":[" "],"id":110},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"remove","lines":["t"]},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"remove","lines":["e"]},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"remove","lines":["l"]}],[{"start":{"row":34,"column":17},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":111},{"start":{"row":35,"column":0},"end":{"row":35,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":35,"column":12},"end":{"row":35,"column":16},"action":"remove","lines":["    "],"id":112}],[{"start":{"row":35,"column":12},"end":{"row":35,"column":13},"action":"insert","lines":["f"],"id":113},{"start":{"row":35,"column":13},"end":{"row":35,"column":14},"action":"insert","lines":["i"]},{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"insert","lines":["n"]},{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":["a"]},{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"insert","lines":["l"]},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":["l"]},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["y"]}],[{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"insert","lines":["{"],"id":114}],[{"start":{"row":68,"column":32},"end":{"row":69,"column":0},"action":"insert","lines":["",""],"id":115},{"start":{"row":69,"column":0},"end":{"row":69,"column":12},"action":"insert","lines":["            "]},{"start":{"row":69,"column":12},"end":{"row":69,"column":13},"action":"insert","lines":["}"]}],[{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"remove","lines":["            finally{",""],"id":116},{"start":{"row":34,"column":17},"end":{"row":35,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":34,"column":17},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":117},{"start":{"row":35,"column":0},"end":{"row":35,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":68,"column":12},"end":{"row":68,"column":13},"action":"remove","lines":["}"],"id":118},{"start":{"row":68,"column":8},"end":{"row":68,"column":12},"action":"remove","lines":["    "]},{"start":{"row":68,"column":4},"end":{"row":68,"column":8},"action":"remove","lines":["    "]},{"start":{"row":68,"column":0},"end":{"row":68,"column":4},"action":"remove","lines":["    "]},{"start":{"row":67,"column":32},"end":{"row":68,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":34,"column":17},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":119},{"start":{"row":35,"column":0},"end":{"row":35,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":35,"column":12},"end":{"row":35,"column":16},"action":"remove","lines":["    "],"id":120}],[{"start":{"row":35,"column":12},"end":{"row":35,"column":13},"action":"insert","lines":["f"],"id":121},{"start":{"row":35,"column":13},"end":{"row":35,"column":14},"action":"insert","lines":["i"]},{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"insert","lines":["n"]},{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":["a"]},{"start":{"row":35,"column":16},"end":{"row":35,"column":17},"action":"insert","lines":["l"]},{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":["l"]},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["y"]}],[{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"insert","lines":[" "],"id":122},{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"insert","lines":["{"]}],[{"start":{"row":35,"column":21},"end":{"row":37,"column":13},"action":"insert","lines":["","                ","            }"],"id":123}],[{"start":{"row":36,"column":16},"end":{"row":36,"column":17},"action":"insert","lines":["m"],"id":124},{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"insert","lines":["a"]},{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"insert","lines":["k"]},{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"insert","lines":["e"]},{"start":{"row":36,"column":20},"end":{"row":36,"column":21},"action":"insert","lines":["G"]},{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":["r"]},{"start":{"row":36,"column":22},"end":{"row":36,"column":23},"action":"insert","lines":["a"]},{"start":{"row":36,"column":23},"end":{"row":36,"column":24},"action":"insert","lines":["p"]},{"start":{"row":36,"column":24},"end":{"row":36,"column":25},"action":"insert","lines":["h"]},{"start":{"row":36,"column":25},"end":{"row":36,"column":26},"action":"insert","lines":["s"]}],[{"start":{"row":36,"column":26},"end":{"row":36,"column":28},"action":"insert","lines":["()"],"id":125}],[{"start":{"row":36,"column":27},"end":{"row":36,"column":28},"action":"insert","lines":["s"],"id":126},{"start":{"row":36,"column":28},"end":{"row":36,"column":29},"action":"insert","lines":["t"]},{"start":{"row":36,"column":29},"end":{"row":36,"column":30},"action":"insert","lines":["a"]},{"start":{"row":36,"column":30},"end":{"row":36,"column":31},"action":"insert","lines":["t"]},{"start":{"row":36,"column":31},"end":{"row":36,"column":32},"action":"insert","lines":["d"]},{"start":{"row":36,"column":32},"end":{"row":36,"column":33},"action":"insert","lines":["a"]},{"start":{"row":36,"column":33},"end":{"row":36,"column":34},"action":"insert","lines":["t"]},{"start":{"row":36,"column":34},"end":{"row":36,"column":35},"action":"insert","lines":["a"]}],[{"start":{"row":36,"column":36},"end":{"row":36,"column":37},"action":"insert","lines":[";"],"id":127}],[{"start":{"row":35,"column":0},"end":{"row":37,"column":13},"action":"remove","lines":["            finally {","                makeGraphs(statdata);","            }"],"id":128},{"start":{"row":34,"column":17},"end":{"row":35,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":40,"column":57},"end":{"row":40,"column":58},"action":"insert","lines":["w"],"id":129},{"start":{"row":40,"column":58},"end":{"row":40,"column":59},"action":"insert","lines":["i"]},{"start":{"row":40,"column":59},"end":{"row":40,"column":60},"action":"insert","lines":["l"]},{"start":{"row":40,"column":60},"end":{"row":40,"column":61},"action":"insert","lines":["l"]}],[{"start":{"row":40,"column":61},"end":{"row":40,"column":62},"action":"insert","lines":[" "],"id":130},{"start":{"row":40,"column":62},"end":{"row":40,"column":63},"action":"insert","lines":["n"]}],[{"start":{"row":40,"column":62},"end":{"row":40,"column":63},"action":"remove","lines":["n"],"id":131}],[{"start":{"row":40,"column":66},"end":{"row":40,"column":67},"action":"insert","lines":["b"],"id":132},{"start":{"row":40,"column":67},"end":{"row":40,"column":68},"action":"insert","lines":["e"]}],[{"start":{"row":40,"column":68},"end":{"row":40,"column":69},"action":"insert","lines":[" "],"id":133}],[{"start":{"row":33,"column":44},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":134},{"start":{"row":34,"column":0},"end":{"row":34,"column":16},"action":"insert","lines":["                "]},{"start":{"row":34,"column":16},"end":{"row":34,"column":17},"action":"insert","lines":["m"]},{"start":{"row":34,"column":17},"end":{"row":34,"column":18},"action":"insert","lines":["a"]}],[{"start":{"row":34,"column":18},"end":{"row":34,"column":19},"action":"insert","lines":["k"],"id":135},{"start":{"row":34,"column":19},"end":{"row":34,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":34,"column":16},"end":{"row":34,"column":20},"action":"remove","lines":["make"],"id":136},{"start":{"row":34,"column":16},"end":{"row":34,"column":28},"action":"insert","lines":["makeGraphs()"]}],[{"start":{"row":34,"column":27},"end":{"row":34,"column":29},"action":"insert","lines":["()"],"id":137}],[{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["="],"id":153},{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["="]}],[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"remove","lines":["="],"id":154},{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"remove","lines":["="]},{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"remove","lines":[")"]},{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"remove","lines":[")"]},{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"remove","lines":["("]}],[{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"insert","lines":[")"],"id":155},{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":[";"]}],[{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"insert","lines":["s"],"id":156},{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":["t"]},{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":["a"]},{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["t"]},{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["a"]},{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["d"]}],[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"remove","lines":["d"],"id":157},{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"remove","lines":["a"]}],[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["d"],"id":158},{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["a"]},{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"insert","lines":["t"]},{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"insert","lines":["a"]}],[{"start":{"row":42,"column":0},"end":{"row":67,"column":0},"action":"remove","lines":["","            //combining the stat & stat result ","            let pokemonstatname1 = response.data.stats[0].stat.name;","            let pokemonstatname2 = response.data.stats[1].stat.name;","            let pokemonstatname3 = response.data.stats[2].stat.name;","            let pokemonstatname4 = response.data.stats[3].stat.name;","            let pokemonstatname5 = response.data.stats[4].stat.name;","            let pokemonstatname6 = response.data.stats[5].stat.name;","","            let pokemonstat1 = response.data.stats[0].base_stat;","            let pokemonstat2 = response.data.stats[1].base_stat;","            let pokemonstat3 = response.data.stats[2].base_stat;","            let pokemonstat4 = response.data.stats[3].base_stat;","            let pokemonstat5 = response.data.stats[4].base_stat;","            let pokemonstat6 = response.data.stats[5].base_stat;","","            //combining all stats into usable array","","            let statdata = [{ \"name\": pokemonstatname1, \"stat\": pokemonstat1 },","                { \"name\": pokemonstatname2, \"stat\": pokemonstat2 },","                { \"name\": pokemonstatname3, \"stat\": pokemonstat3 },","                { \"name\": pokemonstatname4, \"stat\": pokemonstat4 },","                { \"name\": pokemonstatname5, \"stat\": pokemonstat5 },","                { \"name\": pokemonstatname6, \"stat\": pokemonstat6 }","            ];",""],"id":159}],[{"start":{"row":27,"column":24},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":160},{"start":{"row":28,"column":0},"end":{"row":28,"column":24},"action":"insert","lines":["                        "]},{"start":{"row":28,"column":24},"end":{"row":29,"column":0},"action":"insert","lines":["",""]},{"start":{"row":29,"column":0},"end":{"row":29,"column":24},"action":"insert","lines":["                        "]}],[{"start":{"row":29,"column":20},"end":{"row":29,"column":24},"action":"remove","lines":["    "],"id":161},{"start":{"row":29,"column":16},"end":{"row":29,"column":20},"action":"remove","lines":["    "]},{"start":{"row":29,"column":12},"end":{"row":29,"column":16},"action":"remove","lines":["    "]}],[{"start":{"row":29,"column":12},"end":{"row":54,"column":0},"action":"insert","lines":["","            //combining the stat & stat result ","            let pokemonstatname1 = response.data.stats[0].stat.name;","            let pokemonstatname2 = response.data.stats[1].stat.name;","            let pokemonstatname3 = response.data.stats[2].stat.name;","            let pokemonstatname4 = response.data.stats[3].stat.name;","            let pokemonstatname5 = response.data.stats[4].stat.name;","            let pokemonstatname6 = response.data.stats[5].stat.name;","","            let pokemonstat1 = response.data.stats[0].base_stat;","            let pokemonstat2 = response.data.stats[1].base_stat;","            let pokemonstat3 = response.data.stats[2].base_stat;","            let pokemonstat4 = response.data.stats[3].base_stat;","            let pokemonstat5 = response.data.stats[4].base_stat;","            let pokemonstat6 = response.data.stats[5].base_stat;","","            //combining all stats into usable array","","            let statdata = [{ \"name\": pokemonstatname1, \"stat\": pokemonstat1 },","                { \"name\": pokemonstatname2, \"stat\": pokemonstat2 },","                { \"name\": pokemonstatname3, \"stat\": pokemonstat3 },","                { \"name\": pokemonstatname4, \"stat\": pokemonstat4 },","                { \"name\": pokemonstatname5, \"stat\": pokemonstat5 },","                { \"name\": pokemonstatname6, \"stat\": pokemonstat6 }","            ];",""],"id":162}],[{"start":{"row":68,"column":0},"end":{"row":69,"column":0},"action":"remove","lines":["            //once pokemontype2 hits error the pie chart will not be updating",""],"id":163},{"start":{"row":67,"column":12},"end":{"row":68,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":517.5,"scrollleft":0,"selection":{"start":{"row":55,"column":0},"end":{"row":55,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":31,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1562234814047,"hash":"c754463a7f683ba0c2136b24086637d731b534e4"}