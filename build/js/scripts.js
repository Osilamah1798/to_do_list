var toDos = [];
var taskContainer = document.querySelector('.tasks-ctn');
var form = document.querySelector('#form')
var formInput = document.querySelector('#task-name')


    const addToDo = (toDo) => {
        const task = toDos.find(taskItem => taskItem.toDo == toDo);
        if (task) {
            alert("Already have this task");
            return;
        }
        

    

    toDos.push({
            key: toDo + Date.now(),
            isDone: false,
            toDo
          });

          taskContainer.innerHTML = '';
            showToDos();
            formInput.value = '';
    }
        
          
    const showToDos = () => {
        toDos.forEach((el) => taskContainer.insertAdjacentHTML('afterbegin', 
        `
        <div id="${el.key}" class=" tasks border-solid border-2 rounded-md border-cyan-100 py-3 w-[90%] md:w-[46%] md:relative md:h-[50px] h[70px] mx-auto my-[10px] ">
        
        <p class="${el.isDone == true ? "line-through" : ""} md:inline block ml-0 md:absolute left-2 top-[8px] p-2 mb-2 md:p-0 ">${el.toDo}</p>
    
        ${el.isDone == true ?  `<a href="" class="btn undo-btn bg-orange-500/80 p-1  text-white hover:text-purple-800 font-semibold text-xs  w-[43px] h-[24]
              rounded-md md:absolute right-[100px] top-[10px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300 ">Undo</a>`:

            `<a href="" class="btn done-btn bg-green-800/80 p-1  text-white hover:text-purple-800 font-semibold text-xs  w-[43px] h-[24]
              rounded-md md:absolute right-[100px] top-[10px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300">Done</a>`}

            <a href="" class="btn edit-btn bg-yellow-500/80 p-1  text-white hover:text-purple-800 font-semibold text-xs  w-[43px] h-[24] 
             rounded-md md:absolute right-[52px] top-[10px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300 ">Edit</a>

            <a href="" class="btn delete-btn bg-red-500/80 p-1 text-white hover:text-purple-800 font-semibold text-xs w-[43px] h-[24]
              rounded-md md:absolute right-1 top-[10px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-cyan-50 duration-300">Delete</a>

        
    </div>
            
          `)
        )
      }




    form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formInput.value.trim() == '') {
    alert('Try typing something first');
    return;
  } else {
    addToDo(formInput.value);
    console.log(formInput.value);
  }
  
})

// var todos = [];
// var taskContainer = document.querySelector('.tasks-container');
// var form = document.querySelector('.form');
// var formInput = document.querySelector('#task_title');


// const addTodo = (todo) => {
//   const task = todos.find(taskItem => taskItem.todo == todo);
//   if (task) {
//     alert("Task already existing");
//     return;
//   }
  
//   todos.push({
//     key: todo + Date.now(),
//     isDone: false,
//     todo
//   });
  
//   taskContainer.innerHTML = '';
//   showTodos();
//   formInput.value = '';
// }

// const deleteTodo = (key) => {
//   const index = todos.findIndex(taskItem => taskItem.key == key);
//   todos.splice(index, 1);
//   taskContainer.innerHTML = '';
//   showTodos();
//   formInput.value = '';
// }

// const updateTodoText = (key, todo) => {
//   const task = todos.find(taskItem => taskItem.todo == todo);
//   if (task) {
//     alert("Task already existing");
//     return;
//   }
//   const index = todos.findIndex(taskItem => taskItem.key == key);
//   todos[index] = {
//     ...todos[index],
//     todo
//   };
//   taskContainer.innerHTML = '';
//   showTodos();
//   formInput.value = '';
// }

// const taskIsDone = (key) => {
//   const index = todos.findIndex(taskItem => taskItem.key == key);
//   todos[index] = {
//     ...todos[index],
//     isDone: true
//   };
//   taskContainer.innerHTML = '';
//   showTodos();
// }

// const taskUndo = (key) => {
//   const index = todos.findIndex(taskItem => taskItem.key == key);
//   todos[index] = {
//     ...todos[index],
//     isDone: false
//   };
//   taskContainer.innerHTML = '';
//   showTodos();
// }

// const showTodos = () => {
//   todos.forEach((el) => taskContainer.insertAdjacentHTML('afterbegin', `
//       <div id="${el.key}" class="tasks">
//         <p class="${el.isDone == true ? "line-through" : ""}"> ${el.todo} </p>
//         ${el.isDone == true ? '<a href="#" class="primary-btn undo-btn"> Undo </a>' : '<a href="#" class="primary-btn done-btn"> Done </a>'}
//         <a href="#" class="primary-btn edit-btn"> Edit </a>
//         <a href="#" class="primary-btn delete-btn"> Delete </a>

//       </div>
//     `)
//   )
// }



// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   if (formInput.value.trim() == '') {
//     return
//   } else {
//     addTodo(formInput.value);
//   }
  
// })

// taskContainer.addEventListener('click', (event) => {
//   if (event.target.className.split(' ')[1] == 'delete-btn') {
//     const key = event.target.parentElement.id;
//     deleteTodo(key);
//   }
// });

// taskContainer.addEventListener('click', (event) => {
//   if (event.target.className.split(' ')[1] == 'done-btn') {
//     const key = event.target.parentElement.id;
//     taskIsDone(key);
//   }
// });

// taskContainer.addEventListener('click', (event) => {
//   if (event.target.className.split(' ')[1] == 'undo-btn') {
//     const key = event.target.parentElement.id;
//     taskUndo(key);
//   }
// });

// taskContainer.addEventListener('click', (event) => {
//   if (event.target.className.split(' ')[1] == 'edit-btn') {
//     const key = event.target.parentElement.id;
//     var todo = prompt("Insert task to update");
//     if (todo.trim() == '') return;
//     updateTodoText(key, todo);
//   }
// });