// 1. 導入對應函式
import {createRouter, createWebHashHistory} from "vue-router";

// 2. 導入首頁
import Home from "/view/Home.vue";
import allCities from "../JSON/allCities.json";

// 3. 創建路由對象
const routes = [
  { path: "/", redirect:"/view/Home.vue", }, // 3.1 首頁由 App.vue => Home.vue
  { path: "/view/Home.vue", component: Home, name: "Home", meta:{options:["活動", "景點"]}}, // 3.1 首頁由 App.vue => Home.vue
  { path: "/view/FoodTravel.vue", name: "FoodTravel", meta: {options: ["美食", "住宿"]},
  component: () => import ("/view/FoodTravel/FoodTravel.vue")},
  { path: "/view/Searched/SearchedActivities.vue", name: "SearchedActivities", meta:{options:["活動", "景點"]},
  component: () => import ("/view/Searched/SearchedActivities.vue")},
  { path: "/view/Searched/SearchedFoods.vue", name: "SearchedFoods", meta: {options: ["美食", "住宿"]},
  component: () => import ("/view/Searched/SearchedFoods.vue")},
  { path: "/view/Selected/SelectedResults.vue", name: "SelectedResults", meta:{options:["活動", "景點"]},
  component: () => import ("/view/Selected/SelectedResults.vue")}, // <SELECT> 活動景點
  { path: "/view/Selected/SelectedResults2.vue", name: "SelectedResults2", meta: {options: ["美食", "住宿"]},
  component: () => import ("/view/Selected/SelectedResults2.vue")}, // <SELECT> 美食住宿
  { path:"/view/Clicked/ClickedCity.vue", name: "ClickedCity",  meta:{options:["活動", "景點"]},
  component: () => import ("/view/Clicked/ClickedCity.vue")}, // 點擊輪播圖城市
  { path:"/view/BusRoute/BusRoute.vue", name: "BusRoute", // 公車路線
  meta:{options:["臺北市","新北市","桃園市","臺中市","臺南市","高雄市",
  "基隆市","新竹市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣",
  "嘉義縣","嘉義市","屏東縣","宜蘭縣","花蓮縣","臺東縣","金門縣","澎湖縣"]},
  component: () => import ("/view/BusRoute/BusRoute.vue")},
  { path:"/view/MyFavorite/MyFavorite.vue", name:"MyFavorite", 
  component: () => import ("/view/MyFavorite/MyFavorite.vue")}, // 我的收藏
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// 4. 向外共享路由實例對象
export default router;