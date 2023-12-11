import {defineStore} from "pinia";
import {ref} from "vue";

export const useFavoriteStore = defineStore("favorite", () => {
  const favoriteArr = ref([]);
  const flag = ref(false);

  // const getFavorite = ((item) => {
  //     const existingItem = favoriteArr.value.find((favoriteItem) => {
  //       return favoriteItem.item.RestaurantID === item.RestaurantID
  //     });
  //     if(!existingItem) {
  //       favoriteArr.value.unshift(
  //         { id: +new Date(),
  //           item,
  //         },
  //       );
  //       console.log(favoriteArr.value);
  //     }

  //   else{
  //       const index = favoriteArr.value.indexOf(existingItem);
  //       if (index > -1) {
  //         favoriteArr.value.splice(index, 1);
  //         console.log(favoriteArr.value);
  //       }
  //   }
  // })

  // GPT的成功方法
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
})