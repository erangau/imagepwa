(this["webpackJsonppwa-image-app"]=this["webpackJsonppwa-image-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(2),r=n.n(a),c=(n(9),n(10),n(3)),l=function(){var e,t,n="",a=Object(o.useState)(n),r=Object(c.a)(a,2),l=r[0],s=r[1];return i.a.createElement("div",null,i.a.createElement("video",{src:"src",width:"width",height:"height",autoPlay:!0}),i.a.createElement("img",{src:l,alt:"",width:"width",height:"height"}),i.a.createElement("hr",null),i.a.createElement("button",{type:"button",onClick:function(){e=document.querySelector("video");var t=navigator.mediaDevices;t.getUserMedia({video:!0});t.getUserMedia({video:!0}).then((function(t){e&&(e.srcObject=t),!0}),(function(e){console.log(e)}))}},"Camera"),i.a.createElement("button",{type:"button",onClick:function(){var o=function(){if(e){var n=document.createElement("canvas");return n.height=e.clientHeight,n.width=e.clientWidth,(t=n.getContext("2d"))&&t.drawImage(e,0,0,n.width,n.height),n}}();o&&(n=o.toDataURL("image/jpeg")),s(n)}},"Take Photo"),i.a.createElement("hr",null))},s=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(l,null)))},u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(s,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/imagepwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/imagepwa","/service-worker.js");u?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()}],[[4,1,2]]]);
//# sourceMappingURL=main.f1e0ed92.chunk.js.map