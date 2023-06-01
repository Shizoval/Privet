// ==UserScript==
// @name         Privet
// @version      0.0.1
// @description  Free open-source game cheat for Tanki Online.
// @author       Privet
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui.umd.js
// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui_impl.umd.js

// @downloadURL  https://raw.githubusercontent.com/T0HBA/ZZ/main/release/shizoval.user.js
// @updateURL    https://raw.githubusercontent.com/T0HBA/ZZ/main/release/shizoval.meta.js

// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow

// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/T0HBA/ZZ/main/release/shizoval.min.js',
    nocache: true,
    onload: r => eval(r.responseText)
})

// Писать код здесь
console.log('Shizoval New Versoin!!');