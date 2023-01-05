<template>
    <div>
      <h1>My Pokemon Team</h1>
      <ul class="team-box">
        <li v-for="pokemon in pokemons" :key="pokemon.id">
          {{ pokemon.name }}
          <div>
            <button @click="editPokemon(pokemon)">Edit</button>
            <button @click="deletePokemon(pokemon)">Delete</button>
          </div>
        </li>
      </ul>
      <h2 v-if="pokemons.length < 6">Add Pokemon</h2>
      <form v-if="pokemons.length < 6" @submit.prevent="addPokemon">
        <label>
          Name:
          <input v-model="newPokemon.name" type="text" />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "PokemonList",
    data() {
      return {
        newPokemon: { name: "" },
        pokemons: [
          { id: 1, name: "Pikachu" },
          { id: 2, name: "Charmander" },
          { id: 3, name: "Squirtle" },
        ],
      };
    },
    methods: {
        addPokemon() {
            if (this.newPokemon.name === "") {
                // Display an error message or return early if the input is empty
                return;
            }
            // Generate a new ID for the pokemon
            this.newPokemon.id = Math.max(...this.pokemons.map((p) => p.id)) + 1;

            // Add the new pokemon to the list
            this.pokemons.push(this.newPokemon);

            // Reset the newPokemon object
            this.newPokemon = { name: "" };
            },
        deletePokemon(pokemon) {
            // Find the index of the pokemon in the list
            const index = this.pokemons.indexOf(pokemon);
  
            // Remove the pokemon from the list
            this.pokemons.splice(index, 1);
        },
    },
  };
  </script>
  