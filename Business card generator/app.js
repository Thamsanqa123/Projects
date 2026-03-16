
let clients = JSON.parse(localStorage.getItem('clients')) || []

const clientInfo = document.querySelector("#form")
    const businessCar = document.querySelector('#businessCard')
const generateBtn = document.querySelector('#generate')

const saveClients = ()=>{
localStorage.setItem('clients', JSON.stringify(clients))
  
}
    


clientInfo.addEventListener('submit', (e)=>{
e.preventDefault()



let details = {
    name: document.querySelector('#name').value,
    subject: document.querySelector('#title').value,
    email: document.querySelector('#email').value
};

clients.push(details)

saveClients(details)
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


const input = document.querySelector('.searchInput')
const clientCard = document.querySelector(".clientCard")

input.addEventListener('input', (e)=>{
    e.preventDefault()

    const value = e.target.value
    if(value === ''){
clientCard.innerHTML='';
return;
    }

    const results = clients.filter((client)=>{
return client.name.toLowerCase().includes(value.toLowerCase()) || 
(client.subject && client.subject.toLowerCase().includes(value.toLowerCase()))
    })
   
     displaySearch(results)
})

const displaySearch = (results)=>{

if(results.length === 0){
    return clientCard.innerHTML= '<p>Client card not found</p>'
}

results.forEach(client => {
    html = `<h3> ${client.subject} </h3>
Name: ${client.name} <br>
Business Name: ${client.subject} <br>
Email: ${client.email}`
});
clientCard.innerHTML= html
}



