// ==UserScript==
// @name         Yahoo Remove Ad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mail.yahoo.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

 //   var element = document.querySelector("#mail-app-component-container > div.D_F.o_v.p_R.I_ZnwrMC");
 //       element.parentNode.removeChild(element);
      var elements = document.getElementsByClassName("D_F o_v p_R I_ZnwrMC");
       while(elements.length > 0){
       elements[0].parentNode.removeChild(elements[0]);
        }




})();