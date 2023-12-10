<template>
  <div class="container" v-show="showGoTop">
    <div class="d-flex justify-content-end py-3">
      <button  @click.prevent="goTop" 
      class="goTop rounded-circle border-0">
        <i class="bi bi-arrow-up fs-5"></i>
      </button>
  
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .goTop{
    background-color: #FF1D6C;
    color:#fff;
    // 1. 固定位置, 離右邊20, 離下面70
    position: fixed;
    bottom: 70px;
    right: 20px
  }
</style>
<script setup>
  import {ref, onMounted, onUnmounted } from "vue";
  // 1. 返回頂部: 滾動高度0
  const showGoTop = ref(false);
  const goTop = () => {
    document.body.scrollTop = 0;
    // 1.1 根元素，返回頂端
    document.documentElement.scrollTop = 0;
  };
  // 2. 滾動高度 > 97時，才「顯示返回頂部」
  const handleScroll = () => {
    showGoTop.value = window.scrollY >=97;
  };
  // 3. 一進頁面，掛載滾動事件
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  })
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  })
</script>