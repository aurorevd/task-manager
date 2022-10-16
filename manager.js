
 

const prompt = require('prompt-sync')();
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);


let menu= ["1  SHOWTASKS", "2  ADD TASK", "3  DELETE TASK", "4  TASKS DONE ", "5  EXIT"];

let tasks= [];

let close = () => 
    rl.close();


let showtasks=() =>
console.log(tasks);

let showmenu=()=>
    {
    rl.setPrompt(`MENU PRESS: \n`);
    rl.prompt();
    console.log(menu);
    };  

rl.setPrompt(`WELCOME TO YOUR TASK MANAGER PRESS: \n`);
rl.prompt();
console.log(menu);

 rl.on('line',(userInput)=>
    { 
        if(userInput.trim() == 5)
        {
            close();
        }

        else if (userInput.trim() == 1)
        {   showtasks();
            showmenu();
        }

        else if (userInput.trim() == 2)
        {   rl.question(`What is the task you want to add?\n` , (userInput)=>
            {
            tasks.push(userInput); 
            showtasks();
            showmenu();
            });                 
        }

        else if (userInput.trim() == 3)
        {       rl.question(`What is the task you want to delete\n ${tasks} \n` , (userInput)=>
                {                
                var Index = tasks.indexOf(userInput);
                if (Index==-1){showtasks();showmenu();}
                else{
                    tasks.splice(Index, 1);
                    showtasks();
                    showmenu();
                    }

                });      
        }
    
        else if (userInput.trim() == 4)
        {       
               rl.question(`What is the task you want to mark as done?\n ${tasks} \n` , (userInput)=>
                {                
                var Index = tasks.indexOf(userInput);
                if (Index==-1)
                    {
                        showtasks();showmenu();
                    }
                else
                    {
                    tasks.splice(Index, 1,userInput + " is done");
                    showtasks();showmenu();
                    }
                });      
        }

        else 
        {  
            showmenu();  
        }    
});


rl.on(`close`,()=>
{
    console.log('Bye Bye Bye Bye');
});



    
