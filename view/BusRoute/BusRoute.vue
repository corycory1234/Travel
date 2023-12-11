<template>
  <div class="container ">

  <!-- 1. HEADER 導覽列 -->
    <nav class="navBar justify-content-center justify-content-md-between py-3">
      <router-link :to="{name: 'Home'}">
        <div class="">
            <img src="/src/assets/pics/NavPics/Group4.png" alt="">
        </div>
      </router-link>

      <!-- 1.1 平板 NAV  -->
      <div class="nav-links d-none d-md-flex mt-2">
        <router-link to="/view/Home.vue" class="header-link spot text-nowrap" href="#">
          <img src="/src/assets/pics/NavPics/Frame38.png" alt="" class="link-img">
          台灣景點
        </router-link>

        <router-link to="/view/FoodTravel.vue" class="header-link food text-nowrap" href="#">
          <img src="/src/assets/pics/NavPics/Frame39.png" alt="" class="link-img">
          美食住宿
        </router-link>
        
        <router-link :to="{name: 'BusRoute'}" href="#" class="header-link traffic text-nowrap">
          <img src="/src/assets/pics/NavPics/Frame40.png" alt="" class="link-img">
          景點交通
        </router-link>

        <router-link :to="{name: 'MyFavorite'}" class="header-link spot text-nowrap" href="#">
          <img src="/src/assets/pics/NavPics/Frame38.png" alt="" class="link-img">
          我的收藏
        </router-link>
      </div>
    </nav>

    <!-- 1.2 手機版 NAV  -->
    <ul class="nav justify-content-between shadow-sm d-md-none bg-white w-100 rounded my-1">
        <li class="nav-item">
          <router-link to="/view/Home.vue" 
            class="nav-link p-2" 
            aria-current="page"
            :class="{ 'activeTrue': isRouteActive('/view/Home.vue'), 
            'activeFalse': !isRouteActive('/view/Home.vue')}">景點活動
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/view/FoodTravel.vue" 
            class="nav-link p-2" 
            :class="{ 'activeTrue': isRouteActive('/view/FoodTravel.vue'), 
            'activeFalse': !isRouteActive('/view/FoodTravel.vue')}">美食住宿
          </router-link>
        </li>

      <li class="nav-item">
        <router-link to="/view/BusRoute/BusRoute.vue" 
        class="nav-link p-2"
        :class="{'activeTrue': isRouteActive('/view/BusRoute/BusRoute.vue'), 
          'activeFalse': !isRouteActive('/view/BusRoute/BusRoute.vue')}">景點交通
        </router-link>
      </li>

      <li class="nav-item">
        <router-link :to="{name: 'MyFavorite'}" 
        class="nav-link p-2" 
        :class="{'activeTrue': isRouteActive('/view/MyFavorite/MyFavorite.vue'), 
        'activeFalse': !isRouteActive('/view/MyFavorite/MyFavorite.vue')}"
          >我的收藏
        </router-link>
      </li>
    </ul>

    <!-- 1.5 下拉選單 <SELECT> -->
      <div class="input-group mt-2">
        <select name="" id="" class="form-select me-1 rounded border-0 shadow-sm" v-model="city">
          <option value="" disabled>選擇縣市</option>
          <option 
            v-for="(option, index) in allCitiesJSON"
            :value="option.Value" 
            :key="index">
            {{option.CityName}}
          </option>
        </select>
          
        <select name="" id="" class="form-select rounded border-0 shadow-sm" v-model="routeName">
          <option value="" disabled>選擇路線</option>
          <option 
            v-for="(route) in routeData"
            :value="route.RouteName.Zh_tw"
            :key="route.RouteUID">
            [{{ route.RouteName.Zh_tw }}] 
            {{ route.DepartureStopNameZh }} - {{ route.DestinationStopNameZh }}
          </option>
        </select>

        <button class="btn btn-md btnBgc rounded ms-1">
          <span><i class="bi bi-search" @click.prevent="getEstimationAndCountDown"></i></span>
        </button>
      </div>


  
  <!-- 2. 公車路線動態圖 -->
  <div class="container pt-4 g-0">
    <h3 class="d-none d-lg-block">請先選擇縣市，再選擇公車路線</h3>
    <ul class="row row-cols-2  mx-1 rounded py-2 shadow-sm"
    v-for="(item) in departAndDestination" :key="item.RouteID">
      <li class="col" @click.prevent="goDestination"
      >往 <span class="pink">{{ item.DepartureStopNameZh }}</span></li>
      <li class="col" @click.prevent="backDestination"
      >往 <span class="pink">{{ item.DestinationStopNameZh }}</span></li>
    </ul>

  </div>
