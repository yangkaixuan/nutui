import{c as e}from"./mobile.a2e3a765.js";import{k as t,r as i,o as l,c as s,f as n}from"./vendor.235e43af.js";import"./index.caafce4f.js";const{createDemo:o}=e("picker");var a=o({props:{},setup(){const e=["南京市","无锡市","海北藏族自治区","北京市","连云港市","浙江市","江苏市"],i=[{values:["周一","周二","周三","周四","周五"],defaultIndex:2},{values:["上午","下午","晚上"],defaultIndex:1}],l=[{text:"浙江",children:[{text:"杭州",children:[{text:"西湖区"},{text:"余杭区"}]},{text:"温州",children:[{text:"鹿城区"},{text:"瓯海区"}]}]},{text:"福建",children:[{text:"福州",children:[{text:"鼓楼区"},{text:"台江区"}]},{text:"厦门",children:[{text:"思明区"},{text:"海沧区"}]}]}],s=t(!1),n=t(!1),o=t(!1),a=[s,n,o],c=t(e[0]),d=t(`${i[0].values[i[0].defaultIndex]} ${i[1].values[i[1].defaultIndex]}`),r=t(`${l[0].text} \n      ${l[0].children[0].text} \n      ${l[0].children[0].children[0].text}`);return{listData1:e,listData2:i,listData3:l,show:s,show2:n,show3:o,desc:c,desc2:d,desc3:r,open:e=>{a[e-1].value=!0},confirm:e=>{c.value=e},confirm2:e=>{d.value=e.join(" ")},confirm3:e=>{r.value=e.join(" ")}}}});const c={class:"demo"},d=n("h2",null,"基础用法",-1),r=n("h2",null,"多列样式",-1),u=n("h2",null,"多级联动",-1);a.render=function(e,t,o,a,f,x){const h=i("nut-cell"),m=i("nut-picker");return l(),s("div",c,[d,n(h,{title:"请选择城市",desc:e.desc,onClick:t[1]||(t[1]=t=>e.open(1))},null,8,["desc"]),r,n(h,{title:"请选择时间",desc:e.desc2,onClick:t[2]||(t[2]=t=>e.open(2))},null,8,["desc"]),u,n(h,{title:"请选择地址",desc:e.desc3,onClick:t[3]||(t[3]=t=>e.open(3))},null,8,["desc"]),n(m,{"is-visible":e.show,"onUpdate:is-visible":t[4]||(t[4]=t=>e.show=t),"list-data":e.listData1,title:"城市选择",onConfirm:e.confirm,onClose:e.close},null,8,["is-visible","list-data","onConfirm","onClose"]),n(m,{"is-visible":e.show2,"onUpdate:is-visible":t[5]||(t[5]=t=>e.show2=t),"list-data":e.listData2,title:"多列选择",onConfirm:e.confirm2,onClose:e.close},null,8,["is-visible","list-data","onConfirm","onClose"]),n(m,{"is-visible":e.show3,"onUpdate:is-visible":t[6]||(t[6]=t=>e.show3=t),"list-data":e.listData3,title:"地址选择",onConfirm:e.confirm3},null,8,["is-visible","list-data","onConfirm"])])};export default a;
