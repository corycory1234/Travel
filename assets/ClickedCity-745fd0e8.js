import{_ as V,C as $,s as x,r as u,v as P,l as T,u as q,x as z,b as n,c as d,j as o,i as a,d as e,F as y,e as G,f as C,y as U,z as E,N as R,B as H,D as J,w as v,h as g,n as K,M as O,G as Q,q as W,p as X,k as Y,g as Z}from"./index-7be5273a.js";import{P as ee}from"./Pagination-5f584b04.js";import{N as te}from"./NotFound-1374503f.js";const m=l=>(X("data-v-bf0e33ac"),l=l(),Y(),l),se={key:0,class:"container my-5"},oe=m(()=>e("div",null,[e("h3",{class:"h5 fw-bold"},[e("i",{class:"bi bi-caret-up-fill triangle me-2"}),Z("熱門活動")])],-1)),ae={class:"row gx-3"},ce=["onClick"],ne={class:"card h-100 border-0 shadow"},le={class:"row"},ie={class:"col-5"},re={class:"clicked-card-pic p-2"},de=["src","alt"],_e={class:"col-7"},ue={class:"row flex-column justify-content-between"},ve={class:"card-body pe-4"},ge={class:"col mt-3"},he={class:"fw-bold text-truncate"},pe={class:"col d-none d-sm-block"},fe={class:"activity-card-content truncate"},be={class:"col mb-2"},ke={class:"d-flex flex-lg-row justify-content-lg-between align-items-lg-center flex-column"},xe={class:"bi bi-geo-alt-fill me-1 location text-truncate"},Pe={class:"text-dark fw-bold"},ye=["onClick"],Ce=["onClick"],me=m(()=>e("div",{class:"d-flex justify-content-between align-items-center",style:{width:"280px"}},[e("div",{class:"loading loading-triangle"}),e("div",{class:"loading loading-square"}),e("div",{class:"loading loading-circle"})],-1)),we={__name:"ClickedCity",setup(l){const h=$(),{getAssetUrl:w}=h,{carouselArr:i,isLoading:S}=x(h),p=u(null),f=s=>{p.value.openModal(s)},c=u(1),r=u(20),b=P(()=>{const s=(c.value-1)*r.value,k=s+r.value;return i.value.slice(s,k)}),A=()=>c.value-=1,N=()=>c.value+=1,F=s=>{c.value=s},M=P(()=>Math.ceil(i.value.length/r.value)),I=T(),{searchedArr:B}=x(I),j=q(),D=s=>{s.isFavorite=!s.isFavorite};return(s,k)=>{const L=z("Loading");return n(),d(y,null,[o(R),o(H),o(J),a(i).length>0?(n(),d("div",se,[oe,e("div",ae,[(n(!0),d(y,null,G(b.value,(t,Se)=>(n(),d("div",{key:t.ActivityID,class:"col-12 col-lg-6 mb-3",onClick:v(_=>f(t),["prevent"])},[e("div",ne,[e("div",le,[e("div",ie,[e("div",re,[e("img",{src:t.Picture.PictureUrl1||a(w),alt:t.location},null,8,de)])]),e("div",_e,[e("div",ue,[e("div",ve,[e("div",ge,[e("h6",he,g(t.ActivityName||t.ScenicSpotName),1)]),e("div",pe,[e("p",fe,g(t.Description),1)]),e("div",be,[e("div",ke,[e("i",xe,[e("span",Pe,g(t.City||t.Address),1),e("i",{class:K(["heart ps-3",{"bi bi-heart":!t.isFavorite,"bi bi-heart-fill":t.isFavorite}]),onClick:[v(_=>a(j).getFavorite(t),["stop"]),_=>D(t)]},null,10,ye)]),e("button",{class:"btn btn-outline-danger subtitle-1 text-truncate d-none d-lg-block",onClick:v(_=>f(t),["prevent"])}," 活動詳情 ",8,Ce)])])])])])])])],8,ce))),128))]),o(ee,{searchedArr:a(B),carouselArr:a(i),itemsPerPage:r.value,currentPage:c.value,totalPages:M.value,onPrevPage:A,onNextPage:N,onChangePage:F},null,8,["searchedArr","carouselArr","itemsPerPage","currentPage","totalPages"])])):C("",!0),o(O,{ref_key:"refModal",ref:p},null,512),b.value.length===0?(n(),U(te,{key:1})):C("",!0),o(Q),o(W),o(L,{active:a(S)},{default:E(()=>[me]),_:1},8,["active"])],64)}}},Me=V(we,[["__scopeId","data-v-bf0e33ac"]]);export{Me as default};