</div>

  <!-- 3.倒數計時  -->
    <div class="container">
      <div class="d-flex justify-content-end">
        <p class="pink"> *每隔{{secs}}秒自動更新</p>
      </div>
    </div>

  <!--4. 剩餘到站時間、公車站名 -->

  <div class="container mb-5" v-if="renderGoData.length >0 || renderBackData.length >0">
    <div v-for="(item, index) in renderGoData" :key="index" 
    class="row align-items-center justify-content-md-center gx-0" v-if="goFlag">
      <p class="col-4 col-md-2 rounded p-2 text-center" 
      :class="{
        'arriving': item.time === 0,
        'coming' : item.time <=1 && item.time > 0,
        'onTheWay' : item.time > 1,
        'noDepart' : !item.time
      }">{{item.timeText}} </p> 
      <p class="col-8 col-md-2 ps-2">{{item.stops}}</p>
    </div>

    <div v-for="(item) in renderBackData" 
    class="row align-items-center justify-content-md-center gx-0" v-if="backFlag">
      <p class="col-4 col-md-2 rounded p-2 text-center"
      :class="{
        'arriving': item.time === 0,
        'coming' : item.time <=1 && item.time > 0,
        'onTheWay' : item.time > 1,
        'noDepart' : !item.time 
      }">{{item.timeText}} </p> 
      <p class="col-8 col-md-2 px-2">{{item.stops}}</p>
    </div>
  </div>

  <!--5. 「預設」到站時間、公車站名 -->
    <!-- <div class="container" v-if="renderGoData.length <=0 || renderBackData.length <=0">
      <div 
      class="row align-items-center justify-content-md-center gx-0" >
        <p class="col-4 col-md-2 rounded p-2 text-center noDepart">未發車</p> 
        <p class="col-8 col-md-2 ps-2">西門町</p>
      </div>

      <div 
      class="row align-items-center justify-content-md-center gx-0">
        <p class="col-4 col-md-2 rounded p-2 text-center noDepart">未發車</p> 
        <p class="col-8 col-md-2 ps-2">台北車站</p>
      </div>

      <div 
      class="row align-items-center justify-content-md-center gx-0">
        <p class="col-4 col-md-2 rounded p-2 text-center onTheWay">15分鐘</p> 
        <p class="col-8 col-md-2 ps-2">捷運忠孝新生站</p>
      </div>

      <div 
      class="row align-items-center justify-content-md-center gx-0">
        <p class="col-4 col-md-2 rounded p-2 text-center onTheWay">10分鐘</p> 
        <p class="col-8 col-md-2 ps-2">忠孝SOGO百貨</p>
      </div>

      <div 
      class="row align-items-center justify-content-md-center gx-0">
        <p class="col-4 col-md-2 rounded p-2 text-center coming">即將到站</p> 
        <p class="col-8 col-md-2 ps-2">國父紀念館</p>
      </div>

      <div 
      class="row align-items-center justify-content-md-center gx-0">
        <p class="col-4 col-md-2 rounded p-2 text-center arriving">進站中</p> 
        <p class="col-8 col-md-2 ps-2">市政府</p>
      </div>

      <div 
      class="row align-items-center justify-content-md-center gx-0">
        <p class="col-4 col-md-2 rounded p-2 text-center onTheWay">5分鐘</p> 
        <p class="col-8 col-md-2 ps-2">台北101</p>
      </div>

      <div 
      class="row align-items-center justify-content-md-center gx-0">
        <p class="col-4 col-md-2 rounded p-2 text-center onTheWay">10分鐘</p> 
        <p class="col-8 col-md-2 ps-2">象山</p>
      </div>
    </div> -->
  
  <GoTop></GoTop>

  <div class="container-fluid text-center bg-white py-3 fixed-bottom">
    <p class="footer-txt">Taiwan Tourguide © Code: Kory / Design: KT</p>
  </div>

