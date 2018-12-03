const form = document.querySelector(".js-form"), 
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");
//쿼리셀렉트는 모든걸 가져올수 있다 조심조심
const USER_US ="currentUser",
      SHOWING_CN = "showing";
      //클래스 네임

function saveName(text){
    console.log(text);
    
    localStorage.setItem(USER_US,text);

}


function paintGreeting(text){
            form.classList.remove(SHOWING_CN);
            greeting.classList.add(SHOWING_CN);
            greeting.innerText = `Hello ${text}`;
}
function handleSubmit(event){
     //event 기본으로 막기
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    
}


function askforName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}

function loadName(){
    const currentName = localStorage.getItem(USER_US);
    console.log(currentName);
    
    if (currentName == null) {
        console.log('cunrrentName null');
       askforName();
    }else{
        paintGreeting(currentName);
    }
}



function init(){
    console.log('init')
    loadName();
}
init();


