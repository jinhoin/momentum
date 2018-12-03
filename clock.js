//wow
const clockContainer = document.querySelector(".js-clock"),clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    // const nowDate = date.getHours() + ":" + date.getMinutes();
    // console.log('nowDate', nowDate);
    // return nowDate;
    
    //nomad
    const hour = date.getHours(), minute = date.getMinutes(), second = date.getSeconds();
    clockTitle.innerHTML = `${hour}:${minute}:${second < 10 ? `0${second}` : second}`;
    // 01 02 로보이게하자
    
}



function init(){
    getTime();
    setInterval(getTime, 1000);
    
    //  clockTitle.innerHTML = getTime(); 내가하거
}

init();