</template>

<style lang="scss" scoped>
.btnBgc {background-color: #FF1D6C;}
.pink {color:#ff1d6c; cursor: pointer;}
.arriving {
  background-color: #FF1D6C;
  color: #fff !important;
  border: none !important;
}
.coming {
  background-color: #FFB72C;
  color: #fff;
  border: none;
}
.onTheWay {
  border: black 2px solid;
  color: black;
}
.noDepart {
  border: 2px solid #ACACAC;
  color: #ACACAC;
}
.activeTrue {
  color: #FF1D6C;
}
.activeFalse {
  color: #ACACAC;
}
</style>

<script setup>
import {ref, computed, onMounted, watch, onUpdated} from "vue";
// import Footer from "/src/components/Footer.vue";
import {token} from "/src/assets/javascript/Token.js";
import axios from "axios";
import allCitiesJSON from "/src/JSON/allCities.json";

const city = ref(""); // v-model 各縣市
const routeName = ref(""); // v-model 公車路線

// 0. TOKEN
// const accessTokenStr = token.getToken();
// const config = {
//   headers: {"authorization": "Bearer " + accessTokenStr,}
// };

// 1.「指定縣市 - 所有」公車路線 (Watch 觸發更新)
const routeData = ref([]); // 所有公車路線資料
const getBusRoutes = async () => {
  const accessTokenStr = await token.getToken();
  const config = {
  headers: {"authorization": "Bearer " + accessTokenStr,}
  };

  const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/${city.value}?%24format=JSON`;
  axios.get(apiUrl, config)
  .then((response) => {
    routeData.value = response.data;
    // console.log("指定縣市公車路線",routeData.value);
  })
};

// 2.「預估到站時間 - 指定公車」(有些縣市的EstimateTime格式不一致, 導致無法成功打出API)
const goBusData = ref([]); // 公車(去程)大Arr
const backBusData = ref([]);// 公車(返程)大Arr
const secs = ref(60);
const departAndDestination = ref([]);

const getEstimation = async () => {
  const accessTokenStr = await token.getToken();
  const config = {
  headers: {"authorization": "Bearer " + accessTokenStr,}
  };


    const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/${city.value}/${routeName.value}?%24format=JSON`;
    axios.get(apiUrl, config)
    .then((response) => {
      const estimation = response.data;
      // console.log(estimation.value);
  
      // 2.1 撈出公車 Direction「去程0」、「回程1」
      const goBus = estimation.filter((item) => !item.Direction);
      const backBus = estimation.filter((item) => item.Direction);
      // console.log(backBus);
      
      // 2.2 自己組資料格式 - 站名UID、預估到站秒數
      goBus.forEach((bus) => {
          goBusData.value.push({
            StopUID: bus.StopUID,
            EstimateTime: bus.EstimateTime,
          });
        });
      backBus.forEach((bus) => {
        backBusData.value.push({
          StopUID: bus.StopUID,
          EstimateTime: bus.EstimateTime,
        });
      });
      // console.log(backBusData.value);
      // 2.3 再取排序正確公車站
      // console.log("goBus陣列資料",goBusData.value);
      getStops();
    })
    
    // 2.4 只單純拿起站、終點站，跑v-for
    const destinationApi = `https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/${city.value}/${routeName.value}?%24top=30&%24format=JSON`
    axios.get(destinationApi, config)
    .then((response) => {
      departAndDestination.value = response.data
    });


};

// 3. 取得「指定公車 - 各公車站(起終點站排序)」
const renderGoData = ref([]);
const renderBackData = ref([]);
const time = ref(0);
const timeText = ref("");

const getStops = async () => {
  const accessTokenStr = await token.getToken();
  const config = {
  headers: {"authorization": "Bearer " + accessTokenStr,}
  };

  renderGoData.value = [];
  renderBackData.value = [];

  const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Bus/DisplayStopOfRoute/City/${city.value}/${routeName.value}?%24format=JSON`;
  axios.get(apiUrl, config)
  .then((response) => {
  const stops = response.data;
    // 3.1 Direction:0 去程 - 正確公車站排序
    stops[0].Stops.forEach((stop) => {
      goBusData.value.forEach((goBus) => {
        /* 3.2 goBusData 的 StopUID 沒有正確排序公車起終站, 但stops 的 StopUID有正確排序, 
        因此必須用if交叉匹配，以利取得該公車 到 各公車站的剩餘時間 */
        if(stop.StopUID === goBus.StopUID) {
          time.value = Math.floor((goBus.EstimateTime / 60));
          // 3.3 公車到站 剩X分鐘
          if(time.value === 0 ) {timeText.value = "進站中"}
          else if(time.value <=1 && 0 < time.value) {timeText.value = "即將到站"}
          else if(!time.value) { timeText.value = "未發車"}
          else { timeText.value = `${time.value} 分鐘`}
        };
      })
      renderGoData.value.push({
          stops: stop.StopName.Zh_tw,
          timeText: timeText.value,
          time: time.value
        });
    });
    // 3.2 Direction:1 返程 - 正確公車站排序
    stops[1].Stops.forEach((stop) => {
      backBusData.value.forEach((backBus) => {
        if(stop.StopUID === backBus.StopUID) {
          time.value = Math.floor(backBus.EstimateTime / 60);
          if(time.value  === 0) {timeText.value = "進站中"}
          else if(time.value  <= 1 && 0 < time.value ) {timeText.value = "即將到站"}
          else if(!time.value ) {timeText.value = "未發車"}
          else { timeText.value = `${time.value }分鐘`}
        };
      });
        renderBackData.value.push({
        stops: stop.StopName.Zh_tw,
        timeText: timeText.value,
        time: time.value,
      });
    });
  })
}

// 4. 「去、返」切換
const goFlag = ref(true);
const backFlag = ref(false);
const goDestination = () => {
  backFlag.value = false;
  goFlag.value = true;
};
const backDestination = () => {
  goFlag.value = false;
  backFlag.value = true;
};

// 5. 每60秒 撈API即時動態剩餘分鐘進站
let countDown;
let update;
const startCountDown = () => {
  countDown = setInterval(() => {
    secs.value --;
    if(secs.value === 0) {secs.value = 60;}
  },1000);
};
const StartUpdate = () => {
  update = setInterval(() => {
    getEstimation();
  },60000);
};
const resetTimers = () => {
  clearInterval(countDown);
  clearInterval(update);
  startCountDown();
  StartUpdate();
};

// 6. 將 getEstimation & resetTimer 合併成一個函式 去觸發按鈕
const getEstimationAndCountDown = () => {
  getEstimation();
  resetTimers();
};

// 7. Nav切換<router-link>, 切換文字顏色
  import {useRoute} from "vue-router";
  const isRouteActive = (route) => {
  const currentRoute = useRoute();
  return currentRoute.path === route;
}


watch(
  // 監聽 <SELECT>, 換指定縣市, 就更新所有公車路線
  () => city.value, () => {
    if(city.value) {
      setTimeout(() => {
        getBusRoutes()
      }, 1000)
    }},
)

// 7. 返回頂部
import GoTop from "/src/components/GoTop.vue";
</script>