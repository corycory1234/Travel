import {defineStore} from "pinia";
import {ref} from "vue";

export const useFavoriteStore = defineStore("favorite", () => {
  const favoriteArr = ref([]);
  const flag = ref(false);

  // 1.  由於交通部 各個API資料，並沒有「共通」可以識別id的資料
  // 1.1 因此使用 findIndex 做為識別id，並使用JSON.stringify 做 文字匹配對比
  // 1.2 若 findIndex 返回「-1」，代表「沒有匹配成功」，因此 unshift 到陣列裡
  // 1.3 而 findex 返回「索引值」，代表「匹配成功」，陣列裡面已經有該筆資料，因此進行 splice 刪除
  // 1.4 呈上，我們可點擊「收藏」，再次點擊「刪除收藏」
  const getFavorite = (item) => {
    const existingItemIndex = favoriteArr.value.findIndex((favoriteItem) => {
      return JSON.stringify(favoriteItem.item) === JSON.stringify(item);
    });
  
    if (existingItemIndex === -1) {
      favoriteArr.value.unshift({
        id: +new Date(),
        item,
      });
      // console.log(favoriteArr.value);
    } else {
      favoriteArr.value.splice(existingItemIndex, 1);
      // console.log(favoriteArr.value);
    }
  };
  

  return {getFavorite, favoriteArr};
},
// 2. Pinia 持久化, 似localStorage
{
  persist: {
    key:"favorite",
    paths:["favoriteArr"]
  }
})