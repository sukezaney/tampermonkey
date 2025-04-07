// ==UserScript==
// @name         Twitter
// @namespace    http://tampermonkey.net/
// @version      2023-12-18
// @description  try to take over the world!
// @author       You
// @match        https://x.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=x.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const version = '20250401-2';

    const pagename = '****';
    if (window.location.href.includes('1801429460484506043')) {
        const pagename = 'お返しリスト・返信後移動';
    } else if (window.location.href.includes('1818370840066769064')) {
        const pagename = '交流が多い方';
    } else if (window.location.href.includes('1895099511099531593')) {
        const pagename = '交流中A';
    } else if (window.location.href.includes('1897553827957772460')) {
        const pagename = '交流中B';
    } else if (window.location.href.includes('1895092267939176475')) {
        const pagename = '交流チャレンジ';
    } else if (window.location.href.includes('1834018910536171638')) {
        const pagename = '交流履歴';
    }

    var new_element = document.createElement('div');
    let username = location.pathname.replace('/', '');

    const today = new Date();
    const year = today.getFullYear() - 1;
    const year2 = today.getFullYear() - 2;
    const month = today.getMonth() + 1;
    const date = today.getDate();
    let date_start = date; // ← let に変更！
    let date_end = date;

    if (date == 1) {
      date_start = 1; // OK
    } else {
      date_start = date - 1;
    }
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        if (date == 31) {
            date_end = 31;
        } else{
            date_end = date + 1;
        }
    } else if (month == 4 || month == 6 || month == 9 || month == 11 ){
        if (date == 30) {
            date_end = 30;
        } else{
            date_end = date + 1;
        }
    } else if (month == 2 ){
        if (date == 28) {
            date_end = 28;
        } else if (date == 29) {
            date_end = 29;
        } else{
            date_end = date + 1;
        }
    }

    let text = '<button id="closeButton">Toggle</button><div id="tampermonkey_content" style="display: block;">';
    if (username == 'home') {
        text = date_start;
        text = '<table id="tampermonkey_table" style="padding: 40px 0 0 0;"><tr>' + pagename + '<br>ver. ' + version + '(ho)<td></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=filter%3Afollows%20exclude%3Aretweets%20exclude%3Areplies&src=typed_query&f=live">RT&返信除外</a></p></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=filter%3Afollows%20filter%3Aimages&src=recent_search_click&f=live">画像のみ</a></p></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=from%3A%40OkimiyaMirin%20%20since%3A' + year + '-' + month + '-' + date_start + '_00%3A00%3A00_JST%20until%3A' + year + '-' + month + '-' + date_end + '_23%3A59%3A59_JST&src=typed_query&f=live">１年前</a></p></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=from%3A%40OkimiyaMirin%20%20since%3A' + year2 + '-' + month + '-' + date_start + '_00%3A00%3A00_JST%20until%3A' + year2 + '-' + month + '-' + date_end + '_23%3A59%3A59_JST&src=typed_query&f=live">２年前</a></p></td></tr>';
        text = text + '</table><div id="orgMsg" style="padding: 20px 0 0 0; height: 1em; font-weight: bold; color: red;"></div>';
    } else if (username == 'bunnyburrow') {
        text= '<table id="tampermonkey_table" style="padding: 40px 0 0 0;"><tr>' + pagename + '<br>ver. ' + version + '(bb)<td></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=from%3A%40bunnyburrow%20exclude%3Aretweets%20exclude%3Areplies&src=typed_query&f=live">RT&返信除外</a></p></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=from%3A%40bunnyburrow%20filter%3Aimages&src=typed_query&f=live">画像のみ</a></p></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=from%3A%40OkimiyaMirin%20%20since%3A' + year + '-' + month + '-' + date_start + '_00%3A00%3A00_JST%20until%3A' + year + '-' + month + '-' + date_end + '_23%3A59%3A59_JST&src=typed_query&f=live">１年前</a></p></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=from%3A%40OkimiyaMirin%20%20since%3A' + year2 + '-' + month + '-' + date_start + '_00%3A00%3A00_JST%20until%3A' + year2 + '-' + month + '-' + date_end + '_23%3A59%3A59_JST&src=typed_query&f=live">２年前</a></p></td></tr>';
        text = text + '</table><div id="orgMsg" style="padding: 20px 0 0 0; height: 1em; font-weight: bold; color: red;"></div>';
    } else{
        text = text + '<table id="tampermonkey_table" style="padding: 40px 0 0 0;"><tr>' + pagename + '<br>ver. ' + version + '(el)<td></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=from%3A%40' + username + '%20exclude%3Aretweets%20exclude%3Areplies&src=typed_query&f=live">RT&返信除外</a></p></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=from%3A%40' + username + '%20filter%3Aimages&src=typed_query&f=live">画像のみ</a></p></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=from%3A%40OkimiyaMirin%20%20since%3A' + year + '-' + month + '-' + date_start + '_00%3A00%3A00_JST%20until%3A' + year + '-' + month + '-' + date_end + '_23%3A59%3A59_JST&src=typed_query&f=live">１年前</a></p></td></tr>';
        text = text + '<tr><td style="padding-bottom: 0.5em; font-size: 18px;"><p style="margin: 0; border: none; border-radius: 0.5em; padding: 0.5em 1em; background-color: #8dc49b;"><a style="text-decoration: none; color: #fff;" href="https://x.com/search?q=from%3A%40OkimiyaMirin%20%20since%3A' + year2 + '-' + month + '-' + date_start + '_00%3A00%3A00_JST%20until%3A' + year2 + '-' + month + '-' + date_end + '_23%3A59%3A59_JST&src=typed_query&f=live">２年前</a></p></td></tr>';
        text = text + '</table><div id="orgMsg" style="padding: 20px 0 0 0; height: 1em; font-weight: bold; color: red;"></div>';
    }
    text = text + '<p>時計　…タイムライン<br>地球　…巡回リスト(ラジオ1)<br地球＆月　…巡回リスト(ラジオ1)<br>旗　…移動</p>'
    text = text + '<p>ダンス　…フォロー規模</p>'
    text = text + '<p>ハート　…ふぁぼ履歴<br>握手　…交流<br>トーク…リプライ履歴<br>ひよこ　…とりあえず<br>サングラス　…表示<br>パーティー　…友人</p>'
    text = text + '</div>'
    new_element.innerHTML = text;
    new_element.id = 'tampermonkey';
    new_element.style.display = 'block';
    new_element.style.width = '200px';
    new_element.style.position = 'fixed';
    new_element.style.top = 0;
    new_element.style.left = 0;
    new_element.style.margin = '0 0 0 60px';
    new_element.style.zIndex = 10000;
    var body = document.getElementsByTagName('body')[0];
    body.insertBefore(new_element, body.firstChild);

    if(document.URL.match("/following")) {
    const style = document.createElement('style');
    style.textContent ='.r-1adg3ll{ background-color: #FFC2C1; } .r-1adg3ll:has(.r-z2wwpe){ background-color: #fff; } .r-1wbh5a2{ background-color: #fff; } .r-dnmrzs .r-1adg3ll{ background-color: transparent; } .r-fif9oo .r-1adg3ll{ background-color: transparent; }';
    document.head.appendChild(style);
    }

    document.getElementById("closeButton").addEventListener("click", function() {
            var element = document.getElementById("tampermonkey_content");
            if (element.style.display === "block") {
                element.style.display = "none";
            } else {
                element.style.display = "block";
            }
    });


})();

(function() {
    const button = document.querySelector('#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-14lw9ot.r-jxzhtn.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > div > div > div.css-175oi2r.r-1habvwh.r-18u37iz.r-1w6e6rj.r-1wtj0ep > div.css-175oi2r.r-obd0qt.r-18u37iz.r-1w6e6rj.r-1h0z5md.r-dnmrzs > div.css-175oi2r > div.css-175oi2r.r-6gpygo > button');
    button.addEventListener('click', () => {
      alert('リストの変更');
    });

})();