<template>
    <div>
        <div v-if=" onePokemon != null">
            {{onePokemon.name}}
            {{onePokemon.taille}}
            {{onePokemon.weight}}
            <div v-for="(t, index) in onePokemon.type" v-bind:key="index">
                {{t}}
            </div>
            <img :src="onePokemon.gif">           
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
import { PokemonService } from '../services/pokemonServices'
    export default {
        name: "PokemonDetails",

        data(){
            return{
                onePokemon : null,
                pokemonId: 0,
                service: new PokemonService(),
            };
        },
        mounted(){
            let route = this.$route;
            this.pokemonId = route.params.id;

            this.service.getPokemon(this.pokemonId).then((result) =>{
                this.onePokemon = result
                
            console.log(this.onePokemon);
            });


        }
    }


</script>

