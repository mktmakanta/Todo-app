//VARIABLES

const addTaskBtn = document.querySelector('#input-task');
const taskCon = document.querySelector('#task-container');
const taskText = document.querySelector('#input-text')

//FUNCTIONS and EVENT LISTENERS



addTaskBtn.addEventListener('click', function(){

  let task = document.createElement('div');
  task.classList.add('task-con');
  
  let li = document.createElement('li');
  li.innerText = `${taskText.value}`.toLocaleUpperCase();
  li.classList.add('text');
  task.appendChild(li);

  let checkBtn  = document.createElement('button');
  checkBtn.classList.add('check-btn');
  checkBtn.innerText = 'Mark';
  task.appendChild(checkBtn);

  let deleteBtn  = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerText = 'Delete';
  task.appendChild(deleteBtn);
  
  if (taskText.value === ""){
    alert("you need to enter a text")
  }else{
    taskCon.appendChild(task);
  }
  taskText.value ="";

  
checkBtn.addEventListener('click', function(){
  if(checkBtn.previousSibling.style.textDecoration === 'line-through'){
    checkBtn.previousSibling.style.textDecoration = "none";
  }else{checkBtn.previousSibling.style.textDecoration = "line-through";
}
});
deleteBtn.addEventListener('click', function(){
  deleteBtn.parentElement.remove(li);
});

});








