<template>
  <Nav></Nav>
  <Banner></Banner>
  <div class="container my-5" v-if="searchedArr.length > 0">
    <div>
      <h3 class="h5 fw-bold"><i class="bi bi-caret-up-fill triangle me-2"></i>熱門活動</h3>
    </div>
    <div class="row gx-3">

      <!-- 4.1 活動卡片 (START) -->
      <div v-for="(item, index) in paginatedActivities" 
      :key="item.ActivityID" 
      class="col-12 col-lg-6 mb-3"
      @click.prevent="openModal(item)"
      >

      <div class="card h-100 border-0 shadow">
        <div class="row " >
          <!-- 4.2 圖片 -->
          <div class="col-5">
            <div class="activity-card-pic p-2">
              <img :src="item.Picture.PictureUrl1 || '/src/assets/pics/NotFound/placeholder.png'" :alt="item.location">
            </div>
          </div>
          <!-- 4.3 標題、內文、活動地點 -->
          <div class="col-7 ">
            <div class="row flex-column justify-content-between">
              <div class="card-body pe-4">
                <!-- 4.4 標題 -->
                <div class="col mt-3">
                  <h6 class="fw-bold text-truncate">{{ item.ActivityName }}</h6>
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
                      <span class="text-dark fw-bold px-2">{{ item.Location }}</span>   
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
      :itemsPerPage="itemsPerPage"
      :currentPage="currentPage"
      :totalPages="totalPages"
      :eachPageLength="eachPageLength"
      @prev-page="prevPage"
      @next-page="nextPage"
      @change-page="changePage"
      >
    </Pagination>
  </div>
  <Modal ref="refActivitiesModal"></Modal>
  <NotFound v-if="!paginatedActivities.length"></NotFound>
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
@import "/src/sass/_activity.scss";
</style>

<script setup>
import Nav from "/src/components/Nav.vue";
import Banner from "../Spot/Banner.vue";
import Footer from "/src/components/Footer.vue";
import {ref, onMounted, computed} from "vue";

// 1. Pinia 搜尋
import useSearchStore from "/src/stores/SearchStore.js";
import {storeToRefs} from "pinia";
const searchStore = useSearchStore();
const {getAllActivities, search} = searchStore;
const {getAllActivitiesArr, allActivitiesArr, searchedArr, keyword, eachPageLength,
  isLoading} = storeToRefs(searchStore);
// onMounted(() => { getAllActivities()});

// 2. 熱門活動 Modal
import Modal from "/src/components/Modal.vue";
const refActivitiesModal = ref(null);
const openModal = (item) => {
  refActivitiesModal.value.openModal(item);
};

// 3. Pagination 分頁
import Pagination from "/src/components/Pagination.vue";
const currentPage = ref(1); // 當前頁面
const itemsPerPage = ref(20); // 限制 1頁 只有 20筆活動
// 3.1 slice() 進行淺層複製, 從searchedArr大陣列, 拆分成 1頁小陣列 只有 20筆活動
// 第X頁      StartIndex        EndIndex        .slice()回傳新陣列
// 第1頁      (1-1) x20 = 0     0 + 20 = 20     .slice(0,20), 淺拷貝0-19筆物件, 不含第20筆
// 第2頁      (2-1) x20 = 20    20 + 20 = 40    .slice(20,40), 淺拷貝20-39筆物件, 不含第40筆
const paginatedActivities = computed(() => {
  const startIndex = (currentPage.value -1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return searchedArr.value.slice(startIndex, endIndex); 
});

// 4. 上一頁
const prevPage = () => currentPage.value -=1;

// 5. 下一頁
const nextPage = () => currentPage.value +=1;

// 6. 點擊任何頁碼, 切換至該頁面
const changePage = (page) => {
  currentPage.value = 1;
  currentPage.value = page;
};
// 7. 被搜尋Arr總長度 / 每頁20筆 = 總共多少頁碼 
const totalPages = computed(() => {
 return Math.ceil(searchedArr.value.length / itemsPerPage.value);
});

// console.log(eachPageLength.value);

// 8. 搜尋失敗, 顯示NotFound
import NotFound from "/src/components/NotFound.vue";
</script>