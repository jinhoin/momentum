// const hoinInfo = {
//   name : "hoin",
//   age: 33,
//   gender: "Male",
//   isHansome : true

// }
// console.log(hoinInfo, console);


// //argument
// function sayHello(name, age){
//   //console.log('Hello!', name,' you have ', age , 'year of age');
//    //console.log('Hello!'+, name,' you have '+ age + 'year of age'); 
//   //백틱을 활용해서 더 멋짓게 사용 할수있다
//   //console.log(`Hello! ${name} you have ${age} year of age`);
//   return `Hello! ${name} you have ${age} year of age`;
// }

// sayHello('babo',28);

// console.log('hi');

// const greetHoin = sayHello('hoin', 27
// );

// //undefine
// console.log(greetHoin);


// //
// const calculator = {
//   plus : function(a,b){
//     return a+b;
//   },
//   min : function(a,b){
//     return a-b;
//   },
//   multi : function(a,b){
//     return a*b;
//   },
//   divide : function(a,b){
//     return a/b;
//   }

// }

//   const pResult = calculator.plus(5,5);
//   const mResult = calculator.min(5,5);
//   const mtResult = calculator.multi(5,5);
//   const dResult = calculator.divide(5,5);
  
//   console.log(pResult);
//   console.log(mResult);
//   console.log(mtResult);
//   console.log(dResult);

//   //const title = document.getElementById("title");
// const title=document.querySelector("#title");

//   console.log(title);
// //Dom에 접근에서 바꾸준다
// //html 를 접근 해 객체로 바꿔준다
//   title.innerHTML = 'Hi ! from JS';
//   title.style.color = "red"; 
//   document.title = "Im one You now";

//   console.dir(document);


  function handleResize(event){
    //console.log("I have been Resize");
   // console.log(event);
    
  }
  //clcick resize submit before closing 
  //이벤트를 가로챌수 있다  window  
  

  window.addEventListener("resize", handleResize);

  
  // title.addEventListener("click", handleClick);

  //  if (10 === 5) {
  //     console.log('hi');
      
  //  }else{
  //    console.log('ho');
     
  //  }

  // const age =  prompt("How old are you");

  // console.log(age);

  const title =  document.querySelector("#title");
  const CLICKED_CLASS = "clicked";
  // const BASE_COLOR = "rgb(52, 73, 94)";
  // const OTHER_COLOR = "#7F8C8D";
  console.log(title.className,'업다');
  
  function handleClick(){
    // const currentClass = title.className;
  // console.log(currentClass);
    // console.log(CLICKED_CLASS);
      
    //버전1
    // if (currentClass !== CLICKED_CLASS) {
    //   title.className = CLICKED_CLASS;
    // }else{
    //   title.className = "";
    // }


    // ////버전2
    // const hasclass = title.classList.contains(CLICKED_CLASS);

    // if (!hasclass) {
    //   title.classList.add(CLICKED_CLASS);
    // }else{
    //   title.classList.remove(CLICKED_CLASS);
    // }

    //버전3
    title.classList.toggle(CLICKED_CLASS);

    // console.log(title.style.color);
    // 
    //title.style.color = "blue";
  // const current_color = title.style.color;
  //   if (current_color === BASE_COLOR) {
  //     title.style.color = OTHER_COLOR;
  //   }else{
  //     title.style.color = BASE_COLOR; 
  //   }
  }
   function init(){
    //  title.style.color = BASE_COLOR;
    //  console.log(title.style.color);
     
     title.addEventListener('click', handleClick);
    //  window.addEventListener("offline", handelOffline);
    //  window.addEventListener("online", handelOnline);
       
   }
   init();



   //DOM은 MDN을 참고하자

   function handelOffline(){
     console.log("lalalaal");
   }

   function handelOnline(){
     console.log("welcome Back");
   }

  





  
 