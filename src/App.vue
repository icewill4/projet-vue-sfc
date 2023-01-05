<template>
  <nav>
    <router-link to="/">Pokedex</router-link> |
	  <router-link to="/equipe">Equipe</router-link>
  </nav>
  <router-view/>
</template>

<style>
  nav {
    width: 50%;
    text-align: center;
    margin: auto;
    font-size: 2em;
    color: red;
    font-weight: bold;
    border: 2px solid maroon;
    padding: 0.2em;
    border-radius: 0 0 1em 1em;
    background: lightblue;
  }
  nav a {
    text-decoration: none;
  }
  nav a:visited {
    text-decoration: none;
  }
  nav a:hover {
    box-shadow: gold;
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: green orange;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: black;
    border-radius: 0.5em;
  }

  *::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 20px;
    border: 3px solid white;
  }

  h1 {
    border: 1px solid black;
    background: lightgray;
    border-radius: 0.5em;
    text-align: center;
    width: 60%;
    margin: 0.5em auto 0.5em;
    padding: 0.2em;
  }
  body {
    width: 60em;
    margin: 0 auto;
    background-image: url(../src/assets/pik.jpeg);
    background-size: 30%;
    background-repeat: repeat;
  }
  .app {
    background : white;
    display: flex;
    justify-content: space-between;
    border: 5px solid red;
    border-radius: 0.5em;
    background-image: url(../src/assets/u.png);
    background-size: 15%;
    background-repeat: repeat;
    height: 35em;
  }
  .list-pkm {
    width: 20em;
    list-style-type: none;
    border: 5px solid #964945;
    margin-left: 0.5em;
    background: #b04f49;
    border-radius: 0.5em;
    overflow: auto;
  }
  .list-lign {
    border-radius: 0.5em;
    width: 100%;
    height: 4em;
    display: flex;
    justify-content: space-between;
    align-items:center;
    border: 5px groove red;
    background : -webkit-linear-gradient(top, deepskyblue, dodgerblue);
  }
  .list-lign:hover {
    border: 5px ridge red;
    background: lightgoldenrodyellow;
    background : -webkit-linear-gradient(top, dodgerblue, deepskyblue);
  }
  .list-lign p {
    font-weight: bold;
    text-align: justify;
  }
  .list-lign img {
    height: 4em;
  }
  .detail-front {
    position: absolute;
    top: 10.5em;
    left: 49.5%;
    width: 25em;
    height: 25em;
    display: flex;
    flex-direction:column;
    background: silver;
    border-radius: 1em;
    border: 5px solid black;
  }
  .pkm-identite {
    display: flex;
    flex-direction:row;
  }
  .img-detail {
    height: 8em;
    width: 8em;
    background: lightgray ;
    border: 30px solid black;
    border-image: url('../src/assets/borderball.png');
    border-radius: 1em;
    margin: 0.5em;
    padding: 0.5em;
    opacity: 0.9;
  }
  .block-nametype {
    width: 14em;
    height: 8em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5em;
    border: 2px solid red;
    background: lightblue;
    border-radius: 2em;
    opacity: 0.9;
  }
  .nameid {
    display: flex;
    justify-content: center;
    font-size: 1.3em;
    font-weight: bold;
    align-items: center;
  }
  .types {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
  }
  .img-type {
    width: 3em;
    margin: 0.5em;
  }
  .pkm-stats {
    border: 2px solid black;
    border-radius: 3em;

    background: lightgoldenrodyellow;
    width: 17em;
    height: 10em;
    font-size: 1.3em;
    margin: 0.5em auto;
    text-align: center;
    opacity: 0.7;
  }
  .stats-content {
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .stat-div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .team-box {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    background: grey;
    padding: 1.5em;
    align-items: center;
    border-radius: 1em;
  }
  .team-box li {
    text-align: center;
    list-style-type: none;
  }
  .team-box li div {
    display: flex;
    justify-content: space-between;
    margin: 0.5em;
  }
</style>
