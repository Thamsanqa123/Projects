

const tasks = document.querySelector('#tasks')
const addTask = document.querySelector('#addTask')

const saveTasks = ()=>{
    localStorage.setItem('data', tasks.innerHTML)
}

const addTasks = ()=>{

    const value = addTask.value
if(value === ""){
alert("empty input!")
}else{ 
let li = document.createElement("li")
let button= document.createElement("button")
tasks.appendChild(li)
li.innerHTML = value
button.textContent= "Clear"
li.appendChild(button)}
    addTask.value = "";
    saveTasks()
}

tasks.addEventListener("click", (e)=>{

if(e.target.tagName === "BUTTON"){
e.target.parentElement.remove()
 saveTasks()
    }
})

const showData = ()=>{
    tasks.innerHTML= localStorage.getItem('data')
}

showData();