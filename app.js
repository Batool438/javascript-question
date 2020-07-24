//  CHAPTER NO 1  "ALERT"

//  1.Write a script to greet your website visitor using JS alert box.
// alert("Hello world!");

// // 2. Write a script to display following message on your web page:

//   var a=("Error!Please enter a valid password. ");
//   alert(a)

// 3. Write a script to display following message on your web page: (Hint : Use line break)

//   alert("Welcome to JS Land...\n Happy Coding! ");

// 4. Write a script to display following messages in sequence

//   alert("Welcome to JS Land.");
//   alert("Happy Coding!");
// 5. Generate the following message through browser’s developer console:

//   alert("Hello... I can run JS through my web broswer's console");

// 6. Make use of alerts in your new/existing HTML & CSS project.

//  a=("WELCOME...!");
//  alert(a)

// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:
//  a. Head
//  b. Body (before your page’s HTML)
//  c. Body (inside your page’s HTML)
//  d. Body (after your page’s HTML)

// Ans (a) ---> index.html file
// Ans (b) ---> index.html file
// Ans (c) ---> index.html file
// Ans (d) ---> index.html file

// Chapter no 2
// // 1. Declare a variable called username.
// var a=("username");
// console.log(a)

// // 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName= "Batool Hafeez"

// // 3. Write script to
// // a) Declare a JS variable, titled message.
// // b) Assign “Hello World” to variable message
// // c) Display the message in alert box.

// // Answer 3(a) 
// var message

// // Answer 3(b)
// var message = (“Hello World”);

// // Answer 3(c)
// alert(message)

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// var name = ("Jhone Doe");
// var age = ("15 years old");
// var certificate = ("Certified Mobile Application Development");

// alert(name)
// alert(age)
// alert(certificate)

// // 5. Write a script to display the following alert using one JS variable:
// var pizza = ("PIZZA \nPIZZ \nPIZ \nPI \nP");
// alert(pizza)

// // 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
// var email= "abc@gmail.com"
// alert("My email address is " + email)

// // 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
// var book =(“A smarter way to learn JavaScript”);
// alert("I am trying to learning from the book" + book)

// // 8. Write a script to display this in browser through JS
// document.write("Yah! I can write HTML content through JAVASCRIPT");

// // 9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”

// alert(“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”)

// Chapter no 3 
//  1. Declare a variable called age & assign to it your age. 
// Show your age in an alert box.
// var age= 15
// alert("I am "+age+"  years old")

//  2. Declare & initialize a variable to keep track of 
// how many times a visitor has visited a web page. 
// Show his/her number of visits on your web page. 
// For example: “You have visited this site N times”.
// var visit = 14
// alert( "You have visited this site "+visit+" times.");

// 3. Declare a variable called birthYear & assign to it your birth year. 
// Show the following message in your browser:
// var birthYear= 1990
// document.write("My birth year is"+birthYear+ "\n Data type of my declared variable is number");

// 4. A visitor visits an online clothing store www.xyzClothing.com . 
// Write a script to store in variables the following information: 
// a. Visitor’s name 
// b. Product title 
// c. Quantity 
// i.e. how many products a visitor wants to order 
// Show the following message in your browser: 
// “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var  Visitor = "John Doe"
// var Product = "T-shirt(s)"
// var Quantity = 5

// document.write( Visitor+ "ordered "+ Quantity+"  "+ Product+" on XYZ Clothing store");
// Chapter no 4
//Q1 Declare 3 variables in one statement.

// var x,y,z

// Q2 Declare 5 legal & 5 illegal variable names.

//legal variable names
//  var myname =  "Doe Jhon"
//  var my_name = "Doe Jhon"
//  var _my_name = "Doe Jhon"
//  var MYNAME = "Doe Jhon"
//  var myName2 = "Doe Jhon"


 //illegal variable names

//  var 2myname  =  "Doe Jhon"
//  var my-name =  "Doe Jhon"
//  var ?my name =  "Doe Jhon"
//  var my name =  "Doe Jhon"
//  var *myname =  "Doe Jhon"

//  Q3 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________


// document.write(" <h3> Rules for naming JS variables </h3> <br/> <p> Variable names can only contain  numbers, $, and _.For example: $my_1stVariable <br/>Variable must begin with a letter,$ or _. For example $name, _name or name .<br/>Variable names are case sensitive <br/> Variable names should not be JS keywords <br/> </p>")
// Chapter no 5
// 1. Write a program that take two numbers & add them in a new variable. 
// Show the result in your browser.

// var x = 3
// var y = 5
// var z = x+y
// document.write("Sum of "+x+" and "+y+" is "+z+"<br/>");

// // 2. Repeat task1 for subtraction, multiplication, division & modulus.
// z = x-y
// document.write("Subtraction of "+x+" and "+y+" is "+z+"<br/>")
// z=x*y
// document.write("Multiplication of "+x+" and "+y+" is "+z+"<br/>")
// z=x/y
// document.write("Division of "+x+" and "+y+" is "+z+"<br/>")
// z=x%y
// document.write("Modulus of "+x+" and "+y+" is "+z+"<br/>")

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// var a 
// document.write("Value after variable declaration is " +a+ "</br>")
// a = 5
// document.write("Initial value: " +a+ "</br>")
// a++
// document.write("Value after increment is: " +a+ "</br>")
// a= a+7
// document.write("Value after addition is: " +a+ "</br>")
// a--
// document.write("Value after decrement is: " +a+ "</br>")
// a = a%3
// document.write("The remainder is: " +a+ "</br>")

// 4. Cost of one movie ticket is 600 PKR. 
// Write a script to store ticket price in a variable & 
// calculate the cost of buying 5 tickets to a movie. 

// var cost = 600
// var total = cost*5
// document.write("Total cost to buy 5 tickets to a movie is " +total+"PKR </br>")

// // 5. Write a script to display multiplication table of any number in your browser.

// document.write("<h2> Table of 4 </h2>")
// document.write(
//     "4 x 1 =" +4*1+ "<br/>" +
//     "4 x 2 =" +4*2+ "<br/>" +
//     "4 x 3 =" +4*3+ "<br/>" +
//     "4 x 4 =" +4*4+ "<br/>" +
//     "4 x 5 =" +4*5+ "<br/>" +
//     "4 x 6 =" +4*6+ "<br/>" +
//     "4 x 7 =" +4*7+ "<br/>" +
//     "4 x 8 =" +4*8+ "<br/>" +
//     "4 x 9 =" +4*9+ "<br/>" +
//     "4 x 10 =" +4*10+ "<br/>"
// )
// 6. The Temperature Converter: It’s hot out! 
// Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


// var c = 25
// var f =(c* 9/5)+32
// document.write(c+"<sup>0</sup>C is "+f+"<sup>0</sup>F ")
// var f = 70
// var c =(f-32) * 5/9
// document.write("<br/>"+f+"<sup>0</sup>C is "+c+"<sup>0</sup>C ")

