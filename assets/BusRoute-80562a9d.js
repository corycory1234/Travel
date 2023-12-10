import{_ as Y,r as o,E as ee,x as te,b as l,c as i,d as t,j as d,z as f,n as D,H as z,I as A,F as w,e as y,i as se,w as E,h as c,f as U,J as ae,g as m,K as oe,G as ne,q as le,p as ie,k as ce,L as ue,O as re,P as ve,Q as de,t as F,a as N}from"./index-7be5273a.js";const g=x=>(ie("data-v-610e3046"),x=x(),ce(),x),pe={class:"container"},_e={class:"navBar justify-content-center justify-content-md-between py-3"},me=g(()=>t("div",{class:""},[t("img",{src:ue,alt:""})],-1)),he={class:"nav-links d-none d-md-flex mt-2"},fe=g(()=>t("img",{src:re,alt:"",class:"link-img"},null,-1)),ge=g(()=>t("img",{src:ve,alt:"",class:"link-img"},null,-1)),ke=g(()=>t("img",{src:de,alt:"",class:"link-img"},null,-1)),we={class:"nav justify-content-between shadow-sm d-md-none bg-white w-100 rounded my-1"},Se={class:"nav-item"},Te={class:"nav-item"},De={class:"nav-item"},ye={class:"input-group mt-2"},xe=g(()=>t("option",{value:""},"選擇縣市",-1)),Be=["value"],Re=g(()=>t("option",{value:""},"選擇路線",-1)),Ie=["value"],Ne={class:"btn btn-md btnBgc rounded ms-1"},be=["onClick"],Ce={class:"container pt-4 g-0"},Ee=g(()=>t("h3",{class:"d-none d-lg-block"},"請先選擇縣市，再選擇公車路線",-1)),Ue=["onClick"],Fe={class:"pink"},$e=["onClick"],Oe={class:"pink"},Ze={class:"container"},je={class:"d-flex justify-content-end"},Ve={class:"pink"},He={key:0,class:"container"},Je={class:"col-8 col-md-2 ps-2"},ze={class:"row align-items-center justify-content-md-center gx-0"},Ae={class:"col-8 col-md-2 px-2"},Me={__name:"BusRoute",setup(x){const p=o(""),S=o(""),$=o([]),M=async()=>{const n={headers:{authorization:"Bearer "+await F.getToken()}},a=`https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/${p.value}?%24format=JSON`;N.get(a,n).then(e=>{$.value=e.data})},O=o([]),Z=o([]),B=o(60),j=o([]),V=async()=>{const n={headers:{authorization:"Bearer "+await F.getToken()}},a=`https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/${p.value}/${S.value}?%24format=JSON`;N.get(a,n).then(r=>{const _=r.data,h=_.filter(v=>!v.Direction),X=_.filter(v=>v.Direction);h.forEach(v=>{O.value.push({StopUID:v.StopUID,EstimateTime:v.EstimateTime})}),X.forEach(v=>{Z.value.push({StopUID:v.StopUID,EstimateTime:v.EstimateTime})}),G()});const e=`https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/${p.value}/${S.value}?%24top=30&%24format=JSON`;N.get(e,n).then(r=>{j.value=r.data})},R=o([]),I=o([]),s=o(0),u=o(""),G=async()=>{const n={headers:{authorization:"Bearer "+await F.getToken()}};R.value=[],I.value=[];const a=`https://tdx.transportdata.tw/api/basic/v2/Bus/DisplayStopOfRoute/City/${p.value}/${S.value}?%24format=JSON`;N.get(a,n).then(e=>{const r=e.data;r[0].Stops.forEach(_=>{O.value.forEach(h=>{_.StopUID===h.StopUID&&(s.value=Math.floor(h.EstimateTime/60),s.value===0?u.value="進站中":s.value<=1&&0<s.value?u.value="即將到站":s.value?u.value=`${s.value} 分鐘`:u.value="未發車")}),R.value.push({stops:_.StopName.Zh_tw,timeText:u.value,time:s.value})}),r[1].Stops.forEach(_=>{Z.value.forEach(h=>{_.StopUID===h.StopUID&&(s.value=Math.floor(h.EstimateTime/60),s.value===0?u.value="進站中":s.value<=1&&0<s.value?u.value="即將到站":s.value?u.value=`${s.value}分鐘`:u.value="未發車")}),I.value.push({stops:_.StopName.Zh_tw,timeText:u.value,time:s.value})})})},b=o(!0),C=o(!1),L=()=>{C.value=!1,b.value=!0},W=()=>{b.value=!1,C.value=!0};let H,J;const q=()=>{H=setInterval(()=>{B.value--,B.value===0&&(B.value=60)},1e3)},K=()=>{J=setInterval(()=>{V()},6e4)},P=()=>{clearInterval(H),clearInterval(J),q(),K()},Q=()=>{V(),P()},k=T=>ae().path===T;return ee(()=>p.value,()=>{p.value&&setTimeout(()=>{M()},1e3)}),(T,n)=>{const a=te("router-link");return l(),i(w,null,[t("div",pe,[t("nav",_e,[d(a,{to:{name:"Home"}},{default:f(()=>[me]),_:1}),t("div",he,[d(a,{to:"/view/Home.vue",class:"header-link spot text-nowrap",href:"#"},{default:f(()=>[fe,m(" 台灣景點 ")]),_:1}),d(a,{to:"/view/FoodTravel.vue",class:"header-link food text-nowrap",href:"#"},{default:f(()=>[ge,m(" 美食住宿 ")]),_:1}),d(a,{to:{name:"BusRoute"},href:"#",class:"header-link traffic text-nowrap"},{default:f(()=>[ke,m(" 景點交通 ")]),_:1})])]),t("ul",we,[t("li",Se,[d(a,{to:"/view/Home.vue",class:D(["nav-link p-2",{activeTrue:k("/view/Home.vue"),activeFalse:!k("/view/Home.vue")}]),"aria-current":"page"},{default:f(()=>[m("景點活動 ")]),_:1},8,["class"])]),t("li",Te,[d(a,{to:"/view/FoodTravel.vue",class:D(["nav-link p-2",{activeTrue:k("/view/FoodTravel.vue"),activeFalse:!k("/view/FoodTravel.vue")}])},{default:f(()=>[m("美食住宿 ")]),_:1},8,["class"])]),t("li",De,[d(a,{to:"/view/BusRoute/BusRoute.vue",class:D(["nav-link p-2",{activeTrue:k("/view/BusRoute/BusRoute.vue"),activeFalse:!k("/view/BusRoute/BusRoute.vue")}])},{default:f(()=>[m("景點交通 ")]),_:1},8,["class"])])]),t("div",ye,[z(t("select",{name:"",id:"",class:"form-select me-1 rounded border-0 shadow-sm","onUpdate:modelValue":n[0]||(n[0]=e=>p.value=e)},[xe,(l(!0),i(w,null,y(se(oe),(e,r)=>(l(),i("option",{value:e.Value,key:r},c(e.CityName),9,Be))),128))],512),[[A,p.value]]),z(t("select",{name:"",id:"",class:"form-select rounded border-0 shadow-sm","onUpdate:modelValue":n[1]||(n[1]=e=>S.value=e)},[Re,(l(!0),i(w,null,y($.value,e=>(l(),i("option",{value:e.RouteName.Zh_tw,key:e.RouteUID}," ["+c(e.RouteName.Zh_tw)+"] "+c(e.DepartureStopNameZh)+" - "+c(e.DestinationStopNameZh),9,Ie))),128))],512),[[A,S.value]]),t("button",Ne,[t("span",null,[t("i",{class:"bi bi-search",onClick:E(Q,["prevent"])},null,8,be)])])]),t("div",Ce,[Ee,(l(!0),i(w,null,y(j.value,e=>(l(),i("ul",{class:"row row-cols-2 mx-1 rounded py-2 shadow-sm",key:e.RouteID},[t("li",{class:"col",onClick:E(L,["prevent"])},[m("往 "),t("span",Fe,c(e.DepartureStopNameZh),1)],8,Ue),t("li",{class:"col",onClick:E(W,["prevent"])},[m("往 "),t("span",Oe,c(e.DestinationStopNameZh),1)],8,$e)]))),128))])]),t("div",Ze,[t("div",je,[t("p",Ve," *每隔"+c(B.value)+"秒自動更新",1)])]),R.value.length>0||I.value.length>0?(l(),i("div",He,[b.value?(l(!0),i(w,{key:0},y(R.value,(e,r)=>(l(),i("div",{key:r,class:"row align-items-center justify-content-md-center gx-0"},[t("p",{class:D(["col-4 col-md-2 rounded p-2 text-center",{arriving:e.time===0,coming:e.time<=1&&e.time>0,onTheWay:e.time>1,noDepart:!e.time}])},c(e.timeText),3),t("p",Je,c(e.stops),1)]))),128)):U("",!0),C.value?(l(!0),i(w,{key:1},y(I.value,e=>(l(),i("div",ze,[t("p",{class:D(["col-4 col-md-2 rounded p-2 text-center",{arriving:e.time===0,coming:e.time<=1&&e.time>0,onTheWay:e.time>1,noDepart:!e.time}])},c(e.timeText),3),t("p",Ae,c(e.stops),1)]))),256)):U("",!0)])):U("",!0),d(ne),d(le)],64)}}},Le=Y(Me,[["__scopeId","data-v-610e3046"]]);export{Le as default};
