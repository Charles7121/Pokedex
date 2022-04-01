import axios from 'axios'
import { Pokemon } from '../models/pokemon'
export class PokemonService {

    getPokemon(id) {
        return new Promise((resolve2, reject2) => {
            axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
            .then((response) => {
                console.log(response.data);

                let pokeTypeArr = response.data.types;
                let pokeArr = []

                let pokeName = response.data.name;
                let pokeWeight = response.data.weight;
                let pokeHeight = response.data.height;
                let pokeGif = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + id + '.png';

                let result = new Pokemon(
                   id, pokeName, pokeHeight, pokeWeight, pokeArr, pokeGif

                )

                for (let t = 0; t < pokeTypeArr.length; t++){
                    pokeArr.push(response.data.types[t].type.name)
                }




                resolve2(result)
            })
            .catch((reason) => {
                reject2("Ca marche pas:" + reason)
            });




            
        })

    }




    getPokemons() {
        return new Promise((resolve, reject) => {
            let pokemons = [];
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=100').then(response => {


                let result = response.data.results

                result.forEach((p) => {
                    let substrings = p.url.split("/");
                    let id = substrings[substrings.length - 2];

                    p.id = id;
                    p.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png";
                    pokemons.push(p);
                });
                console.log(response.data.sprites
);

                resolve(pokemons)
            })
                .catch((reason) => {
                    reject("Ca marche pas:" + reason)
                });
        })

    }
}
