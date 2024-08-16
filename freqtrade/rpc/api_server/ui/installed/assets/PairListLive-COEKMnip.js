import{o as t,c as l,a as i,g as A,r as v,u as F,n as N,h as s,F as b,L as f,z as w,b as a,w as p,M as x,x as O,a4 as U,y as W,e as S,v as q,j as D,a0 as j,$ as E,bf as G,q as k,p as R,d as T,_ as Y}from"./index-DlUcbSds.js";import{_ as H}from"./plus-box-outline-ddJQ4f0v.js";const J={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},K=i("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"},null,-1),Q=[K];function X(u,n){return t(),l("svg",J,[...Q])}const Z={name:"mdi-check-circle",render:X},B=u=>(R("data-v-8e6dba73"),u=u(),T(),u),ee=B(()=>i("h3",null,"Whitelist Methods",-1)),te={key:0,class:"list wide"},se=["title"],le={key:0,class:"list"},ie={key:1},oe=B(()=>i("hr",null,null,-1)),ae=B(()=>i("label",{class:"me-auto h3",title:"Blacklist - Select (followed by a click on '-') to remove pairs"},"Blacklist",-1)),ne={class:"float-end d-flex d-flex-columns pe-1"},ce={key:2,class:"list"},de=["onClick"],re={class:"check"},_e={key:3},ue=A({__name:"PairListLive",setup(u){const n=v(""),g=v(!1),o=v([]),e=F(),y=()=>{e.activeBot.whitelist.length===0&&e.activeBot.getWhitelist(),e.activeBot.blacklist.length===0&&e.activeBot.getBlacklist()},L=()=>{n.value&&(g.value=!1,e.activeBot.addBlacklist({blacklist:[n.value]}),n.value="")},C=r=>{const _=o.value.indexOf(r);_>-1?o.value.splice(_,1):o.value.push(r)},V=()=>{if(o.value.length===0){console.log("nothing to delete");return}const r=e.activeBot.blacklist.filter((_,h)=>o.value.indexOf(h)>-1);console.log("Deleting pairs: ",r),e.activeBot.deleteBlacklist(r),o.value=[]};return N(()=>{y()}),(r,_)=>{const h=H,m=q,M=D,P=j,z=E,$=G,I=Z;return t(),l("div",null,[i("div",null,[ee,s(e).activeBot.pairlistMethods.length?(t(),l("div",te,[(t(!0),l(b,null,f(s(e).activeBot.pairlistMethods,(c,d)=>(t(),l("div",{key:d,class:"pair white align-middle border border-secondary"},k(c),1))),128))])):w("",!0)]),i("h3",{title:`${s(e).activeBot.whitelist.length} pairs`},"Whitelist",8,se),s(e).activeBot.whitelist.length?(t(),l("div",le,[(t(!0),l(b,null,f(s(e).activeBot.whitelist,(c,d)=>(t(),l("div",{key:d,class:"pair white align-middle border border-secondary text-small"},k(c),1))),128))])):(t(),l("p",ie,"List Unavailable. Please Login and make sure server is running.")),oe,i("div",null,[ae,i("div",ne,[a(m,{id:"blacklist-add-btn",class:x(["me-1",s(e).activeBot.botApiVersion>=1.12?"col-6":""]),size:"sm"},{default:p(()=>[a(h)]),_:1},8,["class"]),s(e).activeBot.botApiVersion>=1.12?(t(),O(m,{key:0,size:"sm",class:"col-6",title:"Select pairs to delete pairs from your blacklist.",disabled:s(o).length===0,onClick:V},{default:p(()=>[a(M)]),_:1},8,["disabled"])):w("",!0)]),a($,{title:"Add to blacklist",target:"blacklist-add-btn",triggers:"click","teleport-to":"body",show:s(g)},{default:p(()=>[i("form",{ref:"form",onSubmit:U(L,["prevent"])},[i("div",null,[a(z,{"label-cols":"2",label:"Pair","label-for":"pair-input"},{default:p(()=>[a(P,{id:"pair-input",modelValue:s(n),"onUpdate:modelValue":_[0]||(_[0]=c=>W(n)?n.value=c:null),required:"",autofocus:""},null,8,["modelValue"])]),_:1}),a(m,{id:"blacklist-submit",class:"float-end mb-2",size:"sm",type:"submit"},{default:p(()=>[S(" Add ")]),_:1})])],544)]),_:1},8,["show"])]),s(e).activeBot.blacklist.length?(t(),l("div",ce,[(t(!0),l(b,null,f(s(e).activeBot.blacklist,(c,d)=>(t(),l("div",{key:d,class:x(["pair black border border-secondary",s(o).indexOf(d)>-1?"active":""]),onClick:pe=>C(d)},[i("span",re,[a(I)]),S(k(c),1)],10,de))),128))])):(t(),l("p",_e,"BlackList Unavailable. Please Login and make sure server is running."))])}}}),ve=Y(ue,[["__scopeId","data-v-8e6dba73"]]);export{ve as default};
//# sourceMappingURL=PairListLive-COEKMnip.js.map