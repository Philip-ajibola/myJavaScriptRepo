let {higherScores,increaseStudentScores,findSquare,findAfternoonSchedule,calculateTotalExpenses,filterUnHealthyFruit} = require("./Task.js");

test("test that function gives scores above 69",()=>{
    let scores = [70,69,76,25];
    let result = higherScores(scores);
    expect(result).toEqual([ 70, 76 ]);
})
test("test that function increase student score by five ",()=>{
    let scores = [70,69,76,25, 58];
    let result = increaseStudentScores(scores);
    expect(result).toEqual([ 75, 74, 81, 30, 63 ]);
})
test("test that function give the square of numbers",()=>{
    let scores = [10,20,30];
    let result = findSquare(scores);
    expect(result).toEqual([100,400,900 ]);
})
test("test that function prove task scheduled for afternoon ",()=>{
    let time = ["11:30 AM","1:30 PM","12:30 PM","20:30 AM"];
    expect(findAfternoonSchedule(time)).toEqual([ '1:30 PM', '12:30 PM' ])
})
test("test that function calculate the expense ",()=>{
    let obj = {"groceries": 150,"dining out":100,"transportation":50,"entertainment":80}
    expect(calculateTotalExpenses(obj)).toEqual(380);
})
test("test that function filter out bad fruit",()=>{
   let shoppingList = [{"name":"Apples","category":"Fruits","isHealthy":true},
        {"name":"Apples","category":"Fruits","isHealthy":true},
        {"name":"Potato Chips","category":"Snacks","isHealthy":false},
        {"name":"Carrots","category":"Vegetables","isHealthy":true},
        {"name":"Chocolate Bars","category":"Sweets","isHealthy":false},
        {"name":"Greek Yogurt","category":"Dairy","isHealthy":true},
        {"name":"Soda","category":"Beverages","isHealthy":false},
    ]
    expect(filterUnHealthyFruit(shoppingList)).toEqual([
            { name: 'Apples', category: 'Fruits', isHealthy: true },
            { name: 'Apples', category: 'Fruits', isHealthy: true },
            { name: 'Carrots', category: 'Vegetables', isHealthy: true },
            { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }
        ]
    )
})

