import{_ as M,u as I,s as B,r as d,m as P,n as F,b as l,c as r,i as o,d as e,F as b,e as j,q as _,v as V,f as D,w as q,N as T,B as $,x,g as v,M as E,l as R,p as U,j as z,h as G}from"./index-f2a05b0f.js";import{P as H,N as J}from"./NotFound-7069120d.js";const m=c=>(U("data-v-dbed7347"),c=c(),z(),c),K={class:"container my-5"},O=m(()=>e("div",null,[e("h3",{class:"h5 fw-bold"},[e("i",{class:"bi bi-caret-up-fill triangle me-2"}),G("熱門活動")])],-1)),Q={class:"row gx-3"},W=["onClick"],X={class:"card h-100 border-0 shadow"},Y={class:"row"},Z={class:"col-5"},ee={class:"activity-card-pic p-2"},te=["src","alt"],se={class:"col-7"},ae={class:"row flex-column justify-content-between"},oe={class:"card-body pe-4"},ce={class:"col mt-3"},ne={class:"fw-bold text-truncate"},le={class:"col d-none d-sm-block"},ie={class:"activity-card-content truncate"},de={class:"col mb-2"},re={class:"d-flex flex-lg-row justify-content-lg-between align-items-lg-center flex-column"},_e={class:"bi bi-geo-alt-fill me-1 location text-truncate"},ve={class:"text-dark fw-bold px-2"},ue=["onClick"],ge=m(()=>e("div",{class:"d-flex justify-content-between align-items-center",style:{width:"280px"}},[e("div",{class:"loading loading-triangle"}),e("div",{class:"loading loading-square"}),e("div",{class:"loading loading-circle"})],-1)),he={__name:"SearchedActivities",setup(c){const w=I(),{getAllActivitiesArr:pe,allActivitiesArr:fe,searchedArr:i,keyword:Pe,eachPageLength:u,isLoading:y}=B(w),g=d(null),h=s=>{g.value.openModal(s)},a=d(1),n=d(20),p=P(()=>{const s=(a.value-1)*n.value,f=s+n.value;return i.value.slice(s,f)}),A=()=>a.value-=1,k=()=>a.value+=1,N=s=>{a.value=1,a.value=s},S=P(()=>Math.ceil(i.value.length/n.value));return console.log(u.value),(s,f)=>{const C=F("Loading");return l(),r(b,null,[o(T),o($),e("div",K,[O,e("div",Q,[(l(!0),r(b,null,j(p.value,(t,be)=>(l(),r("div",{key:t.ActivityID,class:"col-12 col-lg-6 mb-3",onClick:x(L=>h(t),["prevent"])},[e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[e("img",{src:t.Picture.PictureUrl1||"/src/assets/pics/NotFound/placeholder.png",alt:t.location},null,8,te)])]),e("div",se,[e("div",ae,[e("div",oe,[e("div",ce,[e("h6",ne,v(t.ActivityName),1)]),e("div",le,[e("p",ie,v(t.Description),1)]),e("div",de,[e("div",re,[e("i",_e,[e("span",ve,v(t.Location),1)]),e("button",{class:"btn btn-outline-danger subtitle-1 text-truncate d-none d-lg-block",onClick:x(L=>h(t),["prevent"])}," 活動詳情 ",8,ue)])])])])])])])],8,W))),128))]),o(H,{searchedArr:_(i),itemsPerPage:n.value,currentPage:a.value,totalPages:S.value,eachPageLength:_(u),onPrevPage:A,onNextPage:k,onChangePage:N},null,8,["searchedArr","itemsPerPage","currentPage","totalPages","eachPageLength"])]),o(E,{ref_key:"refActivitiesModal",ref:g},null,512),p.value.length?D("",!0):(l(),V(J,{key:0})),o(R),o(C,{active:_(y)},{default:q(()=>[ge]),_:1},8,["active"])],64)}}},we=M(he,[["__scopeId","data-v-dbed7347"]]);export{we as default};
