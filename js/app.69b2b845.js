(function(e){function t(t){for(var i,a,r=t[0],u=t[1],s=t[2],b=0,d=[];b<r.length;b++)a=r[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(i=!1)}i&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},c=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"43fa":function(e,t,n){"use strict";n("dde1")},"46fb":function(e,t,n){"use strict";n("6e63")},"4cf3":function(e,t,n){"use strict";n("c910")},"5b03":function(e,t,n){"use strict";n("bba4")},"6e63":function(e,t,n){},"82d3":function(e,t,n){"use strict";n("e573")},bba4:function(e,t,n){},c910:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23");function o(e,t,n,o,c,a){var r=Object(i["q"])("HomePage");return Object(i["k"])(),Object(i["c"])(r)}var c=n("bee2"),a=n("d4ec"),r=n("262e"),u=n("2caf"),s=n("9ab4"),l=n("ce1f"),b={key:0,class:"round"},d={key:1,class:"instructions"};function f(e,t,n,o,c,a){var r=Object(i["q"])("Round"),u=Object(i["q"])("Bomb"),s=Object(i["q"])("Settings"),l=Object(i["q"])("NewRound");return Object(i["k"])(),Object(i["e"])("div",{id:"home_page",style:Object(i["j"])("font-family:"+this.$store.state.settings.font)},[e.roundStarted?(Object(i["k"])(),Object(i["e"])("div",b,[Object(i["h"])(r),Object(i["h"])(u)])):(Object(i["k"])(),Object(i["e"])("div",d,[Object(i["h"])(s,{class:"settings"}),Object(i["h"])(l,{first:e.firstRound},null,8,["first"])]))],4)}var m,p=n("ade3"),v=n("1da1"),h=(n("96cf"),{id:"round"}),O=Object(i["g"])(" Usa la sillaba "),j={class:"syllable"},g={class:"dice"};function k(e,t,n,o,c,a){return Object(i["k"])(),Object(i["e"])("div",h,[O,Object(i["f"])("div",j,Object(i["s"])(e.roundSyllable),1),Object(i["f"])("div",g,Object(i["s"])(e.diceSentence[0]),1),Object(i["g"])(" "+Object(i["s"])(e.diceSentence[1])+" parola ",1)])}(function(e){e[e["START"]=0]="START",e[e["END"]=1]="END",e[e["EVERYWHERE"]=2]="EVERYWHERE"})(m||(m={}));var y=function(e){Object(r["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n)}(l["b"]);y=Object(s["a"])([Object(l["a"])({data:function(){return{}},computed:{roundDiceValue:function(){return this.$store.state.round.selectedDiceValue},roundSyllable:function(){return this.$store.state.round.selectedSyllable},diceSentence:function(){var e;switch(m[this.roundDiceValue]){case m.START:e=["all'inizio","della"];break;case m.END:e=["alla fine","della"];break;default:e=["ovunque","nella"];break}return e}}})],y);var w=y,x=(n("82d3"),n("6b0d")),S=n.n(x);const T=S()(w,[["render",k],["__scopeId","data-v-30e7c4b4"]]);var R=T,M=function(e){return Object(i["n"])("data-v-5cec5db7"),e=e(),Object(i["l"])(),e},B={id:"bomb"},F=M((function(){return Object(i["f"])("div",{class:"led"},null,-1)})),E=[F];function _(e,t,n,o,c,a){return Object(i["k"])(),Object(i["e"])("div",B,E)}var C=["au","to","ap","pren","di","men","in","for","ma","ti","ca","pa","ci","tà","un","pro","gram","la","bo","ra","zio","ne","da","mi","glio","re","le","prie","fun","na","li","sfrut","tan","do","ni","che","gli","ven","go","no","of","fer","te","stes","si","gres","so","co","me","av","vie","per","es","al","cu","let","tu","ot","man","dat","lu","con","tra","sto","del","sa","com","met","nu","ro","sem","pre","er","ri","de","fra","nel","vo","tec","tel","gen","za","ar","fi","cia","ha","sen","liz","mu","ble","sio","sul","ba","se","sce","va","van","ria","bi","stra","gia","gie","ai","ta","su","ef","fet","tua","cam","po","bot","mo","il","por","dei","ce","den","spes","tri","lo","im","ple","sull","trol","spe","tal","spo","sta","fis","tran","vi","vel","ples","pli","quan","fat","ster","piu","pas","du","stri","pe","ve","ste","cui","ter","ben","sil","be","on","ov","via","an","pos","scri","lun","sie","stro","puo","nal","ver","cio","ru","ga","ran","lop","teg","gio","ac","can","ad","gni","pio","que","sti","pri","sia"],$=(n("a4d3"),n("e01a"),n("d3b7"),n("5502")),A={state:{selectedSyllable:null,selectedDiceValue:null,bombTime:null,started:!1},mutations:{changeSelectedSyllable:function(e,t){e.selectedSyllable=t},changeSelectedDiceValue:function(e,t){e.selectedDiceValue=t},changeBombTime:function(e,t){e.bombTime=t},stopRound:function(e){e.started=!1},startRound:function(e){e.started=!0}}},q="changeSelectedSyllable",D="changeSelectedDiceValue",V="changeBombTime",P="startRound",I="stopRound",N={state:{maxBombTime:60,minBombTime:10,font:"Cabin Sketch",fullScreen:!0},mutations:{changeMinBombTime:function(e,t){e.minBombTime=t},changeMaxBombTime:function(e,t){e.maxBombTime=t},toggleFont:function(e,t){e.font=null!=t?t:"Avenir"===e.font?"Cabin Sketch":"Avenir"},toggleFullScreen:function(e,t){e.fullScreen=null!=t?t:!e.fullScreen}}},z="changeMinBombTime",L="changeMaxBombTime",H="toggleFont",U="toggleFullScreen",J={state:{fullScreen:!1},mutations:{enableFullScreen:function(e){e.fullScreen=!0},disableFullScreen:function(e){e.fullScreen=!1}}},W="enableFullScreen",Y="disableFullScreen",G=Symbol(),K=Object($["a"])({modules:{ui:J,round:A,settings:N}}),Q=function(){function e(){Object(a["a"])(this,e),this.store=Object($["b"])(G),this.syllablesList=C}return Object(c["a"])(e,[{key:"onNewRound",value:function(){var e=this.store.state.settings.maxBombTime,t=this.store.state.settings.minBombTime,n=this.syllablesList[Math.floor(Math.random()*this.syllablesList.length)],i=m[Math.floor(3*Math.random())],o=Math.floor(Math.random()*(e-t))+t;this.store.commit(D,i),this.store.commit(q,n),this.store.commit(V,o),this.store.commit(P)}},{key:"onRoundEnd",value:function(){this.store.commit(I)}}]),e}(),X=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60;Object(a["a"])(this,e),this.isRunning=!1,this.audioContext=null,this.intervalID=null,this.tempo=t}return Object(c["a"])(e,[{key:"start",value:function(){var e=this;this.isRunning||(null==this.audioContext&&(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.isRunning=!0,this.intervalID=setInterval((function(){return e.playTick()}),1e3))}},{key:"stop",value:function(){this.isRunning=!1,this.intervalID&&clearInterval(this.intervalID)}},{key:"startStop",value:function(){this.isRunning?this.stop():this.start()}},{key:"playTick",value:function(){if(this.audioContext){var e=this.audioContext.currentTime,t=this.audioContext.createOscillator(),n=this.audioContext.createGain();t.type="square",t.frequency.value=2400,n.gain.value=1,n.gain.exponentialRampToValueAtTime(1,e+.001),n.gain.exponentialRampToValueAtTime(.001,e+.02),t.connect(n),n.connect(this.audioContext.destination),t.start(e),t.stop(e+.2)}}}]),e}(),Z=function(e){Object(r["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n)}(l["b"]);Z=Object(s["a"])([Object(l["a"])({data:function(){return{roundService:new Q}},computed:{bombValue:function(){return this.$store.state.round.bombTime}},mounted:function(){var e=this,t=new Audio("Explosion.mp3"),n=new X;n.start(),setTimeout(Object(v["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:n.stop(),t.loop=!1,t.play(),"vibrate"in navigator&&navigator.vibrate(900),e.roundService.onRoundEnd(),e.$store.commit(Y);case 6:case"end":return i.stop()}}),i)}))),1e3*this.$store.state.round.bombTime)}})],Z);var ee=Z;n("fd2a");const te=S()(ee,[["render",_],["__scopeId","data-v-5cec5db7"]]);var ne=te,ie=function(e){return Object(i["n"])("data-v-c947bab4"),e=e(),Object(i["l"])(),e},oe={id:"new_round"},ce=ie((function(){return Object(i["f"])("h1",null,"Passa la bomba",-1)})),ae=ie((function(){return Object(i["f"])("div",{class:"explain"},[Object(i["f"])("div",{class:"highlight"},"1. Premi il bottone qui sotto"),Object(i["g"])(" Ti verranno mostrate due o più lettere e la posizione in cui devono essere usate. Verrà anche avviata la bomba "),Object(i["f"])("div",{class:"highlight"},"2. Di' una parola"),Object(i["g"])(" che contiene le lettere nella giusta posizione "),Object(i["f"])("div",{class:"highlight"},"3. Passa il telefono"),Object(i["g"])(" al giocatore successivo prima che esploda la bomba! ")],-1)})),re=ie((function(){return Object(i["f"])("h1",null,"Sei esploso!",-1)})),ue=ie((function(){return Object(i["f"])("div",{class:"explain"},[Object(i["f"])("div",{class:"highlight"},"Avvia un nuovo round"),Object(i["g"])(" Premendo il bottone qui in basso ")],-1)}));function se(e,t,n,o,c,a){return Object(i["k"])(),Object(i["e"])("div",oe,[e.first?(Object(i["k"])(),Object(i["e"])(i["a"],{key:0},[ce,ae],64)):(Object(i["k"])(),Object(i["e"])(i["a"],{key:1},[re,ue],64)),Object(i["f"])("button",{class:"new_round_btn",onClick:t[0]||(t[0]=function(){return e.newRound&&e.newRound.apply(e,arguments)})},Object(i["s"])(e.first?"Avvia":"Nuovo round"),1)])}var le=function(e){Object(r["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n)}(l["b"]);le=Object(s["a"])([Object(l["a"])({props:{first:{default:!0,type:Boolean}},data:function(){var e=new Q;return{roundService:e}},methods:{newRound:function(){this.roundService.onNewRound(),this.$store.commit(W)}}})],le);var be=le;n("5b03");const de=S()(be,[["render",se],["__scopeId","data-v-c947bab4"]]);var fe=de,me=function(e){return Object(i["n"])("data-v-76188d2c"),e=e(),Object(i["l"])(),e},pe={id:"more_menu"},ve=me((function(){return Object(i["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFFFFF"},[Object(i["f"])("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(i["f"])("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})],-1)})),he=[ve],Oe={key:0,id:"menu"},je=me((function(){return Object(i["f"])("div",{class:"text"},"Usa font più leggibile",-1)})),ge={class:"switch"},ke=me((function(){return Object(i["f"])("span",{class:"slider"},null,-1)})),ye=me((function(){return Object(i["f"])("div",{class:"text"},"Passa a schermo intero",-1)})),we={class:"switch"},xe=me((function(){return Object(i["f"])("span",{class:"slider"},null,-1)})),Se={class:"option"},Te=me((function(){return Object(i["f"])("label",{for:"minTime"},"Tempo minimo bomba",-1)})),Re=["value"],Me={class:"option"},Be=me((function(){return Object(i["f"])("label",{for:"maxTime"},"Tempo massimo bomba",-1)})),Fe=["value"];function Ee(e,t,n,o,c,a){var r=this,u=Object(i["r"])("click-outside");return Object(i["v"])((Object(i["k"])(),Object(i["e"])("div",pe,[Object(i["f"])("div",{id:"menu_btn",onClick:t[0]||(t[0]=function(t){return e.showMenu=!e.showMenu})},he),e.showMenu?(Object(i["k"])(),Object(i["e"])("div",Oe,[Object(i["f"])("div",{class:"option",onClick:t[2]||(t[2]=function(){return e.toggleFont&&e.toggleFont.apply(e,arguments)})},[je,Object(i["f"])("div",ge,[Object(i["v"])(Object(i["f"])("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.readableFont=e})},null,512),[[i["t"],this.readableFont]]),ke])]),Object(i["f"])("div",{class:"option",onClick:t[4]||(t[4]=function(){return e.toggleFullScreen&&e.toggleFullScreen.apply(e,arguments)})},[ye,Object(i["f"])("div",we,[Object(i["v"])(Object(i["f"])("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.fullScreenEnabled=e})},null,512),[[i["t"],this.fullScreenEnabled]]),xe])]),Object(i["f"])("div",Se,[Te,Object(i["f"])("input",{type:"number",name:"minTime",id:"minTime",value:this.minBombTime,onChange:t[5]||(t[5]=function(){return e.updateMinTime&&e.updateMinTime.apply(e,arguments)})},null,40,Re)]),Object(i["f"])("div",Me,[Be,Object(i["f"])("input",{type:"number",name:"maxTime",id:"maxTime",value:e.maxBombTime,onChange:t[6]||(t[6]=function(){return e.updateMaxTime&&e.updateMaxTime.apply(e,arguments)})},null,40,Fe)])])):Object(i["d"])("",!0)])),[[u,e.onClickOutside]])}var _e=function(e){Object(r["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n)}(l["b"]);_e=Object(s["a"])([Object(l["a"])({data:function(){var e=!1;return{showMenu:e}},methods:{onClickOutside:function(){this.showMenu=!1},toggleFont:function(){this.$store.commit(H)},toggleFullScreen:function(){this.$store.commit(U)},updateMinTime:function(e){if(e.target){var t=parseInt(e.target.value);t>=this.maxBombTime&&(t=this.maxBombTime-20),this.$store.commit(z,t)}},updateMaxTime:function(e){if(e.target){var t=parseInt(e.target.value);t<this.minBombTime&&(t=this.minBombTime+20),this.$store.commit(L,t)}}},computed:{minBombTime:function(){return this.$store.state.settings.minBombTime},maxBombTime:function(){return this.$store.state.settings.maxBombTime},readableFont:function(){return"Avenir"===this.$store.state.settings.font},fullScreenEnabled:function(){return this.$store.state.settings.fullScreen}}})],_e);var Ce=_e;n("43fa");const $e=S()(Ce,[["render",Ee],["__scopeId","data-v-76188d2c"]]);var Ae=$e,qe=function(e){Object(r["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n)}(l["b"]);qe=Object(s["a"])([Object(l["a"])({components:{Round:R,Bomb:ne,NewRound:fe,Settings:Ae},data:function(){return{wakeLock:null,firstRound:!0}},computed:{roundStarted:function(){return this.$store.state.round.started}},watch:Object(p["a"])({},"$store.state.ui.fullScreen",(function(e,t){var n=this;return Object(v["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!e||t){i.next=16;break}if(i.prev=1,!n.$store.state.settings.fullScreen){i.next=5;break}return i.next=5,n.$el.requestFullscreen();case 5:return i.next=7,navigator.wakeLock.request("screen");case 7:n.wakeLock=i.sent,n.firstRound=!1,i.next=14;break;case 11:i.prev=11,i.t0=i["catch"](1),console.error(i.t0);case 14:i.next=28;break;case 16:if(i.prev=16,!document.fullscreenElement){i.next=20;break}return i.next=20,document.exitFullscreen();case 20:if(!n.wakeLock){i.next=23;break}return i.next=23,n.wakeLock.release();case 23:i.next=28;break;case 25:i.prev=25,i.t1=i["catch"](16),console.error(i.t1);case 28:case"end":return i.stop()}}),i,null,[[1,11],[16,25]])})))()}))})],qe);var De=qe;n("4cf3");const Ve=S()(De,[["render",f],["__scopeId","data-v-997ef276"]]);var Pe=Ve,Ie=function(e){Object(r["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n)}(l["b"]);Ie=Object(s["a"])([Object(l["a"])({components:{HomePage:Pe}})],Ie);var Ne=Ie;n("46fb");const ze=S()(Ne,[["render",o]]);var Le=ze,He={beforeMount:function(e,t,n){e.clickOutsideEvent=function(n){e===n.target||e.contains(n.target)||t.value(n,e)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},Ue=n("9483");Object(Ue["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(i["b"])(Le).use(K,G).directive("click-outside",He).mount("#app")},dde1:function(e,t,n){},e573:function(e,t,n){},f44e:function(e,t,n){},fd2a:function(e,t,n){"use strict";n("f44e")}});
//# sourceMappingURL=app.69b2b845.js.map