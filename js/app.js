/* =====================================
   川中島中学校ポータルサイト
   app.js
===================================== */

/* ---------- 時計 ---------- */

function updateClock() {

    const now = new Date();

    const week = ["日","月","火","水","木","金","土"];

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    if (clock) {
        clock.textContent = now.toLocaleTimeString("ja-JP");
    }

    if (date) {
        date.textContent =
            `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日（${week[now.getDay()]}）`;
    }

}

/* ---------- テーマカラー ---------- */

function setTheme(theme){

    document.body.classList.remove(
        "theme-blue",
        "theme-green",
        "theme-purple",
        "theme-orange"
    );

    document.body.classList.add(theme);

    localStorage.setItem("theme",theme);

}

/* ---------- 保存したテーマを読み込む ---------- */

function loadTheme(){

    const theme =
        localStorage.getItem("theme") || "theme-blue";

    document.body.classList.add(theme);

}

/* ---------- 設定画面のボタン ---------- */

document.addEventListener("DOMContentLoaded",()=>{

    loadTheme();

    updateClock();

    setInterval(updateClock,1000);

    const blue=document.getElementById("blueTheme");
    const green=document.getElementById("greenTheme");
    const purple=document.getElementById("purpleTheme");
    const orange=document.getElementById("orangeTheme");

    if(blue){

        blue.addEventListener("click",()=>{

            setTheme("theme-blue");

        });

    }

    if(green){

        green.addEventListener("click",()=>{

            setTheme("theme-green");

        });

    }

    if(purple){

        purple.addEventListener("click",()=>{

            setTheme("theme-purple");

        });

    }

    if(orange){

        orange.addEventListener("click",()=>{

            setTheme("theme-orange");

        });

    }

});

/* ---------- ページを一番上へ ---------- */

function scrollTopPage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
