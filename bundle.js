(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>C});var r=n(601),i=n.n(r),a=n(314),s=n.n(a),o=n(417),l=n.n(o),c=new URL(n(291),n.b),h=new URL(n(779),n.b),d=new URL(n(609),n.b),u=new URL(n(74),n.b),p=new URL(n(161),n.b),g=new URL(n(214),n.b),m=new URL(n(299),n.b),y=new URL(n(730),n.b),f=new URL(n(584),n.b),b=new URL(n(675),n.b),w=s()(i()),v=l()(c),E=l()(h),x=l()(d),L=l()(u),k=l()(p),T=l()(g),B=l()(m),P=l()(y),I=l()(f),M=l()(b);w.push([e.id,`@keyframes grow-and-shrink {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.15);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes play {\n  0% {\n    transform: rotate(-0.1turn) scale(0.5);\n  }\n  50% {\n    transform: rotate(0.1turn) scale(0.75);\n  }\n  100% {\n    transform: rotate(0turn) scale(1);\n  }\n}\n\n@keyframes fall {\n  0% {\n    transform: translateY(calc(-100vh));\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\nbody {\n  background-image: url(${v});\n  background-size: cover;\n  height: 100vh;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  text-align: center;\n  overflow: hidden;\n}\n\n#title {\n  margin: 2rem;\n  margin: auto;\n  width: 90%;\n  max-width: 300px;\n  height: 10%;\n  background-size: contain;\n  background-position: center;\n  background-repeat: none;\n  background-image: url(${E});\n}\n\n#chooseyourplayers {\n  height: 2vh;\n  margin: 1vh;\n  color: white;\n  font-weight: bolder;\n}\n\n#settingsmenu {\n  width: 95%;\n  max-width: 500px;\n  margin: auto;\n}\n\n.setting {\n  padding: 2vh;\n}\n\n.settingcontrol {\n  margin: auto;\n  display: flex;\n  flex-direction: columns;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.settinglabel {\n  text-align: center;\n  font-size: 4vh;\n}\n\n.settingvalue {\n  text-align: center;\n  vertical-align: middle;\n  line-height: 100%;\n  color: white;\n  font-size: 12vh;\n  width: 50%;\n}\n\n.leftarrow {\n  background-image: url(${x});\n  background-size: cover;\n  background-position: center;\n  width: 25%;\n  max-width: 10rem;\n  aspect-ratio: 1/1;\n}\n\n.rightarrow {\n  background-image: url(${L});\n  background-size: cover;\n  background-position: center;\n  width: 25%;\n  max-width: 10rem;\n  aspect-ratio: 1/1;\n}\n\n@media (min-width: 800px) {\n  .leftarrow {\n    opacity: 75%;\n  }\n  .rightarrow {\n    opacity: 75%;\n  }\n  .leftarrow:hover {\n    opacity: 100%;\n  }\n  .rightarrow:hover {\n    opacity: 100%;\n  }\n}\n\n#players {\n  margin: auto;\n  width: 90%;\n  max-width: 800px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.player {\n  margin: 0.5vh;\n  width: 20%;\n  min-width: min(7rem, 20vw);\n  background-size: cover;\n  border: 3px solid black;\n  border-radius: 10%;\n  aspect-ratio: 1 / 1;\n  opacity: 50%;\n}\n\n.player:hover {\n  border-color: white;\n  opacity: 100%;\n}\n\n.player1 {\n  animation: play 0.5s;\n  border-color: rgb(255, 0, 247);\n  opacity: 100%;\n}\n\n.player1:hover {\n  border-color: rgb(255, 0, 247);\n}\n\n.player2 {\n  animation: play 0.5s;\n  border-color: rgb(0, 255, 106);\n  opacity: 100%;\n}\n\n.player2:hover {\n  border-color: rgb(0, 255, 106);\n}\n\n#game {\n  margin: auto;\n  padding-top: 5vh;\n}\n\ntd {\n  background-size: cover;\n  border: solid black;\n  border-radius: 10%;\n  position: relative;\n  z-index: 1;\n}\n\ntd.unplaced {\n  transform: translate(0, calc(-100vh));\n  background-image: url(${k});\n  animation: fall 0.5s linear;\n  animation-fill-mode: forwards;\n}\n\ntd.unplaced:hover {\n  border-color: white;\n}\n\ntd.placed {\n  animation: play 0.5s;\n  animation-delay: 0s;\n}\n\ntd.winner {\n  animation: play 0.5s, grow-and-shrink 0.5s ease-in-out;\n  animation-delay: 0s, 1s;\n  animation-iteration-count: 1, infinite;\n  border-color: white;\n}\n\n.hidden {\n  display: none;\n}\n\n.button-group {\n  display: flex;\n  width: 40%;\n  height: 10vh;\n  margin: auto;\n  margin-top: 4vh;\n}\n\n@media (max-width: 500px) {\n  .button-group {\n    width: 90vw;\n  }\n}\n\nbutton {\n  flex: 25%;\n  margin: 1vh;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-color: rgba(0, 0, 0, 0.526);\n}\n\nbutton:hover {\n  border-color: white;\n}\n\n#restartbutton {\n  background-image: url(${T});\n}\n\n#startbutton {\n  background-image: url(${B});\n}\n\n#startbutton.disabled {\n  opacity: 50%;\n  border: none;\n}\n\n#menubutton {\n  background-image: url(${P});\n}\n\n#settingsbutton {\n  background-image: url(${I});\n}\n\n#savebutton {\n  background-image: url(${M});\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  height: 2vh;\n  background: rgba(0, 0, 0, 0.526);\n  display: flex;\n  justify-content: flex-end;\n  align-content: center;\n  color: rgb(154, 154, 154);\n}\n\n.footer {\n  line-height: 2vh;\n  vertical-align: middle;\n  font-family: monospace;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\na {\n  color: white;\n  font-family: "Courier New", Courier, monospace;\n}\n`,""]);const C=w},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var h=[].concat(e[c]);r&&s[h[0]]||(void 0!==a&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=a),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),t.push(h))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],o=0;o<e.length;o++){var l=e[o],c=r.base?l[0]+r.base:l[0],h=a[c]||0,d="".concat(c," ").concat(h);a[c]=h+1;var u=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var g=i(p,r);r.byIndex=o,t.splice(o,0,{identifier:d,updater:g,references:1})}s.push(d)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var o=n(a[s]);t[o].references--}for(var l=r(e,i),c=0;c<a.length;c++){var h=n(a[c]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}a=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},291:(e,t,n)=>{e.exports=n.p+"3e61681134695c23cc8f.png"},609:(e,t,n)=>{e.exports=n.p+"6dfcf1e0a938d00ba063.png"},730:(e,t,n)=>{e.exports=n.p+"73b6f7905b4b2422123b.png"},161:(e,t,n)=>{e.exports=n.p+"dab11b7ef1b4234751c9.png"},214:(e,t,n)=>{e.exports=n.p+"b56240f70d919c6e198c.png"},74:(e,t,n)=>{e.exports=n.p+"819bc2bc77e8841baefb.png"},675:(e,t,n)=>{e.exports=n.p+"d0a4db49677fd8a547cd.png"},584:(e,t,n)=>{e.exports=n.p+"0fd0dfe9a517575676fe.png"},299:(e,t,n)=>{e.exports=n.p+"047aed27bd368c4779c2.png"},779:(e,t,n)=>{e.exports=n.p+"1b2965f6e721f646955f.png"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{let e=0;const t=class{constructor(e,t,n,r){this.x=e,this.y=t,this.player=n,this.playNumber=r,this.draw()}get element(){return document.getElementById(`space:${this.x}-${this.y}`)}draw(){this.element.classList.remove("unplaced"),this.element.classList.add("placed"),this.element.style.animationDelay="0s",this.element.style.zIndex=this.playNumber,this.element.style.backgroundImage=`url(${this.player.image}`}drawWinner(){this.element.classList.add("winner"),this.element.style.animationDelay="0s, 0.5s",this.element.style.backgroundImage=`url(${this.player.image}`;let t=document.querySelectorAll("td");for(let e of t)e.style.borderColor="black";e=0}},r=class{constructor(e,t,n,r,i,a){this.cat=n,this.width=r,this.height=i,this.spaces=this.initGameboard(),this.currentPlayer=e,this.nextPlayer=t,this.plays=0,this.inarow=a,this.drawBoard()}initGameboard(){return Array(this.width).fill(null).map((()=>Array(this.height).fill(null)))}get element(){return document.getElementById("game")}drawBoard(){for(let e=0;e<this.height;e++){let t=document.createElement("tr");this.element.appendChild(t);for(let n=0;n<this.width;n++){let r=document.createElement("td");t.appendChild(r),r.id=`space:${n}-${e}`,r.classList.add("unplaced"),r.style.width=`min(calc(85vw / ${this.width}), calc(60vh / ${this.height})`,r.style.height=r.style.width,this.element.style.width=r.style.width*this.width,this.element.style.aspectRatio=`${this.width} / ${this.height}`,r.style.animationDelay=(this.height-1-(e+n/(this.width-1)))/4+"s",r.addEventListener("click",this.clickEventListener(n,e))}}}clearBoard(){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild)}clickEventListener(e,n){return()=>{if(this.spaces[e][n]||this.winner||this.tie)return;let r=new t(e,n,this.currentPlayer,this.plays++);this.handlePlay(r),this.isOver?(this.winner&&this.showWinner(),this.tie&&this.showTie()):this.switchPlayers()}}handlePlay(e){this.lastPlay=e,this.spaces[e.x][e.y]=e.player}switchPlayers(){[this.currentPlayer,this.nextPlayer]=[this.nextPlayer,this.currentPlayer]}get isOver(){return!(this.plays<this.inarow)&&(this.checkDiagonal()||this.checkVertical()||this.checkHorizontal()?(this.winner=this.lastPlay.player,!0):this.plays>=this.width*this.height&&(this.tie=!0,!0))}showWinner(){this.lastPlay.drawWinner()}showTie(){this.lastPlay.player=this.cat,this.showWinner()}checkDiagonal(){return this.spacesToUpperRight+this.spacesToLowerLeft+1>=this.inarow||this.spacesToUpperLeft+this.spacesToLowerRight+1>=this.inarow}checkHorizontal(){return this.spacesToRight+this.spacesToLeft+1>=this.inarow}checkVertical(){return this.spacesToLower+this.spacesToUpper+1>=this.inarow}get spacesToLowerRight(){return this.spacesTo("right","down")}get spacesToLowerLeft(){return this.spacesTo("left","down")}get spacesToUpperLeft(){return this.spacesTo("left","up")}get spacesToUpperRight(){return this.spacesTo("right","up")}get spacesToLeft(){return this.spacesTo("left","none")}get spacesToRight(){return this.spacesTo("right","none")}get spacesToLower(){return this.spacesTo("none","down")}get spacesToUpper(){return this.spacesTo("none","up")}spacesTo(e,t){let{x:n,y:r,player:i}=this.lastPlay,a={up:()=>r--,down:()=>r++,none:()=>r}[t],s={left:()=>n--,right:()=>n++,none:()=>n}[e],o={up:()=>r>=0,down:()=>r<this.height,none:()=>!0}[t],l={left:()=>n>=0,right:()=>n<this.width,none:()=>!0}[e],c=0;for(a(),s();o()&&l()&&this.spaces[n][r]===i;)c++,a(),s();return c}},i=class{constructor(e,t){this.name=e,this.image=t}},a=n.p+"f0eb84028b76675db9db.jpeg",s=n.p+"c214450a92d76f3f560c.jpeg",o=n.p+"3161a952437a55a15452.jpeg",l=n.p+"77fce8afe3954b7248c2.jpeg",c=n.p+"5b168a729b3364d7732f.jpeg",h=n.p+"da87c142505de81fa3ef.jpeg",d=n.p+"ff1903c93bb03eec8a90.jpeg",u=n.p+"dcf8c25ead38d647b334.jpeg",p=n.p+"8c37b474ec08074b104e.jpeg",g=n.p+"72b223d8a2b2149a50ec.jpeg",m=n.p+"bb35e3d1ff743709d3ac.jpeg",y=new i("Mario",a),f=new i("Luigi",s),b=new i("Peach",o),w=new i("Daisy",l),v=new i("Wario",c),E=new i("Waluigi",h),x=new i("Bowser",d),L=new i("Toad",u),k=new i("Toadette",p),T=[y,f,b,w,v,E,x,L,new i("Koopa",g),new i("Goomba",m),k];var B=n(72),P=n.n(B),I=n(825),M=n.n(I),C=n(659),S=n.n(C),$=n(56),j=n.n($),R=n(540),A=n.n(R),U=n(113),z=n.n(U),W=n(365),q={};q.styleTagTransform=z(),q.setAttributes=j(),q.insert=S().bind(null,"head"),q.domAPI=M(),q.insertStyleElement=A(),P()(W.A,q),W.A&&W.A.locals&&W.A.locals;class D{constructor(){this.width=3,this.height=3,this.inarow=3,this.initButtons(),this.drawPlayers(),this.mainMenuElement.classList.toggle("hidden")}start(){console.log(this.width,this.height,this.inarow),this.cat=new i("Cat","images/cat.jpeg"),this.gameboard=new r(this.player1,this.player2,this.cat,this.width,this.height,this.inarow)}restart(){this.gameboard.clearBoard(),this.gameboard=new r(this.player1,this.player2,this.cat,this.width,this.height,this.inarow)}initButtons(){this.startButtonElement.addEventListener("click",(()=>{this.gameMenuElement.classList.toggle("hidden"),this.mainMenuElement.classList.toggle("hidden"),this.start()})),this.restartButtonElement.addEventListener("click",(()=>{this.restart()})),this.menuButtonElement.addEventListener("click",(()=>{this.gameboard.clearBoard(),document.querySelector(".player1").classList.remove("player1"),this.player1=null,document.querySelector(".player2").classList.remove("player2"),this.player2=null,this.gameMenuElement.classList.toggle("hidden"),this.mainMenuElement.classList.toggle("hidden"),this.chooseYourPlayersElement.innerText="Choose your players",this.startButtonElement.classList.toggle("disabled"),this.startButtonElement.disabled=!0})),this.settingsButtonElement.addEventListener("click",(()=>{this.mainMenuElement.classList.toggle("hidden"),this.settingsMenuElement.classList.toggle("hidden")})),this.saveButtonElement.addEventListener("click",(()=>{this.settingsMenuElement.classList.toggle("hidden"),this.mainMenuElement.classList.toggle("hidden")})),this.leftArrowButtonElements.forEach((e=>{e.addEventListener("click",(()=>{console.log("click");let t=e.parentElement.id,n=+e.nextElementSibling.innerText;n>3&&(this[t]=n-1,e.nextElementSibling.innerText=n-1),this.inarow=Math.min(this.inarow,Math.max(this.width,this.height)),document.getElementById("inarow").firstElementChild.nextElementSibling.innerText=this.inarow}))})),this.rightArrowButtonElements.forEach((e=>{e.addEventListener("click",(()=>{let t=e.parentElement.id,n=+e.previousElementSibling.innerText;"inarow"===t?(n<this.width||n<this.height)&&(this[t]=n+1,e.previousElementSibling.innerText=n+1):n<15&&(this[t]=n+1,e.previousElementSibling.innerText=n+1)}))}))}drawPlayers(){for(let e of T){let t=document.createElement("div");t.style.backgroundImage=`url(${e.image})`,t.classList.add("player"),t.addEventListener("click",(()=>{if(this.player1)if(this.player2)this.startButtonElement.disabled=!0,this.startButtonElement.classList.toggle("disabled"),this.chooseYourPlayersElement.innerText="Choose your players",this.player1=e,document.querySelector(".player1").classList.toggle("player1"),t.classList.toggle("player1"),this.player2=null,document.querySelector(".player2").classList.toggle("player2");else{if(this.player1===e)return;this.player2=e,t.classList.add("player2"),this.startButtonElement.disabled=!1,this.startButtonElement.classList.toggle("disabled"),this.chooseYourPlayersElement.innerText=""}else this.player1=e,t.classList.add("player1")})),this.playerContainerElement.appendChild(t)}}get mainMenuElement(){return document.getElementById("mainmenu")}get gameMenuElement(){return document.getElementById("gamemenu")}get settingsMenuElement(){return document.getElementById("settingsmenu")}get startButtonElement(){return document.getElementById("startbutton")}get restartButtonElement(){return document.getElementById("restartbutton")}get menuButtonElement(){return document.getElementById("menubutton")}get saveButtonElement(){return document.getElementById("savebutton")}get settingsButtonElement(){return document.getElementById("settingsbutton")}get chooseYourPlayersElement(){return document.getElementById("chooseyourplayers")}get playerContainerElement(){return document.getElementById("players")}get leftArrowButtonElements(){return document.querySelectorAll(".leftarrow")}get rightArrowButtonElements(){return document.querySelectorAll(".rightarrow")}}window.addEventListener("load",(()=>{new D})),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((e=>{console.log("SW registered: ",e)})).catch((e=>{console.log("SW registration failed: ",e)}))}))})()})();