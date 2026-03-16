

const quotes = 
['Step by step guide to becoming a modern backend developer in 2026', 
'If you are a complete beginner who is just getting started, you can start by learning a backend', 
'programming language such as Python, Ruby, Java, Go, etc. Once you have gained a basic-to-intermediate', 
'After following all the instructions above, you can start applying for the entry level backend developer jobs.',
'Also, look at the backend developer roadmap above to get an idea about the landscape and see what else',
'Note: remember to create a lot of projects while you are learning to solidify your understanding of the concepts.',
'A degree in computer science or related field is not always necessary but networking, building a portfolio and actively seeking internships, junior developer positions or consulting can help to start and advance a career as a backend developer.'
]



// const btn = document.querySelector('button')
    const usedIndex = new Set()
    const quoteElement = document.querySelector('#quotes')
// let currentIndex = 0
  const quoteGenerator= ()=>{
//     currentIndex = (currentIndex + 1) % quotes.length
// quotez.innerHTML = quotes[currentIndex]
if(usedIndex.size >= quotes.length){
usedIndex.clear()
}
while(true){
    const randoms = Math.floor(Math.random()*quotes.length)
if(usedIndex.has(randoms)) continue

const quote = quotes[randoms]
 quoteElement.innerHTML= quote
 usedIndex.add(randoms)

 break
}
  }

 setInterval(quoteGenerator, 1000)




