"use strict";var precacheConfig=[["/index.html","1ea123f0a2f845a94231fa40c7d6411a"],["/static/css/main.900e3ef2.css","24eb715fb13f9651f5862cda62d129e4"],["/static/js/main.cf9f5532.js","a7690b70f83406684ea39ee24b1c3fb8"],["/static/media/bkgrd-1.8dcba50a.png","8dcba50ac6abb56e3d2b06a6211203cf"],["/static/media/bkgrd-2.0f0e5c79.png","0f0e5c79a4a5f26389d3467db2b56e26"],["/static/media/bkgrd-9.f8749389.png","f87493899d71d6f6de97438ed1ff8e15"],["/static/media/bkpic.7353cd16.png","7353cd16b345408ad5095306da44978e"],["/static/media/eyes-2.9eafb76c.png","9eafb76cbe2ccb4c9a585a24acd8c820"],["/static/media/eyes-3.f56d8b52.png","f56d8b52a74a026b7798a99f44fe866b"],["/static/media/eyes-4.4d380fcd.png","4d380fcd4b0a6cde91dd4a4337d733c5"],["/static/media/hair-1.f2db85a2.png","f2db85a2eb0a237dcf14f6d517272f56"],["/static/media/hair-10.5453c1f7.png","5453c1f79302218a59eb23bd641259f4"],["/static/media/hair-11.159195b5.png","159195b511a218069d539021af66a745"],["/static/media/hair-12.d9128ea1.png","d9128ea1ffc240218d8cef9c3a3729e6"],["/static/media/hair-13.abef688e.png","abef688ee529b94624faf44abb2d5cc8"],["/static/media/hair-14.3e9ca918.png","3e9ca918ba9b26afef7304c338ed0f7d"],["/static/media/hair-15.fd29e210.png","fd29e21018c5899d2957af19256a3dac"],["/static/media/hair-16.8f1b1ebb.png","8f1b1ebb0b1e0b315d9307b083a21b83"],["/static/media/hair-2.1658f141.png","1658f1417559c3e841430d2bd6a7bfe0"],["/static/media/hair-3.2111903a.png","2111903a8013a20f650fe6a04bdd2758"],["/static/media/hair-4.3bce996c.png","3bce996c188b03b0e6e16c3386dc2832"],["/static/media/hair-5.cbc7c494.png","cbc7c4940a287d9fc26d40dcf1c3da1d"],["/static/media/hair-6.1be8e908.png","1be8e9089616eb3e561df239bbbe3a45"],["/static/media/hair-7.aecf8c8b.png","aecf8c8b8553215d15a60870d227c9c2"],["/static/media/hair-8.630b3607.png","630b3607eeeb01bbcff11408f8342070"],["/static/media/hair-9.12b6f6dc.png","12b6f6dc4eab73d7e96bd3f0de86808a"],["/static/media/head-10.cd17429a.png","cd17429a63dbfd06b14d4cf1def68ebe"],["/static/media/head-2.d9fc699d.png","d9fc699de3d8a52d67b2c971589c7410"],["/static/media/head-3.2e4e5a39.png","2e4e5a39c755c47d574424f5967fadd0"],["/static/media/head-5.5d3edce2.png","5d3edce23e1bcd9bc0b350aaa106feee"],["/static/media/head-6.a5cae592.png","a5cae5921f147a2d2cc8cfc8e3787b4c"],["/static/media/head-7.a6ed33cd.png","a6ed33cdebbebf881ae8c90618300a15"],["/static/media/head-9.90074688.png","9007468832136976895b30b7f244041e"],["/static/media/mug-home.80b8607a.png","80b8607a76b9220b047f7f439d60d0ee"],["/static/media/mug.fbf029f7.png","fbf029f7b24b8ae9d765dcbdb57ca716"],["/static/media/pillow-home.a97da656.png","a97da6560312bae38c75139ae5d30595"],["/static/media/pillow.1aaa87ea.png","1aaa87ea3c23901dcc034abd71485e37"],["/static/media/shirt-home.6a999e08.png","6a999e0810cc205e654b6afbd5a28197"],["/static/media/shirt.a09523e3.png","a09523e3ce1291961f13872ad6f3662d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});