<template>
  <table>
    <thead>
    <th></th>
    <th>Normal</th>
    <th>Combat</th>
    <th>Vol</th>
    <th>Poison</th>
    <th>Sol</th>
    <th>Roche</th>
    <th>Insecte</th>
    <th>Spectre</th>
    <th>Acier</th>
    <th>Feu</th>
    <th>Eau</th>
    <th>Plante</th>
    <th>Électrik</th>
    <th>Glace</th>
    <th>Dragon</th>
    <th>Ténèbres</th>
    <th>Fée</th>
    </thead>
    <tbody>
    <tr v-for="pokemon in team">
      <td>{{ pokemon.name }}</td>
      <td v-for="type in pokemon.apiResistances">
        {{ type.damage_multiplier }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "FaiblesseView",
  props: {
    team: Array,
  },
  methods: {

  }
}
</script>

<style scoped>

</style>