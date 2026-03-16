
let clients = []

const clientInfo = document.querySelector("#form")
    const businessCar = document.querySelector('#businessCard')
const generateBtn = document.querySelector('#generate')


clientInfo.addEventListener('submit', (e)=>{
e.preventDefault()



let details = {
    name: document.querySelector('#name').value,
    subject: document.querySelector('#title').value,
    email: document.querySelector('#email').value
};

clients.push(details)


displayCard(details)
console.log(clients)
e.target.reset()

});

const displayCard= (client)=>{


businessCar.innerHTML=`<h3> ${client.subject} </h3>
Name: ${client.name} <br>
Business Name: ${client.subject} <br>
Email: ${client.email}`

}


const searchCard = ()=>{
    
}





