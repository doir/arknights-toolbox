(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hr"],{"0f8f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:!!t.smallScreen&&"mobile-screen"},[t.ready?[s("div",{staticClass:"mdui-row"},[s("div",{staticClass:"mdui-col-xs-12"},[s("div",{class:t.smallScreen?"mdui-drawer mdui-drawer-right mdui-drawer-close":"mdui-m-t-4",attrs:{id:"drawer"}},[s("table",{staticClass:"mdui-table tag-table"},[s("tbody",[s("tr",[t.smallScreen?t._e():s("td",{attrs:{width:"1"}},[s("button",{staticClass:"mdui-btn mdui-btn-dense mdui-color-teal no-pe tag-btn"},[t._v("星级")])]),s("td",{attrs:{colspan:!!t.smallScreen&&2}},[t.smallScreen?s("label",{staticClass:"mdui-textfield-label"},[t._v("星级")]):t._e(),s("button",{class:"mdui-btn mdui-btn-dense mdui-ripple tag-btn "+(t.allStar?t.color.selected:t.color.notSelected),on:{click:function(e){t.selected.star=t.l.fill(Array(t.selected.star.length),!t.allStar)}}},[t._v("全选")]),t._l(6,function(e){return s("tag-button",{key:"star-"+(7-e),attrs:{notSelectedColor:t.color.notSelected,selectedColor:t.color[7-e]},model:{value:t.selected.star[6-e],callback:function(s){t.$set(t.selected.star,6-e,s)},expression:"selected.star[6-i]"}},[t._v(t._s(7-e)+"★")])})],2)]),t._l(t.tagList.sort,function(e){return s("tr",{key:e.en},[t.smallScreen?t._e():s("td",[s("button",{staticClass:"mdui-btn mdui-btn-dense mdui-color-teal no-pe tag-btn"},[t._v(t._s(e.zh))])]),s("td",{attrs:{colspan:!!t.smallScreen&&2}},[t.smallScreen?s("label",{staticClass:"mdui-textfield-label"},[t._v(t._s(e.zh))]):t._e(),t._l(t.tagList[e.en],function(e){return s("tag-button",{key:e,attrs:{notSelectedColor:t.color.notSelected,selectedColor:t.color.selected},on:{"!click":function(e){return t.test(e)}},model:{value:t.selected.tag[e],callback:function(s){t.$set(t.selected.tag,e,s)},expression:"selected.tag[tag]"}},[t._v(t._s(e))])})],2)])}),s("tr",[t.smallScreen?t._e():s("td",{attrs:{width:"1"}},[s("label",{staticClass:"mdui-textfield-label",staticStyle:{opacity:"0"}},[t._v("_")]),s("button",{staticClass:"mdui-btn mdui-btn-dense mdui-color-red tag-btn",on:{click:t.reset}},[t._v("重置")])]),s("td",{attrs:{colspan:!!t.smallScreen&&2}},[s("label",{staticClass:"mdui-textfield-label"},[t._v("设置项（这些设置会被永久保存）")]),t._l(t.settingZh,function(e,a){return s("mdui-switch",{key:a,model:{value:t.setting[a],callback:function(e){t.$set(t.setting,a,e)},expression:"setting[en]"}},[t._v(t._s(e))])})],2)]),t.smallScreen?s("tr",[s("td",{attrs:{colspan:"2"}},[s("button",{staticClass:"mdui-btn mdui-btn-dense mdui-color-red tag-btn",on:{click:t.reset}},[t._v("重置")])])]):t._e()],2)])])])]),t.selected.tag["高级资深干员"]?s("div",{staticClass:"mdui-chip mdui-m-t-4"},[t._m(0),s("span",{staticClass:"mdui-chip-title mdui-text-truncate",style:t.$root.screenWidth<360&&"font-size:12px"},[t._v("请拉满 9 个小时以保证“高级资深干员”不被划掉")])]):t._e(),s("div",{staticClass:"mdui-row mdui-m-t-4"},[s("div",{staticClass:"mdui-col-xs-12"},[t.smallScreen?s("div",{staticClass:"comb-small"},[s("table",{staticClass:"mdui-table comb-table mdui-shadow-0 no-border"},[t._m(2),s("tbody",[t._l(t.combinations,function(e,a){return[s("tr",{key:"comb-"+a+"-tr1"},[s("td",{staticClass:"mdui-p-b-0 no-border",attrs:{colspan:"2"}},t._l(e.tags,function(e){return s("button",{key:"comb-"+a+"-"+e,class:"mdui-btn mdui-btn-dense no-pe tag-btn "+t.color.selected},[t._v(t._s(e))])}),0)]),s("tr",{key:"comb-"+a+"-tr2"},[s("td",{attrs:{colspan:"2"}},t._l(e.chars,function(e){return s("button",{key:"comb-"+a+"-"+e,class:"mdui-btn mdui-btn-dense tag-btn "+t.color[t.hr[e].star],attrs:{"has-avatar":t.setting.showAvatar},on:{click:function(s){return t.showDetail(e)}}},[t.setting.showAvatar?s("img",{staticClass:"tag-avatar",attrs:{src:t.hr[e].img}}):t._e(),t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.hr[e].name)+"\n\t\t\t\t\t\t\t\t\t\t")])}),0)])]}),0==t.combinations.length?s("tr",[s("td",{staticClass:"no-border",attrs:{colspan:"2"}},[t._v("请点击右下角的按钮选择词条")])]):t._e()],2)])]):s("div",{staticClass:"comb-large"},[s("table",{staticClass:"mdui-table mdui-table-hoverable comb-table"},[t._m(1),s("tbody",t._l(t.combinations,function(e,a){return s("tr",{key:"comb-"+a},[s("td",[t._v(t._s(a+1))]),s("td",t._l(e.tags,function(e){return s("button",{key:"comb-"+a+"-"+e,class:"mdui-btn mdui-btn-dense no-pe tag-btn "+t.color.selected},[t._v(t._s(e))])}),0),s("td",[s("button",{class:"mdui-btn mdui-btn-dense no-pe tag-btn "+t.color[e.min]},[t._v(t._s(e.min)+"★")])]),s("td",t._l(e.chars,function(e){return s("button",{key:"comb-"+a+"-"+e,class:"mdui-btn mdui-btn-dense tag-btn "+t.color[t.hr[e].star],attrs:{"has-avatar":t.setting.showAvatar},on:{click:function(s){return t.showDetail(e)}}},[t.setting.showAvatar?s("img",{staticClass:"tag-avatar",attrs:{src:t.hr[e].img}}):t._e(),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.hr[e].name)+"\n\t\t\t\t\t\t\t\t\t")])}),0)])}),0)])])])]),s("div",{staticClass:"mdui-dialog mdui-card",attrs:{id:"detail"}},[s("div",{staticClass:"mdui-card-header mdui-p-b-0"},[s("img",{staticClass:"mdui-card-header-avatar",attrs:{src:t.detail.img}}),s("div",{staticClass:"mdui-card-header-title"},[s("span",[t._v(t._s(t.detail.name))]),s("button",{class:"mdui-btn mdui-btn-dense no-pe tag-btn mdui-m-l-1 mdui-m-y-0 "+t.color.selected},[t._v(t._s(t.detail.job))]),s("button",{class:"mdui-btn mdui-btn-dense no-pe tag-btn mdui-m-y-0 "+t.color[t.detail.star]},[t._v(t._s(t.detail.star)+"★")])]),s("div",{staticClass:"mdui-card-header-subtitle"},[t._v(t._s(t.detail.characteristic))]),s("div",{staticClass:"detail-tags"},t._l(t.detail.tags,function(e){return s("button",{key:"detail-"+e,class:"mdui-btn mdui-btn-dense no-pe tag-btn "+(t.selected.tag[e]?t.color.selected:t.color.notSelected)},[t._v(t._s(e))])}),0)]),s("div",{staticClass:"mdui-dialog-actions"},[s("a",{staticClass:"mdui-btn mdui-ripple mdui-color-teal",attrs:{href:"http://wiki.joyme.com"+t.detail.link,target:"_blank"}},[t._v("在 Wiki 查看")]),s("button",{staticClass:"mdui-btn mdui-ripple mdui-color-pink",attrs:{"mdui-dialog-close":""}},[t._v("关闭")])])]),t.smallScreen?s("button",{staticClass:"mdui-fab mdui-fab-fixed mdui-fab-mini mdui-color-pink-accent mdui-ripple",staticStyle:{"z-index":"10000"},on:{click:function(e){!t.drawer&&(t.drawer=new t.$root.Mdui.Drawer("#drawer")),t.drawer.toggle()}}},[s("i",{staticClass:"mdui-icon material-icons"},[t._v("sort")])]):t._e()]:s("mdui-progress")],2)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"mdui-chip-icon mdui-color-red"},[s("i",{staticClass:"mdui-icon material-icons"},[t._v("priority_high")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"mdui-table-col-numeric",attrs:{width:"1"}},[t._v("#")]),s("th",{attrs:{width:"20%"}},[t._v("词条")]),s("th",{staticClass:"mdui-text-center",attrs:{width:"1"}},[t._v("可保底")]),s("th",{attrs:{width:"80%"}},[t._v("可能出现（点击干员查看详细信息）")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("词条")]),s("th",[t._v("可能出现（点击干员查看详情）")])])])}],n=s("1da1"),l=(s("55dd"),s("ac6a"),s("a0b3")),r=(s("3b4e"),s("2ef0")),c=s.n(r);let o=[];var d={name:"arkn-hr",data:()=>({l:c.a,ready:!1,showAll:!1,hr:[],tags:{"资深干员":[],"高级资深干员":[]},selected:{star:c.a.fill(Array(6),!0),tag:{}},setting:{showAvatar:!1,hide12:!1,hideSingleFemale:!1},settingZh:{showAvatar:"显示头像",hide12:"隐藏1★2★",hideSingleFemale:"隐藏单独的“女性干员”词条"},avgCharTag:0,tagList:{sex:["男性干员","女性干员"],location:["近战位","远程位"],credentials:["新手","资深干员","高级资深干员"],job:["先锋干员","狙击干员","医疗干员","术师干员","近卫干员","重装干员","辅助干员","特种干员"],features:new Set,sort:[{zh:"资质",en:"credentials"},{zh:"位置",en:"location"},{zh:"性别",en:"sex"},{zh:"职业",en:"job"},{zh:"特性",en:"features"}]},color:{notSelected:"mdui-color-brown-300",selected:"mdui-color-grey-800",6:"mdui-color-red-700",5:"mdui-color-orange-900",4:"mdui-color-cyan-700",3:"mdui-color-green-700",2:"mdui-color-brown-700",1:"mdui-color-grey-700"},detail:0,drawer:!1}),watch:{"selected.tag":{handler(){let t=c.a.flatMap(this.selected.tag,(t,e)=>t?[e]:[]);if(t.length>6){new this.$root.Mdui.alert("最多只能同时选择 6 个词条噢！",null,null,{confirmText:"好吧",history:!1});for(let t in this.selected.tag)this.selected.tag[t]=o.includes(t);t=o}else o=t},deep:!0},setting:{handler(t){localStorage.setItem("hr.setting",JSON.stringify(t))},deep:!0}},computed:{allStar(){return c.a.sum(this.selected.star)==this.selected.star.length},combinations(){let t=c.a.flatMap(this.selected.tag,(t,e)=>t?[e]:[]),e=c.a.flatMap(this.selected.star,(t,e)=>t?[e+1]:[]),s=c.a.flatMap([1,2,3],e=>c.a.combinations(t,e)),a=[];for(let i of s){if(this.setting.hideSingleFemale&&1==i.length&&"女性干员"==i[0])continue;let t=[];for(let e of i)t.push(this.tags[e]);let s=c.a.intersection(...t);if(i.includes("高级资深干员")||c.a.remove(s,t=>6==this.hr[t].star),0==s.length)continue;let n=c.a.filter(s,t=>this.hr[t].star>=3);0==n.length&&(n=s);let l=c.a.sumBy(n,t=>this.hr[t].star)/n.length-i.length/10-n.length/this.avgCharTag,r=c.a.minBy(n,t=>this.hr[t].star);c.a.remove(s,t=>!e.includes(this.hr[t].star)),this.setting.hide12&&c.a.remove(s,t=>this.hr[t].star<3),0!=s.length&&a.push({tags:i,chars:s,min:this.hr[r].star,score:l})}return a.sort((t,e)=>t.min==e.min?e.score-t.score:e.min-t.min),a},smallScreen(){return this.$root.screenWidth<=450}},methods:{reset(){this.selected.star=c.a.fill(Array(this.selected.star.length),!0);for(let t in this.selected.tag)this.selected.tag[t]=!1},showDetail(t){this.detail=this.hr[t],this.$root.$nextTick(()=>new this.$root.Mdui.Dialog("#detail",{history:!1}).open())}},created:function(){var t=Object(n["a"])(function*(){this.hr=yield l["a"].get("/data/hr.json"),this.hr.sort((t,e)=>e.star-t.star);let t=0;const e=this.tagList.location.concat(this.tagList.credentials);this.hr.forEach((s,a)=>{let i=s.pub,n=s.sex,l=s.tags,r=s.job,c=s.star;if(i){for(let t of l)e.includes(t)||this.tagList.features.add(t);switch(c){case 5:this.tags["资深干员"].push(a);break;case 6:this.tags["高级资深干员"].push(a);break}l.push(`${n}性干员`),l.push(`${r}干员`);for(let t of l)this.tags[t]||(this.tags[t]=[]),this.tags[t].push(a);t+=l.length}});let s=c.a.size(this.tags);this.avgCharTag=t/s,this.tagList.features=Array.from(this.tagList.features).sort((t,e)=>{return t.length==e.length?t.localeCompare(e):t.length-e.length});for(let i in this.tags)this.$set(this.selected.tag,i,!1);let a=localStorage.getItem("hr.setting");a&&(this.setting=JSON.parse(a)),this.ready=!0});function e(){return t.apply(this,arguments)}return e}()},u=d,m=(s("77a5"),s("2877")),h=Object(m["a"])(u,a,i,!1,null,null,null);e["default"]=h.exports},"2f21":function(t,e,s){"use strict";var a=s("79e5");t.exports=function(t,e){return!!t&&a(function(){e?t.call(null,function(){},1):t.call(null)})}},"3b4e":function(t,e,s){(function(t,e){e(s("2ef0"))})(0,function(t){"use strict";function e(t){var e=function(){for(var s=[],a=arguments.length;a--;)s[a]=arguments[a];return t.call.apply(t,[this,e].concat(s))};return e}t=t&&t.hasOwnProperty("default")?t["default"]:t,t.mixin({combinations:function(s,a){s=t.values(s);var i=[];return e(function(e,n,l){n.length<a?t.find(s,function(s,a){e(t.concat(n,[s]),a+1)},l):i.push(n)})([],0),i}})})},"3b81":function(t,e,s){},"55dd":function(t,e,s){"use strict";var a=s("5ca1"),i=s("d8e8"),n=s("4bf8"),l=s("79e5"),r=[].sort,c=[1,2,3];a(a.P+a.F*(l(function(){c.sort(void 0)})||!l(function(){c.sort(null)})||!s("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(n(this)):r.call(n(this),i(t))}})},"77a5":function(t,e,s){"use strict";var a=s("3b81"),i=s.n(a);i.a}}]);
//# sourceMappingURL=hr.d4a5d5aa.js.map