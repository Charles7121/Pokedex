<template>
<div>
    <h1>Who's that Pokemon</h1>
    <p>Score : </p>
    <div class="Blind" v-for="(p, index) in pokemons" v-bind:key="index">
            <img class="imgPokemon" :src="p.image" alt="" />    
    </div>
</div>
</template>



<style scoped>
.Blind{
filter: brightness(0%);
}
 
</style>



<script>
import { PokemonService } from "../services/pokemonServices.js";

export default {
  name: "Demo",

  data() {
    return {
      pokemons: [],
      service: new PokemonService(),
    };
  },

  //Cette fonction sera appelée lorsque le fonctionnement sera prêt à l'emploi
  mounted() {
    this.service.getPokemons().then((pokemons) => {
      this.pokemons = pokemons;
    });
  },
};
</script>

