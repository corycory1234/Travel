import{_ as M,u as I,s as L,r as d,m as f,n as B,b as l,c as r,i as o,d as e,F as b,e as j,q as _,v as q,f as V,w as D,N as R,B as T,x as P,g as u,M as $,l as E,p as U,j as z,h as G}from"./index-f2a05b0f.js";import{P as H,N as J}from"./NotFound-7069120d.js";const x=c=>(U("data-v-bfb52676"),c=c(),z(),c),K={class:"container my-5"},O=x(()=>e("div",null,[e("h3",{class:"h5"},[e("i",{class:"bi bi-square-fill square me-2"}),G("美食")])],-1)),Q={class:"row gx-3"},W=["onClick"],X={class:"card h-100 border-0 shadow"},Y={class:"row"},Z={class:"col-5"},ee={class:"activity-card-pic p-2"},te=["src","alt"],se={class:"col-7"},ae={class:"card-body pe-4"},oe={class:"row flex-column justify-content-between"},ce={class:"col mt-3"},ne={class:"fw-bold text-truncate"},le={class:"col d-none d-sm-block"},ie={class:"activity-card-content truncate"},de={class:"col mb-2"},re={class:"d-flex flex-lg-row justify-content-lg-between align-items-lg-center flex-column"},_e={class:"bi bi-geo-alt-fill location text-truncate"},ue={class:"text-dark fw-bold px-2"},ve=["onClick"],ge=x(()=>e("div",{class:"d-flex justify-content-between align-items-center",style:{width:"280px"}},[e("div",{class:"loading loading-triangle"}),e("div",{class:"loading loading-square"}),e("div",{class:"loading loading-circle"})],-1)),he={__name:"SearchedFoods",setup(c){const m=I(),{getAllActivitiesArr:pe,allActivitiesArr:fe,searchedArr:i,keyword:be,eachPageLength:y,isLoading:w}=L(m),v=d(null),g=s=>{v.value.openModal(s)},a=d(1),n=d(20),h=f(()=>{const s=(a.value-1)*n.value,p=s+n.value;return i.value.slice(s,p)}),k=()=>a.value-=1,A=()=>a.value+=1,N=s=>{a.value=1,a.value=s},S=f(()=>Math.ceil(i.value.length/n.value));return(s,p)=>{const C=B("Loading");return l(),r(b,null,[o(R),o(T),e("div",K,[O,e("div",Q,[(l(!0),r(b,null,j(h.value,(t,Pe)=>(l(),r("div",{key:t.ActivityID,class:"col-12 col-lg-6 mb-3",onClick:P(F=>g(t),["prevent"])},[e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[e("img",{src:t.Picture.PictureUrl1||"/src/assets/pics/NotFound/placeholder.png",alt:t.location},null,8,te)])]),e("div",se,[e("div",ae,[e("div",oe,[e("div",ce,[e("h6",ne,u(t.RestaurantName),1)]),e("div",le,[e("p",ie,u(t.Description),1)]),e("div",de,[e("div",re,[e("i",_e,[e("span",ue,u(t.City),1)]),e("button",{class:"btn btn-outline-danger subtitle-1 text-truncate d-none d-lg-block",onClick:P(F=>g(t),["prevent"])}," 店家資訊 ",8,ve)])])])])])])])],8,W))),128))]),o(H,{searchedArr:_(i),itemsPerPage:n.value,currentPage:a.value,totalPages:S.value,eachPageLength:_(y),onPrevPage:k,onNextPage:A,onChangePage:N},null,8,["searchedArr","itemsPerPage","currentPage","totalPages","eachPageLength"])]),o($,{ref_key:"refActivitiesModal",ref:v},null,512),h.value.length?V("",!0):(l(),q(J,{key:0})),o(E),o(C,{active:_(w)},{default:D(()=>[ge]),_:1},8,["active"])],64)}}},ye=M(he,[["__scopeId","data-v-bfb52676"]]);export{ye as default};
