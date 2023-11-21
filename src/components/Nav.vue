<template>
  <div class="container">

    <!-- 1. HEADER 導覽列 -->

      <nav class="navBar justify-content-center justify-content-md-between py-3">
        <router-link :to="{name: 'Home'}">
          <div class="">
              <img src="../assets/pics/NavPics/Group4.png" alt="">
          </div>
        </router-link>

        <!-- 1.1 平板 NAV  -->
        <div class="nav-links d-none d-md-flex mt-2">
          <router-link to="/view/Home.vue" class="header-link spot text-nowrap" href="#">
            <img src="../assets/pics/NavPics/Frame38.png" alt="" class="link-img">
            台灣景點
          </router-link>

          <router-link to="/view/FoodTravel.vue" class="header-link food text-nowrap" href="#">
            <img src="../assets/pics/NavPics/Frame39.png" alt="" class="link-img">
            美食住宿
          </router-link>
          
          <router-link :to="{name: 'BusRoute'}" href="#" class="header-link traffic text-nowrap">
            <img src="../assets/pics/NavPics/Frame40.png" alt="" class="link-img">
            景點交通
          </router-link>
        </div>
      </nav>

      <!-- 1.2 行動版 NAV  -->
      <ul class="nav justify-content-between shadow-sm d-md-none bg-white w-100 rounded my-1">
          <li class="nav-item">
            <router-link to="/view/Home.vue" 
            class="nav-link p-2 activeTrue" 
            aria-current="page" 
            :class="{ 'activeTrue': isRouteActive('/view/Home.vue'), 
            'activeFalse': !isRouteActive('/view/Home.vue')}">
            景點活動
          </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/view/FoodTravel.vue" 
            class="nav-link p-2" 
            :class="{ 'activeTrue': isRouteActive('/view/FoodTravel.vue'), 
            'activeFalse': !isRouteActive('/view/FoodTravel.vue')}">
            美食住宿
            </router-link>
          </li>

        <li class="nav-item">
          <router-link to="/view/BusRoute/BusRoute.vue" 
          class="nav-link p-2" 
          :class="{'activeTrue': isRouteActive('/view/BusRoute/BusRoute.vue'), 
          'activeFalse': !isRouteActive('/view/BusRoute/BusRoute.vue')}"
         >景點交通
          </router-link>
        </li>
      </ul>

      <!-- 1.3 平板<INPUT> <SELECT>; 平板、手機<INPUT><SELECT> -->
      <!-- 1.4 搜尋 <INPUT> -->
      <!-- <div class="container d-lg-none mt-2">
        <div class="row justify-content-start align-items-center">
          <div class="col-11">
            <input type="text" class="form-control" placeholder="搜尋關鍵字"
            v-model="keyword" @keydown.enter="search">

          </div>

          <div class="col-1">
            <button class="btn btn-primary border-0">
              <i class="bi bi-search" @click.prevent="search"></i>
            </button>
          </div>

        </div>
      </div> -->

      <div class="input-group d-lg-none mt-2">
        <input type="text" class="form-control" placeholder="搜尋關鍵字"
          v-model="keyword" @keydown.enter="search">
        <button class="btn btn-primary border-0 rounded">
          <i class="bi bi-search" @click.prevent="search"></i>
        </button>
      </div>
      <!-- 1.5 下拉選單 <SELECT> -->

        <div class="input-group mt-2 d-lg-none">

            <select name="" id="" class="form-select  me-1 rounded"
              v-model="selectedOption1">
              <option value="類別"  selected>類別</option>
              <option 
                v-for="(option) in currentOptions" :key="option">
                {{option}}
              </option>
            </select>
            
            <select name="" id="" class="form-select  me-1 rounded"
              v-model="selectedOption2">
              <option value="不分縣市" selected>不分縣市</option>
              <option :value="item.Value" 
                v-for="(item) in allCityArr" :key="item.Value">
                {{ item.CityName }}
              </option>
            </select>
            
            <router-link :to="{ name:'SelectedResults' }" >
              <button class="btn btn-primary border-0">
                <i class="bi bi-search" @click.prevent="select"></i>
              </button>
            </router-link>

        </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../sass/_header.scss";
</style>

<script setup>
import {ref, computed, onMounted} from "vue";

// 1. Pinina 搜尋
import useSearchStore from "/src/stores/SearchStore.js";
// 1.1 storeToRefs 只適用解構 state, getters; 「actions 不適用」
import {storeToRefs} from "pinia";
const searchStore = useSearchStore();
const {getAllActivities, search} = searchStore;
const {allActivitiesArr, searchedArr, keyword} = storeToRefs(searchStore);
onMounted(() => { getAllActivities()}, );

// 2. Pinia 選擇<SELECT>
import useSelectStore from "/src/stores/SelectStore.js";
const selectStore = useSelectStore();
const {selectedOption1,selectedOption2,options1, allCityArr} = storeToRefs(selectStore);
const {select} = selectStore;

// 3. 透過router, 於切換頁面時, <SELECT>也會跟著變換
import {useRoute} from "vue-router";
const route = useRoute();
const currentOptions = route.meta.options || [];

// 4. Nav切換<router-link>, 切換文字顏色
const isRouteActive = (route) => {
  const currentRoute = useRoute();
  return currentRoute.path === route;
}
</script>