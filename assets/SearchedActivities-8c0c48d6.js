import{_ as B,u as j,s as F,r as _,m as P,n as V,b as c,c as r,i as a,q as n,d as e,F as x,e as D,f as m,v as T,w as q,N as G,B as U,x as b,g as v,M as $,G as E,l as R,p as z,j as H,h as J}from"./index-6f5c38ef.js";import{P as K,N as O}from"./NotFound-2a18d91f.js";const A=i=>(z("data-v-d3afdc16"),i=i(),H(),i),Q={key:0,class:"container my-5"},W=A(()=>e("div",null,[e("h3",{class:"h5 fw-bold"},[e("i",{class:"bi bi-caret-up-fill triangle me-2"}),J("熱門活動")])],-1)),X={class:"row gx-3"},Y=["onClick"],Z={class:"card h-100 border-0 shadow"},ee={class:"row"},te={class:"col-5"},se={class:"activity-card-pic p-2"},ae=["src","alt"],oe={class:"col-7"},ce={class:"row flex-column justify-content-between"},ne={class:"card-body pe-4"},ie={class:"col mt-3"},le={class:"fw-bold text-truncate"},de={class:"col d-none d-sm-block"},re={class:"activity-card-content truncate"},_e={class:"col mb-2"},ve={class:"d-flex flex-lg-row justify-content-lg-between align-items-lg-center flex-column"},ue={class:"bi bi-geo-alt-fill me-1 location text-truncate"},ge={class:"text-dark fw-bold px-2"},he=["onClick"],pe=A(()=>e("div",{class:"d-flex justify-content-between align-items-center",style:{width:"280px"}},[e("div",{class:"loading loading-triangle"}),e("div",{class:"loading loading-square"}),e("div",{class:"loading loading-circle"})],-1)),fe={__name:"SearchedActivities",setup(i){const u=j(),{getAllActivities:Pe,search:xe,getAssetUrl:y}=u,{getAllActivitiesArr:me,allActivitiesArr:be,searchedArr:l,keyword:Ae,eachPageLength:w,isLoading:k}=F(u),g=_(null),h=s=>{g.value.openModal(s)},o=_(1),d=_(20),p=P(()=>{const s=(o.value-1)*d.value,f=s+d.value;return l.value.slice(s,f)}),N=()=>o.value-=1,S=()=>o.value+=1,C=s=>{o.value=1,o.value=s},L=P(()=>Math.ceil(l.value.length/d.value));return(s,f)=>{const M=V("Loading");return c(),r(x,null,[a(G),a(U),n(l).length>0?(c(),r("div",Q,[W,e("div",X,[(c(!0),r(x,null,D(p.value,(t,ye)=>(c(),r("div",{key:t.ActivityID,class:"col-12 col-lg-6 mb-3",onClick:b(I=>h(t),["prevent"])},[e("div",Z,[e("div",ee,[e("div",te,[e("div",se,[e("img",{src:t.Picture.PictureUrl1||n(y),alt:t.location},null,8,ae)])]),e("div",oe,[e("div",ce,[e("div",ne,[e("div",ie,[e("h6",le,v(t.ActivityName),1)]),e("div",de,[e("p",re,v(t.Description),1)]),e("div",_e,[e("div",ve,[e("i",ue,[e("span",ge,v(t.Location),1)]),e("button",{class:"btn btn-outline-danger subtitle-1 text-truncate d-none d-lg-block",onClick:b(I=>h(t),["prevent"])}," 活動詳情 ",8,he)])])])])])])])],8,Y))),128))]),a(K,{searchedArr:n(l),itemsPerPage:d.value,currentPage:o.value,totalPages:L.value,eachPageLength:n(w),onPrevPage:N,onNextPage:S,onChangePage:C},null,8,["searchedArr","itemsPerPage","currentPage","totalPages","eachPageLength"])])):m("",!0),a($,{ref_key:"refActivitiesModal",ref:g},null,512),p.value.length?m("",!0):(c(),T(O,{key:1})),a(E),a(R),a(M,{active:n(k)},{default:q(()=>[pe]),_:1},8,["active"])],64)}}},Ne=B(fe,[["__scopeId","data-v-d3afdc16"]]);export{Ne as default};