var e=Object.assign;import{c as s}from"./mobile.a2e3a765.js";import{T as o}from"./index.484af637.js";import{k as t,a as r,b as l,z as a,s as i,x as n,r as u,o as d,c as f,f as c,F as h,h as L,t as m,q as M}from"./vendor.235e43af.js";import"./index.caafce4f.js";const{createDemo:p}=s("infiniteloading");var v=p({props:{},setup(){const s=t(!0),i=t(!0),n=t(!0),u=r({defultList:[""],customList:[""],refreshList:[""]});return l((()=>{(()=>{for(let e=0;e<10;e++)u.defultList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`),u.customList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`),u.refreshList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`)})()})),e({loadMore:e=>{setTimeout((()=>{const o=u.defultList.length;for(let e=o;e<o+10;e++)u.defultList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`);u.defultList.length>30&&(s.value=!1),e()}),500)},hasMore:s,customHasMore:i,customLoadMore:e=>{setTimeout((()=>{const s=u.customList.length;for(let e=s;e<s+10;e++)u.customList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`);u.customList.length>30&&(i.value=!1),e()}),500)},refreshHasMore:n,refreshLoadMore:e=>{setTimeout((()=>{const s=u.refreshList.length;for(let e=s;e<s+10;e++)u.refreshList.push(`${e} -- 塑像本来就在石头里，我只是把不要的部分去掉`);u.refreshList.length>30&&(n.value=!1),e()}),500)},refresh:e=>{setTimeout((()=>{o.success("刷新成功"),e()}),1e3)}},a(u))}});const g=M("data-v-8334db96");i("data-v-8334db96");const _={class:"demo"},b=c("h2",null,"基础用法",-1),$={class:"infiniteUl",id:"scroll"},j=c("h2",null,"下拉刷新",-1),T={class:"infiniteUl",id:"refreshScroll"},k=c("h2",null,"自定义加载文案",-1),x={class:"infiniteUl",id:"customScroll"},H=c("div",{class:"loading"},[c("span",null,"加载中...")],-1),I=c("div",{class:"unload-more"},"没有数据啦 ~~",-1);n();const S=g(((e,s,o,t,r,l)=>{const a=u("nut-infiniteloading"),i=u("nut-cell");return d(),f("div",_,[b,c(i,null,{default:g((()=>[c("ul",$,[c(a,{containerId:"scroll",useWindow:!1,hasMore:e.hasMore,onLoadMore:e.loadMore},{default:g((()=>[(d(!0),f(h,null,L(e.defultList,((e,s)=>(d(),f("li",{class:"infiniteLi",key:s},m(e),1)))),128))])),_:1},8,["hasMore","onLoadMore"])])])),_:1}),j,c(i,null,{default:g((()=>[c("ul",T,[c(a,{containerId:"refreshScroll",useWindow:!1,isOpenRefresh:!0,hasMore:e.refreshHasMore,onLoadMore:e.refreshLoadMore,onRefresh:e.refresh},{default:g((()=>[(d(!0),f(h,null,L(e.refreshList,((e,s)=>(d(),f("li",{class:"infiniteLi",key:s},m(e),1)))),128))])),_:1},8,["hasMore","onLoadMore","onRefresh"])])])),_:1}),k,c(i,null,{default:g((()=>[c("ul",x,[c(a,{containerId:"customScroll",useWindow:!1,hasMore:e.customHasMore,onLoadMore:e.customLoadMore},{loading:g((()=>[H])),unloadMore:g((()=>[I])),default:g((()=>[(d(!0),f(h,null,L(e.customList,((e,s)=>(d(),f("li",{class:"infiniteLi",key:s},m(e),1)))),128))])),_:1},8,["hasMore","onLoadMore"])])])),_:1})])}));v.render=S,v.__scopeId="data-v-8334db96";export default v;