// 7. Write a program to implement 
// checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables.
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var ITEM1 = 650
// var ITEM2 = 100
// var quantity1 = 3
// var quantity2 = 7
// var charges = 100
// var total = ITEM1*quantity1+ITEM2*quantity2+charges

// document.write(
//     "<h1> Shopping Card </h1>"+
//     "Price of item 1 is "+ITEM1+
//     "<br/>Quantity of item 1 is "+quantity1+
//     "<br/> Price of item 2 is "+ITEM2+
//     "<br/>Quantity of item 2 is "+quantity2+
//     "<br/>Shipping Charges" +charges+
//     "<br/> <br/> <br/>Total cost of your order is "+total

// )
// 8. Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser.

// var totalmarks = 980
// var marksobtained = 804
// var percentage = 804/980 *100

// document.write(
//     "<h1> Marks Sheet </h1>" +
//     "Total marks :" +totalmarks+
//     "<br/>Marks obtained :" +marksobtained+
//     " <br/> Percentage :" +percentage+"%"

// )
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// var USDollar = 104.80 * 10
// var SaudiRiyal = 28 * 25
// var PakistaniRupees = USDollar+SaudiRiyal 

// document.write("<h1> Currency in PKR </h1> Total Currency in PKR:" +PakistaniRupees)

// 10. Write a program to initialize a variable with some number and 
// do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression.


// var number = 1
// number = (((number+5)*10)/2)
// alert(number)

// 11. The Age 
// Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

// var currentyear = 2016
// var birthyear = 1992
// var age = currentyear-birthyear
// document.write("<h1>Age Calculator</h1>Current Year: "+currentyear+"</br>Birth Year: "+birthyear+"</br>Your Age is: "+age)

// 12. The Geometrizer: 
// Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output 
// “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The area is NN”. 
// (Hint : Area of a circle = π r2, π = 3.142)

// var radius = 20
// var circumference = 2 * 3.142 * radius
// var area = 3.142 * radius * radius

// document.write (
//     "<h1>The Geometrizer </h1>"
//     +"Radius of a circle : " +radius+
//     "<br/> The circumference is : "+circumference+
//     "<br/> The area is : "+area

// )
// 13. The Lifetime Supply 
// Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: 
// “You will need NNNN to last you until the ripe old age of NN”.

// var snack = "chocolate chip"
// var age = 15
// var maxage = 65
// var amountPerDay = 3
// var total = (maxage -age)*amountPerDay

// document.write(
//     "<h1> The Life Time Calculator</h1>" +
//     "Favourite Snack : "+snack+
//     "<br/> Current age: " +age+
//     "<br/> Estimated Maximum Age: "+maxage+
//     "<br/> Amount old snacks Per day: "+amountPerDay+
//     "<br/> You will need: "+total+" "+snack+
//     "to last you untill the ripe old age of" +" "+maxage

// )
// Chapter 6 to 9
// 1. Write a program to take a number in a variable, 
// do the required arithmetic to display the following result in your browser:

// var a = 10;
// document.write(
//     "Result: <br/> The value of a is:" +a+
//     "<br/> ..............................."+

//     "<br/><br/> The value of ++ a is:"+(++a)+
//          "<br/>  Now the value of a is:"+a+

//     "<br/><br/> The value of a++ is:"+(a++)+
//          "<br/>  Now the value of a is:"+a+

//     "<br/><br/> The value of  --a is:"+(--a)+
//          "<br/>  Now the value of a is:"+a+

//     "<br/><br/> The value of a-- is:"+(a--)+
//          "<br/>  Now the value of a is:"+a +"</br> </br> </br>"
// ) 
// 2. What will be the output in variables a, b & result 
//  after execution of the following script: 
//  var a = 2, b = 1; var result = --a - --b + ++b + b--;
//  Explain the output at each stage: 
// --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--;

// document.write(" a is ="+a)
// document.write("<br/> b is = "+b)
// document.write("<br/> result is ="+result +"</br> </br>")

// 3. Write a program that takes input a name from user & greet the user.
// var userName = prompt("Enter your Name")
// alert("WELCOME"+" " +userName);

// 4.Write a program to take input a number from user &
//  display it’s multiplication table on your browser. 
//  If user does not enter a new number, 
//  multiplication table of 5 should be displayed by default.

// var table = prompt("Enter a number for Table","5")
// var a = Number(table);
// var num = 1
// document.write(
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"

// )
// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.
// (Hint: user table)

// var sub1 = prompt("Enter First Subject Name")
// var sub2 = prompt("Enter Second Subject Name")
// var sub3 = prompt("Enter Third Subject Name")
// var sub1Marks = prompt("Enter First Subject Marks")
// var a = Number(sub1Marks)
// var sub2Marks = prompt("Enter Second Subject Marks")
// var b = Number(sub2Marks)
// var sub3Marks = prompt("Enter Third Subject Marks")
// var c= Number(sub3Marks)
// var totalMarks = 100

// document.write(
//               "<table>"+
//               "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
//               "<tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
//              "<tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
//               "<tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
//              "<tr><td></td><td><b>"+(totalMarks*3)+"</td><td><b>"+(a+b+c)+"</td><td><b>"+((a+b+c)/(totalMarks*3)*100)+" %</td></tr><b>"+
//              "</table>"
// )
// Chapter 9 to 11

// 1. Write a program to take “city” name as input from user. 
// If user enters “Karachi”, 
// welcome the user like this: 
// “Welcome to city of lights”
// var city = prompt("Enter Your City Name")

// if (city === "Karachi"| city === "Karachi"){
//     alert("Welcome to city of lights")
// }
// 2. Write a program to take “gender” as input from user. 
// If the user is male, give the message: 
// Good Morning Sir. 
// If the user is female, give the message: 
// Good Morning Ma’am.

var gender = prompt("Enter Your Gender")
if  (gender === "Male"| gender ==="male"){
    alert("Good Morning Sir")
}

if  (gender === "Female"| gender ==="female"){
    alert("Good Morning Ma’am")
}
// 3. Write a program to take input color of road traffic signal from the user
//  & show the message according to table:

var light = prompt("Enter Traffic SIgnal Light Color")
 if (light=== "Red"| light ==="red"){
     alert("Must Stop")
    }

 if (light=== "Yellow"| light ==="yellow"){
    alert("Ready to move")
}

if (light=== "Green"| light ==="green"){
    alert("Move now")
}
// 4. Write a program to take input remaining fuel in car (in litres) from user. 
// If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”

