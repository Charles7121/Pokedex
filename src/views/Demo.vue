<template>
  <div class="container">
    <div class="pokemonCard" v-for="(p, index) in pokemons" v-bind:key="index">

        <router-link v-bind:to="/pokemon/ + p.id" >
            <img class="imgPokemon" :src="p.image" alt="" />
        </router-link>
      <h1>
        {{ p.name }}
      </h1>

      <span>
        {{ p.height }}
      </span>
      <ul>
        <li v-for="(t, i) in p.types" v-bind:key="i">
          {{ t }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.pokemonCard {
  width: 300px;
  height: 300px;
}

.imgPokemon {
  width: 50%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

<script>
// import { Pokemon } from '@/models/pokemon.js'
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
