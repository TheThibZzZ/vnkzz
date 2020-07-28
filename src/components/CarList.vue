<template>
  <div class="carList">
    <h2>Selectionnez un véhicule</h2>
    <ul v-for='car in cars' :key=car.name>
      <a>Marque : {{ car.name }} </a>
      <a>Modèle : {{ car.model }}</a>
      <a>Année de production : {{ car.year }}</a>
      <button @click='selectCar(car)'> Voir les détails </button>
    </ul>
    <a> Nombre de voitures : {{ counter }}</a>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import VueResource from 'vue-resource'
import bus from '../main.js'
Vue.use(VueResource)

export default {
    data () {
        return {
            cars: []
        }
    },
    http: {
        root: 'http://localhost:3000'
    },
    methods: {
        selectCar (car) {
            bus.$emit('selected', car.id)
        }
    },
    computed: {
        counter () {
            return this.cars.length
        } 
    },
    mounted () {
    this.$resource('cars')
      .get()
      .then(
        response => {
          this.cars = response.data
        },
        response => {
          console.log('erreur', response)
        }
      )
  }
}

</script>
<style>
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
  }
  
  li {
    list-style-type: none;
    
  }
</style>