var fuel = prompt("Enter Your Remaining Fuel Level")
if (fuel === "0.25"){
    alert("Please refill the fuel in your car")
}
// 5. Run this script, & check whether alert message would be displayed or not. 
// Record the outputs. 
// a. var a = 4; if (++a === 5)
// { alert("given condition for variable a is true"); }
// b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
// c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } 
// if (c === 13){ alert("condition 2 is true"); } if (++c < 14)
// { alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
// d. var materialCost = 20000; var laborCost = 2000;
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
// e. if (true){ alert("True"); } if (false){ alert("False"); }
// f. if("car" < "cat"){ alert("car is smaller than cat"); }
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
}
document.write("Given condition for variable a is true <br>");
var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
}
document.write("given condition for variable b is true<br>");
var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
    document.write("condition 1 is true <br>")
} 
if (c === 13){ 
    alert("condition 2 is true"); 
    document.write("condition 2 is true <br>")
} if (++c < 14){ 
    alert("condition 3 is true");
    document.write("condition 3 is true <br>") 
} if(c === 14){ 
    alert("condition 4 is true");
    document.write("condition 4 is true <br>") 
}
var materialCost = 20000; 
var laborCost = 2000;
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals");
    document.write("The cost equals <br>")  
}
if (true){ 
    alert("True");
    document.write("True<br>")  

} if (false){ 
    alert("False"); 
    document.write("False<br>")  
}
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    document.write("car is smaller than cat <br>")  
}
// 6. Write a program to take input the marks obtained in three subjects & total marks. 
// Compute & show the resulting percentage on your page. 
// Take percentage & compute grade as per following table:
var totalMarks = 300;
var sub1 = prompt("Enter Your First Subject Marks")
var sub2 = prompt("Enter Your Second Subject Marks")
var sub3 = prompt("Enter Your Third Subject Marks")
var sub1Marks = Number(sub1)
var sub2Marks = Number(sub2)
var sub3Marks = Number(sub3)
var markObtained = sub1Marks+sub2Marks+sub3Marks
var percentage = markObtained/totalMarks*100

if (percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}

if (percentage >= 70){
    grade = "A";
    remarks = "Good";
}

if (percentage >= 60){
    grade = "B";
    remarks = "You Need to improve";
}
if (percentage <= 60){
    grade = "Fail";
    remarks = "Sorry";
}

document.write(
    "<h1>Marks sheet</h1>"+
    "<br/>Total Marks :"+totalMarks+
    "<br/>Marks Obtained :"+markObtained+
    "<br/>Percentage :"+percentage+"%"+
    "<br/>Grade :"+grade+
    "<br/>Remarks :"+remarks
)
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, 
// show “Close enough to the correct answer”.

var number = 10
var userInput = +prompt("Enter any number")
if (number==userInput){
    alert("BINGO! Correct Answer");
}

else if (userInput+1==number){
    alert("Close enough to the correct answer");
}

else{
    alert("You lost!")
}
// 8. Write a program to check whether the given number is divisible by 3. 
// Show the message to the user if the number is divisible by 3.
var number = +prompt("Enter a Number to check is divisible by 3")

if (number % 3 === 0){
    alert("Your Given Number is Divisible by 3")

}else {
    alert("Your Given Number is not Divisble by 3")
}
// 9. Write a program that checks whether the 
// given input is an even number or an odd number.
var num = prompt("Enter a number: ")
if(num % 2 === 0){
    alert(num +" is a even number")
}else{
    alert(num +" is a odd number")
}
// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”
var temp = prompt("Enter the temperature")
var T = Number(temp)

if (T > 40){
    alert("It is too hot outside")
}

if (T > 30){
    alert("The weather today is Normal")
}

if (T > 20){
    alert("Today's weather is cool")
}

if (T > 10){
    alert("OMG! Today's weather is a cool")
}
// 11. Write a program to create a calculator for +,-,*, / & % using if statements. 
// Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) Compute & 
// show the calculated result to user.
var a = +prompt("Enter First number")
var b = +prompt("Enter Second number")
var operator = prompt("Enter an operator operation(+,-,*,/,%)")
var num1 = Number(a)
var num2 = Number(b)

if (operator === "+"){
    alert ("Your Ans is "+(num1+num2))
}

if (operator === "-"){
    alert ("Your Ans is "+(num1-num2))
}

if (operator === "*"){
    alert ("Your Ans is "+(num1*num2))
}

if (operator === "/"){
    alert ("Your Ans is "+(num1/num2))
}

if (operator === "%"){
    alert ("Your Ans is "+(num1%num2))
}
// CHAP: 12-13
// 1. Write a program that takes a character (number or string) in a variable &
// checks whether the given input is a number, uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

var ASCII = userInput.charCodeAt(0)
if (ASCII >= 65 && ASCII <= 90){
    alert("you input a Capital letter")
} else if (ASCII >= 97 && ASCII <=122){
    alert("you input a Small letter")
}else if (ASCII >= 48 && ASCII <=57){
    alert("your input is a number")
}
 else{
    alert ("you went some wrong codition");
}
// 2. Write a JavaScript program that accept two integers and display the larger.
//    Also show if the two integers are equal.

var num1 = +prompt("Enter first Integar");
var num2 = +prompt("Enter second Integar");
if (num1> num2) {
    alert(num1 + " is larger than" + num2)
}
else if (num1 < num2 ) {
    alert(num2 + " is larger than" + num1)

}
 else alert(num1 + " and " + num2 + " are equal");

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.
 var num = +prompt("Enter a number");

 if (num > 0 ) {
    alert("The given number is Positive")
}
else if (num < 0 ) {
    alert("The given number is Negative")
}
else alert( "The given number is zero");
// 4. Write a program that takes a character 
// (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise.
var character = prompt("Enter a character");
if (character === "a" || character === "e"|| character === "i"|| character === "o"|| character === "u" ) {
    alert("true")
}
else alert("false");

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, 
// then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, 
// show message “Correct! The password you entered matches the original password”. 
// Show “Incorrect password” otherwise.

 var correctpassword = "1234abc";
var userPassword = prompt("Enter your password");
if (userPassword === null || userPassword === ""){
    alert("Please enter your password");
}

else if (userPassword === correctpassword) {
    alert("“Correct ! The password you entered matches the original password.");
}

else alert("incorrect password");

// 6. This if/else statement does not work. 
// Try to fix it: var greeting; var hour = 13; if (hour < 18) 
// { greeting = "Good day"; else greeting = "Good evening"; }
var greeting;
var hour = 13;
if (hour <18){
    greeting = "Good day";
}
else greeting = "Good evening";
// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
// Implement the following case using if, else & else if statements

var time = +prompt("What time is it?");
if(time >= 0000 && time <1200){
    alert("Good Morning");
}
else if(time >= 1200 && time <1700){
    alert("Good Afternoon");
}
else if(time >= 1700 && time <1100){
    alert("Good Evening");
}
else if(time >= 2100 && time <2359){
    alert("Good Night");
}
// Chaps 14-16
// 1. Declare an empty array using JS 
// literal notation to store student names in future.
var literalArray = [];

// 2. Declare an empty array using JS 
// object notation to store student names in future.
var objectArray = [];

// 3. Declare and initialize a strings array.
var stringArray = ["Apple", "Manngo", "Grapes"];

// 4. Declare and initialize a numbers array.
var numArray = [0,1,2,3,4];

// 5. Declare and initialize a boolean array.
var booleanArray =[true,false];

// 6. Declare and initialize a mixed array.
var mixedArray = ["x","Apple","true",5];

