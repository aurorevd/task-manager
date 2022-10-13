/*



const showtasks = (x)  {
if x=1 console.log("to see all your tasks")
else if x=2 console.log("to add a task" )
else if =3 console.log("to delete a task")
else if =4 console.log("to mark a task as done") 
else if =5 console.log ("to Exit the task manager")
else console.log("nothing")
}



var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Welcome to your task manager, Press:", showtasks()

rl.close();
});



function fun() {  
prompt ("This is a prompt box", "Hello world");}

fun ();



// EXEMPLE
// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
//     rl.close();
// });

const prompt = require('prompt-sync')();
var rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');



let tasks = 

let x =3

showtasks = (x) => {
prompt("Welcome to your task manager Press: 1. to see all your tasks 2. to add a task 3. to delete a task 4. to mark a task as done 5. to Exit the task manager");
}

showtasks ()




2. to add a task
3. to delete a task
4. to mark a task as done
5. to Exit the task manager"


*/

const prompt = require('prompt-sync')();
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

let tasks = ['Welcome to your task manager Press:', "1. to see all your tasks", "2. to add a task", "3. to delete a task", "4. to mark a task as done ", "5. to Exit the task manager"]


function selection(x){
if (x==1) {console.log("to see all your tasks");}
else if (x==2) {return ("to add a task" );}
else if (x==3) {console.log ("to delete a task");}
else if (x==4) {console.log ("to mark a task as done");}
else if (x==5) {console.log ("to Exit the task manager");}
else {console.log("nothing");}
}

function showtasks (){
console.log(tasks);
let y = prompt('Press:', 5);
while (y!=5){
    if (y==5) {break;}
    console.log(selection(y));
    console.log(tasks);
    y = prompt('Press:', 5);
}
}
showtasks ();


 // You are 100 years old!
/*f
let x= selection();

rl.question('Welcome to your task manager Press: ', x => 
{   console.log('mode', + x);
    rl.close();
});


// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
//     rl.close();*/
