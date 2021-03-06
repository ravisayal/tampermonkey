// ==UserScript==
// @name         YouTube - Ad Skip
// @version      1.0
// @description  Skips and removes ads on YouTube automatically
// @author       Bobocato
// @match        https://www.youtube.com/*
// @grant        none
// @namespace https://greasyfork.org/users/167089
// ==/UserScript==

const equalText1 = "Skip Ads";
const equalText2 = "Skip Ad";

function addNewStyle(newStyle) {
    var styleElement = document.getElementById('styles_js');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}

function skipAd(){
    console.log("Tried to skip a ad");
    if(document.getElementsByClassName("ytp-ad-skip-button").length > 0){
        console.log("found ad skip button");
        if(document.getElementsByClassName("ytp-ad-skip-button")[0].childNodes[0].textContent === equalText1 || document.getElementsByClassName("ytp-ad-skip-button")[0].childNodes[0].textContent === equalText2){
            document.getElementsByClassName("ytp-ad-skip-button")[0].click();
            console.log("skipped add");
        } else {
            setTimeout(skipAd(), 1000);
            console.log("no skip button");
        }
    }  else    {
        console.log("no skip ad main condition");
      }
}

(function() {
    'use strict';
    addNewStyle('.ytp-ad-overlay-slot {display:none !important;}');
    setInterval(function (){
        if(window.location.href.substring(0,30) == "https://www.youtube.com/watch?"){
            skipAd();
        }
    }, 2500);
})();