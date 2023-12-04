import{_ as i,m as v,b as l,c as d,d as a,x as c,A as r,g as m,p as h,j as _,D as P}from"./index-6f5c38ef.js";const g=e=>(h("data-v-36a5b6f4"),e=e(),_(),e),x={class:"container"},f={"aria-label":"Page navigation example"},b={class:"pagination justify-content-center"},G=["onClick"],S=g(()=>a("i",{class:"bi bi-caret-left-fill fs-6"},null,-1)),C=[S],E={class:"page-item active px-3"},R={class:"page-link text-black fw-bold paginationBg border-0",href:"#"},k=["onClick"],y=g(()=>a("i",{class:"bi bi-caret-right-fill fs-6"},null,-1)),M=[y],O={__name:"Pagination",props:["carouselArr","dataArr","searchedArr","itemsPerPage","currentPage","totalPages","eachPageLength"],emits:["prev-page","next-page","change-page"],setup(e,{emit:n}){const t=e,A=()=>{t.currentPage<=1||n("prev-page")},p=()=>{if(t.currentPage<t.totalPages)n("next-page");else if(t.currentPage===t.totalPages)return};return v(()=>{const s=t.searchedArr.length>0?t.searchedArr:t.dataArr||t.carouselArr,o=Math.ceil(((s==null?void 0:s.length)||0)/t.itemsPerPage);return console.log("totalItems:",s),console.log("totalPages:",o),Array.from({length:o},(I,u)=>u+1)}),(s,o)=>(l(),d("div",x,[a("nav",f,[a("ul",b,[a("li",{class:"page-item",onClick:c(A,["prevent"])},[a("a",{class:r(["page-link rounded",e.currentPage===1?"paginationPrev":"paginationNext"]),href:"#"},C,2)],8,G),a("li",E,[a("a",R,m(e.currentPage),1)]),a("li",{class:"page-item",onClick:c(p,["prevent"])},[a("a",{class:r(["page-link rounded",e.currentPage<e.totalPages?"paginationNext":"paginationPrev"]),href:"#"},M,2)],8,k)])])]))}},K=i(O,[["__scopeId","data-v-36a5b6f4"]]),j="data:image/png;base64,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";const B={},D={class:"container mb-5"},W=P('<div class="row flex-column flex-lg-row justify-content-center align-items-center" data-v-006172b3><div class="col-12 col-lg-4 text-center text-lg-end" data-v-006172b3><img src="'+j+'" alt="NotFound" data-v-006172b3></div><div class="col-12 col-lg-6 mt-2" data-v-006172b3><div class="d-flex flex-column align-items-center align-items-lg-start" data-v-006172b3><p class="text-center text-lg-start notFound mb-0" data-v-006172b3><strong class="oops" data-v-006172b3>Oops！</strong> 很抱歉， <br data-v-006172b3> 找不到符合此搜尋相關的內容。 </p></div></div></div>',1),w=[W];function N(e,n){return l(),d("div",D,w)}const T=i(B,[["render",N],["__scopeId","data-v-006172b3"]]);export{T as N,K as P};