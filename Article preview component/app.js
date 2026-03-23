const shareBtn = document.querySelector('.share')
const socials = document.querySelector('.socials')


shareBtn.addEventListener('click', () =>{
socials.classList.toggle('active')
})

const closeToggle = ()=>{
    socials.classList.remove('active')
}