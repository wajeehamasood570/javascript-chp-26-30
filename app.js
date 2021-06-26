// chp 26-30
// q1
// var a = +prompt("positive Number:","Enter any positive number:");
// var num = Number(a);
// var round = Math.round(num);
// var point = Math.floor(num);
// var up =  Math.ceil(num);
// document.write("Number:" + num + "<br>");
// document.write("Round Off Value:" + round + "<br>");
// document.write("Floor value:" + point +"<br>");
// document.write("Ceil:" + up);


//q2
// var a = +prompt("Negative Number:","Enter any negative number:");
// var num = Number(a);
// var round = Math.round(num);
// var point = Math.floor(num);
// var up =  Math.ceil(num);
// document.write("Number:" + num + "<br>");
// document.write("Round Off Value:" + round + "<br>");
// document.write("Floor value:" + point +"<br>");
// document.write("Ceil:" + up);


//q3 
// var a = +prompt("Number:", "Enter any number");
// var b = Math.abs(a);
// document.write("Absolute value of " + a + " is " + b);


//q4. 
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write('random dice value:' + diceRoll);


//q5.
// var headsUser = prompt("Enter your name:");
// var tailsUser = prompt("Enter your name:");
// var a = Math.floor(Math.random()*2) ;
// if(a===1)
// {
    // document.write(headsUser + " win the toss" + "<br>");
    // 
// }
// else{
    // document.write(tailsUser + " win the toss");
// }



//q6. 
// var a = Math.floor(Math.random()*100) ;
// document.write("Random Number between 1 and 100 is " + a);


//q7. 
// var a = parseFloat(prompt("Enter Your weight in kilograms:"));
// document.write("Your weight is: " + a + " Kilograms");



//q8. 
// var secret = Math.floor(Math.random()*10);
// var num = +prompt("Enter Number:" , "Enter any number between 1 to 10");
// if(num===secret)
// {
    // document.write("Congratulation you guess the number ");
// }
// else{
    // document.write("Try Again!");
// }



// chp 31-34
// q1
// var a = new Date();
// var b = a.getTime();
// document.write(a + " " + b);



//q2
// var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var a = new Date();
// var b = months[a.getMonth()];
// document.write("Current Month is:" + b);


//q3
// var day= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// var a =new Date();
// var b = day[a.getDay()];
// var c = Number(b);
// var day = c.tofixed(3);
// document.write("Current Day is: " + day);


//q4. 
// var day= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// var a =new Date();
// var b = day[a.getDay()];
// alert(b);
// c = b.toString(b);
// if(c=="Saturday" || "Sunday")
// {
// document.write("It's a Fun Day");
// }
// else{
//     document.write("It's a working day :(")
// }



// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// alert(c);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write()
// }else if(c === "Tue"){
//     document.write()
// }else if(c === "Wed"){
//     document.write()
// }else if(c === "Thu"){
//     document.write("It's a working day :(")
// }else if(c === "Fri"){
//     document.write()
// }

// q5. 
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(8,11);
// if(c<16)
// {
//     document.write("First Fifteen days of the month");
// }
// else{
//     document.write("Last Fifteen days of the month");
// }



//q6
// var old = new Date(1970);
// var today = new Date();
// var milli = today.getMilliseconds();
// var s = old - milli;
// var min = today.getMinutes();
// milli = milli/(1000*60*60*24*30*12);

//q7.
// var today = new Date();
// var a =today.getHours();
// if(a<12)
    // {
// document.write("Its A.M");
// 
    // }
// else{
    // document.write("Its P.M");
// }


//q8.
// var laterDate = new Date(2020, 12, 31);
// document.write(laterDate);



// q9.
// var ramz = new Date(2021,5,13);
// var today = new Date(2021,6,26);
// ramz = ramz.getTime();
// today = today.getTime();
// var difference  = today - ramz;
// var pass = difference/(1000*3600*24);
// document.write(pass + " days left since ramzan");


//q10
// var ramz = new Date(2021,5,13);
// var today = new Date(2021,6,26);
// ramz = ramz.getTime();
// today = today.getTime();
// var difference  = today - ramz;
// var pass = difference/(3600*24);
// document.write("no. of seconds pass are: " + pass);

// q11
var today = new Date();
var x  = today.toString();
var a = x.splice(16,2,"09","0");
d

// q13.
// var today = new Date();
// var birthDate = prompt("Your age:","Enter your age");
// birthDate.toString;
// var age = today.getFullYear() - birthDate.getFullYear();
// alert(age);
// var a = today.getFullYear();
// var dob= prompt("Your age:","Enter your age");
// var dob2 = new Date(dob);
// var b = dob2.getFullYear();
// var c = a-b;
// var d = Math.floor(c/(1000*60*60*24*-12));
// document.write(b);

