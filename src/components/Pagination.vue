<template>
  <div class="container">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" @click.prevent="prevPage">
          <a class="page-link rounded" href="#"
          :class="currentPage === 1 ? 'paginationPrev' : 'paginationNext'">
            <i class="bi bi-caret-left-fill fs-6"></i>
          </a>
        </li>

        <!-- 顯示所有頁碼 1-200多... 導致破版 -->
        <!-- <li class="page-item"
        v-for="(page) in pages" :key="page"
        :class="{'active': page === currentPage}"
        @click.prevent="changePage(page)"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li> -->

        <!-- 只顯示"當前頁碼" -->
        <li class="page-item active px-3">
          <a class="page-link 
          text-black
          fw-bold 
          paginationBg 
          border-0" href="#">{{ currentPage }}</a>
        </li>


        <li class="page-item" @click.prevent="nextPage">
          <a class="page-link rounded" href="#"
          :class="currentPage < totalPages ? 'paginationNext' : 'paginationPrev'">
            <i class="bi bi-caret-right-fill fs-6"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.paginationBg {
  background-color: transparent !important;
}
.paginationNext {
  color:#FFFFFF;
  background-color: #FF1D6C;
}
.paginationPrev {
  background-color:#0D0B0C;
  color: #FFFFFF;
}
</style>

<script setup>
  import {ref, computed, onMounted, watch} from "vue";

  // 1. DefineProps 接收 父元件 SearchedActivities 傳過來的
  const props = defineProps(
    ["carouselArr","dataArr","searchedArr","itemsPerPage","currentPage","totalPages","eachPageLength"]
    );
  
  // 2. 上一頁
  const prevPage = () => {
    if (props.currentPage <= 1 ) return;
    // 子元件 告知 父元件 SearchedActiviteis, 進行 上一頁 之函式
    // 子元件「不可」計算與賦值 父元件 的函數, 頂多「只能寫判斷」
    emits("prev-page"); 
  };

  // 3. 下一頁
  const nextPage = () => {
    if (props.currentPage < props.totalPages) {
    // 子元件 告知 父元件 SearchedActiviteis, 進行 下一頁 之函式
    // 子元件「不可」計算與賦值 父元件 的函數, 頂多「只能寫判斷」
      emits("next-page");
    } else if (props.currentPage === props.totalPages) return;
  }

  // 4. 點擊任何頁碼, 切換至該頁面
  const changePage = (page) => {
    // 4.1 page參數必須傳去, 不然會報錯, WHY? 是因為page參數來自於子元件嗎?
    emits("change-page", page); 
  };

  // 5. defineEmites 傳給 父元件 SearchedActivities
  const emits = defineEmits(["prev-page", "next-page", "change-page"]);
  

  // 6. 生成页码数组 (GPT提供, 看不懂各個頁面1、2、3、4...是怎麼生成的)??
  // 6.1 目前<select>完，再<input>，最後<select>，基隆景點/活動各只有5筆不到，卻有2個頁碼 by 11/4
const pages = computed(() => {
  // 6.1 若searchedArr長度 > 0, 就取 searchedArr, 否則取 dataArr
  const totalItems = props.searchedArr.length > 0 ? props.searchedArr : props.dataArr || props.carouselArr;
  const totalPages = Math.ceil((totalItems?.length || 0) / props.itemsPerPage);
  console.log('totalItems:', totalItems);
  console.log('totalPages:', totalPages);
  return Array.from({ length: totalPages }, (_, index) => index + 1);
});



</script>   