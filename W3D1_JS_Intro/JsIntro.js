
// declare a variable and assign it a value
var firstName = "Joe" // camel case

//* ===================== Data Types =====================

// !  ======= PRIMITIVES =======

//? string

var dojoName = "Nefel"
// -------

// declaring a variable
var lastName;

// assigning a value
lastName = "Doe"

// ? number

var currentYear = 2023 

var pi = 3.14

var negativeNumber = -255

// ? boolean

var isAdmin = true

var isRaining = false

var isWeekend = false


//! ====== Complex DataTypes ========

// ? Arrays

//      
var emptyArray = []

//                  0      1       2       3      4      5      6 // 0 indexed
var daysOfWeek = ["Mon", "Tue", "Wedn", "Thur", "Fri", "Sat", "Sun"] // length = 7

var grades = [7, 15, 20, 1, 9]


//? Object 

//empty object

var emptyObject = {}
//                      key : value
var studentsGrades = {"Jane": 15, "Lucas": 15, "Jimmy": false, "Jack": "five 5"}


studentsGrades["Jane"] // square brackets notation

studentsGrades.Jane // dot notation

// Arrays & Objects together
var studentsGrades = {
                        "Jane":[
                            {"Math": 10},
                            {"computer science": 18},
                            {"optionalCourse": true}
                        ]
                    }


//* ======================  CONDITIONS =========================

if (isRaining == true){
    console.log("Take your Umbrella")
} else {
    console.log("You can go outside! it is sunny !!!");
}


// lucas grade > 10 : congrats (1st condition)

// 10 < grade > 5 : You are close, just keep on working (2nd condition)

// grade < 5 : You Failed (3rd condition)

// ! Arithmetic Operators
// + Addition
// - Substraction
// * Multiplication
// / Division

// ! Logical OPERATOR
// and --> &&
// or --> ||

//* ----------------------------- LOOPS -----------------------------

// say Good evening 5 times

//   
for (var index = 0; index < 5; index ++ ){
    console.log("Good evening !")
}

var i = 0
while ( i < 5){
    console.log("Good Night!")
    i ++
}

