import{_ as ct}from"./CandleChartContainer-D-o4GMGR.js";import{_ as dt}from"./TradeDetail-D52pz4mn.js";import{_ as _t,a as ut,b as mt,c as pt}from"./TradeList-Dl9robre.js";import{_ as ft,a as vt}from"./TimePeriodChart-CyJqVqUK.js";import{g as L,u as V,o as i,c as h,a as n,b as a,w as c,h as e,t as U,s as yt,i as I,v as W,j as ht,G as q,k as f,T as D,r as O,l as H,m as $,n as J,q as _,x,y as j,z as g,A as Q,B as G,F as gt,e as b,C as bt,D as R,E as M,H as Z,I as E,J as Bt,K as kt}from"./index-DlUcbSds.js";import xt from"./PairListLive-COEKMnip.js";import{_ as wt}from"./BotBalance.vue_vue_type_script_setup_true_lang-BkANRT63.js";import{_ as X}from"./InfoBox.vue_vue_type_script_setup_true_lang-D0p1AO7G.js";import{_ as St,a as $t}from"./MessageBox.vue_vue_type_script_setup_true_lang-wRB1Pw6g.js";import"./EditValue.vue_vue_type_script_setup_true_lang-4xmlAQGq.js";import"./plus-box-outline-ddJQ4f0v.js";import"./installCanvasRenderer-BCi_cPJ5.js";import"./chartZoom-71GenF7r.js";import"./createSeriesDataSimply-BvNxfXAu.js";const Tt={class:"mb-2"},Ct=n("label",{class:"me-auto h3"},"Pair Locks",-1),Lt=L({__name:"PairLockList",setup(k){const t=V(),r=[{key:"pair",label:"Pair"},{key:"lock_end_timestamp",label:"Until",formatter:l=>U(l)},{key:"reason",label:"Reason"},{key:"actions"}],u=l=>{console.log(l),l.id!==void 0?t.activeBot.deleteLock(l.id):yt("This Freqtrade version does not support deleting locks.")};return(l,y)=>{const B=I,v=W,d=ht,s=q;return i(),h("div",null,[n("div",Tt,[Ct,a(v,{class:"float-end",size:"sm",onClick:e(t).activeBot.getLocks},{default:c(()=>[a(B)]),_:1},8,["onClick"])]),n("div",null,[a(s,{class:"table-sm",items:e(t).activeBot.activeLocks,fields:r},{"cell(actions)":c(o=>[a(v,{class:"btn-xs ms-1",size:"sm",title:"Delete trade",onClick:m=>u(o.item)},{default:c(()=>[a(d)]),_:2},1032,["onClick"])]),_:1},8,["items"])])])}}}),Pt={class:"mb-2"},Dt={class:"me-auto d-inline"},Vt={class:"ps-1"},zt=L({__name:"PeriodBreakdown",setup(k){const t=V(),r=f(()=>t.activeBot.botApiVersion>=2.33),u=f(()=>{const s=[{value:D.daily,text:"Days"}];return r.value&&(s.push({value:D.weekly,text:"Weeks"}),s.push({value:D.monthly,text:"Months"})),s}),l=O(D.daily),y=f(()=>{switch(l.value){case D.weekly:return t.activeBot.weeklyStats;case D.monthly:return t.activeBot.monthlyStats}return t.activeBot.dailyStats}),B=f(()=>({...y.value,data:y.value.data?Object.values(y.value.data).sort((s,o)=>s.date>o.date?1:-1):[]})),v=f(()=>{const s=[{key:"date",label:"Day"},{key:"abs_profit",label:"Profit",formatter:o=>H(o,t.activeBot.stakeCurrencyDecimals)},{key:"fiat_value",label:`In ${t.activeBot.dailyStats.fiat_display_currency}`,formatter:o=>H(o,2)},{key:"trade_count",label:"Trades"}];return t.activeBot.botApiVersion>=2.16&&s.push({key:"rel_profit",label:"Profit%",formatter:o=>$(o,2)}),s});function d(){t.activeBot.getTimeSummary(l.value)}return J(()=>{d()}),(s,o)=>{const m=I,p=W,T=Q,S=ft,P=q;return i(),h("div",null,[n("div",Pt,[n("h3",Dt,_(e(r)?"Period":"Daily")+" Breakdown",1),a(p,{class:"float-end",size:"sm",onClick:d},{default:c(()=>[a(m)]),_:1})]),e(r)?(i(),x(T,{key:0,id:"order-direction",modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=z=>j(l)?l.value=z:null),options:e(u),name:"radios-btn-default",size:"sm",buttons:"",style:{"min-width":"10em"},"button-variant":"outline-primary",onChange:d},null,8,["modelValue","options"])):g("",!0),n("div",Vt,[e(y)?(i(),x(S,{key:0,"daily-stats":e(B),"show-title":!1},null,8,["daily-stats"])):g("",!0)]),n("div",null,[a(P,{class:"table-sm",items:e(y).data,fields:e(v)},null,8,["items","fields"])])])}}}),At={class:"mb-2"},Ft=n("h3",{class:"me-auto d-inline"},"Performance",-1),Nt=L({__name:"BotPerformance",setup(k){const t=V(),r=O("performance");function u(s,o){return s.length>o?s.substring(0,o)+"...":s}const l=f(()=>{var m;return[{performance:{key:"pair",label:"Pair"},entryStats:{key:"enter_tag",label:"Enter tag",formatter:p=>u(p,17)},exitStats:{key:"exit_reason",label:"Exit Reason",formatter:p=>u(p,17)},mixTagStats:{key:"mix_tag",label:"Mix Tag",formatter:p=>u(p,17)}}[r.value],{key:"profit",label:"Profit %"},{key:"profit_abs",label:`Profit ${(m=t.activeBot.botState)==null?void 0:m.stake_currency}`,formatter:p=>H(p,5)},{key:"count",label:"Count"}]}),y=f(()=>r.value==="performance"?t.activeBot.performanceStats:r.value==="entryStats"?t.activeBot.entryStats:r.value==="exitStats"?t.activeBot.exitStats:r.value==="mixTagStats"?t.activeBot.mixTagStats:[]),B=f(()=>t.activeBot.botApiVersion>=2.34),v=[{value:"performance",text:"Performance"},{value:"entryStats",text:"Entries"},{value:"exitStats",text:"Exits"},{value:"mixTagStats",text:"Mix Tag"}];function d(){r.value==="performance"&&t.activeBot.getPerformance(),r.value==="entryStats"&&t.activeBot.getEntryStats(),r.value==="exitStats"&&t.activeBot.getExitStats(),r.value==="mixTagStats"&&t.activeBot.getMixTagStats()}return J(()=>{d()}),(s,o)=>{const m=I,p=W,T=Q,S=q;return i(),h("div",null,[n("div",At,[Ft,a(p,{class:"float-end",size:"sm",onClick:d},{default:c(()=>[a(m)]),_:1})]),e(B)?(i(),x(T,{key:0,id:"order-direction",modelValue:e(r),"onUpdate:modelValue":o[0]||(o[0]=P=>j(r)?r.value=P:null),options:v,name:"radios-btn-default",size:"sm",buttons:"",style:{"min-width":"10em"},"button-variant":"outline-primary",onChange:d},null,8,["modelValue"])):g("",!0),a(S,{class:"table-sm",items:e(y),fields:e(l)},null,8,["items","fields"])])}}}),Rt=L({__name:"BotProfit",props:{profit:{required:!0,type:Object},stakeCurrency:{required:!0,type:String},stakeCurrencyDecimals:{required:!0,type:Number}},setup(k){const t=k,r=[{key:"metric",label:"Metric"},{key:"value",label:"Value"}],u=f(()=>t.profit?[{metric:"ROI closed trades",value:t.profit.profit_closed_coin?`${G(t.profit.profit_closed_coin,t.stakeCurrency,t.stakeCurrencyDecimals)} (${$(t.profit.profit_closed_ratio_mean,2)})`:"N/A"},{metric:"ROI all trades",value:t.profit.profit_all_coin?`${G(t.profit.profit_all_coin,t.stakeCurrency,t.stakeCurrencyDecimals)} (${$(t.profit.profit_all_ratio_mean,2)})`:"N/A"},{metric:"Total Trade count",value:`${t.profit.trade_count??0}`},{metric:"Bot started",value:t.profit.bot_start_timestamp,isTs:!0},{metric:"First Trade opened",value:t.profit.first_trade_timestamp,isTs:!0},{metric:"Latest Trade opened",value:t.profit.latest_trade_timestamp,isTs:!0},{metric:"Win / Loss",value:`${t.profit.winning_trades??0} / ${t.profit.losing_trades??0}`},{metric:"Winrate",value:`${t.profit.winrate?$(t.profit.winrate):"N/A"}`},{metric:"Expectancy (ratio)",value:`${t.profit.expectancy?t.profit.expectancy.toFixed(2):"N/A"} (${t.profit.expectancy_ratio?t.profit.expectancy_ratio.toFixed(2):"N/A"})`},{metric:"Avg. Duration",value:`${t.profit.avg_duration??"N/A"}`},{metric:"Best performing",value:t.profit.best_pair?`${t.profit.best_pair}: ${$(t.profit.best_pair_profit_ratio,2)}`:"N/A"},{metric:"Trading volume",value:`${G(t.profit.trading_volume??0,t.stakeCurrency,t.stakeCurrencyDecimals)}`},{metric:"Profit factor",value:`${t.profit.profit_factor?t.profit.profit_factor.toFixed(2):"N/A"}`},{metric:"Max Drawdown",value:`${t.profit.max_drawdown?$(t.profit.max_drawdown,2):"N/A"} (${t.profit.max_drawdown_abs?G(t.profit.max_drawdown_abs,t.stakeCurrency,t.stakeCurrencyDecimals):"N/A"}) ${t.profit.max_drawdown_start_timestamp&&t.profit.max_drawdown_end_timestamp?"from "+U(t.profit.max_drawdown_start_timestamp)+" to "+U(t.profit.max_drawdown_end_timestamp):""}`}]:[]);return(l,y)=>{const B=X,v=q;return i(),x(v,{class:"text-start",small:"",borderless:"",items:e(u),fields:r},{"cell(value)":c(d=>[d.item.isTs&&d.value?(i(),x(B,{key:0,date:d.value},null,8,["date"])):(i(),h(gt,{key:1},[b(_(d.value),1)],64))]),_:1},8,["items"])}}}),Mt={key:0},Et={key:0},Gt=n("hr",null,null,-1),Ot={key:1},qt={key:0,class:"d-block"},Ut={class:"d-block"},Ht={class:"d-block"},It={key:0,class:"d-block"},Wt={key:1,class:"d-block"},jt=L({__name:"BotStatus",setup(k){const t=V();return(r,u)=>{const l=X,y=Rt;return e(t).activeBot.botState?(i(),h("div",Mt,[n("p",null,[b(" Running Freqtrade "),n("strong",null,_(e(t).activeBot.version),1)]),n("p",null,[b(" Running with "),n("strong",null,_(e(t).activeBot.botState.max_open_trades)+"x"+_(e(t).activeBot.botState.stake_amount)+" "+_(e(t).activeBot.botState.stake_currency),1),b(" on "),n("strong",null,_(e(t).activeBot.botState.exchange),1),b(" in "),n("strong",null,_(e(t).activeBot.botState.trading_mode||"spot"),1),b(" markets, with Strategy "),n("strong",null,_(e(t).activeBot.botState.strategy),1),b(". ")]),"stoploss_on_exchange"in e(t).activeBot.botState?(i(),h("p",Et,[b(" Stoploss on exchange is "),n("strong",null,_(e(t).activeBot.botState.stoploss_on_exchange?"enabled":"disabled"),1),b(". ")])):g("",!0),n("p",null,[b(" Currently "),n("strong",null,_(e(t).activeBot.botState.state),1),b(", "),n("strong",null,"force entry: "+_(e(t).activeBot.botState.force_entry_enable),1)]),n("p",null,[n("strong",null,_(e(t).activeBot.botState.dry_run?"Dry-Run":"Live"),1)]),Gt,n("p",null," Avg Profit "+_(("formatPercent"in r?r.formatPercent:e($))(e(t).activeBot.profit.profit_all_ratio_mean))+" (∑ "+_(("formatPercent"in r?r.formatPercent:e($))(e(t).activeBot.profit.profit_all_ratio_sum))+") in "+_(e(t).activeBot.profit.trade_count)+" Trades, with an average duration of "+_(e(t).activeBot.profit.avg_duration)+". Best pair: "+_(e(t).activeBot.profit.best_pair)+". ",1),e(t).activeBot.profit.first_trade_timestamp?(i(),h("p",Ot,[e(t).activeBot.profit.bot_start_timestamp?(i(),h("span",qt,[b(" Bot start date: "),n("strong",null,[a(l,{date:e(t).activeBot.profit.bot_start_timestamp,"show-timezone":""},null,8,["date"])])])):g("",!0),n("span",Ut,[b(" First trade opened: "),n("strong",null,[a(l,{date:e(t).activeBot.profit.first_trade_timestamp,"show-timezone":""},null,8,["date"])])]),n("span",Ht,[b(" Last trade opened: "),n("strong",null,[a(l,{date:e(t).activeBot.profit.latest_trade_timestamp,"show-timezone":""},null,8,["date"])])])])):g("",!0),n("p",null,[e(t).activeBot.profit.profit_factor?(i(),h("span",It," Profit factor: "+_(e(t).activeBot.profit.profit_factor.toFixed(2)),1)):g("",!0),e(t).activeBot.profit.trading_volume?(i(),h("span",Wt," Trading volume: "+_(("formatPriceCurrency"in r?r.formatPriceCurrency:e(G))(e(t).activeBot.profit.trading_volume,e(t).activeBot.botState.stake_currency,e(t).activeBot.botState.stake_currency_decimals??3)),1)):g("",!0)]),a(y,{class:"mx-1",profit:e(t).activeBot.profit,"stake-currency":e(t).activeBot.botState.stake_currency??"USDT","stake-currency-decimals":e(t).activeBot.botState.stake_currency_decimals??3},null,8,["profit","stake-currency","stake-currency-decimals"])])):g("",!0)}}}),Kt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Zt=n("path",{fill:"currentColor",d:"M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.7 6.7 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95S18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0"},null,-1),Jt=[Zt];function Qt(k,t){return i(),h("svg",Kt,[...Jt])}const Xt={name:"mdi-reload",render:Qt},Yt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=n("path",{fill:"currentColor",d:"M14 19h4V5h-4M6 19h4V5H6z"},null,-1),ee=[te];function oe(k,t){return i(),h("svg",Yt,[...ee])}const ae={name:"mdi-pause",render:oe},ne={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},re=n("path",{fill:"currentColor",d:"M18 18H6V6h12z"},null,-1),se=[re];function ie(k,t){return i(),h("svg",ne,[...se])}const le={name:"mdi-stop",render:ie},ce={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},de=n("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"},null,-1),_e=[de];function ue(k,t){return i(),h("svg",ce,[..._e])}const me={name:"mdi-play",render:ue},pe=["disabled"],fe=["disabled"],ve=["disabled"],ye=["disabled"],he=["disabled"],ge=["disabled"];const be=L({__name:"BotControls",setup(k){const t=V(),r=O(!1),u=O(),l=f(()=>{var s;return((s=t.activeBot.botState)==null?void 0:s.state)==="running"}),y=()=>{var o;const s={title:"Stop Bot",message:"Stop the bot loop from running?",accept:()=>{t.activeBot.stopBot()}};(o=u.value)==null||o.show(s)},B=()=>{var o;const s={title:"Stop Buying",message:"Freqtrade will continue to handle open trades.",accept:()=>{t.activeBot.stopBuy()}};(o=u.value)==null||o.show(s)},v=()=>{var o;const s={title:"Reload",message:"Reload configuration (including strategy)?",accept:()=>{console.log("reload..."),t.activeBot.reloadConfig()}};(o=u.value)==null||o.show(s)},d=()=>{var o;const s={title:"ForceExit all",message:"Really forceexit ALL trades?",accept:()=>{const m={tradeid:"all"};t.activeBot.forceexit(m)}};(o=u.value)==null||o.show(s)};return(s,o)=>{const m=me,p=le,T=ae,S=Xt,P=ut,z=mt;return i(),h("div",null,[n("button",{class:"btn btn-secondary btn-sm ms-1",disabled:!e(t).activeBot.isTrading||e(l),title:"Start Trading",onClick:o[0]||(o[0]=w=>e(t).activeBot.startBot())},[a(m,{height:"24",width:"24"})],8,pe),n("button",{class:"btn btn-secondary btn-sm ms-1",disabled:!e(t).activeBot.isTrading||!e(l),title:"Stop Trading - Also stops handling open trades.",onClick:o[1]||(o[1]=w=>y())},[a(p,{height:"24",width:"24"})],8,fe),n("button",{class:"btn btn-secondary btn-sm ms-1",disabled:!e(t).activeBot.isTrading||!e(l),title:"StopBuy - Stops buying, but still handles open trades",onClick:o[2]||(o[2]=w=>B())},[a(T,{height:"24",width:"24"})],8,ve),n("button",{class:"btn btn-secondary btn-sm ms-1",disabled:!e(t).activeBot.isTrading,title:"Reload Config - reloads configuration including strategy, resetting all settings changed on the fly.",onClick:o[3]||(o[3]=w=>v())},[a(S,{height:"24",width:"24"})],8,ye),n("button",{class:"btn btn-secondary btn-sm ms-1",disabled:!e(t).activeBot.isTrading,title:"Force exit all",onClick:o[4]||(o[4]=w=>d())},[a(P,{height:"24",width:"24"})],8,he),e(t).activeBot.botState&&e(t).activeBot.botState.force_entry_enable?(i(),h("button",{key:0,class:"btn btn-secondary btn-sm ms-1",disabled:!e(t).activeBot.isTrading||!e(l),title:"Force enter - Immediately enter a trade at an optional price. Exits are then handled according to strategy rules.",onClick:o[5]||(o[5]=w=>r.value=!0)},[a(z,{style:{"font-size":"20px"}})],8,ge)):g("",!0),(e(t).activeBot.isWebserverMode,g("",!0)),a(_t,{modelValue:e(r),"onUpdate:modelValue":o[7]||(o[7]=w=>j(r)?r.value=w:null),pair:e(t).activeBot.selectedPair},null,8,["modelValue","pair"]),a(St,{ref_key:"msgBox",ref:u},null,512)])}}}),Be={class:"mt-1 d-flex justify-content-center"},Ne=L({__name:"TradingView",setup(k){const t=V(),r=bt(),u=O(""),l=S=>{u.value=S},y=f(()=>["","sm","md","lg","xl"].includes(u.value)),B=f(()=>r.layoutLocked||!y.value),v=f(()=>y.value?r.tradingLayout:[...r.getTradingLayoutSm]),d=f(()=>R(v.value,M.multiPane)),s=f(()=>R(v.value,M.openTrades)),o=f(()=>R(v.value,M.tradeHistory)),m=f(()=>R(v.value,M.tradeDetail)),p=f(()=>R(v.value,M.chartView)),T=f(()=>({sm:r.getTradingLayoutSm}));return(S,P)=>{const z=be,w=$t,C=Bt,Y=jt,tt=Nt,et=wt,ot=zt,at=xt,nt=Lt,rt=kt,A=vt,F=Z("GridItem"),K=pt,st=dt,it=ct,lt=Z("GridLayout");return i(),x(lt,{class:"h-100 w-100","row-height":50,layout:e(v),"vertical-compact":!1,margin:[5,5],"responsive-layouts":e(T),"is-resizable":!e(B),"is-draggable":!e(B),responsive:!0,cols:{lg:12,md:12,sm:12,xs:4,xxs:2},"col-num":12,"onUpdate:breakpoint":l},{default:c(({gridItemProps:N})=>[e(d).h!=0?(i(),x(F,E({key:0},N,{i:e(d).i,x:e(d).x,y:e(d).y,w:e(d).w,h:e(d).h,"drag-allow-from":".card-header"}),{default:c(()=>[a(A,{header:"Multi Pane"},{default:c(()=>[n("div",Be,[a(z,{class:"mt-1 mb-2"})]),a(rt,{"content-class":"mt-3",class:"mt-1"},{default:c(()=>[a(C,{title:"Pairs combined",active:""},{default:c(()=>[a(w,{pairlist:e(t).activeBot.whitelist,"current-locks":e(t).activeBot.activeLocks,trades:e(t).activeBot.openTrades},null,8,["pairlist","current-locks","trades"])]),_:1}),a(C,{title:"General"},{default:c(()=>[a(Y)]),_:1}),a(C,{title:"Performance",lazy:""},{default:c(()=>[a(tt)]),_:1}),a(C,{title:"Balance",lazy:""},{default:c(()=>[a(et)]),_:1}),a(C,{title:"Time Breakdown",lazy:""},{default:c(()=>[a(ot)]),_:1}),a(C,{title:"Pairlist",lazy:""},{default:c(()=>[a(at)]),_:1}),a(C,{title:"Pair Locks",lazy:""},{default:c(()=>[a(nt)]),_:1})]),_:1})]),_:1})]),_:2},1040,["i","x","y","w","h"])):g("",!0),e(s).h!=0?(i(),x(F,E({key:1},N,{i:e(s).i,x:e(s).x,y:e(s).y,w:e(s).w,h:e(s).h,"drag-allow-from":".card-header"}),{default:c(()=>[a(A,{header:"Open Trades"},{default:c(()=>[a(K,{class:"open-trades",trades:e(t).activeBot.openTrades,title:"Open trades","active-trades":!0,"empty-text":"Currently no open trades."},null,8,["trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"])):g("",!0),e(o).h!=0?(i(),x(F,E({key:2},N,{i:e(o).i,x:e(o).x,y:e(o).y,w:e(o).w,h:e(o).h,"drag-allow-from":".card-header"}),{default:c(()=>[a(A,{header:"Closed Trades"},{default:c(()=>[a(K,{class:"trade-history",trades:e(t).activeBot.closedTrades,title:"Trade history","show-filter":!0,"empty-text":"No closed trades so far."},null,8,["trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"])):g("",!0),e(t).activeBot.detailTradeId&&e(t).activeBot.tradeDetail&&e(m).h!=0?(i(),x(F,E({key:3},N,{i:e(m).i,x:e(m).x,y:e(m).y,w:e(m).w,h:e(m).h,"min-h":4,"drag-allow-from":".card-header"}),{default:c(()=>[a(A,{header:"Trade Detail"},{default:c(()=>[a(st,{trade:e(t).activeBot.tradeDetail,"stake-currency":e(t).activeBot.stakeCurrency},null,8,["trade","stake-currency"])]),_:1})]),_:2},1040,["i","x","y","w","h"])):g("",!0),e(m).h!=0?(i(),x(F,E({key:4},N,{i:e(p).i,x:e(p).x,y:e(p).y,w:e(p).w,h:e(p).h,"min-h":6,"drag-allow-from":".card-header"}),{default:c(()=>[a(A,{header:"Chart"},{default:c(()=>[a(it,{"available-pairs":e(t).activeBot.whitelist,"historic-view":!1,timeframe:e(t).activeBot.timeframe,trades:e(t).activeBot.allTrades},null,8,["available-pairs","timeframe","trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"])):g("",!0)]),_:1},8,["layout","responsive-layouts","is-resizable","is-draggable"])}}});export{Ne as default};
//# sourceMappingURL=TradingView-CblKqcHF.js.map