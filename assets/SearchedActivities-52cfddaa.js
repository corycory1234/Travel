import{_ as B,u as j,s as F,r as _,m as P,n as V,b as c,c as d,i as o,q as n,d as e,F as x,e as D,f as m,v as q,w as T,N as U,B as $,x as b,g as v,M as E,l as R,p as z,j as G,h as H}from"./index-e808e6bb.js";import{P as J,N as K}from"./NotFound-5547115a.js";const A=i=>(z("data-v-9a1128e1"),i=i(),G(),i),O={key:0,class:"container my-5"},Q=A(()=>e("div",null,[e("h3",{class:"h5 fw-bold"},[e("i",{class:"bi bi-caret-up-fill triangle me-2"}),H("熱門活動")])],-1)),W={class:"row gx-3"},X=["onClick"],Y={class:"card h-100 border-0 shadow"},Z={class:"row"},ee={class:"col-5"},te={class:"activity-card-pic p-2"},se=["src","alt"],ae={class:"col-7"},oe={class:"row flex-column justify-content-between"},ce={class:"card-body pe-4"},ne={class:"col mt-3"},ie={class:"fw-bold text-truncate"},le={class:"col d-none d-sm-block"},re={class:"activity-card-content truncate"},de={class:"col mb-2"},_e={class:"d-flex flex-lg-row justify-content-lg-between align-items-lg-center flex-column"},ve={class:"bi bi-geo-alt-fill me-1 location text-truncate"},ue={class:"text-dark fw-bold px-2"},ge=["onClick"],he=A(()=>e("div",{class:"d-flex justify-content-between align-items-center",style:{width:"280px"}},[e("div",{class:"loading loading-triangle"}),e("div",{class:"loading loading-square"}),e("div",{class:"loading loading-circle"})],-1)),pe={__name:"SearchedActivities",setup(i){const u=j(),{getAllActivities:fe,search:Pe,getAssetUrl:y}=u,{getAllActivitiesArr:xe,allActivitiesArr:me,searchedArr:l,keyword:be,eachPageLength:w,isLoading:k}=F(u),g=_(null),h=s=>{g.value.openModal(s)},a=_(1),r=_(20),p=P(()=>{const s=(a.value-1)*r.value,f=s+r.value;return l.value.slice(s,f)}),N=()=>a.value-=1,S=()=>a.value+=1,C=s=>{a.value=1,a.value=s},L=P(()=>Math.ceil(l.value.length/r.value));return(s,f)=>{const M=V("Loading");return c(),d(x,null,[o(U),o($),n(l).length>0?(c(),d("div",O,[Q,e("div",W,[(c(!0),d(x,null,D(p.value,(t,Ae)=>(c(),d("div",{key:t.ActivityID,class:"col-12 col-lg-6 mb-3",onClick:b(I=>h(t),["prevent"])},[e("div",Y,[e("div",Z,[e("div",ee,[e("div",te,[e("img",{src:t.Picture.PictureUrl1||n(y),alt:t.location},null,8,se)])]),e("div",ae,[e("div",oe,[e("div",ce,[e("div",ne,[e("h6",ie,v(t.ActivityName),1)]),e("div",le,[e("p",re,v(t.Description),1)]),e("div",de,[e("div",_e,[e("i",ve,[e("span",ue,v(t.Location),1)]),e("button",{class:"btn btn-outline-danger subtitle-1 text-truncate d-none d-lg-block",onClick:b(I=>h(t),["prevent"])}," 活動詳情 ",8,ge)])])])])])])])],8,X))),128))]),o(J,{searchedArr:n(l),itemsPerPage:r.value,currentPage:a.value,totalPages:L.value,eachPageLength:n(w),onPrevPage:N,onNextPage:S,onChangePage:C},null,8,["searchedArr","itemsPerPage","currentPage","totalPages","eachPageLength"])])):m("",!0),o(E,{ref_key:"refActivitiesModal",ref:g},null,512),p.value.length?m("",!0):(c(),q(K,{key:1})),o(R),o(M,{active:n(k)},{default:T(()=>[he]),_:1},8,["active"])],64)}}},ke=B(pe,[["__scopeId","data-v-9a1128e1"]]);export{ke as default};
