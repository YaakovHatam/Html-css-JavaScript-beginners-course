
//alert(2/3);

//console.log("Logging to browser console");

//console.warn("Cannot be negetive value");

//console.error("Cannot divide by 0");
/*
"i am a string"

10

true


var StringVariable = "i am a string";

var NumberVariable = 10;

var BooleanVariable = true;

typeof someVariable


alert(typeof "str");
alert(typeof 3);

var VariableName = "value";

1 == 1 //true
2 == 1 //false

1 === 1 // true
1 == "1" // true
1 === "1" //false

1 >= 2 // false
4 >= 3 // true

1 <= 2 // true
4 <= 3 // false

2 != 2 // false
2 != 3 // true

2 !== 2 // false
2 !== "2" // true
2 !== "3" // true

2 < 3 // true
3 < 2 // false

2 > 3 // false
3 > 2 // true

2 <= 2 // true
2 <= 3 // true
3 <= 2 // false

2 >= 2 // true
2 >= 3 // false
3 >= 2 // true

true && true // true
true && false // false
false && false // false

true || true // true
true || false // false
false || false // false

var variable = 6; // variable = 6

var multiplication = 6; // multiplication = 6
multiplication *= 2; // multiplication = 12

var division = 6; // division = 6
division /= 2; // division= 3

var addition = 6 // addition = 6
addition += 2; // addition = 8

var subtraction = 6; // subtraction = 6
subtraction -= 2; // subtraction = 4




var a;
typeof a;               // "undefined"

a = "hello world";
typeof a;               // "string"

a = 42;
typeof a;               // "number"

a = true;
typeof a;               // "boolean"

a = null;
typeof a;               // "object" -- weird, bug

a = undefined;
typeof a;               // "undefined"

a = { b: "c" };
typeof a;               // "object"

var obj = {    
    a: "hello world",    
    b: 42,    
    c: true
};
obj.a;      // "hello world"
obj.b;      // 42
obj.c;      // true
obj["a"];   // "hello world"
obj["b"];   // 42
obj["c"];   // true

obj["ss!"] = "s";
console.lof(obj);

var obj = {    
    a: "hello world",    
    b: 42
};
var b = "a";
obj[b]; //42

var arr = [
    "hello world",
    42,
    true
];

arr[0];         // "hello world"
arr[1];         // 42
arr[2];         // true
arr.length;     // 3

typeof arr;     // "object"

function foo() {
    return 42;
}

foo.bar = "hello world";

typeof foo;         // "function"
typeof foo();       // "number"
typeof foo.bar;     // "string"

var a = "hello world";
var b = 3.14159;

a.length;               // 11
a.toUpperCase();        // "HELLO WORLD"
b.toFixed(4);           // "3.1416"

var a = "42";
var b = Number( a );
a;              // "42"
b;              // 42 -- the number!

var a = "42";
var b = a * 1;  // "42" implicitly coerced to 42 here
a;              // "42"
b;              // 42 -- the number!


function printAmount() {
    console.log( amount.toFixed( 2 ) );
}

var amount = 99.99;

printAmount(); // "99.99"

amount = amount * 2;

printAmount(); // "199.98"


function printAmount(amt) {
    console.log( amt.toFixed( 2 ) );
}

function formatAmount() {
    return "$" + amount.toFixed( 2 );
}

var amount = 99.99;

printAmount( amount * 2 );      // "199.98"

amount = formatAmount();
console.log( amount );          // "$99.99"

function one() {
    // this `a` only belongs to the `one()` function
    var a = 1;
    console.log( a );
}

function two() {
    // this `a` only belongs to the `two()` function
    var a = 2;
    console.log( a );
}

one();      // 1
two();      // 2


function outer() {
    var a = 1;

    function inner() {
        var b = 2;

        // we can access both `a` and `b` here
        console.log( a + b );   // 3
    }

    inner();

    // we can only access `a` here
    console.log( a );           // 1
}

outer();

var amount = 1;
var maximumAmount = 100;

if ( amount < maximumAmount ) {
    console.log( "Max not reached!" );
    amount = amount + amount;
}
else { // otherwise:
    console.log( "Max reached!" );
}

while (numOfCustomers > 0) {
    console.log( "How may I help you?" );

    // help the customer...

    numOfCustomers = numOfCustomers - 1;
}
*/

do {
    console.log( "How may I help you?" );

    // help the customer...

    numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

for (var i = 0; i <= 9; i = i + 1) {
    console.log( i );
}
// 0 1 2 3 4 5 6 7 8 9


/*
var test = 1;

for (var i=10000; i < 50000; i+=10000) {
    var result = calculateSalary(i);
    printRow(i, result);
}

function calculateSalary(payroll) {
    var test2 = 2;
    var totalMonthHours = 186;
    var taxPercentage = 0.30; //if i was independent

    var salaryPerHour = payroll / totalMonthHours;

    var salaryPerHourWithTax = salaryPerHour * (1 + taxPercentage);
    
    return salaryPerHourWithTax;
}

function printRow(payroll, salaryPerHourWithTax) {
    console.log("for payroll: " +payroll + " is: " + salaryPerHourWithTax);
}

console.log(calculateSalary(10000) == 69.89247311827957);



*/


var cellCostWithoutVat = 849;
var wallet = 4100;
var accessoryCostWithoutVat = 49;
var VAT = 17/100;
var bought = {
    cellphones: 0,
    accessories: 0
};

var cellCostWithVat = cellCostWithoutVat * (1 + VAT);
var accessoryCostWithVat = accessoryCostWithoutVat * (1 + VAT);


while (wallet > accessoryCostWithVat) {   
    if (wallet > cellCostWithVat) {
        bought.cellphones++;
        wallet -= cellCostWithVat;
    }
    
    else if (wallet > accessoryCostWithVat) {
        bought.accessories++;
        wallet -= accessoryCostWithVat;
    }
}

/*
while (wallet > cellCostWithVat) {
    
    if (wallet > cellCostWithVat) {
        bought.cellphones++;
        wallet -= cellCostWithVat;
    }
}
while (wallet > accessoryCostWithVat) {
    if (wallet > accessoryCostWithVat) {
        bought.accessories++;
        wallet -= accessoryCostWithVat;
    }
}
*/
console.log('cellphones:' + bought.cellphones);
console.log('accessories:' + bought.accessories);
console.log('money left: ' + wallet);


var myArr = [
    {
        name: "a"
    },
    {
        name: "b"
    },
    {
        name: "c"
    }
];
for (var i=0; i < myArr.length; i++ )
    console.log(myArr[i].name);


function h(df, df1, df2) {
    return "d";
}






var myObj = {
    c: {},
    d: []
};

myObj.a = 1;
myArr.b = 2

function h(x, y, z) {
    //x, y, z,

    function g(t) {
        return x*y;
    }
    return g;
}

F = 5;