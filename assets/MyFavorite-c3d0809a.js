import{_ as x,u as M,r as T,x as B,b as _,c as v,d as e,j as s,z as i,n as r,F as f,e as R,i as h,y as C,f as N,J as H,g as o,w,h as g,M as S,p as j,k as A,L as I,O as k,P,Q as V}from"./index-c870972e.js";import{N as $}from"./NotFound-2286d125.js";const l=d=>(j("data-v-bac43d86"),d=d(),A(),d),z={class:"container"},D={class:"navBar justify-content-center justify-content-md-between py-3"},K=l(()=>e("div",{class:""},[e("img",{src:I,alt:""})],-1)),L={class:"nav-links d-none d-md-flex mt-2"},E=l(()=>e("img",{src:k,alt:"",class:"link-img"},null,-1)),J=l(()=>e("img",{src:P,alt:"",class:"link-img"},null,-1)),O=l(()=>e("img",{src:V,alt:"",class:"link-img"},null,-1)),Q=l(()=>e("img",{src:k,alt:"",class:"link-img"},null,-1)),U={class:"nav justify-content-between shadow-sm d-md-none bg-white w-100 rounded my-1"},q={class:"nav-item"},G={class:"nav-item"},W={class:"nav-item"},X={class:"nav-item"},Y={class:"container mt-2"},Z=l(()=>e("div",null,[e("h3",{class:"h5 fw-bold"},[e("i",{class:"bi bi-caret-up-fill triangle me-2"}),o("我的收藏")])],-1)),ee={class:"row row-cols-2 row-cols-lg-5 g-2"},te=["onClick"],se={class:"card shadow p-2 h-100"},oe={class:"foodPic"},ae=["src","alt"],ie={class:"card-body"},ce={class:"card-title pt-2 text-truncate"},le={class:"card-text text-success text-truncate fw-bold"},ne=l(()=>e("i",{class:"bi bi-geo-alt-fill me-1 location"},null,-1)),re=["onClick"],de=l(()=>e("div",{class:"container-fluid text-center bg-white py-3 fixed-bottom"},[e("p",{class:"footer-txt"},"Taiwan Tourguide © Code: Kory / Design: KT")],-1)),_e={__name:"MyFavorite",setup(d){const u=M(),y=n=>{n.isFavorite=!n.isFavorite},c=n=>H().path===n,m=T(null),F=n=>{m.value.openModal(n)};return(n,b)=>{const a=B("router-link");return _(),v(f,null,[e("div",z,[e("nav",D,[s(a,{to:{name:"Home"}},{default:i(()=>[K]),_:1}),e("div",L,[s(a,{to:"/view/Home.vue",class:"header-link spot text-nowrap",href:"#"},{default:i(()=>[E,o(" 台灣景點 ")]),_:1}),s(a,{to:"/view/FoodTravel.vue",class:"header-link food text-nowrap",href:"#"},{default:i(()=>[J,o(" 美食住宿 ")]),_:1}),s(a,{to:{name:"BusRoute"},href:"#",class:"header-link traffic text-nowrap"},{default:i(()=>[O,o(" 景點交通 ")]),_:1}),s(a,{to:{name:"MyFavorite"},class:"header-link spot text-nowrap",href:"#"},{default:i(()=>[Q,o(" 我的收藏 ")]),_:1})])]),e("ul",U,[e("li",q,[s(a,{to:"/view/Home.vue",class:r(["nav-link p-2 activeTrue",{activeTrue:c("/view/Home.vue"),activeFalse:!c("/view/Home.vue")}]),"aria-current":"page"},{default:i(()=>[o(" 景點活動 ")]),_:1},8,["class"])]),e("li",G,[s(a,{to:"/view/FoodTravel.vue",class:r(["nav-link p-2",{activeTrue:c("/view/FoodTravel.vue"),activeFalse:!c("/view/FoodTravel.vue")}])},{default:i(()=>[o(" 美食住宿 ")]),_:1},8,["class"])]),e("li",W,[s(a,{to:"/view/BusRoute/BusRoute.vue",class:r(["nav-link p-2",{activeTrue:c("/view/BusRoute/BusRoute.vue"),activeFalse:!c("/view/BusRoute/BusRoute.vue")}])},{default:i(()=>[o("景點交通 ")]),_:1},8,["class"])]),e("li",X,[s(a,{to:{name:"MyFavorite"},class:r(["nav-link p-2",{activeTrue:c("/view/MyFavorite/MyFavorite.vue"),activeFalse:!c("/view/MyFavorite/MyFavorite.vue")}])},{default:i(()=>[o("我的收藏 ")]),_:1},8,["class"])])])]),e("div",Y,[Z,e("div",ee,[(_(!0),v(f,null,R(h(u).favoriteArr,t=>(_(),v("div",{class:"col",key:t.id,onClick:w(p=>F(t.item),["prevent"])},[e("div",se,[e("div",oe,[e("img",{src:t.item.Picture.PictureUrl1,class:"card-img-top",alt:t.item.location},null,8,ae)]),e("div",ie,[e("h5",ce,g(t.item.RestaurantName||t.item.ActivityName||t.item.HotelName),1),e("p",le,[ne,o(" "+g(t.item.City)+" ",1),e("i",{class:r(["heart",{"bi bi-heart":t.isFavorite,"bi bi-heart-fill":!t.isFavorite}]),onClick:[w(p=>h(u).getFavorite(t.item,t.id),["stop"]),p=>y(t)]},null,10,re)])])])],8,te))),128))])]),s(S,{ref_key:"refModal",ref:m},null,512),h(u).favoriteArr.length?N("",!0):(_(),C($,{key:0})),de],64)}}},he=x(_e,[["__scopeId","data-v-bac43d86"]]);export{he as default};