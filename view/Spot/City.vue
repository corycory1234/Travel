<template>
  <!-- 3. 熱門城市 -->

<div class="container mt-5 p-0">
  <div class="position-relative">
    <a href="#" @click.prevent="offsetLeft()" v-if="showBtn" 
    class="carouselBtn position-absolute top-50 translate-middle">
      <i class="bi bi-caret-left-fill"></i>
    </a>

    <div class="carouselCard">
      <div class="carouselCard-wrap">
        <ul ref="refSlides"
        :style="{'transform': `translate(${currentOffest}px)`}"
        class="carouselCard-list
        row row-cols-2 row-cols-md-4 row-cols-lg-5
        gx-2
        flex-nowrap
        list-unstyled
        "
        >
        <li class="col">
          <div class="hotCity-area">
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/Taipei-City.png" 
              alt="Taipei"
              >
              <div 
                class="
                card-img-overlay
                d-flex
                align-items-center
                justify-content-center
                flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('Taipei')"
                  class="text-decoration-none stretched-link link-light">台北市</a>
                </h5>
              </div>
            </div>
          </div>
        </li>
        
        <li class="col">
          <div class="hotCity-area">
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/New-Taipei.png" 
              alt=""
              >
              <div class="
              card-img-overlay
              d-flex
              align-items-center
              justify-content-center
              flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('NewTaipei')"
                  class="text-decoration-none stretched-link link-light">新北市</a>
                </h5>
              </div>
            </div>
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/Taoyuan.png" 
              alt=""
              >
              <div class="
              card-img-overlay
              d-flex
              align-items-center
              justify-content-center
              flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('Taoyuan')"
                  class="text-decoration-none stretched-link link-light">桃園市</a>
                </h5>
              </div>
            </div>
          </div>
        </li>
        <li class="col">
          <div class="hotCity-area">
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/HsingChu.png" 
              alt="Hsinchu"
              >
              <div 
                class="
                card-img-overlay
                d-flex
                align-items-center
                justify-content-center
                flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('Hsinchu')"
                  class="text-decoration-none stretched-link link-light">新竹市</a>
                </h5>
              </div>
            </div>
          </div>
        </li>
        <li class="col">
          <div class="hotCity-area">
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/TaiChung.png" 
              alt=""
              >
              <div class="
              card-img-overlay
              d-flex
              align-items-center
              justify-content-center
              flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('Taichung')"
                  class="text-decoration-none stretched-link link-light">台中市</a>
                </h5>
              </div>
            </div>
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/NanTou.png" 
              alt=""
              >
              <div class="
              card-img-overlay
              d-flex
              align-items-center
              justify-content-center
              flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('NantouCounty')"
                  class="text-decoration-none stretched-link link-light">南投市</a>
                </h5>
              </div>
            </div>
          </div>
        </li>
        <li class="col">
          <div class="hotCity-area">
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/ChiaYi.png" 
              alt="Taipei"
              >
              <div 
                class="
                card-img-overlay
                d-flex
                align-items-center
                justify-content-center
                flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('Chiayi')"
                  class="text-decoration-none stretched-link link-light">嘉義市</a>
                </h5>
              </div>
            </div>
          </div>
        </li>
        <li class="col">
          <div class="hotCity-area">
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/TaiNan.png" 
              alt="Tainan"
              >
              <div 
                class="
                card-img-overlay
                d-flex
                align-items-center
                justify-content-center
                flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('Tainan')"
                  class="text-decoration-none stretched-link link-light">台南市</a>
                </h5>
              </div>
            </div>
          </div>
        </li>
        <li class="col">
          <div class="hotCity-area">
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/KaoShiung.png" 
              alt=""
              >
              <div class="
              card-img-overlay
              d-flex
              align-items-center
              justify-content-center
              flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('Kaohsiung')"
                  class="text-decoration-none stretched-link link-light">高雄市</a>
                </h5>
              </div>
            </div>
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/PingTung.png" 
              alt=""
              >
              <div class="
              card-img-overlay
              d-flex
              align-items-center
              justify-content-center
              flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('PingtungCounty')"
                  class="text-decoration-none stretched-link link-light">屏東市</a>
                </h5>
              </div>
            </div>
          </div>
        </li>
        <li class="col">
          <div class="hotCity-area">
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/Ilan.png" 
              alt="Tainan"
              >
              <div 
                class="
                card-img-overlay
                d-flex
                align-items-center
                justify-content-center
                flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('YilanCounty')"
                  class="text-decoration-none stretched-link link-light">宜蘭市</a>
                </h5>
              </div>
            </div>
          </div>
        </li>
        <li class="col">
          <div class="hotCity-area">
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/HuaLien.png" 
              alt=""
              >
              <div class="
              card-img-overlay
              d-flex
              align-items-center
              justify-content-center
              flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('HualienCounty')"
                  class="text-decoration-none stretched-link link-light">花蓮市</a>
                </h5>
              </div>
            </div>
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/TaiTung.png" 
              alt=""
              >
              <div class="
              card-img-overlay
              d-flex
              align-items-center
              justify-content-center
              flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('TaitungCounty')"
                  class="text-decoration-none stretched-link link-light">台東市</a>
                </h5>
              </div>
            </div>
          </div>
        </li>
        <li class="col">
          <div class="hotCity-area">
            <div class="card bg-white text-white p-2">
              <img 
              src="/src/assets/pics/City/OffShore.png" 
              alt="Tainan"
              >
              <div 
                class="
                card-img-overlay
                d-flex
                align-items-center
                justify-content-center
                flex-column">
                <i class="bi bi-geo-alt-fill"></i>
                <h5 class="card-title">
                  <a href="#" @click.prevent="to('KinmenCounty')"
                  class="text-decoration-none stretched-link link-light">金門澎湖</a>
                </h5>
              </div>
            </div>
          </div>
        </li>
        </ul>
      </div>
    </div>
    <a class="carouselBtn carouselBtnRight position-absolute top-50 translate-middle d-none d-lg-flex" href="#"
      @click.prevent="offsetRight()" v-if="!showBtn">
        <i class="bi bi-caret-right-fill"></i>
    </a>
  </div>
</div>

</template>

<style lang="scss" scoped>
@import "/src/sass/_city.scss";
</style>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { ref, onMounted, inject } from "vue";


// 1. 輪播圖測試2版
import useClickStore from "/src/stores/ClickStore.js";
const clickStore = useClickStore();
const {to} = clickStore;

// 2. 按鈕部分
const showBtn = ref(false);
const currentOffest = ref(0);
const offsetWidth = ref(0);
// 2.1 輪播圖左按鈕
const offsetLeft = () => {
  currentOffest.value += offsetWidth.value;
  showBtn.value = !showBtn.value;
  // console.log(currentOffest.value);
};
// 2.3 輪播圖右按鈕
const offsetRight = () => { 
  currentOffest.value -= offsetWidth.value;
  showBtn.value = !showBtn.value;
  // console.log(currentOffest.value);
}
// 2.4 <ul>寬度
const refSlides = ref();
onMounted(() => {
  offsetWidth.value = refSlides.value.offsetWidth;
  // console.log(offsetWidth.value);
})

</script>