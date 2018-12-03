//alert('Im Working Im JS , Im Beautuful Im worth it')

//한줄에 있을려면 세미콜론이있어야된다 아닐경우 생략가능
let a = 221; let b = a - 5;
console.log(b);
//let이란 ?
// 자바에서는 상수를 const  
// 변수의 변하는것을 방해

a = 4;

const ab = '변하지 않는다';
//console.log(b, a)

// todo : finish this

// 변수를 선언할때는 무조건  const 필요할때먼 let을 쓰자
//1. String  모든걸 같이 붙이는것 엔딩을 가지고있음 텍스트를 보통뜻함
const what = "Hoin" //""없을경우 찾는다 변수를
const what2 = "2213129312"; //스트링이다
const what3 =  true; // 이진법 Boolean
const what4 = 1111;  // int
const what5 = 5.555; ///float

console.log(what);
//이모티콘도 되넹?



//변수작성
//1  Create
//2. Initialize
//3. Use


// 변수명 작성방법 카멜 케이스
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
const daysOfWeek = ['monday','tue','wed','thu',"fri", true, 111, 'larara', 'sskdfsakf'];//Array

console.log(monday, tue, wed, thu, fri);
//array
// Array는 여러가지드르을 묵는거야
console.log(daysOfWeek);
console.log(daysOfWeek[432]);//undefind


// array const hoinInfo = ['Nicolas','22', true, 'seoul'];
const hoinInfo =  {
      name : 'hoin',
      age : 22,
      gender : "Male",
      isHansome: true,
      favMovies: ["Along the gods", "LOTR", "OldBoy"],
      favFood : [ //객체 안에 객체를 넣었다
          {
              name : "Kimchi", fatty: false }, 
          { 
              name: "cheesBuger", fatty : true}
        ]

    };
console.log(hoinInfo);

hoinInfo.gender = 'female';;

console.log(hoinInfo.gender);
// 객체안에 배열로 찾앗다
console.log('호인이의 좋앙하는 음식',hoinInfo.favFood[1]);
