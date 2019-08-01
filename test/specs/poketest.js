/* global expect */
/* global axios */
//Invalid Pokemon Name/Index will still return a valid URL with NOT FOUND message inside hence the testing has been done manually.

describe("Pokemon Link", function() {
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
    describe("Invalid Name", function() {
        it("Should be return error 404 as the api does not exist with invalid name example : Mikey Mouse", function(done) {
            
            let name = "mickey mouse"; 
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + name;

            axios.get(pokemonurl)
                .then(function() {
                }).catch(function(error){
                    expect(error.response.status).toBe(404);
                    done();
                });
        });
    });
    describe("Invalid Index", function() {
        it("should return error 404 as the api does not exist with invalid index (808 & above)", function(done) {
            
            //The pokemon index is from 1 - 807
            let index = "808"; 
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/" + index;

            axios.get(pokemonurl)
                .then(function() {
                }).catch(function(error){
                    expect(error.response.status).toBe(404);
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
    describe("For all the Pokemon, fetch Type 1", function() {
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
    describe("For Pokemon with 2 Types, fetch Type 2", function() {
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
    describe("For Pokemon without Type 2", function() {
        it("should be undefined as there is not 2nd type for following pokemon example : rattata", function(done) {
            
            let pokemonurl = "https://pokeapi.co/api/v2/pokemon/rattata";

            axios.get(pokemonurl)
                .then(function(response) {
                    expect(response.data.types[1]).toBeUndefined();
                    done();
                });
        });
    });
});