// 7. Declare and Initialize an array and store 
// available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
//  Show the listed qualifications in your browser like:

var educationArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("<h1>Qualification</h1>")
for (var i = 0; i <=7; i++){
    document.write(i+1+")"+educationArray[i]+"<br/>")
}
// 8. Write a program to store 3 student names in an array.
//  Take another array to store score of these three students.
//  Assume that total marks are 500 for each student,
//  display the scores & percentages of students like:

var studentName = ["ALI","RAZA", "QADIR"]
var score = [400,3200,409];
var percentages = [];
for(var i = 0; i <=2; i++){
    percentages[i] =  score[i] / 500 * 100
}
for (var a = 0; a<=2; a++){
document.write("Score of "+studentName[a]+" is "+score[a]+" "+"Precentage "+percentages[a]+"% <br/>")
}
// 9. Initialize an array with color names. 
// Display the array elements in your browser. 
// a. Ask the user what color he/she wants to add to the 
// beginning 
// & add that color to the beginning of the array. 
// Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. 
// Display the updated array in your browser. 
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 
// d. Delete the first color in the array. 
// Display the updated array in your browser. 
// e. Delete the last color in the array.
//  Display the updated array in your browser. 
//  f. Ask the user at which index he/she wants to add a color 
//  & color name. Then add the color to desired position/index. 
// Display the updated array in your browser. 
// g. Ask the user at which index he/she wants to delete color(s) 
// & how many colors he/she wants to delete. Then
// remove the same number of color(s) 
// from user-defined position/index. 
// Display the updated array in your browser.

var color = ["Black","Red","voilet"]
document.write(color+"<br/>");
var beginning = prompt("Enter which color you want to add at the beginning of array")
color.unshift(beginning)
document.write(color+"<br/>");
var ending = prompt("Enter which color you want to add at the ending of array")
color.push(ending)
document.write(color+"<br/>");
color.shift()
document.write(color+"<br/>");
color.pop()
document.write(color+"<br/>");
var update =+prompt("At which index do you want to add color?")
var newColor =+prompt(" which color do you want to add on that index?")
color.splice(update,0,newColor)
document.write(color+"<br/>");
var dlete =+prompt("At which index do you want to delete color?")
var colorDelete =+prompt(" which color do you want to delete on that index?")
color.splice(dlete, colorDelete);
document.write(color+"<br/>");
// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort method.

var scoreArray = [320,230,480,120]
document.write("Score of students :" +scoreArray+"<br/>");
scoreArray.sort()
document.write(" Ordered Score of students :" +scoreArray+"<br/>");

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities array.

var cities = ["Karachi","Lahore","Quetta","Islamabad"];
document.write("cities list: <br/>"+cities+"<br/>")
var selectedCities = cities.slice(2,4)
document.write("Selected Cities list: <br/>"+selectedCities);

// 12. Write a program to create a single string from the 
// below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)
var array = ["This","is","my","cat"];
document.write(" <br/>"+array+"<br/>")
var join = array.join(" ")
document.write("string: <br/>"+join);

// 13. Create a new array. 
// Store values one by one in such a way that 
// you can access the values in the order in which 
// they were stored. 
// (FIFO-First In First Out)

