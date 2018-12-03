const todoForm = document.querySelector(".js-TodoForm"),
    todoinput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-TodoList");
const TO_DOS_LS = "todos";
let toDos = [];


function handleSubmit(event){
    console.log('handle submit init');
    
    event.preventDefault();
    const currentValue = todoinput.value;
    //console.log(currentValue);
    paintTodo(currentValue);
    todoinput.value = "";
}
// function filterFn(todo){
//     return todo.id === 1;
// }
function delTodo(event){
//    console.dir(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);

    const cleanTodo = toDos.filter(function(todo){
        console.log(todo.id, li.id);
        return todo.id !== parseInt(li.id);
    });
    console.log(cleanTodo,'cleantodo');
    toDos = cleanTodo;
    saveTodo();
}

function paintTodo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newID = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener('click', delTodo);

    span.innerText=text;
    
    li.appendChild(span);
    //li.innerHTML = `<li>${text}</li>`;
    li.appendChild(delBtn);
    li.id = newID;
    todoList.appendChild(li);

    const todoObj = {
        text : text,
        id : newID
    }

    toDos.push(todoObj);
    console.log(todoObj);
    saveTodo();
    
}
function saveTodo(){
    // 로컬 저장소에는 스트링만 들어가지 object 를 취급안하다
    localStorage.setItem(TO_DOS_LS, JSON.stringify(toDos));
}


function loadTodo(){
    const loadstoDos = localStorage.getItem(TO_DOS_LS);
    if (loadstoDos !== null) {
        console.log(loadstoDos);
        const paresdTodos = JSON.parse(loadstoDos);
        console.log('54line paresdTodos',paresdTodos);
        paresdTodos.forEach(function(todos){
            //array를 위한 것임
            console.log(todos.text);
            paintTodo(todos.text);
        });
   }
}

function init(){
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);
};
init();