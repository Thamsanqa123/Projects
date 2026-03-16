const input = document.querySelector('#palind')

const reverseString = (str)=>{
    return str.split("").reverse().join("")
}

const check= ()=>{
    const value = input.value
    const reverse = reverseString(value)
    if(value===reverse){
        alert('PALIDROME!')
    }else{
        alert('not it!')
    }
    input.value=''
}