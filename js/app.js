/* =====================================
   川中島中学校ポータルサイト
   app.js
===================================== */

/* ---------- 時計 ---------- */

function updateClock() {

    const now = new Date();

    const clock = document.getElementById("clock");

    if (clock) {
        clock.textContent = now.toLocaleTimeString("ja-JP", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }

}

/* ---------- 日付 ---------- */

function updateDate() {

    const now = new Date();

    const week = ["日", "月", "火", "水", "木", "金", "土"];

    const date = document.getElementById("date");

    if (date) {
        date.textContent =
            `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日（${week[now.getDay()]}）`;
    }

}

/* ---------- テーマ変更 ---------- */

function setTheme(theme) {

    document.body.classList.remove(
        "theme-blue",
        "theme-green",
        "theme-purple",
        "theme-orange"
    );

    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);

}

/* ---------- 保存したテーマを読み込む ---------- */

function loadTheme() {

    const theme = localStorage.getItem("theme") || "theme-blue";

    document.body.classList.add(theme);

}

/* ---------- 初期処理 ---------- */

document.addEventListener("DOMContentLoaded", () => {

    loadTheme();

    updateDate();
    updateClock();

    setInterval(updateClock, 1000);
loadWeather();
    const blue = document.getElementById("blueTheme");
    const green = document.getElementById("greenTheme");
    const purple = document.getElementById("purpleTheme");
    const orange = document.getElementById("orangeTheme");

    if (blue) {
        blue.addEventListener("click", () => setTheme("theme-blue"));
    }

    if (green) {
        green.addEventListener("click", () => setTheme("theme-green"));
    }

    if (purple) {
        purple.addEventListener("click", () => setTheme("theme-purple"));
    }

    if (orange) {
        orange.addEventListener("click", () => setTheme("theme-orange"));
    }

});

/* ---------- ページ最上部へ ---------- */

function scrollTopPage() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
/* ---------- 長野市のリアルタイム天気 ---------- */

async function loadWeather(){

    try{

        const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=36.6513&longitude=138.1810&current=temperature_2m,weather_code"
        );

        const data = await response.json();

        const temp = document.getElementById("weatherTemp");
        const icon = document.getElementById("weatherIcon");
        const text = document.getElementById("weatherText");

        if(temp){

            temp.textContent =
            `${Math.round(data.current.temperature_2m)}℃`;

        }

        if(icon && text){

            const code =
            data.current.weather_code;

            if(code===0){

                icon.textContent="☀️";
                text.textContent="快晴";

            }

            else if(
                code<=3
            ){

                icon.textContent="🌤";
                text.textContent="晴れ";

            }

            else if(
                code<=48
            ){

                icon.textContent="☁️";
                text.textContent="くもり";

            }

            else if(
                code<=67
            ){

                icon.textContent="🌧";
                text.textContent="雨";

            }

            else if(
                code<=77
            ){

                icon.textContent="❄️";
                text.textContent="雪";

            }

            else{

                icon.textContent="⛈";
                text.textContent="荒天";

            }

        }

    }

    catch(e){

        console.log(e);

    }

}
