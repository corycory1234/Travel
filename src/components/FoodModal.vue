<template>
  <div class="modal fade" 
  ref="refFoodModal" 
  id="foodModal" 
  tabindex="-1" 
  aria-labelledby="exampleModalLabel"
    aria-hidden="true">

    <div class="
    modal-dialog
    modal-dialog-scrollable
    ">
      <div class="modal-content position-relative">
        <div class="modal-body clearfix">
          <a href="#" class="float-end bgc rounded px-1" data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x text-white "></i>
          </a>

          <!-- 1. :src 綁定 只有一張圖片 或 有多張圖片的陣列 -->
          <div class="card border-0">
            <img v-if="childFood.Picture" 
            :src="changeImg || childFood.Picture.PictureUrl1" 
            class="card-img-top p-3"
              alt="...">
            <!-- 2. 圖片 >2 張, 才顯示按鈕 -->
            <div v-if="imgArr.length >= 2" class="d-flex justify-content-end px-3">
              <a @click.prevent="previous" href="#" class="leftBtn me-3" :class="{ 'disabled': imgPage === 0 }">
                <i class="bi bi-caret-left-fill fs-5"></i>
              </a>

              <a @click.prevent="next" href="#" class="rightBtn" :class="{ 'disabled': imgPage === imgArr.length }">
                <i class="bi bi-caret-right-fill fs-5"></i>
              </a>
            </div>
          </div>
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ childFood.RestaurantName }}</h5>
          </div>
          <div class="modal-body">
            <p>{{ childFood.Description }}</p>
          </div>
          <!-- 店家資訊 -->
          <div class="modal-footer d-flex flex-column align-items-start">
            <i class="bi bi-clock"><span class="px-2">{{ childFood.OpenTime }}</span></i>
            <i class="bi bi-geo-alt-fill"><span class="px-2">{{ childFood.Address }}</span></i>
            <i class="bi bi-telephone"><span class="px-2">{{ childFood.Phone }}</span></i>

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
import { ref, onMounted, computed } from "vue";
// 1. 引入Bootstrap Modal
import Modal from "bootstrap/js/dist/modal.js";

// 2. 掛載 Modal
const refFoodModal = ref({});
const refFoodModal2 = ref({});
onMounted(() => {
  refFoodModal2.value = new Modal(refFoodModal.value);
});

// 3. 透過defineExpose, 父元件才有權使用「OpenModal」
const childFood = ref({});
const imgArr = ref([]);
const reg = /^http:/;
const openModal = (fatherFood) => {
  childFood.value = { ...fatherFood };
  if (childFood.value.Picture) {
    imgArr.value = Object.keys(childFood.value.Picture);
    // 3.1 用正則去檢查[key], 也就是[https:"..."]
    imgArr.value = imgArr.value.reduce((emptyArr, key) => {
      if (reg.test(childFood.value.Picture[key])) {
        emptyArr.push(childFood.value.Picture[key])
      };
      return emptyArr;
    }, []);
  };
  // console.log(imgArr.value);
  refFoodModal2.value.show()
};
defineExpose({ openModal });

// 4. 點擊換圖片
const imgPage = ref(0);
const changeImg = computed(() => {
  return imgArr.value[imgPage.value];
});

// 5.下一張
const next = () => {
  if (imgPage.value === imgArr.value.length) return;
  imgPage.value++;
};

// 6. 上一張
const previous = () => {
  if (imgPage.value === 0) return;
  imgPage.value--;
};

</script>