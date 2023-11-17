import{_ as X,r as o,E as Y,n as ee,b as l,c as i,d as t,i as _,w as f,G as V,H as J,F as k,e as S,q as te,x as E,g as c,f as z,h as m,I as se,D as A,l as ae,p as oe,j as ne,J as le,K as ie,L as ce,O as re,t as U,a as T}from"./index-81372da0.js";const g=D=>(oe("data-v-eccae701"),D=D(),ne(),D),ue={class:"container"},de={class:"navBar justify-content-center justify-content-md-between py-3"},ve=g(()=>t("div",{class:""},[t("img",{src:le,alt:""})],-1)),pe={class:"nav-links d-none d-md-flex mt-2"},_e=g(()=>t("img",{src:ie,alt:"",class:"link-img"},null,-1)),me=g(()=>t("img",{src:ce,alt:"",class:"link-img"},null,-1)),he=g(()=>t("img",{src:re,alt:"",class:"link-img"},null,-1)),fe={class:"nav justify-content-between shadow-sm d-md-none bg-white w-100 rounded my-1"},ge={class:"nav-item"},ke={class:"nav-item"},we={class:"nav-item"},Se={class:"input-group mt-2"},De=g(()=>t("option",{value:""},"選擇縣市",-1)),ye=["value"],Te=g(()=>t("option",{value:""},"選擇路線",-1)),xe=["value"],Be={class:"btn btn-md btnBgc rounded ms-1"},Ie=["onClick"],Ne={class:"container pt-4 g-0"},be=g(()=>t("h3",{class:"d-none d-lg-block"},"請先選擇縣市，再選擇公車路線",-1)),Ce=["onClick"],Ee={class:"pink"},Ue=["onClick"],Re={class:"pink"},$e={class:"container"},Oe={class:"d-flex justify-content-end"},Ze={class:"pink"},je={class:"container py-5"},Fe={class:"col-8 col-md-2 ps-2"},Ve={class:"row align-items-center justify-content-lg-center gx-0"},Je={class:"col-8 px-2"},ze={__name:"BusRoute",setup(D){const v=o(""),w=o(""),x=o([]),H=async()=>{const n={headers:{authorization:"Bearer "+await U.getToken()}},a=`https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/${v.value}?%24top=5&%24format=JSON`;T.get(a,n).then(e=>{x.value=e.data,console.log("指定縣市公車路線",x.value)})},R=o([]),$=o([]),y=o(60),O=o([]),Z=async()=>{const n={headers:{authorization:"Bearer "+await U.getToken()}},a=`https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/${v.value}/${w.value}?%24format=JSON`;T.get(a,n).then(u=>{const p=u.data,h=p.filter(d=>!d.Direction),Q=p.filter(d=>d.Direction);h.forEach(d=>{R.value.push({StopUID:d.StopUID,EstimateTime:d.EstimateTime})}),Q.forEach(d=>{$.value.push({StopUID:d.StopUID,EstimateTime:d.EstimateTime})}),M()});const e=`https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/${v.value}/${w.value}?%24top=30&%24format=JSON`;T.get(e,n).then(u=>{O.value=u.data})},B=o([]),I=o([]),s=o(0),r=o(""),M=async()=>{const n={headers:{authorization:"Bearer "+await U.getToken()}};B.value=[],I.value=[];const a=`https://tdx.transportdata.tw/api/basic/v2/Bus/DisplayStopOfRoute/City/${v.value}/${w.value}?%24format=JSON`;T.get(a,n).then(e=>{const u=e.data;u[0].Stops.forEach(p=>{R.value.forEach(h=>{p.StopUID===h.StopUID&&(s.value=Math.floor(h.EstimateTime/60),s.value===0?r.value="進站中":s.value<=1&&0<s.value?r.value="即將到站":s.value?r.value=`${s.value} 分鐘`:r.value="未發車")}),B.value.push({stops:p.StopName.Zh_tw,timeText:r.value,time:s.value})}),u[1].Stops.forEach(p=>{$.value.forEach(h=>{p.StopUID===h.StopUID&&(s.value=Math.floor(h.EstimateTime/60),s.value===0?r.value="進站中":s.value<=1&&0<s.value?r.value="即將到站":s.value?r.value=`${s.value}分鐘`:r.value="未發車")}),I.value.push({stops:p.StopName.Zh_tw,timeText:r.value,time:s.value})})})},N=o(!0),b=o(!1),G=()=>{b.value=!1,N.value=!0},L=()=>{N.value=!1,b.value=!0};let j,F;const W=()=>{j=setInterval(()=>{y.value--,y.value===0&&(y.value=60)},1e3)},q=()=>{F=setInterval(()=>{Z()},6e4)},K=()=>{clearInterval(j),clearInterval(F),W(),q()},P=()=>{Z(),K()};return Y(()=>v.value,()=>{v.value&&setTimeout(()=>{H()},1e3)}),(C,n)=>{const a=ee("router-link");return l(),i(k,null,[t("div",ue,[t("nav",de,[_(a,{to:{name:"Home"}},{default:f(()=>[ve]),_:1}),t("div",pe,[_(a,{to:"/view/Home.vue",class:"header-link spot text-nowrap",href:"#"},{default:f(()=>[_e,m(" 台灣景點 ")]),_:1}),_(a,{to:"/view/FoodTravel.vue",class:"header-link food text-nowrap",href:"#"},{default:f(()=>[me,m(" 美食住宿 ")]),_:1}),_(a,{to:{name:"BusRoute"},href:"#",class:"header-link traffic text-nowrap"},{default:f(()=>[he,m(" 景點交通 ")]),_:1})])]),t("ul",fe,[t("li",ge,[_(a,{to:"/view/Home.vue",class:"nav-link p-2 activeTrue","aria-current":"page",href:"#"},{default:f(()=>[m("景點活動 ")]),_:1})]),t("li",ke,[_(a,{to:"/view/FoodTravel.vue",class:"nav-link p-2 activeTrue",href:"#"},{default:f(()=>[m("美食住宿 ")]),_:1})]),t("li",we,[_(a,{to:"/view/BusRoute/BusRoute.vue",class:"nav-link p-2 activeTrue",href:"#"},{default:f(()=>[m("景點交通 ")]),_:1})])]),t("div",Se,[V(t("select",{name:"",id:"",class:"form-select me-1 rounded border-0 shadow-sm","onUpdate:modelValue":n[0]||(n[0]=e=>v.value=e)},[De,(l(!0),i(k,null,S(te(se),(e,u)=>(l(),i("option",{value:e.Value,key:u},c(e.CityName),9,ye))),128))],512),[[J,v.value]]),V(t("select",{name:"",id:"",class:"form-select rounded border-0 shadow-sm","onUpdate:modelValue":n[1]||(n[1]=e=>w.value=e)},[Te,(l(!0),i(k,null,S(x.value,e=>(l(),i("option",{value:e.RouteName.Zh_tw,key:e.RouteUID}," ["+c(e.RouteName.Zh_tw)+"] "+c(e.DepartureStopNameZh)+" - "+c(e.DestinationStopNameZh),9,xe))),128))],512),[[J,w.value]]),t("button",Be,[t("span",null,[t("i",{class:"bi bi-search",onClick:E(P,["prevent"])},null,8,Ie)])])]),t("div",Ne,[be,(l(!0),i(k,null,S(O.value,e=>(l(),i("ul",{class:"row row-cols-2 mx-1 rounded py-2 shadow-sm",key:e.RouteID},[t("li",{class:"col",onClick:E(G,["prevent"])},[m("往 "),t("span",Ee,c(e.DepartureStopNameZh),1)],8,Ce),t("li",{class:"col",onClick:E(L,["prevent"])},[m("往 "),t("span",Re,c(e.DestinationStopNameZh),1)],8,Ue)]))),128))])]),t("div",$e,[t("div",Oe,[t("p",Ze," *每隔"+c(y.value)+"秒自動更新",1)])]),t("div",je,[N.value?(l(!0),i(k,{key:0},S(B.value,(e,u)=>(l(),i("div",{key:u,class:"row align-items-center justify-content-md-center gx-0"},[t("p",{class:A(["col-4 col-md-2 rounded p-2 text-center",{arriving:e.time===0,coming:e.time<=1&&e.time>0,onTheWay:e.time>1,noDepart:!e.time}])},c(e.timeText),3),t("p",Fe,c(e.stops),1)]))),128)):z("",!0),b.value?(l(!0),i(k,{key:1},S(I.value,e=>(l(),i("div",Ve,[t("p",{class:A(["col-4 rounded p-2 text-center",{arriving:e.time===0,coming:e.time<=1&&e.time>0,onTheWay:e.time>1,noDepart:!e.time}])},c(e.timeText),3),t("p",Je,c(e.stops),1)]))),256)):z("",!0)]),_(ae)],64)}}},He=X(ze,[["__scopeId","data-v-eccae701"]]);export{He as default};