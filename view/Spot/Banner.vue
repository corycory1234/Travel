<template>
  <Loading :active="isLoading"></Loading>
  <!-- 2. BANNER圖片 -->
  <div class="position-relative d-none d-lg-block mb-3">
    <div class="scenic-spot">
      <div class="container position-relative py-3 banner-bg">
        <!-- 2.1 BANNER背景圖 -->
        <div class="scenic-spot-bg bg-evening"
        :style="{backgroundImage: `url(${backgroundImg})`}">
          <!-- 2.2 BANNER行銷文字 -->
          <div class="container w-50 text-white">
            <h2 class="h1">Welcome To <span class="pinkSpan">Taiwan°</span></h2>
            <p class="text-left"> 臺北、臺中、臺南、屏東、宜蘭……遊遍臺灣 </p>
            <!-- 2.3 BANNER 搜尋BAR -->
            <div class="d-flex align-items-center">
              <input type="text" 
              class="form-control" 
              placeholder="搜尋關鍵字" 
              aria-label="搜尋關鍵字"
              @keydown.enter="search"
              v-model="keyword"
              @click.prevent="search">
              <button class="btn mx-2">
                <span><i class="bi bi-search" @click.prevent="search"></i></span>
              </button>
            </div>
            <!-- 2.4 BANNER 下拉選單 -->
            <div class="d-flex align-items-center mt-2">
              <div class="d-flex w-100">
                <select name="" id="" class="form-select me-1"
                v-model="selectedOption1">
                  <option value="類別" selected>類別</option>
                  <option :value="option"
                    v-for="(option) in currentOptions" :key="option">
                    {{option}}
                  </option>
                </select>
                <select name="" id="" class="form-select"
                v-model="selectedOption2">
                  <option value="不分縣市" selected>不分縣市</option>
                  <option :value="item.Value" 
                    v-for="(item) in allCityArr" :key="item.Value">
                    {{ item.CityName }}
                  </option>
                </select>

                <router-link :to="{name: 'SearchedActivities'}">
                  <button class="btn mx-2"
                    @click.prevent="select">
                    <i class="bi bi-search"></i>
                  </button>
                </router-link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../src/sass/banner.scss";
</style>

<script setup>
import {ref, onMounted } from "vue";

// 5. 
import loadingJSON from "/loading_TW.json";
const loadingImg = ref(loadingJSON);
const isLoading = ref(false);

// 1. Pinina 搜尋
import useSearchStore from "/src/stores/SearchStore.js";
import {storeToRefs} from "pinia";
const searchStore = useSearchStore();
const {search} = searchStore;
const {keyword} = storeToRefs(searchStore);

// 2. Pinia 選擇 <Select>
import useSelectStore from "/src/stores/SelectStore.js";
const selectStore = useSelectStore();
const {select} = selectStore;
const {selectedOption1, selectedOption2, allCityArr} = storeToRefs(selectStore);

// 3. Router 渲染 <Select>[活動、景點] & [美食、住宿]
import {useRoute} from "vue-router";
const route = useRoute();
const currentOptions = route.meta.options || [];

// 4. 切換頁面, Banner圖切換
import {useRouter} from "vue-router";
import backgroundImg1 from "@/assets/pics/MaskPics/MaskGroup.png";
import backgroundImg2 from "@/assets/pics/MaskPics/MaskGroup2.png";
const router = useRouter();
const backgroundImg = ref("");
if(router.currentRoute.value.name === "FoodTravel" || 
  router.currentRoute.value.name === "SearchedFoods" ||
  router.currentRoute.value.name === "SelectedResults2") {
  isLoading.value = true;
  backgroundImg.value = backgroundImg2
  isLoading.value = false;
}
else{
  isLoading.value = true;
  backgroundImg.value = backgroundImg1;
  isLoading.value = false;
};


</script>