<template>
  <div class="container my-5">
    <div>
      <h3 class="h5 fw-bold">
        <i class="bi bi-square-fill square me-2"></i>
        推薦住宿
      </h3>
    </div>

    <div class="row row-cols-2 row-cols-lg-5 g-2">
      <div class="col" 
      v-for="(item, index) in hotelArr" 
      :key="item.HotelID"
      @click="openModal(item)"
      > 
        <div class="card shadow p-2 h-100">
          <div class="hotelImg">
            <img v-if="item.Picture.PictureUrl1" 
            class="card-img-top" 
            :src="item.Picture.PictureUrl1 || '/src/assets/pics/NotFound/placeholder.png'" alt=""
            >
          </div>
          <div class="card-body">
            <h5 class="card-title pt-2 text-truncate">{{ item.HotelName }}</h5>
            <p class="card-text text-success text-truncate fw-bold">
              <i class="bi bi-geo-alt-fill me-1 location"></i>
              {{ item.Address }}
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
  <Modal ref="refHotelModal"></Modal>
</template>

<style lang="scss" scoped>
@import "/src/sass/_hotel.scss";
</style>

<script setup>
import {ref, onMounted} from "vue";
import axios from "axios";
import {token} from "../assets/javascript/Token.js";

// 0. 掛載
onMounted(() => getHotel());

// 1. 推薦住宿 API
const hotelArr = ref([]);
const changHuaHotel = "https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel/Kaohsiung?%24filter=Picture%2FPictureUrl1%20ne%20null%20&%24top=10&%24format=JSON";

const getHotel = async () => {
  const accessToken = await token.getToken();
  const config = {
    url: changHuaHotel,
    method: "get",
    headers: {"authorization": "Bearer " + accessToken}
  };
  axios(config)
    .then((response) => {
      hotelArr.value = response.data;
    });
};

// 2. Modal 視窗
import Modal from "./Modal.vue";
const refHotelModal = ref(null);
const openModal = (item) => {
  refHotelModal.value.openModal(item)
}

</script>