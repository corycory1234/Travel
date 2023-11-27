import {defineStore} from "pinia";
import {ref, computed} from "vue";
import axios from "axios";
import {token} from "/src/assets/javascript/Token.js";
import { useRouter } from "vue-router";
import allCities from "../JSON/allCities.json";

export default defineStore("useSelectStore", () => {
  const selectedOption1 = ref("類別"); // 預設"類別"
  const selectedOption2 = ref("不分縣市"); // 預設"不分縣市"
  // const options1 = ref(["活動", "景點"]);
  const allCityArr = ref([...allCities]); // 解構 所有城市 JSON字串
  const router = useRouter();
  const dataArr = ref([]);
  let apiUrl = "";
  const isLoading = ref(false); // overlay加載動畫
  const reg = /.jpg/; // 正則, 擋掉非 jpg 的圖片網址

  const select = async () => {
    isLoading.value = true;
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    })


    // 1. 若進入「首頁」
    if (router.currentRoute.value.name === "Home" || router.currentRoute.value.name === "SelectedResults" ||
    router.currentRoute.value.name === "SearchedActivities" 
    || router.currentRoute.value.name === "ClickedCity") {
      // 1.1 沒選就return
      if (selectedOption1.value ==="類別") {return;};
  
  // 1.2 選活動, 取指定活動, 若沒指定, 取所有活動
  if (selectedOption1.value === "活動") {
    apiUrl = selectedOption2.value 
    ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/${selectedOption2.value}?%24filter=Picture%2FPictureUrl1%20ne%20null&%24format=JSON`
    : "https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24format=JSON"
  }
  else if (selectedOption1.value === "景點") {
    apiUrl = selectedOption2.value
    ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${selectedOption2.value}?%24format=JSON`
    : "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24format=JSON"
  }

  // 1.3 活動or景點 搭配「全部縣市」API
  if (selectedOption1.value === "活動") {
    if (selectedOption2.value === "不分縣市") {
      apiUrl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity?%24format=JSON";
    } 
  } else if (selectedOption1.value === "景點") {
    if (selectedOption2.value === "不分縣市") {
      apiUrl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24format=JSON";
    } 
  }

  // 1.4 拿TOKEN
  const accessTokenStr = await token.getToken();
  const config = {
    headers: {"authorization": "Bearer " + accessTokenStr,}
  };

  // 1.5 獲取 response資料 (活動、景點)
  await axios.get(apiUrl, config)
    .then((response) => {
      dataArr.value = response.data;
      // console.log("成功, 拿到SELECT資料",dataArr.value);
      dataArr.value.forEach((item) => {
        // 1.6 擋掉drive.google || 非.jpg的網址
        if(!reg.test(item.Picture.PictureUrl1)){
          item.Picture.PictureUrl1 = getAssetUrl();
        }
      })

      router.push({name: "SelectedResults"});
    })
    .catch((error)=>{console.log("SELECT失敗", error);})
    .finally(() => {
      setTimeout(()=>{
        isLoading.value = false;
      },1000)
    })
  }


  // 2. 進入「美食住宿」頁面
  else if (router.currentRoute.value.name === "FoodTravel" || router.currentRoute.value.name === "SelectedResults2" ||
  router.currentRoute.value.name === "SearchedFoods") {
    // 2.1 沒選, 就return
    if (selectedOption1.value ==="類別" || (selectedOption2.value !== "不分縣市" && 
    selectedOption2.value === "不分縣市")) {return;};

    if (selectedOption1.value === "美食") {
      // console.log("已選到美食");
      apiUrl = selectedOption2.value // <select>依據所選縣市, 切換不同縣市Value
      ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant/${selectedOption2.value}?%24format=JSON`
      : "https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24format=JSON"
    }
    else if (selectedOption1.value === "住宿") {
      // console.log("已選到住宿");
      apiUrl = selectedOption2.value // <select>依據所選縣市, 切換不同縣市Value
      ? `https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel/${selectedOption2.value}?%24format=JSON`
      : "https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel?%24format=JSON"
    }
    // 2.2 「美食」搭配「全部縣市」API
    if (selectedOption1.value === "美食") {
      if (selectedOption2.value === "不分縣市") {
        apiUrl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/Restaurant?%24format=JSON";
      }
    }
    else if (selectedOption1.value === "住宿") {
      if (selectedOption2.value === "不分縣市") {
        apiUrl = "https://tdx.transportdata.tw/api/basic/v2/Tourism/Hotel?%24format=JSON";
      }
    };

    // 2.3 拿TOKEN
    const accessTokenStr = await token.getToken();
    const config = {
      headers: {"authorization": "Bearer " + accessTokenStr,}
    };
    // 2.4 擷取API回傳資料 (美食、住宿)
    await axios.get(apiUrl, config)
    .then((response) => {
      dataArr.value = response.data;
      // console.log("成功, 拿到SELECT資料",dataArr.value);
      // 2.5 擋掉drive.google || 非.jpg的網址
      dataArr.value.forEach((item) => {
        if(!reg.test(item.Picture.PictureUrl1)){
          item.Picture.PictureUrl1 = getAssetUrl();
        };
      });
      router.push({name: "SelectedResults2"});
    })
    .catch((error)=>{console.log("SELECT失敗", error);})
    .finally(() => {
      setTimeout(()=>{
        isLoading.value = false;
      },1000)
    })
  }


  };

    // 3. Vite圖片部屬問題 
    const getAssetUrl = () => {
      return new URL (`/src/assets/pics/NotFound/placeholder.png`, import.meta.url).href
    }
  
  return {
    selectedOption1,
    selectedOption2,
    // options1,
    allCityArr,
    dataArr,
    select,
    isLoading,
    getAssetUrl,
  };
})