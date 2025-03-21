//const e = require("express");

const taskInput  = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const  taskList = document.getElementById('taskList');


function addTask (){
     const taskText = taskInput.value.trim();
     if (taskText !== ""){

        const li = document.createElement('li');
        li.textContent = taskText;


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Eliminar";
        deleteBtn.addEventListener('click',()=>{
            taskList.removeChild(li);
        });
        li.addEventListener('click', ()=>{
            li.classList.toggle('completed');
        });

        li.appendChild(deleteBtn)

        taskList.appendChild(li);

        taskInput.value = "";
     }
}

addTaskBtn.addEventListener('click',addTask);

taskInput.addEventListener('keypress' ,(e)=>{
    if (e.key === 'Enter'){
        addTask();
    }
});

