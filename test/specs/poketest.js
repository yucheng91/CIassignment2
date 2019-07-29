//Pokemon search to ensure that the valid input will redirected to correct pokemon api.

describe("Pokemon Search", function() {
    describe('Name Search', function() {
        it('should return valid pokemon url of name Rattata', function() {
            let name = "rattata";
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;
            expect(pokemonurl).toEqual("https://pokeapi.co/api/v2/pokemon/rattata");
        });
    });
    describe('Index Search', function() {
        it('should return valid pokemon url of index 382', function() {
            let index = "382";
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + index;
            expect(pokemonurl).toEqual("https://pokeapi.co/api/v2/pokemon/382");
        });
    });
});


//Pokemon Axios to test if Axios is able to fetch correct information based on the valid input
describe("Pokemon Axios", function() {
    describe("Fetch Pokemon Name (Name)", function() {
        it("should be able to fetch same name based on valid Pokemon name input (pikachu)", function(done) {
            let name = "pikachu";
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;

            axios.get(pokemonurl)
                .then(function(response) {
                    expect(response.data.name).toBe("pikachu");
                    done();
                });
        });
    });
    describe("Fetch Pokemon Name (Index)", function() {
        it("should be able to fetch same name based on valid Pokemon index input (#123 - scyther)", function(done) {
            //Pokemon index #123 is Scyther
            let index = "123"; 
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + index;

            axios.get(pokemonurl)
                .then(function(response) {
                    expect(response.data.name).toBe("scyther");
                    done();
                });
        });
    });
    describe("Fetch Pokemon Type (Name)", function() {
        it("should be able to fetch pokemon type (psychic) based on valid Pokemon name input (mew)", function(done) {
            let name = "mew"; 
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;

            axios.get(pokemonurl)
                .then(function(response) {
                    expect(response.data.types[0].type.name).toBe("psychic");
                    done();
                });
        });
    });
    describe("Fetch Pokemon Type 2 (Name)", function() {
        it("should be able to fetch 2nd pokemon type (fire) based on valid Pokemon name input (charizard)", function(done) {
            let name = "charizard"; 
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;

            axios.get(pokemonurl)
                .then(function(response) {
                    expect(response.data.types[1].type.name).toBe("fire");
                    done();
                });
        });
    });
});
