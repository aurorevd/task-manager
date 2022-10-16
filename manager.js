
 

const prompt = require('prompt-sync')();
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
let menu= ["1. to see all your tasks", "2. to add a task", "3. to delete a task", "4. to mark a task as done ", "5. to Exit the task manager"];
let tasks= ["tasks1", "tasks2", "task3",  "task4"];
function close()
{
    rl.close();
}

function showtasks()
{
console.log(tasks);
}

function validnumber(){
    rl.setPrompt(`Please give a valid number! \n`);
    rl.prompt();
}

function showmenu(){
    rl.setPrompt(`Menu\n${menu} \n`);
    rl.prompt();  
}




 showmenu();

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
            {tasks.push(userInput); 
            showtasks();
             showmenu();});     
                     
        }

        else if (userInput.trim() == 3)
        {   rl.question(`Task to delete\n ${tasks} \n` , (userInput)=>
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
                if (Index==-1){showtasks();showmenu();}
                else{
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
    console.log('Bye Bye');
});



    
