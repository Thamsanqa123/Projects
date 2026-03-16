
let task = JSON.parse(localStorage.getItem('task')) || []
const deleteTask = document.querySelector('#deleteTask')
const addTask = document.querySelector('#addTask')

const addTasks = ()=>{

    const value = addTask.value

    task.push(value)

    deleteTask.innerHTML= value

}

addTasks()