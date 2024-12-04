let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let butonElement = document.querySelector("#app button");

let tasks = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTasks() {
    listElement.innerHTML = "";

    tasks.map((todo, index) => {
        let liElement = document.createElement("li");
        let taskText = document.createTextNode(todo);

        let deleteLink = document.createElement("a");
        deleteLink.setAttribute("href", "#");
        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa", "fa-trash");
        deleteLink.appendChild(deleteIcon);

        deleteLink.setAttribute("onclick", `deleteTask(${index})`);

        liElement.appendChild(taskText);
        liElement.appendChild(deleteLink);

        listElement.appendChild(liElement);
    });
}

function addTask() {
    if (inputElement.value === '') {
        alert('Digite uma tarefa!');
        return false;
    } else {
        let newTask = inputElement.value;
        tasks.push(newTask);
        inputElement.value = '';
        renderTasks();
        saveData();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
    saveData();
}

function saveData() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tasks));
}

butonElement.onclick = addTask;
renderTasks();
