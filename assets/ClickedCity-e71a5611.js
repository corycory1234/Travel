import{_ as F,z as L,s as f,r,m as x,u as j,n as V,b as l,c as d,i as a,d as e,F as P,e as D,q as _,v as q,f as T,w as $,N as z,B as E,C as R,x as m,g as u,M as U,l as G,p as H,j as J,h as K}from"./index-f2a05b0f.js";import{P as O,N as Q}from"./NotFound-7069120d.js";const b=c=>(H("data-v-f7e0feaa"),c=c(),J(),c),W={class:"container my-5"},X=b(()=>e("div",null,[e("h3",{class:"h5"},[e("i",{class:"bi bi-caret-up-fill triangle me-2"}),K("熱門活動")])],-1)),Y={class:"row gx-3"},Z=["onClick"],ee={class:"card h-100 border-0 shadow"},te={class:"row"},se={class:"col-5"},ae={class:"clicked-card-pic p-2"},oe=["src","alt"],ce={class:"col-7"},ne={class:"row flex-column justify-content-between"},le={class:"card-body pe-4"},ie={class:"col mt-3"},re={class:"fw-bold text-truncate"},de={class:"col d-none d-sm-block"},_e={class:"activity-card-content truncate"},ue={class:"col mb-2"},ve={class:"d-flex flex-lg-row justify-content-lg-between align-items-lg-center flex-column"},ge={class:"bi bi-geo-alt-fill me-1 location text-truncate"},he={class:"text-dark fw-bold"},pe=["onClick"],fe=b(()=>e("div",{class:"d-flex justify-content-between align-items-center",style:{width:"280px"}},[e("div",{class:"loading loading-triangle"}),e("div",{class:"loading loading-square"}),e("div",{class:"loading loading-circle"})],-1)),xe={__name:"ClickedCity",setup(c){const y=L(),{carouselArr:i,isLoading:k}=f(y),v=r(null),g=s=>{v.value.openModal(s)},o=r(1),n=r(20),h=x(()=>{const s=(o.value-1)*n.value,p=s+n.value;return i.value.slice(s,p)}),C=()=>o.value-=1,w=()=>o.value+=1,N=s=>{o.value=s},S=x(()=>Math.ceil(i.value.length/n.value)),A=j(),{searchedArr:M}=f(A);return(s,p)=>{const I=V("Loading");return l(),d(P,null,[a(z),a(E),a(R),e("div",W,[X,e("div",Y,[(l(!0),d(P,null,D(h.value,(t,Pe)=>(l(),d("div",{key:t.ActivityID,class:"col-12 col-lg-6 mb-3",onClick:m(B=>g(t),["prevent"])},[e("div",ee,[e("div",te,[e("div",se,[e("div",ae,[e("img",{src:t.Picture.PictureUrl1||"/src/assets/pics/NotFound/placeholder.png",alt:t.location},null,8,oe)])]),e("div",ce,[e("div",ne,[e("div",le,[e("div",ie,[e("h6",re,u(t.ActivityName||t.ScenicSpotName),1)]),e("div",de,[e("p",_e,u(t.Description),1)]),e("div",ue,[e("div",ve,[e("i",ge,[e("span",he,u(t.Location||t.City),1)]),e("button",{class:"btn btn-outline-danger subtitle-1 text-truncate d-none d-lg-block",onClick:m(B=>g(t),["prevent"])}," 活動詳情 ",8,pe)])])])])])])])],8,Z))),128))]),a(O,{searchedArr:_(M),carouselArr:_(i),itemsPerPage:n.value,currentPage:o.value,totalPages:S.value,onPrevPage:C,onNextPage:w,onChangePage:N},null,8,["searchedArr","carouselArr","itemsPerPage","currentPage","totalPages"])]),a(U,{ref_key:"refModal",ref:v},null,512),h.value.length===0?(l(),q(Q,{key:0})):T("",!0),a(G),a(I,{active:_(k)},{default:$(()=>[fe]),_:1},8,["active"])],64)}}},ye=F(xe,[["__scopeId","data-v-f7e0feaa"]]);export{ye as default};
