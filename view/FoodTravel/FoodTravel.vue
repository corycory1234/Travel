<template>
  <Nav></Nav>
  <Banner></Banner>
  <Food></Food>
  <Hotel></Hotel>
  <Footer></Footer>
</template>

<script setup>
import {ref, onMounted} from "vue";
import Nav from "/src/components/Nav.vue";
import Banner from "../Spot/Banner.vue";
import Footer from "/src/components/Footer.vue";
import Food from "../Spot/Food.vue";
import Hotel from "/src/components/Hotel.vue";

// 1.「美食住宿」頁面, Pinia 打「所有美食」API
import useSearchStore from "/src/stores/SearchStore.js";
const searchStore = useSearchStore();
const {getAllActivities} = searchStore;
onMounted(() => {getAllActivities()});

</script>