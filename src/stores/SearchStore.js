import {defineStore} from "pinia";
import {ref, computed} from "vue";
import axios from "axios";
import {token} from "/src/assets/javascript/Token.js";
import { useRouter } from "vue-router";

export default defineStore ("useSearchStore", () => {

  // 1. API 取得所有觀光活動
  const activityApi = "https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24filter=Picture%2FPictureUrl1%20ne%20null&%24format=JSON";
  const foodApi = "https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24filter=Picture%2FPictureUrl1%20ne%20null&%24format=JSON";
  const allActivitiesArr = ref([]);
  const allFoodsArr = ref([]);
  const eachPageLength = ref([]);
  
  const getAllActivities = async () => {
    const accessTokenStr = await token.getToken();
    // 1.1 位在「首頁」，打「所有觀光活動」API 
    if(router.currentRoute.value.name === "Home") {
      const headers = {
        authorization: "Bearer " + accessTokenStr
      };
  
      await axios.get(activityApi, headers)
      .then((response) => {
        allActivitiesArr.value = response.data; // 裝所有觀光活動
        console.log("成功, 拿到所有觀光活動", response);
        eachPageLength.value = []; 
        // 各 20 筆觀光活動小陣列物件 in eachPageLength大陣列
        toGetAllActvitiesByPages(allActivitiesArr.value)
      })
      .catch((error)=>{console.log("失敗, 沒拿到所有觀光活動", error);})
    }

    // 1.2 「美食住宿」頁面, Pinia 打「所有美食」API
    else if (router.currentRoute.value.name === "FoodTravel") {
      const headers = {
        authorization: "Bearer " + accessTokenStr
      };

      await axios.get(foodApi, headers)
      .then((response) => {
        allFoodsArr.value = response.data; // 裝所有觀光活動
        console.log("成功, 拿到所有美食", response);
        // 各 20 筆美食小陣列物件 in eachPageLength大陣列 
        toGetAllActvitiesByPages(allFoodsArr.value)
      })
      .catch((error)=>{console.log("失敗, 沒拿到所有美食", error);})
    }
  };

  // 2.  **重要**
  // 2.1 取得「每頁 20 筆觀光活動之小陣列物件 in 大陣列 eachPageLength」 
  const toGetAllActvitiesByPages = (data) => {
    let index = 0;
    let arr = [];
    data.forEach((item, i) => {

      // 2.2 若把 if 判斷寫在開頭, 而 i 跑到29時, 這樣第30筆活動物件
      // 2.2 不會被加入到eachPageLength大陣列裡 (執行緒的問題) 
      // if(index === 20  || data.length === i+1) {
      //   // console.log(arr);
      //   eachPageLength.value.push(arr);
      //   index = 0;
      //   arr = [];
      //  };

      arr.push(item);
      // console.log(`${arr}, 索引值: ${i}, ${index}`);
      index +=1;

      if(index === 20  || data.length === i+1) {
        eachPageLength.value.push(arr);
        index = 0;
        arr = [];
       };
    });
    
    console.log(eachPageLength.value);
  }

  // 2. 搜尋 觀光活動
  const keyword = ref("");
  const searchedArr = ref ([]);
  const router = useRouter();
  const isLoading = ref(false); // overlay加載動畫
  
  const search = async () => {
    if(!keyword.value.replace(/^\s+|\s+$/gm, '')){console.log("禁止空字串 空白字串"); return};
    searchedArr.value = [];
    
    // 2.1 isLoading動畫加載
    isLoading.value = true;
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    })

    // 2.1 若在 首頁 或 searchedActivities.vue，就只搜尋「觀光活動」
    if(router.currentRoute.value.name === "Home" || router.currentRoute.value.name === "SearchedActivities" 
    || router.currentRoute.value.name === "SelectedResults"
    || router.currentRoute.value.name === "ClickedCity") {
      allActivitiesArr.value.filter((item) => {
       if(item.ActivityName.match(keyword.value)) {
        console.log("找到被搜尋的活動~~~~", `共${searchedArr.value.length}筆`);
          searchedArr.value.push(item);}
     });
      // 2.2 得到searchedArr後, 路由進入「被搜尋活動」之元件
      router.push({name: "SearchedActivities"});
      setTimeout(() => {
        isLoading.value = false;
      },1000)
    }

     // 2.3 若在 其他頁面(美食住宿 或 searchedFoods.vue)，就只搜尋「美食」
     else {
      allFoodsArr.value.filter((item) => {
        if(item.RestaurantName.match(keyword.value)) {
          searchedArr.value.push(item);
          console.log("找到搜尋後的美食", searchedArr.value);};
      });
      // 2.4 得到searchedArr後, 路由進入「被搜尋活動」之元件
      router.push({name: "SearchedFoods"});
      setTimeout(() => {
        isLoading.value = false;
      },1000)
    };
    keyword.value = "";
  };


  return {
    getAllActivities, 
    allActivitiesArr, 
    search, 
    keyword, 
    searchedArr, 
    eachPageLength,
    isLoading,
  };
});