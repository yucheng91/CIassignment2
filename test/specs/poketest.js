describe("Pokemon Search", function() {
    describe('Name Search', function() {
        it('should return valid pokemon url', function() {
            let name = "rattata";
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;
            expect(pokemonurl).toEqual("https://pokeapi.co/api/v2/pokemon/rattata");
        });
    });
    describe('index Search', function() {
        it('should return valid pokemon url', function() {
            let index = "382";
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + index;
            expect(pokemonurl).toEqual("https://pokeapi.co/api/v2/pokemon/382");
        });
    });
    describe('wrong name Search', function() {
        it('should return valid pokemon url', function() {
            let index = "mickeymouse";
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + index;
            expect(pokemonurl).toBeDefined();
        });
    });
});
