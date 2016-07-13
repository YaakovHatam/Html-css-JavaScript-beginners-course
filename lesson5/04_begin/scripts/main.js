/*
    לקלוט 2 משתנים על ידי שימוש בפונקציה 
    prompt
    לאחר מכן לשאול את המשתמש האם הוא רוצה לעשות חיבור (לחיצה על אישור) או חיסור לחיצה על ביטול
    להשתמש ב
    confirm
    לאחר מכן להקפיץ את התשובה על ידי שימוש ב
    alert
*/

/*
לכתוב תכנית המדמה רכישה של ציוד תקשורת בחנות סלולר.
המטרה לרכוש פלאפונים עד שהכסף שלך נגמר, 

במידה ונשאר כסף נרכוש אביזרים עד שיגמר לנו הכסף, או ישאר סכום שלא מספיק לרכישה של מוצר כלשהוא

אחרי שסיימנו את הרכישה נחשב את המעמ
צריך לכתוב כמה פלאפונים קנינו וכמה אביזרים סה״כ
נשתמש בלולאה, משתנה שמחזיק סכום שיש לנו, משתנה קבוע של מעמ

סכום בארנק 4 אלף שח כולל מעמ
עלות מכשיר סלולרי 849 שח ללא מעמ
עלות אביזר 49 שח ללא מעמ
*/

for(var counter=0;counter < 4;counter++) {
    //code
}

//constant variable
const MAX = 5;

//variable
var someVar = "asd";

if (true) { //condition inside ()
    //code
}
else {
    //code
}














/*
const MAX_SIZE = 17;

var promptAnswer;
promptAnswer = prompt("enter text");

document.getElementById("div1").innerHTML = promptAnswer;
//var res = prompt("Please enter a number");
//var {name} = {value}
*/
var dayNum = 1;

if (dayNum == 1) {
    day = "Sunday";
}
else if (dayNum == 2) {
    day = "Monday";
}

switch (dayNum) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
    default:
        break;
}
/*
var num1 = 1;
while (num1 < 4) {
    document.getElementById("div1").innerHTML += num1;
    num1++;
}

while () {
    //code
}
*/

for(var i=1; i < 10; i++) {
    document.getElementById("div1").innerHTML += i;
    if (i == 5)
        break;
}


var dudu = {
    a: 1,
    b: "2"
};

dudu.property1 = 3;
dudu["property2"] = 4;
dudu.e = true;




var human = {
    name : "name",
    age: 20,
    isSingle: false
}

var simpleObj = {
    1: 10,
    2: 20,
    3: 30,
    4: 40
}

for(var i=1; i < 5; i++) {
    alert(simpleObj[i]);
}