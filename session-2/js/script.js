const todoInputElement = document.querySelector('.todo-input');
const todoEnterBtn = document.querySelector('.enter');
const todoList = document.querySelector('.todo-list');
const completeAllBtn = document.querySelector('.complete-all-btn');
const leftItem = document.querySelector('.left-items');
const showAll = document.querySelector('.show-all-btn');
const showActive = document.querySelector('.show-active-btn');
const showCompleted = document.querySelector('.show-completed-btn');
const clearAll = document.querySelector('.clear-all-btn');
const clock =document.querySelector('.todo-title');

let todos = []; // todo를 모아놓은 객체 배열 {id, content, isCompleted}
let id = 1; // todo 객체의 id가 될 숫자

let isAllCompleted = false; // todos 속 모든 todo의 isCompleted가 true인지 저장하는 Boolean

let curType = 'all'; // 현재 필터값을 저장하는 string -> 'all', 'active', 'completed', 'clear'

const setTodos = (newTodos) => todos = newTodos; // 현재 todos를 매개변수 newTodos로 바꿔주는 함수

// 현재 todos 배열을 반환하는 함수
const getAllTodos = () => {
    if(curType==='all'){
        return todos;
    }
    else if(curType === 'active'){
        return todos.filter(todos => !todos.isCompleted);
    }
    else if(curType === 'completed'){
        return todos.filter(todos => todos.isCompleted);
    }
    else{
        return todos=[];
    }
}

//all
showAll.addEventListener('click', () =>{
    curType = 'all';
    paintTodos();
});

//active
showActive.addEventListener('click', () =>{
    curType = 'active';
    paintTodos();
});

//completed
showCompleted.addEventListener('click', () =>{
    curType = 'completed';
    paintTodos();
});

//clear
clearAll.addEventListener('click', () =>{
    curType='clear';
    paintTodos();
    setLeftItems();
});


//이벤트리스너 작성하기
// 현재 input에 입력된 value를 가져와서 처리하는 함수 -> 키보드 enter, 버튼 클릭 2가지로 수행
const getInputValue = () => {
    // todoInputElement에 'enter'키가 "keypress"됐을 때, doTrimValue() 실행
    todoInputElement.addEventListener('keypress', (e) =>{
        if(e.key === 'Enter'){
            doTrimValue(e.target.value);
        }
    });
    // input 옆 enter 버튼을 'click'했을 때, doTrimValue() 실행
    todoEnterBtn.addEventListener('click', () =>{
        doTrimValue(todoInputElement.value);
    });
};
getInputValue();

//이벤트 리스너가 실행할 함수 작성하기
// 앞뒤 공백 제거 후, 빈 문자열이 아닐 경우 pushTodos() 실행
const doTrimValue = (val) =>{ 
    const trimVal = String(val).trim(); // string으로 형 변환 후, 공백 제거
    if( trimVal !== ''){ // 빈 문자열이 아니면
        pushTodos(trimVal); // pushTodos()로 todos 배열에 추가하기
    }
    else{ // 빈 문자열이면
        alert("내용을 입력 후 클릭하세요"); // alert 창
    }
    todoInputElement.value = ""; // input의 value 없애기
};


// `li` 태그를 만들기 위해 필요한 데이터를 가지고 있는 객체 생성
// todos 객체 배열에 객체 추가
const pushTodos = (context) =>{
    const newId = id++; // 아이디 할당
    const newTodos = [...todos, { id : newId, content : context, isCompleted : false }]; // 새로운 객체 배열 만들기, spread operator
    setTodos(newTodos); // setTodos()로 새로운 배열을 todos로 결정하기

    paintTodos(); // 갱신된 todos로 todo-list 작성하기
	setLeftItems(); // 남은 할일 계산하기
}

//위에서 만든 todo를 내부적으로 관리하는 todos 리스트에 추가
// 현재 todos에 있는 객체로 todo-list 작성하기
const paintTodos = ()=>{
    todoList.innerHTML = null; // 지금까지 list에 있던 li 요소를 지움

    const allTodos = getAllTodos();
    allTodos.forEach(todo => paintFilterTodo(todo));
};

//남은 할 일 계산하기
const setLeftItems = () => {
    const leftTodo = getAllTodos().filter(todo => todo.isCompleted == false);
    leftItem.innerHTML = `🥕 오늘 할 일이 ${leftTodo.length}개 남아있습니다 🥕`;
}

//todos 리스트를 토대로 모든 요소에 대한 li 작성 시작-리스트추가반영
const paintFilterTodo = (todo) =>{
    const liElement = document.createElement('li'); //li 태그 생성
    liElement.classList.add('todo-item'); //클래스명 추가
    
    if(todo.isCompleted){ // 현재 객체가 완료된 객체면
       liElement.classList.add('checked'); //클래스명 checked 추가
    }

    //check button
    const checkElement = document.createElement('button');
    checkElement.classList.add('checkbox');
    checkElement.innerHTML = "✔︎";
    
    checkElement.addEventListener('click', ()=> completeTodo(todo.id));

    //content
    const contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.innerHTML = todo.content;
    
    contentElement.addEventListener('dblclick', (e)=> dbclickTodo(e, todo.id));

    //delete button
    const deleteElement = document.createElement('button');
    deleteElement.classList.add('delBtn');
    deleteElement.innerHTML = "✕";
    
    deleteElement.addEventListener('click',()=>deleteTodo(todo.id));
    
    //li 태그에 요소 합치기
    liElement.appendChild(checkElement);
    liElement.appendChild(contentElement);
    liElement.appendChild(deleteElement);

    todoList.appendChild(liElement); //ul 태그에 현재 li 태그 합치기
};

// todo-list에 input.edit-input 추가하기 (더블 클릭 이벤트)
const dbclickTodo = (e, todoId) => {
    const inputElement = document.createElement('input');
    inputElement.classList.add('edit-input');
    const content = e.target.innerHTML;
    inputElement.value = content;
    const curElement = e.target;
    const parentElement = curElement.parentNode;

    const clickBody = (e) => {
        if(e.target !== inputElement){
            parentElement.removeChild(inputElement);
        }
    }

    inputElement.addEventListener('keypress', (e)=>{
        if(e.key === "Enter"){
            if(String(e.target.value).trim() !== ""){
                updateTodo(e.target.value, todoId);
            }
            else{
                alert("현재 입력한 할 일이 없습니다!");
            }
        }
    });

    parentElement.appendChild(inputElement); // li 태그에 input 추가
    document.body.addEventListener('click', clickBody); // body에 click 이벤트 추가
}

// todos 객체 배열에서 할일 수정
const updateTodo = (content, todoId) => {
    const newTodos = getAllTodos().map(todo => todo.id === todoId ? {...todo, content} : todo );
    setTodos(newTodos);
    paintTodos();
}

//체크버튼 클릭 시
const completeTodo = (todoId) => {
    const newTodos = getAllTodos().map(todo => (todo.id === todoId) ? {...todo, isCompleted : !todo.isCompleted} : todo);
    setTodos(newTodos);
    paintTodos();
    setLeftItems();
    //console.log(newTodos);
};

//할 일 삭제하기
const deleteTodo = (todoId) => {
    const newTodos = getAllTodos().filter(todo => todo.id !==todoId);
    setTodos(newTodos);
    paintTodos();
    setLeftItems();
};
  
//시계
function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();   
    clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}

function init(){
    setInterval(getTime, 1000);
}

init();

