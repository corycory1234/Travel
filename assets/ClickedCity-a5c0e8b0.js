import{_ as L,A as j,s as p,r as i,m as f,u as F,n as D,b as r,c as d,i as o,d as e,F as b,e as V,q as _,w as $,N as q,B as T,C as E,x,g as u,M as R,l as U,p as z,j as G,h as H}from"./index-81372da0.js";import{_ as J}from"./Pagination-c47d5f02.js";const m=c=>(z("data-v-eb3f5642"),c=c(),G(),c),K={class:"container my-5"},O=m(()=>e("div",null,[e("h3",{class:"h5"},[e("i",{class:"bi bi-caret-up-fill triangle me-2"}),H("熱門活動")])],-1)),Q={class:"row gx-3"},W=["onClick"],X={class:"card h-100 border-0 shadow"},Y={class:"row"},Z={class:"col-5"},ee={class:"clicked-card-pic p-2"},se=["src","alt"],te={class:"col-7"},oe={class:"row flex-column justify-content-between"},ae={class:"card-body pe-4"},ce={class:"col mt-3"},ne={class:"fw-bold text-truncate"},le={class:"col d-none d-sm-block"},ie={class:"activity-card-content truncate"},re={class:"col mb-2"},de={class:"d-flex flex-lg-row justify-content-lg-between align-items-lg-center flex-column"},_e={class:"bi bi-geo-alt-fill me-1 location text-truncate"},ue={class:"text-dark fw-bold"},ve=["onClick"],ge=m(()=>e("div",{class:"d-flex justify-content-between align-items-center",style:{width:"280px"}},[e("div",{class:"loading loading-triangle"}),e("div",{class:"loading loading-square"}),e("div",{class:"loading loading-circle"})],-1)),he={__name:"ClickedCity",setup(c){const P=j(),{carouselArr:l,isLoading:y}=p(P),v=i(null),g=t=>{v.value.openModal(t)},a=i(1),n=i(20),k=f(()=>{const t=(a.value-1)*n.value,h=t+n.value;return l.value.slice(t,h)}),C=()=>a.value-=1,w=()=>a.value+=1,S=t=>{a.value=t},A=f(()=>Math.ceil(l.value.length/n.value)),N=F(),{searchedArr:M}=p(N);return(t,h)=>{const I=D("Loading");return r(),d(b,null,[o(q),o(T),o(E),e("div",K,[O,e("div",Q,[(r(!0),d(b,null,V(k.value,(s,pe)=>(r(),d("div",{key:s.ActivityID,class:"col-12 col-lg-6 mb-3",onClick:x(B=>g(s),["prevent"])},[e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[e("img",{src:s.Picture.PictureUrl1||"/src/assets/pics/NotFound/placeholder.png",alt:s.location},null,8,se)])]),e("div",te,[e("div",oe,[e("div",ae,[e("div",ce,[e("h6",ne,u(s.ActivityName||s.ScenicSpotName),1)]),e("div",le,[e("p",ie,u(s.Description),1)]),e("div",re,[e("div",de,[e("i",_e,[e("span",ue,u(s.Location||s.City),1)]),e("button",{class:"btn btn-outline-danger subtitle-1 text-truncate d-none d-lg-block",onClick:x(B=>g(s),["prevent"])}," 活動詳情 ",8,ve)])])])])])])])],8,W))),128))]),o(J,{searchedArr:_(M),carouselArr:_(l),itemsPerPage:n.value,currentPage:a.value,totalPages:A.value,onPrevPage:C,onNextPage:w,onChangePage:S},null,8,["searchedArr","carouselArr","itemsPerPage","currentPage","totalPages"])]),o(R,{ref_key:"refModal",ref:v},null,512),o(U),o(I,{active:_(y)},{default:$(()=>[ge]),_:1},8,["active"])],64)}}},xe=L(he,[["__scopeId","data-v-eb3f5642"]]);export{xe as default};