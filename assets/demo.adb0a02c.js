var e=Object.assign;import{c as t}from"./mobile.a2e3a765.js";import{a as l,z as u,s as n,x as s,r as i,o as a,c as m,f as d,q as L,j as o}from"./vendor.235e43af.js";import"./index.caafce4f.js";const{createDemo:c}=t("menu");var r=c({props:{},setup(){const t=l({title:"热门推荐",menuList:[{value:"手机"},{value:"电脑"},{value:"家用电器"},{value:"日用百货"}],menuList2:[{value:"热门推荐",id:111},{value:"手机数码",id:112},{value:"电脑办公",id:113},{value:"美妆护肤",id:114},{value:"个护清洁",id:115},{value:"汽车生活",id:116},{value:"京东超市",id:117},{value:"母婴童装",id:118}]});return e(e({},u(t)),{getChecked:(e,t)=>{alert("选择菜单选项："+t),console.log(11,e,t)},alertText:(e,t)=>{console.log(e,t),"title"==t?alert("菜单标题点击："+e):alert("禁用操作")}})}});const v=L("data-v-25b29e7c");n("data-v-25b29e7c");const f={class:"demo full menu-demo"},p=d("h2",null,"基础用法",-1),h=d("h2",null,"多列展示",-1),_=d("h2",null,"禁用操作",-1),b=d("p",{class:"tips"},"`disabled` 属性可对菜单列表进行禁用操作。`autoClose` 属性控制下拉菜单列表是否选择后自动收起，默认自动收起。",-1),g=d("h2",null,"禁止蒙层展示",-1),C=d("p",{class:"tips"},"属性`hasMask`控制是否有蒙层，默认为 `true`展示蒙层 ",-1),k=d("h2",null,"点击事件",-1),y=d("p",{class:"tips"},"标题点击事件`menu-click`，菜单列表选择点击事件`on-change`",-1),x=d("h2",null,"自定义内容",-1),j={class:"user-style"},M=o("确认提交");s();const S=v(((e,t,l,u,n,s)=>{const L=i("nut-menu-item"),o=i("nut-menu"),c=i("nut-cell"),r=i("nut-button");return a(),m("div",f,[p,d(o,null,{default:v((()=>[d(L,{menuList:e.menuList,title:"最新商品"},null,8,["menuList"]),d(L,{menuList:e.menuList,title:e.title},null,8,["menuList","title"])])),_:1}),h,d(o,null,{default:v((()=>[d(L,{class:"base-style",menuList:e.menuList2,title:"单列展示",multiStyle:"1",maxHeight:"200"},null,8,["menuList"]),d(L,{menuList:e.menuList2,title:"双列展示",multiStyle:"2"},null,8,["menuList"]),d(L,{menuList:e.menuList2,title:"三列展示",multiStyle:"3"},null,8,["menuList"])])),_:1}),_,b,d(o,null,{default:v((()=>[d(L,{menuList:e.menuList,title:"最新商品"},null,8,["menuList"]),d(L,{menuList:e.menuList,title:"禁止自动收起",autoClose:!1},null,8,["menuList"]),d(L,{menuList:e.menuList2,title:"筛选",disabled:""},null,8,["menuList"])])),_:1}),g,C,d(o,{hasMask:!1},{default:v((()=>[d(L,{menuList:e.menuList,title:"最新商品"},null,8,["menuList"]),d(L,{menuList:e.menuList,title:e.title},null,8,["menuList","title"])])),_:1}),k,y,d(o,null,{default:v((()=>[d(L,{menuList:e.menuList,title:"选择菜单列表项",multiStyle:"2",onMenuClick:t[1]||(t[1]=t=>e.alertText(t,"title")),onOnChange:e.getChecked},null,8,["menuList","onOnChange"]),d(L,{menuList:e.menuList2,title:"选中标题触发",disabled:"",onMenuClick:e.alertText},null,8,["menuList","onMenuClick"])])),_:1}),x,d(o,null,{default:v((()=>[d(L,{title:"自定义选项"},{default:v((()=>[d("div",j,[d(c,{title:"我是标题",desc:"描述文字"}),d(c,null,{default:v((()=>[d(r,{size:"large",type:"primary"},{default:v((()=>[M])),_:1})])),_:1})])])),_:1})])),_:1})])}));r.render=S,r.__scopeId="data-v-25b29e7c";export default r;
