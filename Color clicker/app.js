const body = document.querySelector('body')


const colorSelector = (name)=>{
body.style.backgroundColor=name
}

const randomColor = ()=>{
    const red = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)

    const color = `rgb(${red}, ${blue}, ${green})`
    body.style.backgroundColor= color
}
