import{_ as I,u as L,s as B,r as _,m as f,n as j,b as c,c as r,i as o,q as d,d as e,F as P,e as q,f as x,v as V,w as D,N as R,B as T,x as m,g as u,M as $,l as E,p as U,j as z,h as G}from"./index-72d810bb.js";import{P as H,N as J}from"./NotFound-6f6119ac.js";const b=n=>(U("data-v-c2178232"),n=n(),z(),n),K={key:0,class:"container my-5"},O=b(()=>e("div",null,[e("h3",{class:"h5"},[e("i",{class:"bi bi-square-fill square me-2"}),G("美食")])],-1)),Q={class:"row gx-3"},W=["onClick"],X={class:"card h-100 border-0 shadow"},Y={class:"row"},Z={class:"col-5"},ee={class:"activity-card-pic p-2"},te=["src","alt"],se={class:"col-7"},ae={class:"card-body pe-4"},oe={class:"row flex-column justify-content-between"},ce={class:"col mt-3"},ne={class:"fw-bold text-truncate"},le={class:"col d-none d-sm-block"},ie={class:"activity-card-content truncate"},re={class:"col mb-2"},de={class:"d-flex flex-lg-row justify-content-lg-between align-items-lg-center flex-column"},_e={class:"bi bi-geo-alt-fill location text-truncate"},ue={class:"text-dark fw-bold px-2"},ve=["onClick"],ge=b(()=>e("div",{class:"d-flex justify-content-between align-items-center",style:{width:"280px"}},[e("div",{class:"loading loading-triangle"}),e("div",{class:"loading loading-square"}),e("div",{class:"loading loading-circle"})],-1)),he={__name:"SearchedFoods",setup(n){const y=L(),{getAllActivitiesArr:pe,allActivitiesArr:fe,searchedArr:l,keyword:Pe,eachPageLength:w,isLoading:k}=B(y),v=_(null),g=s=>{v.value.openModal(s)},a=_(1),i=_(20),h=f(()=>{const s=(a.value-1)*i.value,p=s+i.value;return l.value.slice(s,p)}),A=()=>a.value-=1,N=()=>a.value+=1,S=s=>{a.value=1,a.value=s},C=f(()=>Math.ceil(l.value.length/i.value));return(s,p)=>{const F=j("Loading");return c(),r(P,null,[o(R),o(T),d(l).length>0?(c(),r("div",K,[O,e("div",Q,[(c(!0),r(P,null,q(h.value,(t,xe)=>(c(),r("div",{key:t.ActivityID,class:"col-12 col-lg-6 mb-3",onClick:m(M=>g(t),["prevent"])},[e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[e("img",{src:t.Picture.PictureUrl1||"/src/assets/pics/NotFound/placeholder.png",alt:t.location},null,8,te)])]),e("div",se,[e("div",ae,[e("div",oe,[e("div",ce,[e("h6",ne,u(t.RestaurantName),1)]),e("div",le,[e("p",ie,u(t.Description),1)]),e("div",re,[e("div",de,[e("i",_e,[e("span",ue,u(t.City),1)]),e("button",{class:"btn btn-outline-danger subtitle-1 text-truncate d-none d-lg-block",onClick:m(M=>g(t),["prevent"])}," 店家資訊 ",8,ve)])])])])])])])],8,W))),128))]),o(H,{searchedArr:d(l),itemsPerPage:i.value,currentPage:a.value,totalPages:C.value,eachPageLength:d(w),onPrevPage:A,onNextPage:N,onChangePage:S},null,8,["searchedArr","itemsPerPage","currentPage","totalPages","eachPageLength"])])):x("",!0),o($,{ref_key:"refActivitiesModal",ref:v},null,512),h.value.length?x("",!0):(c(),V(J,{key:1})),o(E),o(F,{active:d(k)},{default:D(()=>[ge]),_:1},8,["active"])],64)}}},ye=I(he,[["__scopeId","data-v-c2178232"]]);export{ye as default};
