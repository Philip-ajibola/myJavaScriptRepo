function higherScores(array){
    return array.filter((num)=> (num) => num>=70 );
}
function increaseStudentScores(array){
    return array.map((num)=>num + 5);
}
function findSquare(array){
    return array.map((num)=>num*num)
}
function findAfternoonSchedule(listOfTime){
    return listOfTime.filter((time)=>time.includes("PM") )
}
function assignBookToMember(listOfBooks,listOfMember){
    let result = []
    for(let i=0;i<listOfBooks.length;i++){
        let obj = {name:listOfMember[i],book:listOfBooks[i]};
        result.push(obj);
    }
    return result;
}
let obj = {"groceries": 150,"dining out":100,"transportation":50,"entertainment":80};

function calculateTotalExpenses(obj){
    let totalExpenses =0;
    for(let value in obj){
        totalExpenses += obj[value]
    }
    return totalExpenses;
}
function filterUnHealthyFruit(listOfObject) {
    let listOfHealthyFruit = []
    listOfObject.forEach((element) => {
        if (element.isHealthy === true) console.log(`${element.name}`);
    })
    return listOfObject.filter((obj) => obj.isHealthy === true);
}

module.exports = {higherScores,increaseStudentScores,findSquare,findAfternoonSchedule,calculateTotalExpenses,filterUnHealthyFruit}