<template>
    <div class="container">

<!-- 1. HEADER 導覽列 -->

  <nav class="navBar justify-content-center justify-content-md-between py-3">
    <router-link :to="{name: 'Home'}">
      <div class="">
          <img src="/src/assets/pics/NavPics/Group4.png" alt="">
      </div>
    </router-link>

    <!-- 1.1 平板 NAV  -->
    <div class="nav-links d-none d-md-flex mt-2">
      <router-link to="/view/Home.vue" class="header-link spot text-nowrap" href="#">
        <img src="/src/assets/pics/NavPics/Frame38.png" alt="" class="link-img">
        台灣景點
      </router-link>

      <router-link to="/view/FoodTravel.vue" class="header-link food text-nowrap" href="#">
        <img src="/src/assets/pics/NavPics/Frame39.png" alt="" class="link-img">
        美食住宿
      </router-link>
      
      <router-link :to="{name: 'BusRoute'}" href="#" class="header-link traffic text-nowrap">
        <img src="/src/assets/pics/NavPics/Frame40.png" alt="" class="link-img">
        景點交通
      </router-link>

      <router-link :to="{name: 'MyFavorite'}" class="header-link spot text-nowrap" href="#">
        <img src="/src/assets/pics/NavPics/Frame38.png" alt="" class="link-img">
        我的收藏
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

    <li class="nav-item">
      <router-link :to="{name: 'MyFavorite'}" 
      class="nav-link p-2" 
      :class="{'activeTrue': isRouteActive('/view/MyFavorite/MyFavorite.vue'), 
      'activeFalse': !isRouteActive('/view/MyFavorite/MyFavorite.vue')}"
     >我的收藏
      </router-link>
    </li>
  </ul>

  <!-- 1.5 下拉選單 <SELECT> -->
</div>
  
<div class="container mt-2">
    <div>
      <h3 class="h5 fw-bold"><i class="bi bi-caret-up-fill triangle me-2"></i>我的收藏</h3>
    </div>
    <!-- 2. 我的收藏-->
    <div class="row row-cols-2 row-cols-lg-5 g-2">

      <div class="col" v-for="(item) in favoriteStore.favoriteArr" :key="item.id"
      @click.prevent="openModal(item.item)">
        <div class="card shadow p-2 h-100">
          <div class="foodPic">
            <img :src="item.item.Picture.PictureUrl1" class="card-img-top" :alt="item.item.location">

          </div>
          <div class="card-body">
            <h5 class="card-title pt-2 text-truncate">
              {{ item.item.RestaurantName || item.item.ActivityName || item.item.HotelName}} 
              
            </h5>
            <p class="card-text text-success text-truncate fw-bold">
              <i class="bi bi-geo-alt-fill me-1 location"></i>
              {{ item.item.City }}
              <i class="heart" :class="{'bi bi-heart': item.isFavorite, 'bi bi-heart-fill': !item.isFavorite}"
                @click.stop="favoriteStore.getFavorite(item.item, item.id)"
                @click="heart(item)">
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal ref="refModal"></Modal>
  <NotFound v-if="!favoriteStore.favoriteArr.length"></NotFound>
  <div class="container-fluid text-center bg-white py-3 fixed-bottom">
    <p class="footer-txt">Taiwan Tourguide © Code: Kory / Design: KT</p>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/sass/_header.scss";
.heart{
  color:#ff1d6c;
}
.heart:hover{
  cursor: pointer;
}
</style>

<script setup>
import {ref} from "vue";
// 1. 我的收藏
import {useFavoriteStore} from "/src/stores/FavoriteStore.js";
const favoriteStore = useFavoriteStore();
const heart = (item) => {
  // 3.1 TOGGLE, 增加/取消收藏
  item.isFavorite = !item.isFavorite;
}

// 2. Nav切換<router-link>, 切換文字顏色
  import {useRoute} from "vue-router";
  const isRouteActive = (route) => {
  const currentRoute = useRoute();
  return currentRoute.path === route;
};

// 3. Modal彈跳視窗
import Modal from "/src/components/Modal.vue";
const refModal = ref(null);
const openModal = (item) => {
  refModal.value.openModal(item);
};

// 4. NotFound 收藏Arr長度為0
import NotFound from "/src/components/NotFound.vue";

</script>