var device = ["Keyboard",",Mouse","Printer","Monitor"]
document.write("Devices : <br/>"+device+"<br/>")
var firstDevice = device.shift()
document.write("Out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.shift()
document.write("Out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.shift()
document.write("Out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.shift()
document.write("Out : <br/>"+fourthDevice+"<br/>")

// 14. Create a new array. 
// Store values one by one in such a way that 
// you can access the values in reverse order. 
// (Last In-First Out)
var device = ["Keyboard",",Mouse","Printer","Monitor"];
document.write("Devices : <br/>"+device+"<br/>");
var firstDevice = device.pop()
document.write("Out : <br/>"+firstDevice+"<br/>");
var secondDevice = device.pop()
document.write("Out : <br/>"+secondDevice+"<br/>");
var thirdDevice = device.pop()
document.write("Out : <br/>"+thirdDevice+"<br/>");
var fourthDevice = device.pop()
document.write("Out : <br/>"+fourthDevice+"<br/>");

// 15. Write a program to store phone manufacturers 
// (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//  Display the following dropdown/select menu in your browser 
//  using document.write() method:

var phoneArray = ["Apple","Samsung","Motorola","Nokia","Sony & Haier"]
document.write(
    "<select>"+
    "<option>"+phoneArray[0]+"</option>"+
    "<option>"+phoneArray[1]+"</option>"+
    "<option>"+phoneArray[2]+"</option>"+
    "<option>"+phoneArray[3]+"</option>"+
    "<option>"+phoneArray[4]+"</option>"+
    "</select>"
)
// Chaps 17-20
// 1. Declare and initialize an empty multidimensional 
// array. (Array of arrays)
// var emptyArray = [[],[],[]];

// 2. Declare and initialize a multidimensional 
// array representing the following matrix:


var num1 = [0,1,2,3]
var num2 = [1,0,1,2]
var num3 = [2,1,0,1]
document.write([num1+"<br/>"+num2+"<br/>"+num3+"<br/>"])

// 3. Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++){
    document.write(i+"<br/>")
}

// 4. Write a program to print multiplication table of any number using for loop.
//  Table number & length should be taken as an input from user.
var table = +prompt("Enter a number  to show its multiplication table");
var length = +prompt("Enter Multiplication table" );
document.write("Multiplication Table of " +table+"<br/> length"+length+ "<br/>")
for(var i = 1; i <= length; i++){
    document.write(table+" x "+i+" = "+table*i+"<br/>")
}
// 5. Write a program to print items of the following array using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
var array = fruits.length
for(var i = 0; i <array; i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br/>")
}
// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var num = [];
var odd = [];
var even = [];
var series = [];

for(var i = 0; i <=15; i++){
    num[i] = i+1;
}
document.write("counting :"+num+"<br/>")
document.write(" Reverse counting :"+num.reverse()+"<br/>")

for(var a = 1; a <= 20; a++){
    if(a % 2 !==0){
        even[a] = a;
    }
}
document.write("Even :"+even+"<br/>")
for(var b = 1; b <= 20; b++){
    if(b % 2 === 0){
        odd[b] = b;
    }
}
document.write("Odd :"+odd+"<br/>")
for(var d = 1; d <= 20; d++){
    if(d % 2 === 0){
        series[d] = d+"k";
    }
}
document.write("Series :"+series+"<br/>")

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. After searching, 
// prompt the user whether the given item is found in the list or not. Example:
var a = ["cake","apple pie","cookie","chips","patties"];
var user = prompt("Welcome to XYZ Bakery...! What do you want to order Sir/Ma'am")
var b = a.indexOf(user)
if(b<0){
    alert("we are sorry"+user+"is not available in our bakery")
}
else{
    alert(user+"is available at index "+b+" in our bakery") 
}

// 8. Write a program to identify the largest number 
// in the given array. A = [24, 53, 78, 91, 12].
var lararray = [24,53,78,91,12];
var maxArray = Math.max.apply(Math,lararray)
var minArray = Math.min.apply(Math,lararray)
console.log(maxArray , minArray)
document.write(
     "<h3> Array items: "+array+
    "<br/> The largest number is " +maxArray+
    "<br/> The samllest number is </h3>" +minArray
)

// 9. Write a program to identify the 
// smallest number in the given array. A = [24, 53, 78, 91, 12]
var smllarr = [24,53,78,91,12];
var max = Math.max.apply(Math,smllarr)
var min = Math.min.apply(Math,smllarr)
console.log(max , min)
document.write(
    "<h3> Array items: "+smllarr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is </h3> " +min+"<br/>"
)
// 10. Write a program to print multiples of 5 ranging 1 to 100.
for(var i = 1; i<=100; i++){
    if(i%5 === 0){
        document.write(i+",")
    }
}
// CHAPS 21-25
// 1. Write a program that takes two user inputs for first and last name
//    using prompt and merge them in a new variable titled fullName. 
//    Greet the user using his full name.

// var firstName = prompt("Enter your firstName","FirstName" );
// var lastName = prompt("Enter your lastName","LastName" );
// fullName = firstName+" "+lastName
// alert("Hello"+" "+fullName);

// 2. Write a program to take a user input about his favorite mobile phone model. 
//    Find and display the length of user input in your browser
// var favoriteMobile = prompt("Enter your favorite mobile phone model","Mobile Phone Model");
// var stringLength = favoriteMobile.length;
// document.write("<b>My Favorite Phone is: <b>" + favoriteMobile);
// document.write("<br>Length of String: " + stringLength);

// 3. Write a program to find the index of letter “n” in the word 
//    “Pakistani” and display the result in your browser .

// var Word = "Pakistani";
// var indexletter = Word.indexletterOf("n");
// document.write("<b>String: <b>" + Word);
// document.write("<br><b>Index of 'n': <b>" + indexletter);

// 4. Write a program to find the last index of letter “l” in the word 
//    “Hello World” and display the result in your browser.

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.write("<b>String: <b>" + word);
// document.write("<br><b>Last index of 'l': <b>" + lastIndex);

// 5. Write a program to find the character at 3rd index in the word
//    “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// var character = word.charAt(3);
// document.write("String: " + word);
// document.write("<br>Character at index 3: " + character);

// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your firstName","FirstName" );
// var lastName = prompt("Enter your lastName","LastName" );
// fullName = firstName.concat(" ",lastName);
// alert("Hello"+" "+fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the word 
//    “Hyderabad” and display the result in your browser.

// var word = "Hyderabad";
// var AfterReplace = word.replace("Hyder", "Islam");
// document.write("City: " + word);
// document.write("<br>After Replacement: " + AfterReplace);

// 8. Write a program to replace all occurrences of “and”
//    in the string with “&” and display the result in your browser.
//    var message = “Ali and Sami are best friends. 
//    They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var AfterReplace = message.replace("and", "&");
// document.write("Sentence: " + message);
// document.write("<br>After Replacement: " + AfterReplace);

// 9. Write a program that converts a string “472” to a
//    number 472. Display the values & types in your browser.

// var string = "472";
// var number = parseInt(string);
// document.write("Value: " + string);
// document.write("<br>Type: " + typeof (string));
// document.write("<br>Value: " + number);
// document.write("<br>Type: " + typeof (number));

// 10. Write a program that takes user input. 
//     Convert and show the input in capital letters.

// var userInput = prompt("Enter user input");
// var upperInput = userInput.toUpperCase();
// document.write("User input: " + userInput);
// document.write("<br>Upper case: " + upperInput);

// 11. Write a program that takes user input.
//     Convert and show the input in title case.
// var userInput = prompt("Enter user input");
// var lowerInput = userInput.toLowerCase();
// document.write("User input: " + userInput);
// document.write("<br>Lower case: " + lowerInput);

// 12. Write a program that converts the variable num to string. 
//     var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// num = Math.trunc(num*100)/100;
// var string = num.toString();
// string = string.replace(".", "");
// document.write("Number: " + num);
// document.write("<br>Result: " + string);

// 13. Write a program to take user input and store username in a variable.
//     If the username contains any special symbol among
//     [@ . , !], prompt the user to enter a valid username. 
//     For character codes of [@ .

// var userName = prompt("Enter Username", "Username");
// for (var i = 0; i < userName.length; i++) {
//     if (userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64) {
//         alert("Please enter a valid Username");
//     }
// }

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not.
//  Note: Perform case insensitive search. Whether the user enters cookie, Cookie, 
// COOKIE or coOkIE, program should inform about its availability. Example:

// var array1 = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
// input = input.toLowerCase();
// var i = 0;
// for (i = 0; i < array1.length; i++) {
//     if (input === array1[i]) {
//         document.write(input + " is <strong>Available</strong> at index " + i + " in our bakery");
//         break;
//     }
// }
// if (i >= array1.length) {
//     document.write("We are Sorry! " + input + " is <strong>Not Available</strong> in our bakery");
// }

// 15. Write a program to take password as an input from user. 
// The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long If the password does not meet above requirements, 
//    prompt the user to enter a valid password. 
//    For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var input = prompt("Enter your Password", "Password");
// var actual= false, num = false, startNum = false, len = false;
// for (var i = 0; i < input.length; i++) {
//     if ((input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) || (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122)) {
//         actual = true;
//     }
//     if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
//         num = true;
//     }
//     if (input.charCodeAt(0) >= 48 && input.charCodeAt(0) <= 57) {
//         startNum = true;
//     }
//     if (input.length >= 6) {
//         len = true;
//     }
// }
// document.write("Entered Password :" + input);
// if (actual == false) {
//     document.write("<br>Password should contain alphabet");
//     document.write("<br>Please enter a valid password");
// }
// else if (num == false) {
//     document.write("<br>Password should contain number ");
//     document.write("<br>Please enter a valid password");
// }
// else if (startNum == true) {
//     document.write("<br>Password can not start with number ");
//     document.write("<br>Please enter a valid password");
// }
// else if (len == false) {
//     document.write("<br>Password must atleast 6 characters long :");
//     document.write("<br>Please enter a valid password");
// }
// else {
//     document.write("<br>Valid password!");
// }

// 16. Write a program to convert the following string to an array using string split method. 
//     var university = “University of Karachi”; Display the elements of array in your browser.

// var university = "University of Karachi";
// var array2 = university.split("");
// document.write("Elements of Array are");
// for (var i = 0; i < array2.length; i++) {
//     document.write("<br>" + array2[i]);
// }

// 17. Write a program to display the last character of a user input.

// var input = prompt("Enter string");
// document.write("User input: " + input);
// document.write("<br>Last character of input: " + input.charAt(input.length - 1));

// 18. You have a string “The quick brown fox jumps over the lazy dog”. 
//     Write a program to count number of occurrences of word “the” in given string.

// var string = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The") {
//         count++;
//     }
// }
// document.write("Text: " + string);
// document.write("<br>There are " + count + " occurence(s) of the word 'the'");
// Chap 26-30
// 1. Write a program that takes a positive integer from user & 
// display the following in your browser. 
// a. number b. round off value of the number 
// c. floor value of the number d. ceil value of the number

// var positiveinteger = prompt("Enter any positive integer", "Positive Number");
// document.write("Number: " + positiveinteger);
// document.write("<br>Round off value: " + Math.round(positiveinteger));
// document.write("<br>Floor Value: " + Math.floor(positiveinteger));
// document.write("<br>Ceil Value: " + Math.ceil(positiveinteger));

// 2. Write a program that takes a negative floating point number from user &
//    display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

// var negativenum = prompt("Enter any negative floating point ", "Negative Numbers");
// document.write("Numbers: " + negativenum);
// document.write("<br>Round off value: " + Math.round(negativenum));
// document.write("<br>Floor Value: " + Math.floor(negativenum));
// document.write("<br>Ceil Value: " + Math.ceil(negativenum));

// 3. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = prompt("Enter any number ", "Type numbers");
// document.write("The absolute value of " + num + " is " + Math.abs(num));

// 4. Write a program that simulates a dice using random()
//  method of JS Math class. Display the value of dice in your browser.:

// var dice = (Math.random() * 6) + 1;
// document.write("Random Dice Value: " + Math.floor(dice));

// 5. Write a program that simulates a coin toss using random() 
//    method of JS Math class. Display the value of coin in your browser

// var cointoss = Math.floor((Math.random() * 2) + 1);
// document.write(cointoss);
// if (cointoss === 2) {
//     document.write("<br>Random Coin Value: Head");
// }
// else {
//     document.write("<br>Random Coin Value: Tail");
// }

// 6. Write a program that shows a random number between 1 and 100 in your browser.
// var Rannum = Math.floor((Math.random() * 100) + 1);
// document.write("Random number between 1 and 100: " + Rannum);

// 7. Write a program that asks the user about his weight. 
//    Parse the user input and display his weight in your browser. 
//    Possible user inputs can be: 
//    a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

// var weight = prompt("Enter your weight in Kilograms please", "Weight in kilograms");
// document.write("The weight of user is " + parseFloat(weight) + " Kilograms");

// 8. Write a program that stores a random secret number from 1 to 10 in a variable.
//    Ask the user to input a number between 1 and 10.
//    If the user input equals the secret number, congratulate the user.

// var secretNum = Math.floor((Math.random() * 10) + 1);
// var input = +prompt("Enter any number between 1 and 10");
// if (input === secretNum) {
//     alert("Congratulate!");
// }
// else {
//     alert("Try Again!");
// }
// Chap 31-34
// 1. Write a program that displays current date and time in
//    your browser.
// var dateTime = new Date();
// document.write(dateTime);

// 2. Write a program that alerts the current month in words.
// For example December.

// var dateTime = new Date();
// var index = dateTime.getMonth()
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write("Current Month: " + month[index]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

// var date = new Date();
// var Day = date.getDay();
// var Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// document.write("Today is " + Week[Day]);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var date = new Date;
// if (date.getDay() === 6 || date.getDay() === 0) {
//     document.write("It’s Fun day");
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var fullDate = new Date();
// var date = fullDate.getDate();
// if (date < 16) {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date = new Date();
// var mont = date.getTime();
// var min = mont / (1000 * 60);
// document.write("Current Date: " + date);
// document.write("<br>Elapsed milliseconds since January 1, 1970: " + min);
// document.write("<br>Elapsed minutes since January 1, 1970: " + mont);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date = new Date();
// var hours = date.getHours();
// if (hours < 12) {
//     alert("Its AM");
// }
// else {
//     alert("Its PM");
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date(2020, 11, 31);
// document.write("Later Date: " + laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramdanDate = new Date(2020, 3, 25);
// var currDate = new Date();
// var ramdanTime = ramdanDate.getTime();
// var currTime = currDate.getTime();
// var diff = (currTime - ramdanTime);
// var days = Math.floor(diff / (1000 * 60 * 60 * 24));
// document.write(days + " days have passed since 1st Ramadan 2020");

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var RefDate = new Date();
// var startDate = new Date(2015, 0, 1, 0, 0, 0);
// var refTime = RefDate.getTime();
// var startTime = startDate.getTime();
// var diff = (refTime - startTime);
// var sec = Math.floor(diff / (1000));
// document.write("On reference Date " + RefDate);
// document.write("<br>" + sec + " seconds had passed since beginning of 2015");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// var currDate = new Date();
// document.write("Current date: " + currDate);
// currDate.setHours(currDate.getHours()-1);
// document.write("<br>1 hour ago, it was " + currDate);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currDate = new Date();
// alert("Current date: " + currDate);
// currDate.setFullYear(currDate.getFullYear()-100);
// document.write("100 years back, it was " + currDate);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var age = +prompt("Enter your age please");
// var birthYear = (new Date().getFullYear())-age;
// document.write("Your Age is: "+age);
// document.write("<br>Your Birth Year is: "+birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var custName = "ABC Customer";
// var currMonth = "February";
// var units = 410;
// var chargerPerUnit = 16;
// var netAmntPayable = units*chargerPerUnit;
// var latePaySurcharge = 350;
// var grossAmntPayable = netAmntPayable + latePaySurcharge;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("<br>Customer Name: "+custName+"</strong>");
// document.write("<br>Month: <strong>"+currMonth+"</strong>");
// document.write("<br>Number of units : <strong>"+units+"</strong>");
// document.write("<br>Charges per unit: <strong>"+chargerPerUnit+"</strong>");
// document.write("<br><br>Net Amount Payable (within Due Date) : <strong>"+netAmntPayable+"</strong>");
// document.write("<br>Late Payment Surcharge : <strong>"+latePaySurcharge+"</strong>");
// document.write("<br>Gross Amount Payable (after Due Date): <strong>"+grossAmntPayable+"</strong>");

// Chap 35 -38 
// 1. Write a function that displays current date & time in your
// browser.
// function tellTime(){
// var date = new Date();
// document.write(date);
// }
// tellTime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function userGreeting () {
//     var firstName = prompt("Enter your first name","first name");
//     var lastName = prompt("Enter your last name","last name");
//     var fullName = firstName + " " + lastName;
//     alert("Welcome"+" "+ fullName);
// }
// userGreeting();

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function sumNumbers(){
//     var firstNum = +prompt("Enter your first number","first number");
//     var secNum = +prompt("Enter your second number","last number");
//     var sum = firstNum + secNum;
//     alert(sum)
// }
// sumNumbers();

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function Calculator(num1,num2,operator) {
//     var num1 = +prompt("Enter First Number");
//     var num2 = +prompt("Enter Second Number");
//     var operator =prompt("Enter operator");
//     if(operator === '+'){
//         document.write("<br>", num1, " ", operator, " ", num2, " = ", num1 + num2) 
//     }if(operator === '-'){
//         document.write("<br>", num1, " ", operator, " ", num2, " = ", num1 - num2) 
//     }if(operator === '*'){
//         document.write("<br>", num1, " ", operator, " ", num2, " = ", num1 * num2) 
//     }if(operator === '/'){
//         document.write("<br>", num1, " ", operator, " ", num2, " = ", num1 / num2) 
//     }if(operator === '%'){
//         document.write("<br>", num1, " ", operator, " ", num2, " = ", num1 % num2) 
//     }
// }
// Calculator();



// 5. Write a function that squares its argument.
// function square() {
//     var num = +prompt("Enter Number");
//     var square = Math.pow(num, 2);
//     document.write(square);
// }
// square();

// 6. Write a function that computes factorial of a number.

// function factorial(num) {
//     if (num === 0) {
//         return 1;
//     }else return num * factorial(num - 1)
// }
// document.write(factorial(5));

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
// function count(start, end) {
//     var start =prompt("Enter start number");
//     var end = prompt("Enter end number");
//     var array = [];
//     for (var i = start; i <= end; i++){
//         document.write(array.push(i));

//     }
//     return array;
// }
// count();

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// function calculateHypo(base, perp) {
//     var hyp = calculateSquare(calculateSquare(base) + calculateSquare(perp));
//     function calculateSquare(num) {
//         return num * num;
//     }
//     return hyp;
// }

// var base = +prompt("Enter Base of Right Angle Triangle");
// var perp = +prompt("Enter Perpendicular of Right Angle Triangle");
// var hyp = calculateHypo(base, perp);
// document.write("Hypotenus of Right Angle Triangle is " + hyp);

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function calculates(width, height) {
//     var area = width * height;
//     return area;
// }

// // i  Arguments as value
// var area1 = calculates(42, 10);
// // ii Arguments as variables
// var w = 25, h = 45;
// var area2 = calculates(w, h);

// document.write("Area of Rectangle Arguments as value: " + area1);
// document.write("<br>Area of Rectangle Arguments as variables : " + area2);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function checkPalindrome(word) {
//     word = word.toLowerCase();
//     var check = true;
//     var len = word.length;
//     for (var i = 0; i < Math.floor(len / 2); i++) {
//         if (word[i] !== word[len - 1 - i]) {
//             check = false;
//         }
//     }
//     if (check === true) {
//         alert(word + " is a palindrome");
//     }
//     else {
//         alert(word + " is not a palindrome");
//     }
// }
// checkPalindrome(prompt("Enter word to check whether it is palindrome or not","palindrome"));

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function titleCase(string) {
//     var arr = string.split(" ");
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
//     }
//     string = arr.join(" ");
//     return string;
// }
// var input = prompt("Input any Sentence", "Sentence here");
// document.write("The Sentence after converting: " + titleCase(input));

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longString(string) {
//     var arr = string.split(" ");
//     var long = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (long.length < arr[i].length) {
//             long = arr[i];
//         }
//     }
//     return long;
// }
// var input = prompt("Enter any sentence to find the longest word", "String here");
// document.write("The Longest Word is: " + longString(input));


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function countletter(string, letter) {
//     var count = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] == letter) {
//             count++;
//         }
//     }
//     return count;
// }
// var string = prompt("Enter any String");
// var letter = prompt("Enter any Letter to check its occurence in string");
// var occurence = countletter(string, letter);
// alert(" The letter " + letter + " occurrs " + occurence + " times in string " + string);

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(radius) {
//     var circumference = 2 * 3.14159 * radius;
//     document.write("<br>The Circumference is " + circumference.toFixed(2));
// }
// function calcArea(radius) {
//     var area = 3.14159 * radius * radius;
//     document.write("<br>The Area is " + area.toFixed(2));
// }

// var radius = prompt("Enter radius of circle to calculate its circumference and area");
// calcCircumference(radius);
// calcArea(radius);
// Chapters
// Task 1
    // var a = prompt("Enter the base");
    // var b = prompt("Enter the power");
    // var result = Math.pow(a,b);
    // alert("the result is:" +result);

// Task 2
// function check_leapyear(){
//     //define variables
//     var year;
//     year = document.getElementById("year").value;
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) ){
//     alert(year+" is a leap year");  
//     }
//     else{
//      alert(year+" is not a leap year");  
//     }
// }
// Task 3
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
// function areaTriangle(a, b, c) {
//     return ((a + b + c)/2);
// }
// function area(a, b, c){
//     let s = areaTriangle(a, b, c);
//     let area = (s * (s - a) * (s - b) * (s - c) * 0.5;
//     document.write(`Area is: ${area}`);
//   }
//   area(9,11,11);

// Task 4
// function mainFunction(obtained_marks) {
//     let m = 0;
//     obtained_marks.forEach((marks) => {
//       m += marks;
//     });
//     let average = average(mark);
//     let percent = percentage(mark);
// }
//   function average() {
//     return obtained_marks / 3;
// }
//   function percentage(marks) {
//     return (marks * 100) / 300;
// }
// Task 5
// function indexOf(char, searchLetter) {
//     let findElement = ();
//     for (var i = 0; i < char.length; i++) {
//       if (char[i] === searchLetter) {
//         findElement = i;
//         break;
//       }
//     }
//     console.log(findElement);
// }
// Task 6
// function delete_vowel(s){
//     a = a.toLowerCase()
//     let vowel = ["a", "e", "i", "o", "u"];
//     a = a.split("");
//     a = a.filter((value, index, arr) => {
//         return !vowel.includes(value);
//     });
//     a = a.join(" ");
//     document.write(a);
// }
//     delete_vowel("education is very important");
// Task 7
//  s = s.toLowerCase();
//  s = s.split("");
// let vowel = ["a", "e", "i", "o", "u"];
// let isJoin = false;
// let vowelJoin = "";
// let j = 0;
//     for(i = 0; i < s.length; i++){
//         switch(s[i]){
//             case "a":
//             j = i + 1;
//             if(vowel.includes(s[j]) && j <= s.length){
//             document.write(`<p>${s[i] + s[j]}</p>`);
//             }
//                 break;
//                 case "e":
//                     j = i + 1;
//                     if(vowel.includes(s[j]) && j <= s.length){
//                         document.write(`<p>${s[i] + s[j]}</p>`);
//                     }
//                     break;
//                 case "i":
//                     j = i + 1;
//                     if(vowel.includes(s[j]) && j <= s.length){
//                         document.write(`<p>${s[i] + s[j]}</p>`);
//                     }
//                     break;
//                 case "o":
//                     j = i + 1;
//                     if(vowel.includes(s[j]) && j <= s.length){
//                         document.write(`<p>${s[i] + s[j]}</p>`);
//                     }
//                     break;
//                 case "u":
//                     j = i + 1;
//                     if(vowel.includes(s[j]) && j <= s.length){
//                         document.write(`<p>${s[i] + s[j]}</p>`);
//                     }
//                     break;
//             }
//         }
//     }
//     succession('Pleases read this application and give me gratuity');
// Task 8
// function distancecity(d) {
//     meteres(d);
//     feet(d);
//     inches(d);
//     centimeters(d);
//   }
//   function meteres(d) {
//     console.log(d / 1000);
//   }
//   function feet(d) {
//     console.log(d / (100000 * 30));
//   }
//   function inches(d) {
//     console.log(d / (100000 / 2.5));
//   }
//   function centimeters(d) {
//     console.log(d / 100000);
//   }
// Task 9
//  function overtimePay(hour, overHrWork){
//         if(hour > 40){   
//             return `Overtime Pay: ${overHrWork * 12.00}`
//         }
//         return `You haven't done work more than 40 hours`;
//     }
//     document.write(`<p>${overtimePay(41, 2)}</p>`);

// Task 10
// function denominations(amount){
//     let hundred = parseInt(amount / 100);
//     let fifty = parseInt((amount % 100) / 50);
//     let ten = parseInt(((amount % 100) % 50) / 10);
//     document.write(`<p>You will have ${hundred} hundred notes ${fifty} fifty notes, ${ten} ten notes</p>`);
//     }
//     denominations(+prompt("Enter Amount to Withdraw"));
// ___________XXXXXXXX_______________
// *******Chapters 43-48********

// Task 1
// document.write("<button onclick='alert(`You Clicked on a Link`)'>Alert Box</button>");

// Task 2
// let images = document.querySelectorAll("img");
// for (var i = 0; i < images.length; i++) {
//   images[i].addEventListener("click", function () {
//     alert("Thanks for purchasing a mobilephone from us.");
//   });
// }

// Task 3
// let student = [
//     {
//         'id': 0,
//         'name': 'Jhone',
//         'class': 10,
//         'isDelete': false
//     },
//     {
//         'id': 1,
//         'name': 'Doe',
//         'class': 9,
//         'isDelete': false
//     },
//     {
//         'id': 2,
//         'name': 'Mark',
//         'class': 10,
//         'isDelete': false
//     },
//     {
//         'id': 3,
//         'name': 'James',
//         'class': 8,
//         'isDelete': false
//     },
// ];

// function updateTable(id){
//     console.log(id);
//     student[id].isDelete = !student[id].isDelete;
//     printTable();
// }

// function printTable(){
//     let tbody = document.createElement("tbody");
//     let tr = document.createElement("tr");
//     let Index = document.createElement("td");
//     let Name = document.createElement("td");
//     let Class = document.createElement("td");
//     let Button = document.createElement("td");
//     for(i = 0; i < student.length; i++){
//         if(!student[i].isDelete){
            // Index.innerHTML = student[i].id;
            // tr.appendChild(Index);
            // Name.innerHTML = student[i].name;
            // tr.appendChild(Name);
            // Class.innerHTML = student[i].class;
            // tr.appendChild(Class);
            // Button.innerHTML = "Delete";
            // tr.appendChild(Button);
            // tbody.appendChild(tr);


            //         table.appendChild(`
            //             <tr>
            //                 <td>${student[i].id}</td>
            //                 <td>${student[i].name}</td>
            //                 <td>${student[i].class}</td>
            //                 <td>
            //                     <button onclick='updateTable(${student[i].id})'>
            //                         Delete
            //                     </button>
            //                 </td>
            //             </tr>
            //         `);
                    // document.write("<tr>");
                    //     document.write(`<td>${student[i].id}</td>`);
                    //     document.write(`<td>${student[i].name}</td>`);
                    //     document.write(`<td>${student[i].class}</td>`);
                    //     document.write(`<td><button onclick='updateTable(${student[i].id})'>Delete</button></td>`);
                    // document.write("</tr>");
//         }
//     }
//     document.getElementById("studentList").appendChild(tbody);
// }
// document.write("<table id='studentList'>");
//     document.write(
//         "<thead><tr><th>Index</th><th>Name</th><th>Class</th><th></th></tr></thead>"
//     );
// printTable();
// document.write("</table>")

// Task 4
// let chan = document.getElementById("images");
// chan.addEventListener("mouseenter", function () {
//   chan.src =  "https://sites.google.com/site/bestroseimages/_/rsrc/1570512689974/best-hd-wallpaper-rose-images/National-Flower-of-Turkmenistan-Red-rose.jpg" ;
// });
// chan.addEventListener("mouseleave", function () {
//   chan.src =
//     "https://www.nursery.com.pk/wp-content/uploads/2019/02/nursery-rose.jpg";
// });

// Task 5
// var count = 0;
// let h2 = document.querySelector("h2");
// document.querySelector(".inc").addEventListener("click", function () {
//   count += 1;
//   h2.innerText = count;
// });
// document.querySelector(".dec").addEventListener("click", function () {
//   count -= 1;
//   h2.innerText = count;
// });
// _______49 - 52 ________


// TASK 1
 /*function submission(){
     var name = document.getElementById("name");
     document.write(name.value);
     var email = document.getElementById("e-mail");
     document.write(email.value);
 }*/

 // TASK 2
/*function readMore(){
    var para = "paragraph">A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.";
    document.getElementById("paragraph").innerHTML = para;
}*/

// TASK 3

// CHAPTER # 53-57: 

// TASK 1

/*var modal = document.getElementById("myModal");                            
var img = document.getElementById("img1");
var modalImg = document.getElementById("myimg");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}*/

// TASK 2
/*function zoomIn(){
    var para1= document.getElementById("paragraph").style.fontSize= "30px";
}
function zoomOut(){
    var para2 = document.getElementById("paragraph").style.fontSize = "15px";
}*/

//CHAPTER # 58-67: DOM

// TASK 1

// (i)
/*var mainContent = document.getElementById("main-content");
console.log(mainContent);*/

// (ii)
/*var elements = document.getElementById("main-content").childNodes;
console.log(elements);*/

// (iii)
/*var ren = document.getElementsByClassName("render");
for(var i = 0;i< ren.length ;i++){
    document.write(ren[i].innerHTML + "<br>");
}*/

//(iv)
/*document.getElementById("first-name").value = "alia";
// (v)
document.getElementById("last-name").value = "batool";
document.getElementById("email").value = "aliabatool@gmail.com";*/

// TASK 2

// (i)
 /*var form = document.getElementById("form-content").nodeType;
 document.write(form + "<br>");*/

 // (ii)
 /*var lname = document.getElementById("lastName").nodeType;
 document.write(lname + "<br>");
var nodeList = document.getElementById("lastName").childNodes;
for (var index = 0; index < nodeList.length; index++) {
    document.write(nodeList[index]);
}*/

// (iv)
/*var first = document.getElementById("main-content").firstChild;
document.getElementById("demo").innerHTML = first;
var last = document.getElementById("main-content").lastChild;
document.getElementById("demo").innerHTML = last;
console.log(last);*/

// (v)
/*var next = document.getElementById("lastName").nextSibling.innerHTML;
document.getElementById("demo").innerHTML = next ;*/



