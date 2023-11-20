<template>
  <Nav></Nav>
  <Banner></Banner>
  <City></City>
  <div class="container my-5" v-if="carouselArr.length > 0">
    <div>
      <h3 class="h5 fw-bold"><i class="bi bi-caret-up-fill triangle me-2"></i>熱門活動</h3>
    </div>
    <div class="row gx-3">

      <!-- 4.1 活動卡片 (START) -->
      <div v-for="(item, index) in paginatedArr" 
      :key="item.ActivityID" 
      class="col-12 col-lg-6 mb-3"
      @click.prevent="openModal(item)"
      >
        <div class="card h-100 border-0 shadow">
          <div class="row " >
            <!-- 4.2 圖片 -->
            <div class="col-5">
              <div class="clicked-card-pic p-2">
                <img :src="item.Picture.PictureUrl1 || '/src/assets/pics/NotFound/placeholder.png'" :alt="item.location">
              </div>
            </div>
            <!-- 4.3 標題、內文、活動地點 -->
            <div class="col-7 ">
              <div class="row flex-column justify-content-between">
                <div class="card-body pe-4">
                  <!-- 4.4 標題 -->
                  <div class="col mt-3">
                    <h6 class="fw-bold text-truncate">{{ item.ActivityName || item.ScenicSpotName }}</h6>
                  </div>
                  <!-- 4.5 內文 -->
                  <div class="col d-none d-sm-block">
                    <p class="activity-card-content truncate">
                      {{ item.Description }}</p>
                  </div>
                  <!-- 4.5 活動地址 -->
                  <div class="col mb-2">
                    <div class="d-flex flex-lg-row justify-content-lg-between align-items-lg-center 
                    flex-column">
                          <i class="bi bi-geo-alt-fill me-1 location text-truncate">
                            <span class="text-dark fw-bold">{{ item.Location || item.City || item.Address }}</span>
                          </i>
                          <button class="btn btn-outline-danger subtitle-1 text-truncate
                          d-none d-lg-block" 
                            @click.prevent="openModal(item)">
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
    <!-- 4.1 活動卡片 (END) -->
    
    <Pagination 
      :searchedArr="searchedArr"
      :carouselArr="carouselArr"
      :itemsPerPage="itemsPerPage"
      :currentPage="currentPage"
      :totalPages="totalPages"
      @prev-page="prevPage"
      @next-page="nextPage"
      @change-page="changePage"
      >
    </Pagination>
  </div>
  <Modal ref="refModal"></Modal>
  <NotFound v-if="paginatedArr.length === 0"></NotFound>
  <Footer></Footer>
  <Loading :active="isLoading">
    <div class="d-flex justify-content-between align-items-center"
      style="width:280px;">
      <div class="loading loading-triangle"></div>
      <div class="loading loading-square"></div>
      <div class="loading loading-circle"></div>
    </div>
  </Loading>

</template>

<style lang="scss" scoped>
  .clicked-card-pic {
  height: 100%;
  width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
};
@media(min-width: 576px){
  .clicked-card-pic {
    img {
      height: 196px;
    }
  };
};
@media(min-width: 768px){
  .clicked-card-pic {
    img {
      height: 196px;
    }
  };
};
@media(min-width: 992px){
  .clicked-card-pic {
    img {
      height: 213px;
    }
  };
}

</style>

<script setup>
import Nav from "/src/components/Nav.vue";
import Banner from "../Spot/Banner.vue";
import Footer from "/src/components/Footer.vue";
import City from "/view/Spot/City.vue";
import {ref, computed} from "vue";

// 1. Pinia 輪播圖
import useClickStore from "/src/stores/ClickStore.js";
import {storeToRefs} from "pinia";
const clickStore = useClickStore();
const {carouselArr, isLoading} = storeToRefs(clickStore);

// 2. 熱門活動/景點 Modal
import Modal from "/src/components/Modal.vue";
const refModal = ref(null);
const openModal = (item) => {
  refModal.value.openModal(item);
};

// 3. Pagination 分頁 
import Pagination from "/src/components/Pagination.vue";
const currentPage = ref(1);
const itemsPerPage = ref(20);
const paginatedArr = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return carouselArr.value.slice(startIndex,endIndex);
});

// 4. 上一頁
const prevPage = () => currentPage.value -=1;
// 5. 下一頁
const nextPage = () => currentPage.value +=1;
// 6. 點擊任何頁碼, 切換至該頁面
const changePage = (page) => {
  currentPage.value = page;
};
// 7. 被SELECT陣列總長度 / 每頁 20 筆 = 總共多少頁碼
const totalPages = computed(() => {
  return Math.ceil(carouselArr.value.length / itemsPerPage.value);
});

// 8. Pinia 搜尋 
import useSearchStore from "/src/stores/SearchStore.js";
const searchStore = useSearchStore();
const {searchedArr} = storeToRefs(searchStore);

// 9. 搜尋失敗, 顯示NotFound
import NotFound from "/src/components/NotFound.vue";
</script>