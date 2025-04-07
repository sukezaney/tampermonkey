// ==UserScript==
// @name         Lancers
// @namespace    http://tampermonkey.net/
// @version      2024-12-11
// @description  try to take over the world!
// @author       You
// @match        https://www.lancers.jp/*
// @exclude      https://www.lancers.jp/mypage/message*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lancers.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const version = '20240910';

    var new_element = document.createElement('div');

    let text = '';
    text = '<table style="padding: 20px 0 0 0;"><tr>ver. ' + version + '(ho)<td></td></tr>';
    text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://www.lancers.jp/myplan/">プラン一覧</a></p></td></tr>';
    text = text + '</table><div id="orgMsg" style="padding: 20px 0 0 0; height: 1em; font-weight: bold; color: red;"></div>';
    text = text + '<p></p>'
    text = text + '<p></p>'
    text = text + '<p></p>'
    new_element.innerHTML = text;
    new_element.id = 'tampermonkey';
    new_element.style.display = 'block';
    new_element.style.width = '200px';
    new_element.style.position = 'fixed';
    new_element.style.top = 0;
    new_element.style.left = 0;
    new_element.style.margin = '100px 0 0 60px';
    new_element.style.zIndex = 10000;
    var body = document.getElementsByTagName('body')[0];
    body.insertBefore(new_element, body.firstChild);

})();
