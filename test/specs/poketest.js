describe("Pokemon Search", function() {
    describe('Name Search', function() {
        it('should return valid pokemon url of name Rattata', function() {
            let name = "rattata";
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;
            expect(pokemonurl).toEqual("https://pokeapi.co/api/v2/pokemon/rattata");
        });
    });
    describe('index Search', function() {
        it('should return valid pokemon url of index 382', function() {
            let index = "382";
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + index;
            expect(pokemonurl).toEqual("https://pokeapi.co/api/v2/pokemon/382");
        });
    });
});

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
            let index = "123"; //Pokemon #123 is Scyther
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + index;

            axios.get(pokemonurl)
                .then(function(response) {
                    expect(response.data.name).toBe("scyther");
                    done();
                });
        });
    })
})
