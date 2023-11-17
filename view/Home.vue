<template>
  <Nav></Nav>
  <Banner></Banner>
  <City></City>
  <Activity></Activity>
  <Food></Food>
  <Footer></Footer>
</template>

<style lang="scss" scoped>

</style>

<script setup>
import Nav from '../src/components/Nav.vue';
import Banner from "../view/Spot/Banner.vue";
import City from "../view/Spot/City.vue";
import Activity from "../view/Spot/Activity.vue";
import Food from "../view/Spot/Food.vue";
import Footer from "../src/components/Footer.vue";

// 1.「首頁」，打「所有觀光活動」API
import {ref, provide, onMounted} from "vue";
import useSearchStore from "../src/stores/SearchStore.js";
const searchStore = useSearchStore();
const {getAllActivities} = searchStore;
// onMounted(()=> {getAllActivities()});

</script>
