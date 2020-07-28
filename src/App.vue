<template>
  <div id="app">
    <h1>Bienvenu chez Infos Voitures</h1>
    <p>Toutes les informations que vous cherchez au sujet de votre voitures preférés</p>
    <img src="./assets/land.jpg">
    <CarPage name='ford' model='fiesta' year='2019'/>
  </div>
</template>

<script>
/* eslint-disable */
import CarPage from './pages/CarPage'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    CarPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

</style>

