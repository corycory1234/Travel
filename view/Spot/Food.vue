<template>
  <div class="container mt-2">
    <div>
      <h3 class="h5"><i class="bi bi-square-fill square me-2"></i>熱門餐飲</h3>
    </div>

    <!-- 5. 熱門餐飲-->
    <div class="row row-cols-2 row-cols-lg-5 g-2">

      <div class="col" v-for="(item) in food" :key="item.RestaurantID"
      @click.prevent="openModal(item)">
        <div class="card shadow p-2 h-100">
          <div class="foodPic">
            <img :src="item.Picture.PictureUrl1" class="card-img-top" :alt="item.location">

          </div>
          <div class="card-body">
            <h5 class="card-title pt-2 text-truncate">{{ item.RestaurantName }}</h5>
            <p class="card-text text-success text-truncate fw-bold">
              <i class="bi bi-geo-alt-fill me-1 location"></i>
              {{ item.Address }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
  
  <FoodModal ref="refFoodModal"></FoodModal>
</template>
<style lang="scss" scoped>
@import "/src/sass/_food.scss";
</style>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import {token} from "/src/assets/javascript/Token.js";

// 0. 掛載
onMounted(() => {
  getFood();
})

// 1. 熱門食物 API
const food = ref([]);

const getFood = async () => {
  const changHuaFood = "https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant/NewTaipei?%24top=10&%24format=JSON";
  const accessToken = await token.getToken();
  const headers = {"authorization": "Bearer " + accessToken};
  axios.get(changHuaFood, headers)
    .then((response) => {
      food.value = response.data.filter((item) => { return item.Picture.PictureUrl1 !== undefined });
      // 1.1 只渲染12筆食物
    });
};

// 2. 熱門食物 MODAL
import FoodModal from '/src/components/FoodModal.vue';
const refFoodModal = ref(null);
const openModal = (item) => {
  // 2.1 把 item 傳給子元件, 讓子元件 MODAL 視窗渲染
  refFoodModal.value.openModal(item);
};

</script>