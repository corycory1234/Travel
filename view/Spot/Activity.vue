<template>
  <!-- 4. 熱門活動 -->
  <div class="container my-2">
    <div>
      <h3 class="h5 fw-bold"><i class="bi bi-caret-up-fill triangle me-2"></i>熱門活動</h3>
    </div>
    <div class="row gx-3">

      <!-- 4.1 活動卡片 (START) -->
      <div v-for="(item, index) in activity" 
      :key="item.ActivityID" 
      class="col-12 col-md-6 mb-3 " 
      @click.prevent="openModal(item)"
      >
        <div class="card h-100 border-0 shadow">

          <div class="row" >
            <!-- 4.2 圖片 -->
            <div class="col-5">
              <div class="activity-card-pic p-2">
                <img :src="item.Picture.PictureUrl1" :alt="item.location">
              </div>
            </div>
            <!-- 4.3 標題、內文、活動地點 -->
            <div class="col-7">
              <div class="row flex-column justify-content-between">
                <div class="card-body pe-4">

                  <!-- 4.4 標題 -->
                  <div class="col mt-3">
                    <h6 class="fw-bold text-truncate">{{ item.ActivityName }}</h6>
                  </div>
                  <!-- 4.5 內文 -->
                  <div class="col d-none d-sm-block">
                    <p class="activity-card-content truncate ">
                      {{ item.Description }}</p>
                  </div>
                  <!-- 4.5 活動地址 -->
                  <div class="col mb-2">
                    <div class="d-flex flex-lg-row justify-content-lg-between align-items-lg-center 
                    flex-column ">
                      <i class="bi bi-geo-alt-fill location text-truncate">
                        <span class="text-dark fw-bold px-2">{{ item.Location }}</span>
                        <i class="heart" :class="{'bi bi-heart': !item.isFavorite, 'bi bi-heart-fill': item.isFavorite}" 
                        @click.stop="favoriteStore.getFavorite(item)" @click="heart(item)">
                        </i>
                      </i>
                      <button class="btn btn-outline-danger subtitle-1 text-truncate d-none d-lg-block" @click.prevent="openModal(item)">
                        活動詳情
                      </button>
    
    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 4.1 活動卡片(END) -->

  </div>
  <Modal ref="refActivityModal"></Modal>
</template>

<style lang="scss" scoped>
@import "/src/sass/_activity.scss";
.heart{
  color:#ff1d6c;
}
.heart:hover{
  cursor: pointer;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import {token} from "/src/assets/javascript/Token.js";

// 0. 掛載
onMounted(() => { getActivity() });

// 1. 活動API
const activity = ref([]);
const changHua = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/Tainan?%24filter=Picture%2FPictureUrl1%20ne%20null%20&%24top=4&%24format=JSON';
const getActivity = async () => {
  // 1.1 送出token, 打API
  const accessToken = await token.getToken();
  const config ={
    url: changHua,
    method: "get",
    headers: {"authorization": "Bearer " + accessToken}
  };
  await axios(config)
    .then((response) => {
      activity.value = response.data.filter((item) => {return item.Picture.PictureUrl1 !== undefined});
    });
};

// 2. 熱門活動 MODAL
import Modal from '/src/components/Modal.vue';
const refActivityModal = ref(null);
const openModal = (item) => {
  // 2.1 把 item 傳給子元件, 讓子元件 MODAL 視窗渲染
  refActivityModal.value.openModal(item);
}

// 3. 我的收藏
import {useFavoriteStore} from "/src/stores/FavoriteStore.js";
const favoriteStore = useFavoriteStore();
const heart = (item) => {
  // 3.1 TOGGLE, 增加/取消收藏
  item.isFavorite = !item.isFavorite;
}
</script>