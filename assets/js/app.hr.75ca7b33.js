(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app.hr"],{"0f8f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"arkn-hr"}},[a("div",{staticClass:"mdui-row"},[a("div",{staticClass:"mdui-col-xs-12"},[a("div",{class:!!t.$root.smallScreen&&"mdui-drawer mdui-drawer-right mdui-drawer-close",attrs:{id:"drawer"}},[a("table",{staticClass:"mdui-table tag-table"},[a("tbody",[a("tr",[t.$root.smallScreen?t._e():a("td",{attrs:{width:"1"}},[a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.$root.color.tagBtnHead,expression:"$root.color.tagBtnHead"}],staticClass:"mdui-btn mdui-btn-dense no-pe tag-btn tag-table-header"},[t._v(t._s(t.$t("common.stars")))])]),a("td",[a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.allStar?t.color.selected:t.color.notSelected,expression:"allStar ? color.selected : color.notSelected"}],staticClass:"mdui-btn mdui-btn-dense mdui-ripple tag-btn",on:{click:function(e){t.selected.star=t.l.fill(Array(t.selected.star.length),!t.allStar)}}},[t._v(t._s(t.$t("common.selectAll")))]),t._l(6,(function(e){return a("tag-button",{directives:[{name:"show",rawName:"v-show",value:!(6-e<2&&t.setting.hide12),expression:"!(6 - i < 2 && setting.hide12)"}],key:"star-"+(7-e),attrs:{notSelectedColor:t.color.notSelected,selectedColor:t.color[7-e]},model:{value:t.selected.star[6-e],callback:function(a){t.$set(t.selected.star,6-e,a)},expression:"selected.star[6 - i]"}},[t._v(t._s(7-e)+"★")])}))],2)]),t._l(t.tagList.sort,(function(e){return a("tr",{key:e},[t.$root.smallScreen?t._e():a("td",{attrs:{width:"1"}},[a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.$root.color.tagBtnHead,expression:"$root.color.tagBtnHead"}],staticClass:"mdui-btn mdui-btn-dense no-pe tag-btn tag-table-header"},[t._v(t._s(t.$t("hr.tagType."+e)))])]),a("td",t._l(t.tagList[e],(function(r){return a("tag-button",{key:e+"-"+r,attrs:{notSelectedColor:t.color.notSelected,selectedColor:t.color.selected},model:{value:t.selected.tag[r],callback:function(e){t.$set(t.selected.tag,r,e)},expression:"selected.tag[tag]"}},[t._v(t._s(t.$t("tag."+r)))])})),1)])})),a("tr",[t.$root.smallScreen?t._e():a("td",{attrs:{width:"1"}},[a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.$root.color.tagBtnHead,expression:"$root.color.tagBtnHead"}],staticClass:"mdui-btn mdui-btn-dense no-pe tag-btn tag-table-header"},[t._v(t._s(t.$t("common.setting")))])]),a("td",[t._l(t.settingList,(function(e){return a("mdui-switch",{key:e,model:{value:t.setting[e],callback:function(a){t.$set(t.setting,e,a)},expression:"setting[key]"}},[t._v(t._s(t.$t("hr.setting."+e)))])})),t.$root.localeNotCN?a("mdui-switch",{staticClass:"mdui-m-r-2",model:{value:t.setting.showNotImplemented,callback:function(e){t.$set(t.setting,"showNotImplemented",e)},expression:"setting.showNotImplemented"}},[t._v(t._s(t.$t("hr.setting.showNotImplemented")))]):t._e()],2)]),a("tr",[t.$root.smallScreen?t._e():a("td",{attrs:{width:"1"}},[a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.$root.color.tagBtnHead,expression:"$root.color.tagBtnHead"}],staticClass:"mdui-btn mdui-btn-dense no-pe tag-btn tag-table-header"},[t._v(t._s(t.$t("common.option")))])]),a("td",[a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.$root.color.redBtn,expression:"$root.color.redBtn"}],staticClass:"mdui-btn mdui-ripple mdui-btn-dense tag-btn",on:{click:t.reset}},[t._v(t._s(t.$t("common.reset")))]),a("label",{directives:[{name:"theme-class",rawName:"v-theme-class",value:["mdui-color-purple","mdui-color-purple-a100 mdui-ripple-black"],expression:"['mdui-color-purple', 'mdui-color-purple-a100 mdui-ripple-black']"}],staticClass:"mdui-btn mdui-ripple mdui-btn-dense tag-btn",attrs:{for:"image-select","mdui-tooltip":"{content:'"+t.$t("hr.ocr.tip")+"',position:'top'}"},on:{dragover:function(t){t.preventDefault()},drop:function(e){return e.preventDefault(),function(e){return t.tagImg=e.dataTransfer.files[0]}(e)}}},[t._v(t._s(t.$t("hr.ocr.button"))+" ("+t._s(t.$root.localeName)+")")]),a("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",id:"image-select",accept:"image/*"},on:{change:function(e){t.tagImg=t.$refs.image.files[0]}}}),a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:["mdui-color-blue-600","mdui-color-blue-200 mdui-ripple-black"],expression:"['mdui-color-blue-600', 'mdui-color-blue-200 mdui-ripple-black']"}],staticClass:"mdui-btn mdui-ripple mdui-btn-dense tag-btn",on:{click:function(e){t.reset(),t.$nextTick((function(){return t.showGuarantees=!0}))}}},[t._v(t._s(t.$t("hr.showBaoDi")))])])])],2)])])])]),t.selected.tag[t.enumTagZh.高级资深干员]||t.selected.tag[t.enumTagZh.资深干员]||t.selected.tag[t.enumTagZh.支援机械]?a("div",{staticClass:"mdui-chip-group",class:t.$root.smallScreen?"mdui-m-t-1":"mdui-m-t-4"},[t.selected.tag[t.enumTagZh.高级资深干员]||t.selected.tag[t.enumTagZh.资深干员]?a("div",{staticClass:"mdui-chip"},[t._m(0),a("span",{staticClass:"mdui-chip-title mdui-text-truncate",style:t.$root.screenWidth<360&&"font-size:12px"},[t._v(t._s(t.$t("hr.tip.rare")))])]):t._e(),t.selected.tag[t.enumTagZh.支援机械]?a("div",{staticClass:"mdui-chip"},[t._m(1),a("span",{staticClass:"mdui-chip-title mdui-text-truncate",style:t.$root.screenWidth<360&&"font-size:12px"},[t._v(t._s(t.$t("hr.tip.robot")))])]):t._e()]):t._e(),a("div",{class:"mdui-row "+(t.$root.smallScreen?"":"mdui-m-t-4")},[a("div",{staticClass:"mdui-col-xs-12"},[t.$root.smallScreen?a("div",{staticClass:"comb-small"},[a("table",{staticClass:"mdui-table comb-table mdui-shadow-0 no-border"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("hr.table.header.tag")))]),a("th",[t._v(t._s(t.$t("hr.table.header.possibility")))])])]),a("tbody",[t._l(t.combinations,(function(e,r){return[a("tr",{key:"comb-"+r+"-tr1"},[a("td",{staticClass:"mdui-p-b-0 no-border",attrs:{colspan:"2"}},t._l(e.tags,(function(e){return a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.color.selected,expression:"color.selected"}],key:"comb-"+r+"-"+e,staticClass:"mdui-btn mdui-btn-dense no-pe tag-btn"},[t._v(t._s(t.$t("tag."+e)))])})),0)]),a("tr",{key:"comb-"+r+"-tr2"},[a("td",{attrs:{colspan:"2"}},t._l(e.chars,(function(e){return a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.color[e.star],expression:"color[char.star]"}],key:"comb-"+r+"-"+e.name,staticClass:"mdui-btn mdui-btn-dense tag-btn",attrs:{"has-avatar":t.setting.showAvatar},on:{click:function(a){return t.showDetail(e)}}},[t.isPub(e.recruitment)?t._e():a("div",{staticClass:"tag-triangle"}),t.setting.showAvatar?a("img",{staticClass:"tag-avatar no-pe",attrs:{src:t.$root.avatar(e.name),crossorigin:"anonymous"}}):t._e(),a("span",[t._v(t._s(t.$t("character."+e.name)))])])})),0)])]})),0==t.combinations.length?a("tr",[a("td",{staticClass:"no-border",attrs:{colspan:"2"}},[t._v(t._s(t.$t("hr.table.selectTip")))])]):t._e()],2)])]):a("div",{staticClass:"comb-large"},[a("table",{staticClass:"mdui-table mdui-table-hoverable comb-table"},[a("thead",[a("tr",{class:{"tbody-is-empty":!t.combinations.length}},[a("th",{staticClass:"mdui-table-col-numeric",attrs:{width:"1"}},[t._v("#")]),a("th",{attrs:{width:"20%"}},[t._v(t._s(t.$t("hr.table.header.tag")))]),a("th",{staticClass:"mdui-text-center",attrs:{width:"1"}},[t._v(t._s(t.$t("hr.table.header.minRarity")))]),a("th",{attrs:{width:"80%"}},[t._v(t._s(t.$t("hr.table.header.possibility")))])])]),a("tbody",t._l(t.combinations,(function(e,r){return a("tr",{key:"comb-"+r},[a("td",[t._v(t._s(r+1))]),a("td",t._l(e.tags,(function(e){return a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.color.selected,expression:"color.selected"}],key:"comb-"+r+"-"+e,staticClass:"mdui-btn mdui-btn-dense no-pe tag-btn"},[t._v(t._s(t.$t("tag."+e)))])})),0),a("td",[a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.color[e.min],expression:"color[comb.min]"}],staticClass:"mdui-btn mdui-btn-dense no-pe tag-btn"},[t._v(t._s(e.min)+"★")])]),a("td",t._l(e.chars,(function(e){return a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.color[e.star],expression:"color[char.star]"}],key:"comb-"+r+"-"+e.name,staticClass:"mdui-btn mdui-btn-dense tag-btn",attrs:{"has-avatar":t.setting.showAvatar},on:{click:function(a){return t.showDetail(e)}}},[t.isPub(e.recruitment)?t._e():a("div",{staticClass:"tag-triangle"}),t.setting.showAvatar?a("img",{staticClass:"tag-avatar no-pe",attrs:{src:t.$root.avatar(e.name),crossorigin:"anonymous"}}):t._e(),a("span",[t._v(t._s(t.$t("character."+e.name)))])])})),0)])})),0)])])])]),a("div",{staticClass:"mdui-dialog mdui-card",attrs:{id:"detail"}},[t.detail?a("div",{staticClass:"mdui-card-header mdui-p-b-0"},[a("img",{key:"di-"+t.detail.name,staticClass:"mdui-card-header-avatar no-pe",attrs:{src:t.$root.avatar(t.detail.name),crossorigin:"anonymous"}}),a("div",{staticClass:"mdui-card-header-title mdui-m-t-1"},[a("span",[t._v(t._s(t.$t("character."+t.detail.name)))]),a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.color[t.detail.star],expression:"color[detail.star]"}],staticClass:"mdui-btn mdui-btn-dense no-pe tag-btn mdui-m-y-0 mdui-m-l-1"},[t._v(t._s(t.detail.star)+"★")])]),a("div",{staticClass:"detail-tags mdui-m-t-1"},t._l([t.detail.profession,t.detail.position].concat(t.detail.tags),(function(e){return a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.selected.tag[e]?t.color.selected:t.color.notSelected,expression:"selected.tag[tag] ? color.selected : color.notSelected"}],key:"detail-"+e,staticClass:"mdui-btn mdui-btn-dense no-pe tag-btn"},[t._v(t._s(t.$t("tag."+e)))])})),0)]):t._e(),a("div",{staticClass:"mdui-dialog-actions"},[a("a",{directives:[{name:"theme-class",rawName:"v-theme-class",value:["mdui-color-teal","mdui-color-teal-300 mdui-ripple-black"],expression:"['mdui-color-teal', 'mdui-color-teal-300 mdui-ripple-black']"}],staticClass:"mdui-btn mdui-ripple",attrs:{href:t.$root.getWikiHref(t.detail),target:"_blank"}},[t._v(t._s(t.$t("common.viewOnWiki")))]),a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:["mdui-color-pink","mdui-color-indigo-a100 mdui-ripple-black"],expression:"['mdui-color-pink', 'mdui-color-indigo-a100 mdui-ripple-black']"}],staticClass:"mdui-btn mdui-ripple mdui-color-pink",attrs:{"mdui-dialog-close":""}},[t._v(t._s(t.$t("common.close")))])])]),t.$root.smallScreen?a("button",{directives:[{name:"theme-class",rawName:"v-theme-class",value:t.$root.color.pinkBtn,expression:"$root.color.pinkBtn"}],staticClass:"mdui-fab mdui-fab-fixed mdui-fab-mini mdui-ripple",on:{click:function(e){!t.drawer&&(t.drawer=new t.$Drawer("#drawer")),t.drawer.toggle()}}},[a("i",{staticClass:"mdui-icon material-icons"},[t._v("sort")])]):t._e()])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"mdui-chip-icon mdui-color-red"},[a("i",{staticClass:"mdui-icon material-icons"},[t._v("priority_high")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"mdui-chip-icon mdui-color-red"},[a("i",{staticClass:"mdui-icon material-icons"},[t._v("priority_high")])])}],n=(a("99af"),a("a623"),a("cb29"),a("4de4"),a("5db7"),a("4160"),a("a630"),a("caad"),a("d81d"),a("13d5"),a("45fc"),a("73d9"),a("b0c0"),a("dca8"),a("d3b7"),a("4d63"),a("ac1f"),a("25f0"),a("6062"),a("2532"),a("3ca3"),a("5319"),a("1276"),a("2ca0"),a("159b"),a("ddb0"),a("96cf"),a("1da1")),i=a("3835"),o=a("2909"),c=a("b85c"),l=a("ade3"),u=a("5530"),d=(a("3b4e"),a("60bb")),m=a.n(d),h=a("ab3e"),p=a("6a80"),g=a("193e"),b=m.a.mapValues(m.a.invert(g),parseInt);Object.freeze(b);var v={name:"arkn-hr",data:function(){var t;return{l:m.a,showAll:!1,character:p,hr:m.a.transform(p,(function(t,e,a){t.push(Object(u["a"])({name:a},e))}),[]),enumTagZh:b,tags:(t={},Object(l["a"])(t,b.资深干员,[]),Object(l["a"])(t,b.高级资深干员,[]),t),selected:{star:m.a.fill(Array(6),!0),tag:{}},setting:{showAvatar:!1,hide12:!1,showPrivate:!1,showNotImplemented:!1},settingList:["showAvatar","hide12","showPrivate"],avgCharTag:0,tagList:{locations:[b.近战位,b.远程位],credentials:[b.新手,b.资深干员,b.高级资深干员],professions:Array(8).fill(null).map((function(t,e){return e+1})),abilities:new Set,sort:["credentials","locations","professions","abilities"]},color:{notSelected:["mdui-color-brown-300 mdui-ripple-black","mdui-color-grey-800"],selected:["mdui-color-grey-800","mdui-color-brown-100 mdui-ripple-black"],6:["mdui-color-red-700","mdui-color-red-200 mdui-ripple-black"],5:["mdui-color-orange-900","mdui-color-orange-200 mdui-ripple-black"],4:["mdui-color-cyan-700","mdui-color-cyan-200 mdui-ripple-black"],3:["mdui-color-green-700","mdui-color-green-200 mdui-ripple-black"],2:["mdui-color-brown-700","mdui-color-brown-200 mdui-ripple-black"],1:["mdui-color-grey-700","mdui-color-grey-200 mdui-ripple-black"]},detail:!1,drawer:!1,tagImg:!1,tagsCache:[],showGuarantees:!1}},watch:{"selected.tag":{handler:function(){this.showGuarantees=!1;var t=m.a.flatMap(this.selected.tag,(function(t,e){return t?[e]:[]}));if(t.length>6){for(var e in new this.$alert(this.$t("hr.tagOverLimit"),null,null,{confirmText:this.$t("common.okay"),history:!1}),this.selected.tag)this.selected.tag[e]=this.tagsCache.includes(e);t=this.tagsCache}else this.tagsCache=t},deep:!0},setting:{handler:function(t){localStorage.setItem("hr.setting",JSON.stringify(t))},deep:!0},tagImg:function(t){this.canUsePrivateOCR?this.privateOCR(t):this.OCR(t)}},computed:{canUsePrivateOCR:function(){return!0},allStar:function(){return m.a.sum(this.selected.star)==this.selected.star.length},combinations:function(){var t=this;if(this.showGuarantees)return this.guarantees;var e,a=m.a.flatMap(this.selected.tag,(function(t,e){return t?[e]:[]})),r=m.a.flatMap(this.selected.star,(function(t,e){return t?[e+1]:[]})),s=m.a.flatMap([1,2,3],(function(t){return m.a.combinations(a,t)})).map((function(t){return t.map((function(t){return parseInt(t)}))})),n=[],i=Object(c["a"])(s);try{for(i.s();!(e=i.n()).done;){var o,l=e.value,u=[],d=Object(c["a"])(l);try{for(d.s();!(o=d.n()).done;){var h=o.value;u.push(this.tags[h])}}catch(w){d.e(w)}finally{d.f()}this.setting.showPrivate||u.push(this.pubs);var p=m.a.intersection.apply(m.a,u);if(l.includes(b.高级资深干员)||m.a.remove(p,(function(t){var e=t.star;return 6===e})),this.setting.showNotImplemented||m.a.remove(p,(function(e){var a=e.name;return!t.$root.isImplementedChar(a)})),0!=p.length){var g=m.a.filter(p,(function(t){var e=t.star;return e>=3}));0==g.length&&(g=p);var v=m.a.sumBy(g,(function(t){var e=t.star;return e}))/g.length-l.length/10-g.length/this.avgCharTag,f=m.a.minBy(g,(function(e){var a=e.recruitment,r=e.star;return t.isPub(a)?r:1/0}));m.a.remove(p,(function(t){var e=t.star;return!r.includes(e)})),this.setting.hide12&&m.a.remove(p,(function(t){var e=t.star;return e<3})),0!=p.length&&n.push({tags:l,chars:p,min:f.star,score:v})}}}catch(w){i.e(w)}finally{i.f()}return n.sort((function(t,e){return t.min==e.min?e.score-t.score:e.min-t.min})),this.$root.nm=n.some((function(t){var e=t.min;return e>=5})),n},guarantees:function(){var t,e=this,a=[],r=m.a.flatMap([1,2,3],(function(t){return m.a.combinations([].concat(Object(o["a"])(e.tagList.professions),Object(o["a"])(e.tagList.abilities),Object(o["a"])(e.tagList.locations)),t)})),s=Object(c["a"])(r);try{var n=function(){var r,s=t.value,n=[e.pubs],i=Object(c["a"])(s);try{for(i.s();!(r=i.n()).done;){var o=r.value;n.push(e.tags[o])}}catch(d){i.e(d)}finally{i.f()}var l=m.a.intersection.apply(m.a,n).filter((function(t){var e=t.star;return 3<=e&&e<6}));if(0==l.length)return"continue";var u=m.a.min(l.map((function(t){var e=t.star;return e})));return u<4||a.some((function(t){var e=t.tags,a=t.min;return a===u&&e.every((function(t){return s.includes(t)}))}))?"continue":void a.push({tags:s,min:u,chars:l})};for(s.s();!(t=s.n()).done;)n()}catch(l){s.e(l)}finally{s.f()}return a.sort((function(t,e){for(var a=0,r=[["tags.length",1],["min",-1]];a<r.length;a++){var s=Object(i["a"])(r[a],2),n=s[0],o=s[1],c=o*(m.a.at(t,n)-m.a.at(e,n));if(0!=c)return c}return 0}))},pubs:function(){var t=this;return this.hr.filter((function(e){var a=e.recruitment;return t.isPub(a)}))},enumTag:function(){return m.a.mapValues(m.a.invert(this.$root.localeMessages.tag),parseInt)}},methods:{reset:function(){for(var t in this.showGuarantees=!1,this.selected.star=m.a.fill(Array(this.selected.star.length),!0),this.selected.tag)this.selected.tag[t]=!1},showDetail:function(t){var e=this;this.detail=t,this.$nextTick((function(){return new e.$Dialog("#detail",{history:!1}).open()}))},privateOCR:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,s,n,i,o,l,u,d,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.$snackbar,r(e.$t("hr.ocr.processing")),a.next=4,h["a"].tagOCR(t).catch((function(t){return{code:-1,msg:t}}));case 4:if(s=a.sent,n=s.code,i=s.msg,o=s.words,0===n){a.next=11;break}return r({message:"".concat(e.$t("hr.ocr.uploadError")).concat(i),timeout:0,buttonText:e.$t("common.retry"),onButtonClick:function(){return e.ocr(t)}}),a.abrupt("return");case 11:e.reset(),console.log("OCR",JSON.stringify(o)),l=0,u=Object(c["a"])(o),a.prev=15,u.s();case 17:if((d=u.n()).done){a.next=27;break}if(m=d.value,!(m in e.enumTag)){a.next=25;break}if(l++,!(l>6)){a.next=24;break}return r(e.$t("hr.ocr.tagOverLimit")),a.abrupt("return");case 24:e.selected.tag[e.enumTag[m]]=!0;case 25:a.next=17;break;case 27:a.next=32;break;case 29:a.prev=29,a.t0=a["catch"](15),u.e(a.t0);case 32:return a.prev=32,u.f(),a.finish(32);case 35:case"end":return a.stop()}}),a,null,[[15,29,32,35]])})))()},OCR:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,s,n,i,o,l,u,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r={zh:"chs",en:"eng",ja:"jpn",ko:"kor"},e.$snackbar(e.$t("hr.ocr.processing")),a.next=4,h["a"].ocrspace({file:t,language:r[e.$root.locale],scale:!0}).catch((function(t){return{IsErroredOnProcessing:!0,ErrorMessage:t}}));case 4:if(s=a.sent,!s.IsErroredOnProcessing){a.next=8;break}return e.$snackbar({message:"".concat(e.$t("hr.ocr.error")).concat(s.ErrorMessage),timeout:0,buttonText:e.$t("common.retry"),onButtonClick:function(){return e.ocr(t)}}),a.abrupt("return");case 8:e.reset(),n={"千员":"干员","滅速":"減速"},i=m.a.reduce(n,(function(t,e,a){return t.replace(new RegExp(a,"g"),e)}),s.ParsedResults[0].ParsedText).split(/[\r\n]+/),console.log("OCR",JSON.stringify(i)),o=0,l=Object(c["a"])(i),a.prev=14,l.s();case 16:if((u=l.n()).done){a.next=26;break}if(d=u.value,!d.length||!(d in e.enumTag)){a.next=24;break}if(o++,!(o>6)){a.next=23;break}return e.$snackbar(e.$t("hr.ocr.tagOverLimit")),a.abrupt("return");case 23:e.selected.tag[e.enumTag[d]]=!0;case 24:a.next=16;break;case 26:a.next=31;break;case 28:a.prev=28,a.t0=a["catch"](14),l.e(a.t0);case 31:return a.prev=31,l.f(),a.finish(31);case 34:case"end":return a.stop()}}),a,null,[[14,28,31,34]])})))()},isPub:function(t){return t.includes(this.$root.localeEnum[this.$root.locale])},detectPaste:function(t){var e=this,a=t.ctrlKey,r=t.altKey,s=t.keyCode;86===s&&(a||navigator&&"platform"in navigator&&navigator.platform.startsWith("Mac")&&r)&&this.pasteImgToOCR().catch((function(t){console.warn(t),"DataError"===t.name&&e.$snackbar({message:e.$t("hr.ocr.pasteDataError"),timeout:6e3})}))},pasteImgToOCR:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,s,n,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$requestClipboardPermission("clipboard-read");case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,navigator.clipboard.read();case 6:a=e.sent,r=Object(c["a"])(a),e.prev=8,r.s();case 10:if((s=r.n()).done){e.next=20;break}if(n=s.value,i=n.types.filter((function(t){return t.startsWith("image/")})),!(i.length>0)){e.next=18;break}return e.next=16,n.getType(i[0]);case 16:o=e.sent,t.tagImg=new File([o],"recruitment-".concat(Date.now(),".").concat(m.a.last(i[0].split("/"))),{type:i[0]});case 18:e.next=10;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](8),r.e(e.t0);case 25:return e.prev=25,r.f(),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[8,22,25,28]])})))()}},created:function(){var t=this;this.hr.sort((function(t,e){return e.star-t.star}));var e=0;this.hr.forEach((function(a){var r,s=a.tags,n=a.profession,i=a.position,l=a.star,u=Object(c["a"])(s);try{for(u.s();!(r=u.n()).done;){var d=r.value;d!==b.新手&&t.tagList.abilities.add(d)}}catch(g){u.e(g)}finally{u.f()}switch(l){case 5:t.tags[b.资深干员].push(a);break;case 6:t.tags[b.高级资深干员].push(a);break}for(var m=0,h=[].concat(Object(o["a"])(s),[n,i]);m<h.length;m++){var p=h[m];t.tags[p]||(t.tags[p]=[]),t.tags[p].push(a)}e+=s.length+2}));var a=m.a.size(this.tags);this.avgCharTag=e/a,this.tagList.abilities=Array.from(this.tagList.abilities).sort(),this.selected.tag=m.a.mapValues(this.tags,(function(){return!1}));var r=localStorage.getItem("hr.setting");r&&(this.setting=m.a.assign({},this.setting,m.a.pick(JSON.parse(r),m.a.keys(this.setting)))),this.$$(window).on("keydown",this.detectPaste)},beforeDestroy:function(){this.$$(window).off("keydown",this.detectPaste)}},f=v,w=(a("ac61"),a("2877")),_=Object(w["a"])(f,r,s,!1,null,null,null);e["default"]=_.exports},"6cb4":function(t,e,a){},ab3e:function(t,e,a){"use strict";a("d3b7"),a("ac1f"),a("5319"),a("1276");var r=a("5530"),s=a("c579"),n=a.n(s),i=a("60bb"),o=a.n(i),c=n.a.JQ.ajax,l=function(t){return new Promise((function(e,a){c(Object(r["a"])(Object(r["a"])({},t),{},{success:function(t){return e(t)},error:function(t,e){return a(e||"Network error")}}))}))};e["a"]={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return l({method:"GET",url:t,dataType:e?"json":"text"})},tagOCR:function(t){return new Promise((function(e,a){var r=new FileReader;r.onloadend=function(){return l({method:"POST",url:"https://arkn-api.lolicon.app/ocr",processData:!1,data:r.result.replace(/^data:.+;base64,/,""),dataType:"json",contentType:"text/plain"}).then(e).catch(a)},r.onerror=a,r.readAsDataURL(t)}))},ocrspace:function(t){var e=new FormData;return o.a.each(t,(function(t,a){return e.append(a,t)})),l({method:"POST",url:"https://api.ocr.space/parse/image",processData:!1,data:e,dataType:"json",contentType:!1,headers:{apikey:"helloworld"}})},createJson:function(t){return l({method:"POST",url:"https://jsonstorage.net/api/items",processData:!1,data:JSON.stringify(t),dataType:"json",contentType:"application/json"}).then((function(t){var e=t.uri;return o.a.last(e.split("/"))}))},getJson:function(t){return l({method:"GET",url:"https://jsonstorage.net/api/items/".concat(t),dataType:"json",contentType:"application/json"})},updateJson:function(t,e){return l({method:"PUT",url:"https://jsonstorage.net/api/items/".concat(t),processData:!1,data:JSON.stringify(e),dataType:"json",contentType:"application/json"})}}},ac61:function(t,e,a){"use strict";var r=a("6cb4"),s=a.n(r);s.a}}]);