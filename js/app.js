function updateClock() {

    const now = new Date();

    const clock = document.getElementById("clock");

    if(clock){

        clock.textContent = now.toLocaleTimeString("ja-JP");

    }

}

function updateDate(){

    const now = new Date();

    const week=["日","月","火","水","木","金","土"];

    const date=document.getElementById("date");

    if(date){

        date.textContent =
        `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日（${week[now.getDay()]}）`;

    }

}
