!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).Tobii=t()}(this,function(){class e{constructor(){this.figcaptionId=0,this.userSettings=null}init(e,t,i){this.userSettings=i;const r=document.createElement("figure"),n=document.createElement("figcaption"),a=document.createElement("img"),s=e.querySelector("img"),o=document.createElement("div");if(r.style.opacity="0",s&&(a.alt=s.alt||""),a.setAttribute("src",""),a.setAttribute("data-src",e.href),e.hasAttribute("data-srcset")&&a.setAttribute("data-srcset",e.getAttribute("data-srcset")),r.appendChild(a),this.userSettings.captions){let t;"function"==typeof this.userSettings.captionText?t=this.userSettings.captionText(e):"self"===this.userSettings.captionsSelector&&e.getAttribute(this.userSettings.captionAttribute)?t=e.getAttribute(this.userSettings.captionAttribute):"img"===this.userSettings.captionsSelector&&s&&s.getAttribute(this.userSettings.captionAttribute)&&(t=s.getAttribute(this.userSettings.captionAttribute)),this.userSettings.captionHTML?n.innerHTML=t:n.textContent=t,t&&(n.id=`tobii-figcaption-${this.figcaptionId}`,r.appendChild(n),a.setAttribute("aria-labelledby",n.id),++this.figcaptionId)}t.appendChild(r),o.className="tobii__loader",o.setAttribute("role","progressbar"),o.setAttribute("aria-label",this.userSettings.loadingIndicatorLabel),t.appendChild(o),t.setAttribute("data-type","image"),t.classList.add("tobii-image")}onPreload(e){this.onLoad(e)}onLoad(e){const t=e.querySelector("img");if(!t.hasAttribute("data-src"))return;const i=e.querySelector("figure"),r=e.querySelector(".tobii__loader");t.addEventListener("load",()=>{e.removeChild(r),i.style.opacity="1"}),t.addEventListener("error",()=>{e.removeChild(r),i.style.opacity="1"}),t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src"),t.hasAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"))}onLeave(e){}onCleanup(e){}onReset(){this.figcaptionId=0}}class t{constructor(){this.userSettings=null}init(e,t,i){this.userSettings=i;const r=e.hasAttribute("data-target")?e.getAttribute("data-target"):e.getAttribute("href");t.setAttribute("data-HREF",r),e.getAttribute("data-allow")&&t.setAttribute("data-allow",e.getAttribute("data-allow")),e.hasAttribute("data-width")&&t.setAttribute("data-width",`${e.getAttribute("data-width")}`),e.hasAttribute("data-height")&&t.setAttribute("data-height",`${e.getAttribute("data-height")}`),t.setAttribute("data-type","iframe"),t.classList.add("tobii-iframe")}onPreload(e){}onLoad(e){let t=e.querySelector("iframe");const i=document.createElement("div");if(i.className="tobii__loader",i.setAttribute("role","progressbar"),i.setAttribute("aria-label",this.userSettings.loadingIndicatorLabel),e.appendChild(i),null==t){t=document.createElement("iframe");const i=e.getAttribute("data-href");t.setAttribute("frameborder","0"),t.setAttribute("src",i),t.setAttribute("allowfullscreen",""),i.indexOf("youtube.com")>-1?t.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"):i.indexOf("vimeo.com")>-1?t.setAttribute("allow","autoplay; picture-in-picture"):e.hasAttribute("data-allow")&&t.setAttribute("allow",e.getAttribute("data-allow")),e.getAttribute("data-width")&&(t.style.maxWidth=`${e.getAttribute("data-width")}`),e.getAttribute("data-height")&&(t.style.maxHeight=`${e.getAttribute("data-height")}`),t.style.opacity="0",e.appendChild(t),t.addEventListener("load",()=>{t.style.opacity="1";const i=e.querySelector(".tobii__loader");i&&e.removeChild(i)}),t.addEventListener("error",()=>{t.style.opacity="1";const i=e.querySelector(".tobii__loader");i&&e.removeChild(i)})}else t.setAttribute("src",e.getAttribute("data-href"))}onLeave(e){}onCleanup(e){const t=e.querySelector("iframe");t.setAttribute("src",""),t.style.opacity="0"}onReset(){}}class i{constructor(){this.userSettings=null}init(e,t,i){this.userSettings=i;const r=e.hasAttribute("data-target")?e.getAttribute("data-target"):e.getAttribute("href"),n=document.querySelector(r).cloneNode(!0);if(!n)throw new Error(`Ups, I can't find the target ${r}.`);t.appendChild(n),t.setAttribute("data-type","html"),t.classList.add("tobii-html")}onPreload(e){}onLoad(e,t){const i=e.querySelector("video");i&&(i.hasAttribute("data-time")&&i.readyState>0&&(i.currentTime=i.getAttribute("data-time")),this.userSettings.autoplayVideo&&i.play());const r=e.querySelector("audio");r&&this.userSettings.autoplayAudio&&r.play(),e.classList.add("tobii-group-"+t)}onLeave(e){const t=e.querySelector("video");t&&(t.paused||t.pause(),t.readyState>0&&t.setAttribute("data-time",t.currentTime));const i=e.querySelector("audio");i&&(i.paused||i.pause())}onCleanup(e){const t=e.querySelector("video");if(t&&t.readyState>0&&t.readyState<3&&t.duration!==t.currentTime){const i=t.cloneNode(!0);this._removeSources(t),t.load(),t.parentNode.removeChild(t),e.appendChild(i)}}onReset(){}_removeSources(e){const t=e.querySelectorAll("src");t&&t.forEach(e=>{e.setAttribute("src","")})}}class r{constructor(){this.playerId=0,this.PLAYER=[],this.userSettings=null}init(e,t,i){this.userSettings=i;const r=document.createElement("div");t.appendChild(r),this.PLAYER[this.playerId]=new window.YT.Player(r,{host:"https://www.youtube-nocookie.com",height:e.getAttribute("data-height")||"360",width:e.getAttribute("data-width")||"640",videoId:e.getAttribute("data-id"),playerVars:{controls:e.getAttribute("data-controls")||1,rel:0,playsinline:1}}),t.setAttribute("data-player",this.playerId),t.setAttribute("data-type","youtube"),t.classList.add("tobii-youtube"),this.playerId++}onPreload(e){}onLoad(e){this.userSettings.autoplayVideo&&this.PLAYER[e.getAttribute("data-player")].playVideo()}onLeave(e){1===this.PLAYER[e.getAttribute("data-player")].getPlayerState()&&this.PLAYER[e.getAttribute("data-player")].pauseVideo()}onCleanup(e){1===this.PLAYER[e.getAttribute("data-player")].getPlayerState()&&this.PLAYER[e.getAttribute("data-player")].pauseVideo()}onReset(){}}return function n(a){const s={image:new e,html:new i,iframe:new t,youtube:new r},o=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'];let l={};const d=[],c={gallery:[],slider:null,sliderElements:[],elementsLength:0,currentIndex:0,x:0};let u=null,p=null,h=null,b=null,g=null,m=null,y=null,f=!1,w={},v=null,A=[],x=0;const E={element:null,originX:0,originY:0,translateX:0,translateY:0,scale:1},L={startX:0,startY:0,x:0,y:0,distance:0},I=e=>{if(null===document.querySelector('[data-type="youtube"]')||f)S(e);else{if(null===document.getElementById("iframe_api")){const e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.id="iframe_api",e.src="https://www.youtube.com/iframe_api",t.parentNode.insertBefore(e,t)}-1===d.indexOf(e)&&d.push(e),window.onYouTubePlayerAPIReady=()=>{d.forEach(e=>{S(e)}),f=!0}}},_=e=>e.hasAttribute("data-group")?e.getAttribute("data-group"):"default",S=e=>{const t=_(e);if(Object.prototype.hasOwnProperty.call(w,t)||(w[t]=JSON.parse(JSON.stringify(c)),w[t].slider=document.createElement("div"),w[t].slider.className="tobii__slider",w[t].slider.setAttribute("aria-hidden","true"),u.appendChild(w[t].slider)),-1!==w[t].gallery.indexOf(e))throw new Error("Ups, element already added.");{if(w[t].gallery.push(e),w[t].elementsLength++,l.zoom&&e.querySelector("img")&&"false"!==e.getAttribute("data-zoom")||"true"===e.getAttribute("data-zoom")){const t=document.createElement("div");t.className="tobii-zoom__icon",t.innerHTML=l.zoomText,e.classList.add("tobii-zoom"),e.appendChild(t)}e.addEventListener("click",z);const i=Y(e),r=document.createElement("div"),n=document.createElement("div");r.className="tobii__slide",r.style.position="absolute",r.style.left=100*w[t].x+"%",r.setAttribute("aria-hidden","true"),i.init(e,n,l),r.appendChild(n),w[t].slider.appendChild(r),w[t].sliderElements.push(r),++w[t].x,le()&&t===v&&(ae(),se())}},C=e=>{const t=_(e);if(-1===w[t].gallery.indexOf(e))throw new Error(`Ups, I can't find a slide for the element ${e}.`);{const i=w[t].gallery.indexOf(e),r=w[t].sliderElements[i];if(le()&&t===v&&i===w[t].currentIndex){if(1===w[t].elementsLength)throw X(),new Error("Ups, I've closed. There are no slides more to show.");0===w[t].currentIndex?P():N(),ae(),se()}if(w[t].gallery.splice(w[t].gallery.indexOf(e)),w[t].sliderElements.splice(w[t].gallery.indexOf(e)),w[t].elementsLength--,--w[t].x,l.zoom&&e.querySelector(".tobii-zoom__icon")){const t=e.querySelector(".tobii-zoom__icon");t.parentNode.classList.remove("tobii-zoom"),t.parentNode.removeChild(t)}e.removeEventListener("click",z),r.parentNode.removeChild(r)}},Y=e=>{const t=e.getAttribute("data-type");return void 0!==s[t]?s[t]:(e.hasAttribute("data-type")&&console.log("Unknown lightbox element type: "+t),s.image)},T=(e=0)=>{if(le())throw new Error("Ups, I'm aleady open.");if(-1===e||e>=w[v].elementsLength)throw new Error(`Ups, I can't find slide ${e}.`);document.documentElement.classList.add("tobii-is-open"),document.body.classList.add("tobii-is-open"),document.body.classList.add("tobii-is-open-"+v),ae(),l.close||(b.disabled=!1,b.setAttribute("aria-hidden","true")),m=document.activeElement;const t=window.location.href;window.history.pushState({tobii:"close"},"Image",t),w[v].currentIndex=e,re(),M(w[v].currentIndex),w[v].slider.setAttribute("aria-hidden","false"),u.setAttribute("aria-hidden","false"),se(),q(w[v].currentIndex+1),q(w[v].currentIndex-1),w[v].slider.classList.add("tobii__slider--animate");const i=new window.CustomEvent("open",{detail:{group:v}});u.dispatchEvent(i)},X=()=>{if(!le())throw new Error("Ups, I'm already closed.");document.documentElement.classList.remove("tobii-is-open"),document.body.classList.remove("tobii-is-open"),document.body.classList.remove("tobii-is-open-"+v),ne(),null!==window.history.state&&"close"===window.history.state.tobii&&window.history.back(),m.focus(),O(w[v].currentIndex),k(w[v].currentIndex),u.setAttribute("aria-hidden","true"),w[v].slider.setAttribute("aria-hidden","true"),w[v].currentIndex=0,w[v].slider.classList.remove("tobii__slider--animate");const e=new window.CustomEvent("close",{detail:{group:v}});u.dispatchEvent(e)},q=e=>{if(void 0===w[v].sliderElements[e])return;const t=w[v].sliderElements[e].querySelector("[data-type]");Y(t).onPreload(t)},M=e=>{if(void 0===w[v].sliderElements[e])return;const t=w[v].sliderElements[e].querySelector("[data-type]"),i=Y(t);w[v].sliderElements[e].classList.add("tobii__slide--is-active"),w[v].sliderElements[e].setAttribute("aria-hidden","false"),i.onLoad(t,v)},N=()=>{if(!le())throw new Error("Ups, I'm closed.");w[v].currentIndex>0&&(O(w[v].currentIndex),M(--w[v].currentIndex),se("left"),k(w[v].currentIndex+1),q(w[v].currentIndex-1));const e=new window.CustomEvent("previous",{detail:{group:v}});u.dispatchEvent(e)},P=()=>{if(!le())throw new Error("Ups, I'm closed.");w[v].currentIndex<w[v].elementsLength-1&&(O(w[v].currentIndex),M(++w[v].currentIndex),se("right"),k(w[v].currentIndex-1),q(w[v].currentIndex+1));const e=new window.CustomEvent("next",{detail:{group:v}});u.dispatchEvent(e)},$=e=>{if(le())throw new Error("Ups, I'm open.");if(!e)throw new Error("Ups, no group specified.");if(e&&!Object.prototype.hasOwnProperty.call(w,e))throw new Error(`Ups, I don't have a group called "${e}".`);v=e},O=e=>{if(void 0===w[v].sliderElements[e])return;const t=w[v].sliderElements[e].querySelector("[data-type]"),i=Y(t);w[v].sliderElements[e].classList.remove("tobii__slide--is-active"),w[v].sliderElements[e].setAttribute("aria-hidden","true"),i.onLeave(t)},k=e=>{if(void 0===w[v].sliderElements[e])return;const t=w[v].sliderElements[e].querySelector("[data-type]");Y(t).onCleanup(t),L.startX=0,L.startY=0,L.x=0,L.y=0,L.distance=0,x=0,F()&&ie()},R=()=>{y=-w[v].currentIndex*u.offsetWidth,w[v].slider.style.transform=`translate(${y}px, 0)`},U=()=>{R()},z=e=>{e.preventDefault(),v=_(e.currentTarget),T(w[v].gallery.indexOf(e.currentTarget))},H=e=>{e.target===p?N():e.target===h?P():(e.target===b||e.target.classList.contains("tobii__slide")&&l.docClose)&&X(),e.stopPropagation()},D=e=>{const t=Array.prototype.slice.call(u.querySelectorAll(`.tobii__btn:not([disabled]), .tobii__slide--is-active ${o.join(", .tobii__slide--is-active ")}`)).filter(e=>!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),i=t.indexOf(document.activeElement);9===e.keyCode||"Tab"===e.code?e.shiftKey&&0===i?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||i!==t.length-1||(t[0].focus(),e.preventDefault()):27===e.keyCode||"Escape"===e.code?(e.preventDefault(),X()):37===e.keyCode||"ArrowLeft"===e.code?(e.preventDefault(),N()):39!==e.keyCode&&"ArrowRight"!==e.code||(e.preventDefault(),P())},B=()=>{A=[],R()},V=e=>{if(!ce(e.target)&&(e.preventDefault(),e.stopPropagation(),L.startX=L.x=e.pageX,L.startY=L.y=e.pageY,L.distance=0,A.push(e),2===A.length)){const{x:e,y:t}=te(A[0].pageX,A[0].pageY,A[1].pageX,A[1].pageY);L.startX=L.x=e,L.startY=L.y=t,L.distance=ee(A[0].pageX-A[1].pageX,A[0].pageY-A[1].pageY)/E.scale}},j=e=>{if(!A.length)return;const t=A.findIndex(t=>t.pointerId===e.pointerId);if(A[t]=e,2===A.length){const{x:e,y:t}=te(A[0].pageX,A[0].pageY,A[1].pageX,A[1].pageY),i=ee(A[0].pageX-A[1].pageX,A[0].pageY-A[1].pageY)/L.distance;return Z(K(i,1,4),e,t,e-L.x,t-L.y),L.x=e,void(L.y=t)}if(F()&&Q(e.pageX-L.x,e.pageY-L.y),L.x=e.pageX,L.y=e.pageY,!F()){const e=L.startX-L.x,t=L.startY-L.y;if(ee(e,t)<10)return;w[v].slider.classList.add("tobii__slider--is-dragging"),Math.abs(e)>Math.abs(t)&&w[v].elementsLength>1?w[v].slider.style.transform=`translate(${y-Math.round(e)}px, 0)`:l.swipeClose&&(w[v].slider.style.transform=`translate(${y}px, -${Math.round(t)}px)`)}},W=e=>{e.stopPropagation();const t=A.findIndex(t=>t.pointerId===e.pointerId);A.splice(t,1);const i=L.startX!==L.x||L.startY!==L.y;if(!i){const t=(new Date).getTime(),i=t-x;i<500&&i>100?(e.preventDefault(),x=0,F()?ie():Z(2,e.clientX,e.clientY,0,0)):(x=t,de()&&window.setTimeout(()=>{const{left:t,top:i,bottom:r,right:n,width:a}=e.target.getBoundingClientRect();L.startY<i||L.startY>r||!x||(L.startX>t&&L.startX<t+a/2?N():L.startX<n&&L.startX>n-a/2&&P())},500))}if(i&&!F()){w[v].slider.classList.remove("tobii__slider--is-dragging");const e=L.startX-L.x,t=L.startY-L.y,i=Math.abs(e),r=Math.abs(t);e<0&&i>l.threshold&&w[v].currentIndex>0?N():e>0&&i>l.threshold&&w[v].currentIndex!==w[v].elementsLength-1?P():t>0&&r>l.threshold&&l.swipeClose?X():R()}},G=e=>{const t=Math.sign(e.deltaY)>0?-1:1;(F()||t)&&(e.preventDefault(),Z(K(E.scale+t/(10/E.scale),1,4),e.pageX,e.pageY,0,0))},J=(e,t)=>{const{element:i,scale:r,originX:n,originY:a}=E,s="x"===e,o=s?n:a,l=s?"offsetWidth":"offsetHeight",d=i.parentNode[l],c=i[l],u=i.getBoundingClientRect(),p=(o-c/2)*(r-1),h=Math.max(0,Math.round(s?u.width:u.height)-d),b=Math.round(h/2);return K(t,0-b+p,b+p)},K=(e,t,i)=>Math.max(Math.min(e,i),t),F=()=>1!==E.scale,Q=(e,t)=>{0!==e&&(E.translateX=J("x",E.translateX+e)),0!==t&&(E.translateY=J("y",E.translateY+t));const{element:i,originX:r,originY:n,translateX:a,translateY:s,scale:o}=E;i.style.transformOrigin=`${r}px ${n}px`,i.style.transform=`translate(${a}px, ${s}px) scale(${o})`},Z=(e,t,i,r,n)=>{E.element||(E.element=u.querySelector(".tobii__slide--is-active img"));const{left:a,top:s}=E.element.getBoundingClientRect(),o=(i-s)/E.scale;E.originX=(t-a)/E.scale,E.originY=o,E.scale=e,Q(r,n)},ee=(e,t)=>Math.hypot(e,t),te=(e,t,i,r)=>({x:(e+i)/2,y:(t+r)/2}),ie=()=>{E.scale=1,E.originX=0,E.originY=0,E.translateX=0,E.translateY=0,Q(0,0),E.element=null},re=()=>{l.keyboard&&window.addEventListener("keydown",D),window.addEventListener("resize",U),window.addEventListener("popstate",X),ue("click",H),l.draggable&&(ue("pointerdown",V),ue("pointermove",j),ue("pointerup",W),ue("pointercancel",B),ue("pointerout",B),ue("pointerleave",B),ue("contextmenu",B)),ue("wheel",G)},ne=()=>{l.keyboard&&window.removeEventListener("keydown",D),window.removeEventListener("resize",U),window.removeEventListener("popstate",X),pe("click",H),l.draggable&&(pe("pointerdown",V),pe("pointermove",j),pe("pointerup",W),pe("pointercancel",B),pe("pointerout",B),pe("pointerleave",B),pe("contextmenu",B)),pe("wheel",G)},ae=()=>{l.draggable&&!w[v].slider.classList.contains("tobii__slider--is-draggable")&&w[v].slider.classList.add("tobii__slider--is-draggable"),!l.nav||1===w[v].elementsLength||"auto"===l.nav&&de()?(p.setAttribute("aria-hidden","true"),p.disabled=!0,h.setAttribute("aria-hidden","true"),h.disabled=!0):(p.setAttribute("aria-hidden","false"),p.disabled=!1,h.setAttribute("aria-hidden","false"),h.disabled=!1),g.setAttribute("aria-hidden",l.counter&&1!==w[v].elementsLength?"false":"true")},se=(e=null)=>{R(),g.textContent=`${w[v].currentIndex+1}/${w[v].elementsLength}`,(e=>{(!0===l.nav||"auto"===l.nav)&&!de()&&w[v].elementsLength>1?(p.setAttribute("aria-hidden","true"),p.disabled=!0,h.setAttribute("aria-hidden","true"),h.disabled=!0,1===w[v].elementsLength?l.close&&b.focus():0===w[v].currentIndex?(h.setAttribute("aria-hidden","false"),h.disabled=!1,h.focus()):w[v].currentIndex===w[v].elementsLength-1?(p.setAttribute("aria-hidden","false"),p.disabled=!1,p.focus()):(p.setAttribute("aria-hidden","false"),p.disabled=!1,h.setAttribute("aria-hidden","false"),h.disabled=!1,"left"===e?p.focus():h.focus())):l.close&&b.focus()})(e)},oe=()=>{le()&&X(),Object.entries(w).forEach(e=>{e[1].gallery.forEach(e=>{C(e)})}),w={},v=null;for(const e in s)s[e].onReset()},le=()=>"false"===u.getAttribute("aria-hidden"),de=()=>"ontouchstart"in window,ce=e=>-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.nodeName)||e===p||e===h||e===b,ue=(e,t)=>{u.addEventListener(e,t)},pe=(e,t)=>{u.removeEventListener(e,t)};return(e=>{if(document.querySelector("div.tobii"))return void console.log("Multiple lightbox instances not supported.");l=(e=>({selector:".lightbox",captions:!0,captionsSelector:"img",captionAttribute:"alt",captionText:null,captionHTML:!1,nav:"auto",navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="15 6 9 12 15 18" /></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" /></svg>'],navLabel:["Previous image","Next image"],close:!0,closeText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',closeLabel:"Close lightbox",loadingIndicatorLabel:"Image loading",counter:!0,download:!1,downloadText:"",downloadLabel:"Download image",keyboard:!0,zoom:!0,zoomText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="16 4 20 4 20 8" /><line x1="14" y1="10" x2="20" y2="4" /><polyline points="8 20 4 20 4 16" /><line x1="4" y1="20" x2="10" y2="14" /><polyline points="16 20 20 20 20 16" /><line x1="14" y1="14" x2="20" y2="20" /><polyline points="8 4 4 4 4 8" /><line x1="4" y1="4" x2="10" y2="10" /></svg>',docClose:!0,swipeClose:!0,hideScrollbar:!0,draggable:!0,threshold:100,rtl:!1,loop:!1,autoplayVideo:!1,modal:!1,theme:"tobii--theme-default",...e}))(e),u||(u=document.createElement("div"),u.setAttribute("role","dialog"),u.setAttribute("aria-hidden","true"),u.classList.add("tobii"),u.classList.add(l.theme),p=document.createElement("button"),p.className="tobii__btn tobii__btn--previous",p.setAttribute("type","button"),p.setAttribute("aria-label",l.navLabel[0]),p.innerHTML=l.navText[0],u.appendChild(p),h=document.createElement("button"),h.className="tobii__btn tobii__btn--next",h.setAttribute("type","button"),h.setAttribute("aria-label",l.navLabel[1]),h.innerHTML=l.navText[1],u.appendChild(h),b=document.createElement("button"),b.className="tobii__btn tobii__btn--close",b.setAttribute("type","button"),b.setAttribute("aria-label",l.closeLabel),b.innerHTML=l.closeText,u.appendChild(b),g=document.createElement("div"),g.className="tobii__counter",u.appendChild(g),document.body.appendChild(u));const t=document.querySelectorAll(l.selector);if(!t)throw new Error(`Ups, I can't find the selector ${l.selector} on this website.`);const i=[];t.forEach(e=>{const t=e.hasAttribute("data-group")?e.getAttribute("data-group"):"default";let r=e.href;e.hasAttribute("data-target")&&(r=e.getAttribute("data-target")),r+="__"+t,void 0!==i[r]?e.addEventListener("click",e=>{$(t),T(),e.preventDefault()}):(i[r]=1,I(e))})})(a),n.open=T,n.previous=N,n.next=P,n.close=X,n.add=I,n.remove=C,n.reset=oe,n.destroy=()=>{oe(),u.parentNode.removeChild(u)},n.isOpen=le,n.slidesIndex=()=>w[v].currentIndex,n.select=e=>{const t=w[v].currentIndex;if(!le())throw new Error("Ups, I'm closed.");if(le()){if(!e&&0!==e)throw new Error("Ups, no slide specified.");if(e===w[v].currentIndex)throw new Error(`Ups, slide ${e} is already selected.`);if(-1===e||e>=w[v].elementsLength)throw new Error(`Ups, I can't find slide ${e}.`)}w[v].currentIndex=e,O(t),M(e),e<t&&(se("left"),k(t),q(e-1)),e>t&&(se("right"),k(t),q(e+1))},n.slidesCount=()=>w[v].elementsLength,n.selectGroup=$,n.currentGroup=()=>v,n.on=ue,n.off=pe,n}});
