<template>
  <h1>Pokedex fait en Vue.JS par Julien.L</h1>
  <div id="app" class="app">

    <ul class="list-pkm">
      <li v-for="pokemon in listPoke">
        <button @click="pokemonDataAsync(pokemon.id)" class="list-lign" >
          <p>N°{{ pokemon.id }} - {{ pokemon.name }}</p>
          <img :src="pokemon.sprite">
        </button>
      </li>
    </ul>
    <div class="detail-back"
         :style="[pkmDetail.image ?
			{'background':
				'url('+pkmDetail.image+'), url(./u.jpg)',
			'background-size':
				'contain',
			'filter':
				'contrast(50%)'}
			: {'background':
				'url(./close.png)',
			'background-size':
				'420px 400px'}]">
    </div>

    <div class="detail-front" v-if="pkmDetail.id">
      <div class="pkm-identite">
        <img class="img-detail"
             :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+pkmDetail.id+'.svg'">
        <div class="block-nametype">
          <div class="nameid">
            {{ pkmDetail.id }}. {{ pkmDetail.name }}
          </div>
          <div class="types">
            <div v-for="types in pkmDetail.apiTypes"><img class="img-type" :src="types.image"></div>
          </div>
        </div>
      </div>

      <div class="pkm-stats">
        <div style="font-weight: bold">Statistiques</div>
        <div class="stats-content">
          <div class="stat-div">
            <div>HP : {{ pkmDetail.stats.HP }}</div>
            <div>Atk : {{ pkmDetail.stats.attack }}</div>
            <div>Def : {{ pkmDetail.stats.defense }}</div>
          </div>
          <div class="stat-div">
            <div>Speed : {{ pkmDetail.stats.speed }}</div>
            <div>AtkSpe : {{ pkmDetail.stats.special_attack }}</div>
            <div>DefSpé : {{ pkmDetail.stats.special_defense }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
const apiPKM =
    "https://pokebuildapi.fr/api/v1/pokemon/limit/151";
const apiDetailPKM =
    "https://pokebuildapi.fr/api/v1/pokemon";
const config = {

};
export default {
  name: "PokeApi",
  data() {
    return {
      listPoke: [],
      pkmDetail: [],
    };
  },

  created: function () {
    this.fetchDataAsync(apiPKM)
  },

  methods: {
    fetchDataAsync: async function (apiURL) {
      try {
        const response = await axios.get(apiURL, config)
        console.log(response.data)
        this.listPoke = response.data
      } catch(error) {
        console.log(error);
      }
    },

    pokemonDataAsync: async function (nbPkm) {
      try {
        const response = await axios.get(apiDetailPKM +"/"+nbPkm)
        console.log(response.data)
        this.pkmDetail = response.data
      } catch(error) {
        console.log(error);
      }
    }
  },
}
</script>

<style scoped>

</style>