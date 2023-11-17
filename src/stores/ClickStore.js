import {defineStore} from "pinia";
import {ref, computed} from "vue";
import axios from "axios";
import {token} from "/src/assets/javascript/Token.js";
import { useRouter } from "vue-router";

export default defineStore ("useClickStore", () => {
  // 1. 輪播圖測試2版
  const router = useRouter();
  const carouselArr = ref([]);
  const isLoading = ref(false);
  // 1.1 取得 輪播圖 各City 所有活動
  const to = async(city) => {
    isLoading.value = true;
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    })


    const accessTokenStr = await token.getToken();
    const headers = { authorization: "Bearer " + accessTokenStr} ;
    const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/Activity/${city}?%24filter=Picture%2FPictureUrl1%20ne%20null%20&%24top=30&%24format=JSON`;
    axios.get(apiUrl, headers)
      .then((response) => {
        carouselArr.value = response.data;
        console.log(carouselArr.value);
      })
      .catch((error) => {
        console.log("錯誤,沒拿到輪播圖City", error);
      })
      .finally(() => {
        setTimeout(()=>{
          isLoading.value = false;
        },1000)
      })
    router.push({name: "ClickedCity"});
  };


  return {to, carouselArr, isLoading}
})
