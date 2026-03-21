


// const results = grades.filter((e)=>{

//    if(e <= 50) {
//     console.log(`lowest grade: ${e}`)
//    }else if(e === 50 || e===53){
// console.log(`Average: ${e}`)
//    }
//    else if(e >= 50){
// console.log(`Highest: ${e}`)
//    }
// })
let grades = [85, 75, 67, 84, 53, 40, 70, 30]
let lowestGrades= []
    let averageGrd= []

    let highestGrd= []


for(let i = 0; i< grades.length; ++i){
   
    if(grades[i] <= 50){
    lowestGrades.push(grades[i])
    
    }
    else if(grades[i] === 50 || grades[i] <=53){
 averageGrd.push(grades[i])
   
    } else if (grades[i] >=60){
 highestGrd.push(grades[i])
  
    }
}
console.log(`lowest grades: ${lowestGrades}`)
console.log(`average grades: ${averageGrd}`)
console.log(`highest grades: ${highestGrd}`)


