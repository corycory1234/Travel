<template>
  <!-- 4.6 Modal視窗 -->
  <div 
    class="modal fade"
    ref="refActivityModal" 
    id="exampleModalLabel" 
    tabindex="-1" 
    aria-labelledby="exampleModalLabel" 
    aria-hidden="true"
  >
    <div class="
      modal-dialog
      modal-lg 
      modal-dialog-scrollable
    ">
      <div class="modal-content position-relative">
        <!-- 設計稿：按鈕必須在Modal是窗外 待解決 -->
        <button type="button" 
        class="btn-close position-absolute start-100 translate-middle-y bgc" 
        data-bs-dismiss="modal" 
        aria-label="Close">
        </button>

        <div class="modal-body clearfix">
          <!-- 按鈕待解決 -->
          <a href="#" class="float-end bgc rounded px-1" data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x text-white "></i>
          </a>
        <!-- 1. 圖片渲染 補上 v-if, 才能避免掉 生命週期created 之問題 -->
        <div class="card border-0">
          <img v-if="childActivity.Picture" 
          :src="changeImg || childActivity.Picture.PictureUrl1 || '/src/assets/pics/NotFound/placeholder.png'" 
          class="card-img-top p-3" 
          alt="..."
          >
          <!-- 2. 圖片 >2 張, 才顯示按鈕 -->
          <div v-if="imgArr.length >=2" class="d-flex justify-content-end px-3">
            <a @click.prevent="previous" href="#"
              class="leftBtn me-3"
              :class="{'disabled': imgPage === 0}"
              >
              <i class="bi bi-caret-left-fill fs-5"></i>
            </a>
  
            <a @click.prevent="next" href="#"
            class="rightBtn"
            :class="{'disabled': imgPage === imgArr.length}"
            >
              <i class="bi bi-caret-right-fill fs-5"></i>
            </a>
          </div>
        </div>

          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ childActivity.ActivityName || childActivity.HotelName }}</h5>
          </div>
          <p>{{ childActivity.Description }}</p>

          <div class="container">
            <div class="modal-footer 
            row flex-column 
            align-items-start 
            flex-md-row 
            justify-content-md-start"
            >
              <div class="col col-md-6 m-0 py-1">
                <i class="bi"
                :class="{'bi-clock': childActivity.StartTime , 
                'bi-car-front-fill': childActivity.ParkingInfo }">
                </i>
                <span class="px-2">
                  {{ childActivity.StartTime || childActivity.ParkingInfo}}
                </span>
              </div>

              <div class="col col-md-6 m-0 py-1">
                <i class="bi"
                :class="{'bi-bank': childActivity.Organizer, 
                'bi-house-fill': childActivity.Class }"></i>
                <span class="px-2">
                  {{ childActivity.Organizer || childActivity.Class  }}
                </span>
              </div>

              <div class="col col-md-6 m-0 py-1">
                <i class="bi"
                :class="{'bi-telephone': childActivity.Phone, 'bi-bookmark': childActivity.Class1}"></i>
                <span class="px-2">
                  {{ childActivity.Phone || childActivity.Class1}}
                </span>
              </div>

              <div class="col col-md-6 m-0 py-1">
                <i class="bi bi-geo-alt-fill"></i>
                <span class="px-2">
                  {{ childActivity.Location || childActivity.Address }}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/sass/_Modal.scss";
</style>

<script setup>
import { ref, onMounted,computed } from "vue";

// 1. 引入Bootstrap Modal
import Modal from "bootstrap/js/dist/modal.js";

// 2. 掛載 Modal
const refActivityModal = ref({});
const refActivityModal2 = ref({});
onMounted(()=>{
  refActivityModal2.value = new Modal(refActivityModal.value);
});

// 3. 透過defineExpose, 父元件才有權使用「OpenModal」
const childActivity = ref({});
const imgArr = ref([]);
const reg = /^https:/;
const openModal = (fatherActivity) => {
  // 3.1 展開運算子, 點點點取得 父元件傳過來的item, 並用物件形式 傳值 給 childActivity變數
  childActivity.value = {...fatherActivity};
  // 3.2 如果有巢狀物件, 就跑 reduce 迴圈
  if(childActivity.value.Picture) {
    imgArr.value = Object.keys(childActivity.value.Picture);
    // 3.3 imgArr陣列, 當作key, 給childActivity.Picture[key], 抓取「https:」
    imgArr.value = imgArr.value.reduce((arr, key) => {
      // 3.3 用正則, 擋掉巢狀「PictureDescrption1」的字串
      if (reg.test(childActivity.value.Picture[key])) {
        arr.push(childActivity.value.Picture[key]);
      }
      return arr;
    },[]);
  };
  // console.log(imgArr.value);
  refActivityModal2.value.show();
};
defineExpose({openModal});

// 4. 點擊換圖片
const imgPage = ref(0);
const changeImg = computed(() => {
  return imgArr.value[imgPage.value];
});

// 5. 下一張
const next = () => {
  if(imgPage.value === imgArr.value.length) {return;};
  imgPage.value++;
};

// 6. 上一張
const previous = () => {
  if(imgPage.value === 0) {return;};
  imgPage.value--;
};

</script>