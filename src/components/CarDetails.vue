<template>
    <div class="carDetails">
        <h2>Détails du véhicule</h2>
        <p>ID : {{ car.id }}</p>
        <p>Date de sortie : {{ car.date }}</p>
        <p>Nombre d'édition produite : {{ car.nb }}</p>
        <img :src="car.picture">
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
            car: {}
        }
    },
    http: {
        root: 'http://localhost:3000'
    },
    created () {
        bus.$on('selected', (selected) => {
            this.$resource('details').get({id: selected}).then((response) => {
                this.car = response.data[0]
                console.log(response.data)
            }, (response) => {
                console.log('erreur', response)
            })
        })
    }
}
</script>

<style>
    p {
        text-align: left;
    }
</style>